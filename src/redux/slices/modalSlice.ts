
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IModal} from '../../models/IModal';

const initialState: IModal = {
   productModal: false,
   orderModal: false,
   dostavkaModal: false,
   samovyvozModal: false
}


const ModalSlice = createSlice({
   name: 'modal',
   initialState: initialState, 
   reducers: {
      setOpenProductModal: (state, action: PayloadAction<boolean>) => {
         state.productModal = action.payload;
      },
      setOpenOrderModal: (state, action: PayloadAction<boolean>) => {
         state.orderModal = action.payload;
      },
      setOpenTypeModal: (state, action: PayloadAction<number>) => {
         if (action.payload === 0) {
            state.samovyvozModal = true
         } else {
            state.samovyvozModal = true
         }
      },
      setCloseOrderModal: (state) => {
         state.orderModal = false;
      },
      setCloseModal: (state) => {
         state.productModal = false
         state.orderModal = false
         state.dostavkaModal = false
         state.samovyvozModal = false
      }
   }
});

export const {
   setOpenProductModal,
   setOpenOrderModal,
   setOpenTypeModal,
   setCloseOrderModal,
   setCloseModal
} = ModalSlice.actions;
export default ModalSlice.reducer;