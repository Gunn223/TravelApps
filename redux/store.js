import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './actions/registerSlice';

const store = configureStore({
  reducer: { register: registerReducer },
});
console.log('ON Create:', store.getState());

store.subscribe(() => {
  console.log('Store Change:', store.getState());
});

export default store;
