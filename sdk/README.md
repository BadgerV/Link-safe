# Linksafe Npm Package

LinkSafe is a powerful tool for integrating non-custodial Algorand wallets seamlessly into your applications. By leveraging simple links or QR codes, Linksafe facilitates widespread crypto and Algorand adoption. This package also includes integration for Algorand Standard Assets, making it a comprehensive solution for your crypto wallet needs.

## Installation

To install the LinkSafe package, use npm:

```bash
npm install link-safe
```

## Usage

### Importing the Package

```javascript
import linksafe from "link-safe";
```

### Creating a Safe

```javascript
const createdSafe = linksafe.createSafe();

/**
 * Result:
 * {
 *    Address: 'Algorand Address',
 *    safe: 'Link to the Safe'
 * }
 */
```

The `createSafe` method generates a new Algorand account and provides a link to the safe. This non-custodial wallet solution ensures security and simplicity for your users.

### Getting Wallet Information

```javascript
const url = "https://link-safe.netlify.app/safeString"; // Replace with the actual link to the safe

try {
  const safe = linksafe.getSafe(url);

  /**
   * Result:
   * {
   *    safe: 'https://linksafe.com/safeString',
   *    keyPair: Uint8Array([...]),
   *    address: 'Algorand Address'
   *    balance: {Wallet Balances(amount, assets, nfts, minimumBalance)}
   * }
   */
} catch (error) {
  console.error("Error Resolving safe:", error);
  throw error;
}
```

The `getSafe` method takes a URL (link to the safe) and retrieves the associated wallet information, including the safe link, secret key pair, Algorand address and wallet balances.

### Example: Create and Fund a LinkSafe with Algorand

```javascript
import { createSafe, getSafe } from "link-safe";
import algosdk from "algosdk";

const algodToken = ""; // Replace with your API token
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);

// Example function to Create and Fund a LinkSafe with Algorand
async function sendAlgoTokens() {
  try {
    // Fetch the suggested transaction parameters
    const params = await algodClient.getTransactionParams().do();

    // Create a recipient address using Linksafe
    const destinationLinksafe = await createSafe();
    const recipientAddress = destinationLinksafe.address;

    // Replace senderAddress and senderMnemonic with actual values
    const senderAddress = "your_sender_address";
    const senderMnemonic = "your_sender_mnemonic";

    const txnParams = {
      from: senderAddress,
      to: recipientAddress,
      fee: 1000, // Transaction fee (microAlgos)
      amount: 1000000, // Amount to send (microAlgos)
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      genesisID: params.genesisID,
      genesisHash: params.genesisHash
    };

    const recoveredAccount = algosdk.mnemonicToSecretKey(senderMnemonic);
    const senderAccount = recoveredAccount.addr;

    const txn = new algosdk.Transaction.Payment(txnParams);
    const signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);

    const txId = signedTxn.txID().toString();
    console.log(`Transaction ID: ${txId}`);

    // Send the transaction to the Algorand network
    const txHeaders = { "Content-Type": "application/x-binary" };
    const sendResponse = await algodClient.sendRawTransaction(signedTxn.blob, txHeaders).do();
    console.log("Transaction sent.");

    // Wait for confirmation (you can check the confirmation status using the `txId`)
    const status = await algodClient.status().do();
    console.log("Transaction Status:", status);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

It generates a new LinkSafe as the recipient address, and sends Algos from a specified sender address using the provided mnemonic, logging the transaction ID and status.

### Example: Opt-In to an Algorand Standard Asset (ASA) with a link safe

```javascript
import { createSafe, getSafe } from "link-safe";
import algosdk from "algosdk";

const algodToken = ""; // Replace with your API token
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);

// Example function to Create and Fund a LinkSafe with Algorand
// Example function to Opt-In to an Algorand Standard Asset (ASA)
async function optInToASA() {
  try {
    // Fetch the suggested transaction parameters
    const params = await algodClient.getTransactionParams().do();

    // Create a new LinkSafe and retrieve wallet information
    const createdLinksafe = await link-safe.createSafe();
    const linksafeURL = createdLinksafe.safe;
    const safe = getSafe(linksafeURL);

    // Set up the opt-in transaction parameters
    const optInTxn = {
      from: safe.address,
      to: safe.address, // Opt-in transaction is to self
      assetIndex: assetId, // ASA ID
      amount: 0, // 0 Algos sent
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      fee: 1000, // Transaction fee (microAlgos)
      genesisID: params.genesisID,
      genesisHash: params.genesisHash
    };

    // Sign and send the opt-in transaction
    const sk = await safe.keypair.privateKey;
    const pk = await safe.keypair.publicKey;
    const safeSK = new Uint8Array((await sk.length) + (await pk.length));

    safeSK.set(await sk, 0);
    safeSK.set(await pk, await sk.length);

    const signedOptInTxn = algosdk.signTransaction(optInTxn, safeSK);
    const txId = signedOptInTxn.txID().toString();

    console.log(`Opt-In Transaction ID: ${txId}`);

    const txHeaders = { "Content-Type": "application/x-binary" };
    const sendResponse = await algodClient.sendRawTransaction(signedOptInTxn.blob).do();
    console.log("Opt-In Transaction sent.");

    // Wait for confirmation (you can check the confirmation status using the `txId`)
    const status = await algodClient.status().do();
    console.log("Transaction Status:", status);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to perform the opt-in
optInToASA();
```

It generates a new LinkSafe as the recipient address, and sends Algos from a specified sender address using the provided mnemonic, logging the transaction ID and status.

### Example: Create and fund LinkSafe with Algorand Standard Assets (ASAs) and NFTs

```javascript
import { createSafe, getSafe } from "link-safe";
import algosdk from "algosdk";

const algodToken = ""; // Replace with your API token
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);

// Define a function to send Algorand Standard Assets (ASAs) and NFTs
async function sendASATokens() {
  try {
    // Fetch the suggested transaction parameters
    const params = await algodClient.getTransactionParams().do();

    // Create a recipient address using LinkSafe
    const destinationLinksafe = await createSafe();
    const recipientAddress = destinationLinksafe.address;

    // Replace senderAddress and senderMnemonic with actual values
    const senderAddress = "your_sender_address";
    const senderMnemonic = "your_sender_mnemonic";

    const txnParams = {
      from: senderAddress,
      to: recipientAddress,
      assetIndex: assetId, // Replace with Asset ID of the ASA OR NFT
      amount: amount, // 1 for NFT
      fee: 1000, // Transaction fee (microAlgos)
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      genesisID: params.genesisID,
      genesisHash: params.genesisHash
    };

    const recoveredAccount = algosdk.mnemonicToSecretKey(senderMnemonic);
    const senderAccount = recoveredAccount.addr;

    const txn = algosdk.makeAssetTransferTxnWithSuggestedParams(
      txnParams.from, // sender's address
      txnParams.to, // recipient's address
      undefined, // closeRemainderTo
      undefined,
      txnParams.amount, // amount of assets to send
      undefined,
      txnParams.assetIndex, // asset index
      txnParams.suggestedParams
    );
    const signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);

    const txId = signedTxn.txID().toString();
    console.log(`ASA OR NFT Transaction ID: ${txId}`);

    const txHeaders = { "Content-Type": "application/x-binary" };
    const sendResponse = await algodClient.sendRawTransaction(signedTxn.blob).do();
    console.log("ASA Transaction sent.");

    const status = await algodClient.status().do();
    console.log("Transaction Status:", status);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to perform the opt-in
sendASATokens();
```

It creates a recipient address using LinkSafe's createSafe function, and then sends ASAs or NFTs from a specified sender to the LinkSafe address.

### Example: Claim a LinkSafe to Algorand wallet withdrawing all ALGOs, (ASAs) and NFTs

```javascript
async function claimSafe(recipientAddress = defaultConfig.MERCHANT_ADDRESS) {
  const params = await algodClient.getTransactionParams().do();
  const safe = await getSafe(linksafeurl);

  // Get the entire balance of the safe
  const balance = await algodClient.accountInformation(safe.address).do();

  // Extract private and public keys from the safe
  const sk = await safe.keypair.privateKey;
  const pk = await safe.keypair.publicKey;

  // Concatenate private and public keys to create a Uint8Array
  const safeSK = new Uint8Array([...sk, ...pk]);

  // Create an asset transfer transaction for each ASA
  const assetTransferTxns = balance.assets.map(asset => {
    return algosdk.makeAssetTransferTxnWithSuggestedParams(
      safe.address, // sender's address
      recipientAddress, // recipient's address for the ASA
      recipientAddress, // closeRemainderTo (close to recipient's address)
      undefined,
      asset.amount, // amount of the ASA to send
      undefined,
      asset.assetidx, // asset index
      params
    );
  });

  // Create a payment transaction for Algos
  const algoTransferTxn = algosdk.makePaymentTxnWithSuggestedParams(
    safe.address, // sender's address
    recipientAddress, // recipient's address for Algos
    balance.amount, // use the entire Algo balance
    undefined,
    undefined,
    params
  );

  // Combine all transactions into a single group
  const groupedTxns = [algoTransferTxn, ...assetTransferTxns];

  // Sign all transactions in the group
  const signedTxns = groupedTxns.map(txn => algosdk.signTransaction(txn, safeSK));

  // Combine all signed transactions into a single blob
  const signedTxnBlob = algosdk.concatArrays(...signedTxns.map(st => st.blob));

  // Send the signed transaction group to the Algorand node
  const { txId } = await algodClient.sendRawTransaction(signedTxnBlob).do();

  // Wait for transaction confirmation
  const result = await algosdk.waitForConfirmation(algodClient, txId, 4);

  return result;
}

// Example usage:
const recipient = "some_other_address"; // You can pass the recipient address as a parameter
const result = await claimSafe(recipient);
```

## Package Information

- **Package Name**: link-safe
- **Version**: 1.0.0
- **Author**: Segunmaru Faozan
- **License**: ISC
- **GitHub Repository**: [linksafe-package](https://github.com/BadgerV/Link-safe/tree/main/sdk)
- **Issues**: [Linksafe Issues](https://github.com/BadgerV/Link-safe/issues)

For more details and examples, please refer to the [Linksafe GitHub Repository](https://github.com/BadgerV/Link-safe/tree/main/sdk#readme). Feel free to contribute, report issues, or provide feedback!
