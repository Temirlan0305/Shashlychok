
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IModalProduct} from '../../models/IModalProduct';

const initialState: IModalProduct = {
   id: 1,
   name: '',
   text: '',
   image: '',
   price: 0,
   price_container: 0,
}


const ProductSlice = createSlice({
   name: 'product',
   initialState: initialState, 
   reducers: {
      setModalProduct: (state, action: PayloadAction<IModalProduct>) => {
         state.id = action.payload['id'];
         state.name = action.payload['name'];
         state.text = action.payload['text'];
         state.price = action.payload['price'];
         state.image = action.payload['image'];
         state.price_container = action.payload['price_container'];
      }
   }
});

export const {setModalProduct} = ProductSlice.actions;
export default ProductSlice.reducer;