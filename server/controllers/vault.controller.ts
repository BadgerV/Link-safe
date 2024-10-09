import algosdk from "algosdk";
import { ed25519 } from "@noble/curves/ed25519";
import B58 from "./base58";
import { toDataURL } from "qrcode";
import { Request, Response } from "express";

const b58 = new B58();

const generateQR = async (text: string): Promise<string> => {
  try {
    const qr = await toDataURL(text);
    return qr;
  } catch (err) {
    console.error(err);
    return "";
  }
};

const getPublicKey = (priv: Uint8Array): Uint8Array => {
  const privateKeyString = Buffer.from(priv).toString("hex");
  const pub = ed25519.getPublicKey(privateKeyString);
  return pub;
};

const createVault = async (req: Request, res: Response) => {
  try {
    console.log("works1");
    //generates new algorand Account
    let account = algosdk.generateAccount();
    // gets the private keypair uint8 array
    const keypair = account.sk;
    //get the private key from the wallet keypair
    const privateKey = keypair.slice(0, 32);

    //converts it to a string
    const privateKeyString = Buffer.from(privateKey).toString("hex");
    const linksafe = `https://linksafe.io/${b58.encodeBase58(privateKeyString)}`;
    //encode to base58
    const vault = {
      Address: account.addr,
      vault: linksafe
    };
    res.status(200).json({
      data: vault
    });
  } catch (error) {
    res.status(500).json({
      error: "An error Occured"
    });
  }
};

const getWallet = (req: Request, res: Response) => {
  try {
    const vault = req.params.vault;
    //decode from Base58
    const hex = b58.decodeBase58(vault);
    const hexBuffer = Buffer.from(hex, "hex");

    const privateKey = new Uint8Array(hexBuffer);
    const publicKey = getPublicKey(privateKey);
    const Address = algosdk.encodeAddress(publicKey);
    const secretKeyPair = new Uint8Array([...privateKey, ...publicKey]);

    const wallet = {
      vault,
      Address
    };
    res.status(200).json({
      data: wallet
    });
  } catch (err) {
    res.status(404).json({
      error: "Vault could not be resolved"
    });
  }
};

export { getWallet, createVault };

// console.log(getWallet('6efredLDFTErDFN2EHtLfqZSDSqUmGR4iwNVx3sd29Dg'))
