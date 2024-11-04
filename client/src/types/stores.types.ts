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
  SET_WALLET_TYPE: string;
}

// current user Type
export interface CurrentType {
  currentUser: string | undefined;
  walletType: string | undefined;
}
