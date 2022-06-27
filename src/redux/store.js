import { configureStore } from '@reduxjs/toolkit';
import { itemsReduce } from './slice/ItemSlice';

export const store = configureStore({
  reducer: {
    items: itemsReduce,
  },
});
