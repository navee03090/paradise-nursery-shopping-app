import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== action.payload);
        } else {
          existingItem.quantity -= 1;
        }
        
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
    
    deleteItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
