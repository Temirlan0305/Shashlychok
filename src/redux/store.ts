import { configureStore } from "@reduxjs/toolkit";
import { productApi } from './services/productApi';
import filterReducer from './slices/filterSlice';
import ModalReducer from './slices/modalSlice';
import BasketReducer from './slices/basketSlice'
import OrderSlice from './slices/orderSlice'
import ProductReducer from './slices/productSlice';


export const store = configureStore({
   reducer: {
      filter: filterReducer,
      modal: ModalReducer,
      product: ProductReducer,
      basket: BasketReducer,
      order: OrderSlice,
      [productApi.reducerPath]: productApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
