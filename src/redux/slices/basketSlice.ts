import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IBasketState} from "../../models/IBasketState"
import {IProduct} from "../../models/IProduct"
import {IProductBasket} from "../../models/IBasketState";



const initialState: IBasketState = {
   items: [],
   totalCount: 0,
   totalPrice: 0,
   totalProductPrice: 0,
   totalContainerPrice: 0,
}

const basketSlice = createSlice({
   name: 'basket',
   initialState: initialState,
   reducers: {
      setAddProduct: (state, action: PayloadAction<IProductBasket>) => {
         const checkItem = state.items.find((obj) => obj.id === action.payload.id)
         if (checkItem) {
            checkItem.count += 1
         } else {
            state.items.push(action.payload)
         }
         if (state.items.length > 0) {
            state.totalCount = state.items.reduce((sum, obj) => {
               return sum + obj.count
            }, 0)
            state.totalProductPrice = state.items.reduce((sum, obj) => {
               return sum + (obj.price * obj.count)
            }, 0)
            state.totalContainerPrice = state.items.reduce((sum, obj) => {
               return sum + (obj.price_container * obj.count)
            }, 0)
            state.totalPrice = state.items.reduce((sum, obj) => {
               return sum + (obj.price * obj.count) + (obj.price_container * obj.count)
            }, 0)
         }

      },
      setPlusProduct: (state, action: PayloadAction<number>) => {
         const selectProduct = state.items.find((obj) => obj.id === action.payload)
         if (selectProduct) {
            selectProduct.count += 1
         }
         state.totalCount = state.items.reduce((sum, obj) => {
            return sum + obj.count
         }, 0)
         state.totalProductPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price * obj.count)
         }, 0)
         state.totalContainerPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price_container * obj.count)
         }, 0)
         state.totalPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price * obj.count) + (obj.price_container * obj.count)
         }, 0)
      },
      setMinusProduct: (state, action: PayloadAction<number>) => {
         const selectProduct = state.items.find((obj) => obj.id === action.payload)
         if (selectProduct) {
            if (selectProduct.count > 1) {
               selectProduct.count -= 1
            }
         }
         state.totalCount = state.items.reduce((sum, obj) => {
            return sum + obj.count
         }, 0)
         state.totalProductPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price * obj.count)
         }, 0)
         state.totalContainerPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price_container * obj.count)
         }, 0)
         state.totalPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price * obj.count) + (obj.price_container * obj.count)
         }, 0)
      },
      setDeleteProduct: (state, action: PayloadAction<number>) => {
         state.items = state.items.filter((obj) => obj.id !== action.payload)
         state.totalCount = state.items.reduce((sum, obj) => {
            return sum + obj.count
         }, 0)
         state.totalProductPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price * obj.count)
         }, 0)
         state.totalContainerPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price_container * obj.count)
         }, 0)
         state.totalPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price * obj.count) + (obj.price_container * obj.count)
         }, 0)
      },
      setClearItems: (state) => {
         state.items = [];
         state.totalCount = 0;
         state.totalProductPrice = 0;
      }
   }
})

export const {setAddProduct, setPlusProduct, setMinusProduct, setDeleteProduct} = basketSlice.actions;
export default basketSlice.reducer;