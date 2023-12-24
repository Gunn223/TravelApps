import { createSlice } from '@reduxjs/toolkit';

const UpdateUserSlices = createSlice({
  name: 'updateUser',
  initialState: {
    data: [{ username: 'haha' }],
  },
  reducers: {
    updateUserReducer: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateUserReducer } = UpdateUserSlices.actions;
export default UpdateUserSlices.reducer;
