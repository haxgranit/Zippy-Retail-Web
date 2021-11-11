import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserState {
  loggedIn?: boolean;
  personal?: boolean;
  business?: boolean;
};

const initialState: UserState = {};

export const authSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    login: state => {
      state.loggedIn = true;
    },
    logout: state => {
      delete state.loggedIn;
      delete state.personal;
      delete state.business;
    },
    signUpPersonal: state => {
      state.loggedIn = true;
      state.personal = true;
    },
    signUpBusiness: state => {
      state.loggedIn = true;
      state.business = true;
    }
  }
});

export const { login, logout, signUpPersonal, signUpBusiness } = authSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default authSlice.reducer;