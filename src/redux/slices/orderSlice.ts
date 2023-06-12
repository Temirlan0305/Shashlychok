import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IOrder} from '../../models/IOrder'


const initialState: IOrder = {
   orderTypes: ['Самовывоз', 'Доставка'],
   orderTypeId: 0,
   addressId: 1,
   addressName: '',
   promoCodeId: 0,
   dostavkaPrice: 0,
}

const orderSlice = createSlice({
   name: 'order',
   initialState: initialState,
   reducers: {
      setOrderTypeId: (state, action: PayloadAction<number>) => {
         state.orderTypeId = action.payload;
      },
      setAddressId: (state, action: PayloadAction<number>) => {
         state.addressId = action.payload;
      },
      setAddressName: (state, action: PayloadAction<string>) => {
         state.addressName = action.payload;
      },
      setPromocodeId: (state, action: PayloadAction<number>) => {
         state.promoCodeId = action.payload;
      },
      setDostavkaPrice: (state, action: PayloadAction<number>) => {
         state.dostavkaPrice = action.payload;
      }
   }
})

export const {setOrderTypeId, setAddressId, setPromocodeId, setDostavkaPrice, setAddressName} = orderSlice.actions;
export default orderSlice.reducer;