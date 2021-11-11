import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  username?: string;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logout: state => {
      delete state.username;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;