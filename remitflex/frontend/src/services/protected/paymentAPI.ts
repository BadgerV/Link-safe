import * as paymentRoute from "../apiRoutes/paymentRoutes";
import { protectedGet, protectedPost } from "../apiHelper";


export const paymentControl = {
  getNGNrate: async () => {
    return await protectedGet(paymentRoute.currentRate);
  },
  remitPayment: async (remit: any) => {
    return await protectedPost(paymentRoute.remitPayment, remit);
  },
  billPayment: async (bill: any) => {
    return await protectedPost(paymentRoute.billPayment, bill);
  }
};
