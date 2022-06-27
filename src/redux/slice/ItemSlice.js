import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  console.log('Получаем данные');
  const { data } = await axios.get('https://627f909abe1ccb0a4661beb7.mockapi.io/pizzas');
  console.log(data);
  return data;
});

const initialState = {
  count: null,
  status: 'Loading',
  cart: [],
};

export const ItemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.cart.push(action.payload);
    },
    removeCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.count = null;
      state.status = 'loading';
    },
    [fetchItems.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.count = action.payload;
      state.status = 'loaded';
    },
    [fetchItems.rejected]: (state) => {
      state.count = null;
      state.status = 'error';
    },
  },
});

export const itemsReduce = ItemSlice.reducer;

export const { addItem, removeCart } = ItemSlice.actions;
