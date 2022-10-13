import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: '',
  userName: '',
  uid: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    makeUserActive: (state, action) => {
      const { email, uid, userName } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        email,
        uid,
        userName,
      };
    },
    resetAuth: (state, action) => initialState,
  },
});

export const { makeUserActive, resetAuth } = authSlice.actions;

export default authSlice.reducer;
