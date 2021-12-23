import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../api';
import { RootState } from '../../app/store';

export interface UserState {
  user?: User;
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    unload: (state) => {
      delete state.user;
    },
  },
});

export const { load, unload } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
