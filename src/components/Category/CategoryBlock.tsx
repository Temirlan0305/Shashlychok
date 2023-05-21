import React from 'react';
import { ICategory } from '../../models/ICategory';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setCategory } from '../../redux/slices/category';

const CategoryBlock: React.FC<ICategory> = ({ id, name, image }) => {
   const { categoryId } = useAppSelector(state => state.category);
   const categoryActive = categoryId === id ? 'active' : '';
   const dispatch = useAppDispatch()
   return (
      <>
         <div onClick={() => dispatch(setCategory(id))} className={`section_product-button tabs-btn swiper-slide ${categoryActive}`}>
            <img src={image} />
            <span>{name}</span>
         </div>
      </>
   )
}


export default CategoryBlock
