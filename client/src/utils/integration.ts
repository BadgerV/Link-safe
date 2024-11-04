// @ts-nocheck

import algosdk from "algosdk";
import { getSafe } from "link-safe";
import { errorToast } from "./customToast";

// constants
const ALGODTOKEN = ""; //API token
const PORT = 443;
const ALGODSERVER = "https://mainnet-api.algonode.cloud/";

export const algodClient = new algosdk.Algodv2(ALGODTOKEN, ALGODSERVER, PORT);

export const sendTransaction = async (
  amount,
  address,
  linkVaultAddress,
  signerWalletType,
  selectedAsset
) => {
  if (!address) return errorToast("Please connect your wallet");
  if (!selectedAsset) return errorToast("Please select a token you want to fund your safe with");
  if (!amount) return errorToast("Please enter an amount to fund your safe with");
  if (selectedAsset.minimumBalance < 200000)
    return errorToast(
      `You need a minimum of ${selectedAsset.minimumBalance / 10 ** 6} ALGO to fund your safe`
    );
  if (selectedAsset.amount < amount)
    return errorToast(`You do not have sufficient balance to make this transaction`);

  const suggestedParams = await algodClient.getTransactionParams().do();

  const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: address,
    to: linkVaultAddress,
    amount: Number(amount * 1000000),
    note: new Uint8Array(Buffer.from("Link safe created with asset")),
    suggestedParams: suggestedParams
  });

  const optInTxn = [{ txn: txn, signers: [address] }];
  const signedTxn = await signerWalletType.signTransaction([optInTxn]);
  const success = await algodClient.sendRawTransaction(signedTxn).do();
  return success?.txId;
};

export const claimVault = async (vault, address, signerWalletType, storedAssets) => {
  const vaultSK = await resolveVault(vault);
  const groupedTxn = [];
  const suggestedParams = await algodClient.getTransactionParams().do();
  if (vaultSK) {
    const assetsTxn = storedAssets.assets.map(asset => {
      if (asset.id == 0) {
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
          from: vault.address,
          to: address,
          amount: asset.amount - asset.minimumBalance - 300000,
          suggestedParams: suggestedParams
        });

        groupedTxn.push(txn);
      } else {
        const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
          from: vault.address,
          to: address,
          amount: asset.amount,
          assetIndex: Number(asset.id),
          suggestedParams: suggestedParams
        });
        groupedTxn.push(txn);
      }
    });
    groupedTxn.map(txn => {
      const signedTxn = algosdk.signTransaction(txn, vaultSK);
      const success = algodClient.sendRawTransaction(signedTxn.blob).do();
    });
  }
};

const resolveVault = async vault => {
  const sk = await vault.keypair.privateKey;
  const pk = await vault.keypair.publicKey;
  const vaultSK = new Uint8Array([...sk, ...pk]);
  return vaultSK;
};

export const sendAmountToASA = async (
  amount,
  address,
  selectedAsset,
  linkVault,
  signerWalletType
) => {
  const suggestedParams = await algodClient.getTransactionParams().do();
  const algoTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: address,
    to: linkVault.address,
    amount: Number(1.1 * 1000000),
    note: new Uint8Array(Buffer.from("Link safe created with asset")),
    suggestedParams: suggestedParams
  });
  const algoOptInTxn = [{ txn: algoTxn, signers: [address] }];
  const algoSignedTxn = await signerWalletType.signTransaction([algoOptInTxn]);
  const algoTxId = await algodClient.sendRawTransaction(algoSignedTxn).do();
  if (algoTxId) {
    const vault = await getSafe(linkVault.safe);
    if (vault) {
      await resolveVault(vault)
        .then(async vaultSK => {
          console.log(vaultSK, "vaultSK");
          const assetTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
            from: linkVault.address,
            to: linkVault.address,
            amount: 0 * 10 ** selectedAsset.decimals,
            assetIndex: Number(selectedAsset.id),
            suggestedParams: suggestedParams
          });

          const assetSignedTxn = algosdk.signTransaction(assetTxn, vaultSK);
          const assetTxId = await algodClient.sendRawTransaction(assetSignedTxn.blob).do();
          console.log(assetTxId, "assetTxId");
          return assetTxId;
        })
        .then(async assetTxId => {
          if (assetTxId) {
            const asaTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
              from: address,
              to: linkVault.address,
              amount: Number(amount) * 10 ** selectedAsset.decimals,
              assetIndex: Number(selectedAsset.id),
              suggestedParams: suggestedParams
            });
            const asaOptInTxn = [{ txn: asaTxn, signers: [address] }];
            const asaSignedTxn = await signerWalletType.signTransaction([asaOptInTxn]);
            const asaTxId = await algodClient.sendRawTransaction(asaSignedTxn).do();
            return asaTxId;
          }
        });
    }
  }
};
