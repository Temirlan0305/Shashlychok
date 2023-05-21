import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from './services/productApi'
import categoryReducer from './slices/category'

export const store = configureStore({
   reducer: {
      category: categoryReducer,
      [productApi.reducerPath]: productApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
