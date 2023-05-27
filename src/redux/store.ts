import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from './services/productApi'
import filterReducer from './slices/filter'
import ModalReducer from './slices/modal'

export const store = configureStore({
   reducer: {
      filter: filterReducer,
      modal: ModalReducer,
      [productApi.reducerPath]: productApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
