// importing relevant module
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentType } from "../../types/stores.types";
import { USER_ACTION_TYPES } from "./user.action";

// initial state
const initialState: CurrentType = {
  currentUser: "",
  walletType: ""
};

// setting user actions;
export const userSlice = createSlice({
  name: USER_ACTION_TYPES.SET_CURRENT_USER,
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string | undefined>) => {
      state.currentUser = action.payload;
    },
    setWalletType: (state, action: PayloadAction<string | undefined>) => {
      state.walletType = action.payload;
    }
  }
});

// dispatch
export const { setCurrentUser, setWalletType } = userSlice.actions;

//reducer
export default userSlice.reducer;
