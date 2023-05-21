import React from 'react';
import CategoryBlock from './CategoryBlock'
import { productApi } from '../../redux/services/productApi';

const Category: React.FC = () => {
   const { data, error, isLoading } = productApi.useFetchAllCategoryQuery('');


   return (
      <div className="section_product__buttons">
         <div className="section_product__wrapper swiper-wrapper">
            {data && data.map((item) => <CategoryBlock {...item} key={item.id} />)}
         </div>
         {/* 
         <div className="swiper-button-prev3"><span></span></div>
         <div className="swiper-button-next3"><span></span></div> */}
      </div>
   )
}

export default Category;