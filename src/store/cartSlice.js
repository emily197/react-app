import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //agregar productos
    addItem(state, action) {
      const prod = action.payload;
      const exist = state.items.find(item => item.id === prod.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...prod, quantity: 1 });
      }
    },
    //eliminar
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    //limpior carrito
    cleanItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, cleanItems } = cartSlice.actions;
export default cartSlice.reducer;