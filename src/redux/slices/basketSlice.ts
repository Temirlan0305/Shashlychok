import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IBasketState} from "../../models/IBasketState"
import {IProductBasket} from "../../models/IBasketState";



const initialState: IBasketState = {
   items: [],
   totalCount: 0,
   totalPrice: 0,
   totalProductPrice: 0,
   totalContainerPrice: 0,
   dostavkaPrice: 0,
   promo: 0,
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
            if (state.totalPrice < 10000) {
               state.dostavkaPrice = 1500
            } else {
               state.dostavkaPrice = 0
            }
            state.totalPrice = state.totalPrice + state.dostavkaPrice
            if (state.promo > 0) {
               state.totalPrice = state.totalPrice - (state.totalPrice * state.promo/100)
            }
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
         if (state.totalPrice < 10000) {
            state.dostavkaPrice = 1500
         } else {
            state.dostavkaPrice = 0
         }
         state.totalPrice = state.totalPrice + state.dostavkaPrice;
         if (state.promo > 0) {
            state.totalPrice = state.totalPrice - (state.totalPrice * state.promo/100)
         }
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
         if (state.totalPrice < 10000) {
            state.dostavkaPrice = 1500
         } else {
            state.dostavkaPrice = 0
         }
         state.totalPrice = state.totalPrice + state.dostavkaPrice;
         if (state.promo > 0) {
            state.totalPrice = state.totalPrice - (state.totalPrice * state.promo/100)
         }
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
         if (state.totalPrice < 10000) {
            state.dostavkaPrice = 1500
         } else {
            state.dostavkaPrice = 0
         }
         state.totalPrice = state.totalPrice + state.dostavkaPrice;
         if (state.promo > 0) {
            state.totalPrice = state.totalPrice - (state.totalPrice * state.promo/100)
         }
      },
      setDostavkaPrice: (state) => {
         if (state.totalPrice < 10000) {
            state.dostavkaPrice = 1500
         } else {
            state.dostavkaPrice = 0
         }
         state.totalPrice = state.totalPrice + state.dostavkaPrice;
      },
      setPromoPrice: (state, action: PayloadAction<number>) => {
         state.promo = action.payload
         state.totalPrice = state.items.reduce((sum, obj) => {
            return sum + (obj.price * obj.count) + (obj.price_container * obj.count)
         }, 0)
         if (state.promo > 0) {
            state.totalPrice = state.totalPrice - (state.totalPrice * state.promo/100)
         }
      }, 
      setClearItems: (state) => {
         state.items = [];
         state.totalCount = 0;
         state.totalProductPrice = 0;
         state.dostavkaPrice = 0;
         state.promo = 0;
      }
   }
})

export const {
   setAddProduct,
   setPromoPrice,
   setPlusProduct,
   setMinusProduct,
   setDeleteProduct,
   setDostavkaPrice,
   setClearItems
} = basketSlice.actions;
export default basketSlice.reducer;