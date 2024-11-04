import * as banksRoute from "../apiRoutes/banksRoutes";
import { protectedGet, protectedPost } from "../apiHelper";

export const banks = {
  getAllLocalBanks: async () => {
    return await protectedGet(banksRoute.banks);
  },
  resolveAccount: async (payload: { account_number: string; account_bank: string }) => {
    console.log(payload);
    return await protectedPost(banksRoute.resolveAccount, payload);
  }
};
