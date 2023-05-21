import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CategoryState {
   categoryId: number
}

const initialState: CategoryState = {
   categoryId: 1,
}

export const categorySlice = createSlice({
   name: 'category',
   initialState: initialState,
   reducers: {
      setCategory: (state, action: PayloadAction<number>) => {
         state.categoryId = action.payload
      }
   }
})

export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer;