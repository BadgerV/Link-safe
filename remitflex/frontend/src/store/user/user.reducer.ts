// importing relevant module
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentType, CurrentVaultType } from "../../types/store.types";
import { USER_ACTION_TYPES } from "./user.action";

// initial state
const initialState: CurrentType = {
  currentVault: null,
  bills: null
};

// setting user actions;
export const userSlice = createSlice({
  name: USER_ACTION_TYPES.SET_CURRENT_USER,
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentVaultType | null>) => {
      state.currentVault = action.payload;
    },
    setBills: (state, action: PayloadAction<Array<string> | null>) => {
      state.bills = action.payload;
    }
  }
});

// dispatch
export const { setCurrentUser, setBills } = userSlice.actions;

//reducer
export default userSlice.reducer;
