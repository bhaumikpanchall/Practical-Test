import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        ...action.payload,
      };
      state.items.push(newItem);
      state.total = state.items.length;
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = state.items.length;
    },
  },
});

export const { addItem, updateItem, deleteItem } = crudSlice.actions;
export default crudSlice.reducer;

