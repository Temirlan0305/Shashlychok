import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IFilter} from '../../models/IFilter'


const initialState: IFilter = {
   searchValue: '',
   searchValueCopy: '',
   categoryId: 1,
   categoryName: '',
}

const filterSlice = createSlice({
   name: 'filter',
   initialState: initialState,
   reducers: {
      setSearchValue: (state, action: PayloadAction<string>) => {
         state.searchValue = action.payload;
         console.log(action.payload)
      },
      setCategoryId: (state, action: PayloadAction<number>) => {
         state.categoryId = action.payload
      }, 
      setCategoryName: (state, action: PayloadAction<string>) => {
         state.categoryName = action.payload
      }, 
      setSearchValueCopy: (state, action: PayloadAction<string>) => {
         state.searchValueCopy = action.payload
      }, 
   }
})

export const {setSearchValue, setCategoryId, setCategoryName, setSearchValueCopy} = filterSlice.actions;
export default filterSlice.reducer