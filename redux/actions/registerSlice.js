import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: [
      {
        name: 'jhon',
        age: 12,
      },
    ],
  },
  reducers: {
    registerReducer: (state, action) => {
      const findData = state.data.find((data) => data.username === action.payload.username);

      if (findData) {
        // Handle kasus ketika username sudah ada
        console.log('Username sudah terdaftar:', action.payload.username);
      } else {
        // Tambahkan pengguna ke dalam array
        state.data.push(action.payload);
      }
    },
  },
});

export const { registerReducer } = registerSlice.actions;
export default registerSlice.reducer;
