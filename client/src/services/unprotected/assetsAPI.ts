import * as assetsRoute from "../apiRoutes/assetsRoute";
import { unProtectedGet } from "../apiHelper";

export const assets = {
  GET_ALL_ASSETS: async () => {
    return await unProtectedGet(assetsRoute.GET_ALL_ASSETS);
  }
};
