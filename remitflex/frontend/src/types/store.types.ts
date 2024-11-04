// import custom types from redux persist module;
import { WebStorage } from "redux-persist";

// persist config types
export interface PersistConfigType {
  key: string;
  storage: WebStorage;
}

// types config types
export interface UserActionType {
  SET_CURRENT_USER: string;
}

export interface CurrentVaultType {
  address: string;
  linksafe: string;
  keypair: {
    privateKey: Uint8Array;
    publicKey: Uint8Array;
  };
  balances: {
    amount: any;
    assets: any;
    nfts: any;
    minimumBalance: any;
  };
}
// current user Type
export interface CurrentType {
  currentVault: CurrentVaultType | undefined;
  bills: null | Array<string>;
}
