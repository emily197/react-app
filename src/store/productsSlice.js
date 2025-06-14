import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProduct, addProduct, updateProduct, deleteProduct } from '../helpers/getProduct';
import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

// Hay que mantener el axios para no perder los cambios
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return await getProduct();
});

export const createProduct = createAsyncThunk('products/createProduct', async (product) => {
  return await addProduct(product);
});

export const editProduct = createAsyncThunk('products/editProduct', async ({ id, product }) => {
  return await updateProduct(id, product);
});

export const removeProduct = createAsyncThunk('products/removeProduct', async (id) => {
  await deleteProduct(id);
  return id;
});

// Se agrego el slug, xk ahora con el fetch las cosas cambiaron
export const fetchProductBySlug = createAsyncThunk(
  'products/fetchProductBySlug',
  async (slug) => {
    const response = await axios.get(`${API_URL}?slug=${slug}`);
    return response.data.length > 0 ? response.data[0] : null;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    selectedProduct: null, 
  },
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // createProduct
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // editProduct
      .addCase(editProduct.fulfilled, (state, action) => {
        const idx = state.items.findIndex(p => p.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })
      // removeProduct
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => String(p.id) !== String(action.payload));
      })
      // fetchProductBySlug
      .addCase(fetchProductBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedProduct = null;
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.selectedProduct = null;
      });
  },
});

export const { clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;