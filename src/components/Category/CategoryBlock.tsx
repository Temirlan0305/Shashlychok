import React from 'react';
import { ICategory } from '../../models/ICategory';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setCategoryId, setCategoryName, setSearchValue, setSearchValueCopy } from '../../redux/slices/filter';

const CategoryBlock: React.FC<ICategory> = ({ id, name, image }) => {
   const { categoryId } = useAppSelector(state => state.filter);
   const categoryActive = categoryId === id ? 'active' : '';
   const dispatch = useAppDispatch()
   const onClickCategory = () => {
      dispatch(setCategoryId(id))
      dispatch(setCategoryName(name))
      dispatch(setSearchValue(''))
      dispatch(setSearchValueCopy(''))
   }
   React.useEffect(() => {
      dispatch(setCategoryName(name))
   }, [])
   return (
      <>
         <div onClick={() => onClickCategory()} className={`section_product-button tabs-btn ${categoryActive}`}>
            <img src={image} />
            <span>{name}</span>
         </div>
      </>
   )
}


export default CategoryBlock
