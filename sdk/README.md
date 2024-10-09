# Linkvault Npm Package

Linkvault is a powerful tool for integrating non-custodial Algorand wallets seamlessly into your applications. By leveraging simple links or QR codes, Linkvault facilitates widespread crypto and Algorand adoption. This package also includes integration for Algorand Standard Assets, making it a comprehensive solution for your crypto wallet needs.

## Installation

To install the Linkvault package, use npm:

```bash
npm install safe-vault
```

## Usage

### Importing the Package

```javascript
import linkvault from "safe-vault";
```

### Creating a Vault

```javascript
const createdVault = linkvault.createVault();

/**
 * Result:
 * {
 *    Address: 'Algorand Address',
 *    vault: 'Link to the Vault'
 * }
 */
```

The `createVault` method generates a new Algorand account and provides a link to the vault. This non-custodial wallet solution ensures security and simplicity for your users.

### Getting Wallet Information

```javascript
const url = "https://linkvault.com.ng/vaultString"; // Replace with the actual link to the vault

try {
  const vault = linkvault.getVault(url);

  /**
   * Result:
   * {
   *    vault: 'https://linkvault.com/vaultString',
   *    keyPair: Uint8Array([...]),
   *    address: 'Algorand Address'
   *    balance: {Wallet Balances(amount, assets, nfts, minimumBalance)}
   * }
   */
} catch (error) {
  console.error("Error Resolving vault:", error);
  throw error;
}
```

The `getVault` method takes a URL (link to the vault) and retrieves the associated wallet information, including the vault link, secret key pair, Algorand address and wallet balances.

### Example: Create and Fund a Linkvault with Algorand

```javascript
import { createVault, getVault } from "safe-vault";
import algosdk from "algosdk";

const algodToken = ""; // Replace with your API token
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);

// Example function to Create and Fund a Linkvault with Algorand
async function sendAlgoTokens() {
  try {
    // Fetch the suggested transaction parameters
    const params = await algodClient.getTransactionParams().do();

    // Create a recipient address using Linkvault
    const destinationLinkvault = await createVault();
    const recipientAddress = destinationLinkvault.address;

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

It generates a new Linkvault as the recipient address, and sends Algos from a specified sender address using the provided mnemonic, logging the transaction ID and status.

### Example: Opt-In to an Algorand Standard Asset (ASA) with a link vault

```javascript
import { createVault, getVault } from "safe-vault";
import algosdk from "algosdk";

const algodToken = ""; // Replace with your API token
const port = 443;
const algodServer = "https://mainnet-api.algonode.cloud/";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, port);

// Example function to Create and Fund a Linkvault with Algorand
// Example function to Opt-In to an Algorand Standard Asset (ASA)
async function optInToASA() {
  try {
    // Fetch the suggested transaction parameters
    const params = await algodClient.getTransactionParams().do();

    // Create a new Linkvault and retrieve wallet information
    const createdLinkvault = await linkvault.createVault();
    const linkvaultURL = createdLinkvault.vault;
    const vault = getVault(linkvaultURL);

    // Set up the opt-in transaction parameters
    const optInTxn = {
      from: vault.address,
      to: vault.address, // Opt-in transaction is to self
      assetIndex: assetId, // ASA ID
      amount: 0, // 0 Algos sent
      firstRound: params.firstRound,
      lastRound: params.lastRound,
      fee: 1000, // Transaction fee (microAlgos)
      genesisID: params.genesisID,
      genesisHash: params.genesisHash
    };

    // Sign and send the opt-in transaction
    const sk = await vault.keypair.privateKey;
    const pk = await vault.keypair.publicKey;
    const vaultSK = new Uint8Array((await sk.length) + (await pk.length));

    vaultSK.set(await sk, 0);
    vaultSK.set(await pk, await sk.length);

    const signedOptInTxn = algosdk.signTransaction(optInTxn, vaultSK);
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

It generates a new Linkvault as the recipient address, and sends Algos from a specified sender address using the provided mnemonic, logging the transaction ID and status.

### Example: Create and fund Linkvault with Algorand Standard Assets (ASAs) and NFTs

```javascript
import { createVault, getVault } from "safe-vault";
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

    // Create a recipient address using Linkvault
    const destinationLinkvault = await createVault();
    const recipientAddress = destinationLinkvault.address;

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

It creates a recipient address using Linkvault's createVault function, and then sends ASAs or NFTs from a specified sender to the Linkvault address.

### Example: Claim a Linkvault to Algorand wallet withdrawing all ALGOs, (ASAs) and NFTs

```javascript
async function claimVault(recipientAddress = defaultConfig.MERCHANT_ADDRESS) {
  const params = await algodClient.getTransactionParams().do();
  const vault = await getVault(linkvaulturl);

  // Get the entire balance of the vault
  const balance = await algodClient.accountInformation(vault.address).do();

  // Extract private and public keys from the vault
  const sk = await vault.keypair.privateKey;
  const pk = await vault.keypair.publicKey;

  // Concatenate private and public keys to create a Uint8Array
  const vaultSK = new Uint8Array([...sk, ...pk]);

  // Create an asset transfer transaction for each ASA
  const assetTransferTxns = balance.assets.map(asset => {
    return algosdk.makeAssetTransferTxnWithSuggestedParams(
      vault.address, // sender's address
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
    vault.address, // sender's address
    recipientAddress, // recipient's address for Algos
    balance.amount, // use the entire Algo balance
    undefined,
    undefined,
    params
  );

  // Combine all transactions into a single group
  const groupedTxns = [algoTransferTxn, ...assetTransferTxns];

  // Sign all transactions in the group
  const signedTxns = groupedTxns.map(txn => algosdk.signTransaction(txn, vaultSK));

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
const result = await claimVault(recipient);
```

## Package Information

- **Package Name**: safe-vault
- **Version**: 1.3.0
- **Author**: David Kazeem and Samuel Tosin
- **License**: ISC
- **GitHub Repository**: [linkvault-package](https://github.com/Samuellyworld/safe-vault/tree/main/sdk)
- **Issues**: [Linkvault Issues](https://github.com/Samuellyworld/safe-vault/issues)

For more details and examples, please refer to the [Linkvault GitHub Repository](https://github.com/Samuellyworld/safe-vault/tree/main/sdk#readme). Feel free to contribute, report issues, or provide feedback!
