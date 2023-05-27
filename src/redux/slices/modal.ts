
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IModal} from '../../models/IModal';

const initialState: IModal = {
   id: 1,
   isModal: false,
   name: '',
   text: '',
   image: '',
   price: 0,
}


const ModalSlice = createSlice({
   name: 'modal',
   initialState: initialState, 
   reducers: {
      setOpenModal: (state, action: PayloadAction<IModal>) => {
         state.isModal = action.payload['isModal'];
         state.id = action.payload['id'];
         state.name = action.payload['name'];
         state.text = action.payload['text'];
         state.price = action.payload['price'];
         state.image = action.payload['image'];
      },
      setCloseModal: (state, action: PayloadAction<boolean>) => {
         state.isModal = action.payload;
      }
   }
});

export const {setOpenModal, setCloseModal} = ModalSlice.actions;
export default ModalSlice.reducer;