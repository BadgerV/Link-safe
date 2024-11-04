import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import * as algokit from '@algorandfoundation/algokit-utils';
import { LinkSafeClient } from '../contracts/clients/LinkSafeClient';
import algosdk from 'algosdk';

const fixture = algorandFixture();
algokit.Config.configure({ populateAppCallResources: true });

describe('LinkSafe', () => {
  let appClient: LinkSafeClient;
  let sender: algosdk.Account;
  let algod: algosdk.Algodv2;
  
  // Test data
  const safeId = 'test-safe-1';
  const minimumBalance = BigInt(100000); // 0.1 ALGO
  const timestamp = BigInt(Math.floor(Date.now() / 1000));

  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { testAccount } = fixture.context;
    const { algorand } = fixture;

    sender = testAccount;
    algod = algorand.client.algod;

    appClient = new LinkSafeClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algorand.client.algod
    );

    // Create the application
    await appClient.create.createApplication({});
  });

  test('creates safe', async () => {
    // Fund the app account
    await appClient.appClient.fundAppAccount(algokit.microAlgos(200_000));

    const createResult = await appClient.createSafe({
      id: safeId,
      owner: sender.addr,
      minimumBalance,
      created: timestamp
    }, {
      sendParams: {
        fee: algokit.microAlgos(2_000)
      }
    });

    const safeInfo = createResult.return?.valueOf();
    expect(safeInfo).toBeDefined();
    expect(safeInfo?.owner).toBe(sender.addr);
    expect(safeInfo?.minimumBalance).toBe(minimumBalance);
    expect(safeInfo?.isActive).toBe(true);
  });

  test('prevents duplicate safe creation', async () => {
    // Try to create a safe with same ID
    await expect(
      appClient.createSafe({
        id: safeId,
        owner: sender.addr,
        minimumBalance,
        created: timestamp
      })
    ).rejects.toThrow('Vault already exists');
  });

  test('gets safe by id', async () => {
    const getResult = await appClient.getVaultById({
      id: safeId
    });

    const safeInfo = getResult.return?.valueOf();
    expect(safeInfo).toBeDefined();
    expect(safeInfo?.owner).toBe(sender.addr);
    expect(safeInfo?.minimumBalance).toBe(minimumBalance);
    expect(safeInfo?.isActive).toBe(true);
  });

  test('fails getting non-existent safe', async () => {
    await expect(
      appClient.getVaultById({
        id: 'non-existent-safe'
      })
    ).rejects.toThrow('Vault does not exist');
  });

  test('creates multiple safes and tracks count', async () => {
    const safe2Id = 'test-safe-2';
    
    await appClient.createSafe({
      id: safe2Id,
      owner: sender.addr,
      minimumBalance,
      created: timestamp
    });

    // Get both safes to verify they exist
    const safe1 = await appClient.getVaultById({ id: safeId });
    const safe2 = await appClient.getVaultById({ id: safe2Id });

    expect(safe1.return?.valueOf()).toBeDefined();
    expect(safe2.return?.valueOf()).toBeDefined();

    // Verify safe count (you'll need to add a method to get count)
    const count = await appClient.getSafeCount({});
    expect(count.return?.valueOf()).toBe(BigInt(2));
  });

  test('handles minimum balance requirements', async () => {
    const highMinBalance = BigInt(1000000); // 1 ALGO
    
    // Create safe with high minimum balance
    const createResult = await appClient.createSafe({
      id: 'high-balance-safe',
      owner: sender.addr,
      minimumBalance: highMinBalance,
      created: timestamp
    });

    const safeInfo = createResult.return?.valueOf();
    expect(safeInfo?.minimumBalance).toBe(highMinBalance);
  });

  // Test application limits
  test('respects box storage limits', async () => {
    // Create safes until we hit storage limit
    const createManySafes = async () => {
      for (let i = 0; i < 100; i++) {
        await appClient.createSafe({
          id: `bulk-safe-${i}`,
          owner: sender.addr,
          minimumBalance,
          created: timestamp
        });
      }
    };

    // This should eventually throw due to box storage limits
    await expect(createManySafes()).rejects.toThrow();
  });
});