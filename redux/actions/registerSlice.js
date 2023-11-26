import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: {
      username: '',
      password: '',
      email: '',
    },
  },
  reducers: {
    registerReducer: (state, action) => {
      const findData = state.data.find((data) => data.username === action.payload.username);
      console.log('Register slices', findData);
      // if () {
      // } else {
      state.data.push(action.payload);
      // }
    },
  },
});

export const { registerReducer } = registerSlice.actions;
export default registerSlice.reducer;
