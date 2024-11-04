// @ts-nocheck

import algosdk from "algosdk";
import { assets } from "../services/unprotected/assetsAPI";

const algodToken = ""; //API token
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";
const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);

export interface Asset {
  logo: {
    svg: string;
  };
  id: string;
  decimals: number;
  name: string;
  unit_name: string;
  url: string;
  amount: number;
}

interface OwnedAsset {
  amount: number;
  "asset-id": number;
  "is-frozen": boolean;
}
export interface NFT {
  amount: number;
  "asset-id": number;
  "is-frozen": boolean;
}

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

export const computeAssets = async (address: string) => {
  try {
    if (!address) {
      return;
    }
    const assetsList: Record<string, Asset> | any = await assets.GET_ALL_ASSETS();
    if (!assetsList) {
      return;
    }
    const assetsArray = Object.values(assetsList);
    const ownedAssets = await accountBalances(address);
    const matchingAssets: Asset[] = ownedAssets.assets
      .map((ownedAsset: OwnedAsset) => {
        const matchingAsset = assetsArray.find(
          (asset: any) => asset.id === ownedAsset["asset-id"]?.toString()
        );
        if (!matchingAsset) {
          return null;
        }

        return {
          ...(matchingAsset as Asset),
          amount: ownedAsset.amount,
          minimumBalance: ownedAssets.minimumBalance
        };
      })
      .filter(asset => asset !== null) as Asset[];

    const matchingNFTs: NFT[] = ownedAssets.nfts
      .map((ownedNFT: NFT) => {
        const matchingNFT = assetsArray.find(
          (asset: any) => asset.id === ownedNFT["asset-id"]?.toString()
        );
        if (!matchingNFT) {
          return null;
        }
        return {
          ...(matchingNFT as NFT),
          amount: ownedNFT.amount,
          minimumBalance: ownedAssets.minimumBalance
        };
      })
      .filter(nft => nft !== null) as NFT[];

    return {
      assets: matchingAssets,
      nfts: matchingNFTs
    };
  } catch (error) {
    console.error("Error fetching or processing assets:", error);
  }
};
