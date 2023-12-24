import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './actions/registerSlice';
import { updateUserReducer } from './actions/RegisterSlice/UpdateUserSlice';

const store = configureStore({
  reducer: { register: registerReducer, updateUser: updateUserReducer },
});
console.log('ON Create:', store.getState());

store.subscribe(() => {
  console.log('Store Change:', store.getState());
});

export default store;
