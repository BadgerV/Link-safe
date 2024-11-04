// @ts-nocheck

import algosdk from "algosdk";
import { ed25519 } from "@noble/curves/ed25519";
import B58 from "./base58";
import { Buffer } from "buffer";

const algodToken = ""; //API token
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";
const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);

const b58 = new B58();
const safeUrl = "https://link-safe.netlify.app/lnv";

const accountBalances = async (address: string) => {
  const accountInfo = await algodClient.accountInformation(address).do();
  const assets: any = [];
  const algorand = { amount: accountInfo.amount } as any;
  algorand["asset-id"] = 0;
  algorand["is-frozen"] = false;
  assets.push(algorand, ...accountInfo.assets);

  const balances = {
    amount: accountInfo.amount,
    assets: assets,
    nfts: accountInfo["created-assets"],
    minimumBalance: accountInfo["min-balance"]
  };
  return balances;
};

const getPublicKey = (priv: Uint8Array): Uint8Array => {
  const privateKeyString = Buffer.from(priv).toString("hex");
  const pub = ed25519.getPublicKey(privateKeyString);
  return pub;
};

const createSafe = async () => {
  try {
    //generates new algorand Account
    let account = algosdk.generateAccount();
    // gets the private keypair uint8 array
    const keypair = account.sk;
    //get the private key from the wallet keypair
    const privateKey = keypair.slice(0, 32);

    //converts it to a string
    const privateKeyString = Buffer.from(privateKey).toString("hex");
    //encode to base58
    const safeKey = b58.encodeBase58(privateKeyString);
    const linksafe = `${safeUrl}${safeKey}`;

    const safe = {
      address: account.addr,
      safe: linksafe
    };
    return safe;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getSafe = async (linksafe: string) => {
  try {
    const safe = linksafe.replace(safeUrl, "");

    //decode from Base58
    const hex = b58.decodeBase58(safe);
    const hexBuffer = Buffer.from(hex, "hex");
    const privateKey = new Uint8Array(hexBuffer);
    const publicKey = getPublicKey(privateKey);
    const address = algosdk.encodeAddress(publicKey);
    // const keypair = new Uint8Array([...privateKey, ...publicKey]);
    linksafe = `${safeUrl}${safe}`;

    const balances = await accountBalances(address);

    const wallet = {
      address,
      linksafe,
      keypair: { privateKey, publicKey },
      balances
    };
    console.log(wallet);
    return wallet;
  } catch (err) {
    console.error("Safe could not be resolved", err);
    return null;
  }
};

export { getSafe, createSafe };
