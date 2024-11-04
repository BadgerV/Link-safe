import { Contract } from '@algorandfoundation/tealscript';

interface SafeInfo {
  address: Address,
  owner: string,
  minimumBalance: uint64,
  createdTimeStamp: uint64,
  lastUpdated: uint64,
  isActive: boolean
}

export class LinkSafe extends Contract {

    // Global counter for total number of safes
    SafeCount = GlobalStateKey<uint64>({ key: 'count' });

    // Box storage for safes   
    safes = BoxMap<string, SafeInfo>({ prefix: 'vault' });

    // Stores each vaultId by an incremental index
    safeKeys = BoxMap<uint64, string>({ prefix: 'keys' });

    createSafe(
        id: string,
        owner: string,
        minimumBalance: uint64,
        created: uint64
    ): SafeInfo {
        // Verify vault doesn't already exist
        assert(!this.safes(id).exists, 'Vault already exists');


        // Create vault info
        const vaultInfo: SafeInfo = {
            address: this.app.address,
            owner: owner,
            minimumBalance: minimumBalance,
            createdTimeStamp: created,
            lastUpdated: 0,
            isActive: true
        };

        // Store vault information
        this.safes(id).value = vaultInfo;

        // Store vault ID in index
        const currentCount = this.SafeCount.value;
        this.safeKeys(currentCount).value = id;

        // Increment counter
        this.SafeCount.value = currentCount + 1;
        return vaultInfo;
    }
    // Get vault by ID
    getVaultById(id: string): SafeInfo {
        assert(this.safes(id).exists, 'Vault does not exist');
        return this.safes(id).value;
    }
}
