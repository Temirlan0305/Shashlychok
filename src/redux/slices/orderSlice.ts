import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IOrder} from '../../models/IOrder'


const initialState: IOrder = {
   orderTypes: ['Самовывоз', 'Доставка'],
   orderTypeId: 0
}

const orderSlice = createSlice({
   name: 'order',
   initialState: initialState,
   reducers: {
      setOrderTypeId: (state, action: PayloadAction<number>) => {
         state.orderTypeId = action.payload;
         console.log(state.orderTypes[state.orderTypeId])
      }
   }
})

export const {setOrderTypeId} = orderSlice.actions;
export default orderSlice.reducer;