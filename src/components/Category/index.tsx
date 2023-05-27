import React from 'react';
import CategoryBlock from './CategoryBlock'
import { productApi } from '../../redux/services/productApi';
import CategoryLoader from './CategoryLoader';
import Search from '../Search';
import SearchLoader from '../Search/SearchLoader'



const Category: React.FC = () => {
   const { data: categoryData, error: categoryError, isLoading: categoryIsLoading } = productApi.useFetchAllCategoryQuery('');
   const categoryRow = categoryData && categoryData.map((item) => <CategoryBlock {...item} key={item.id} />);
   const categorySkeleton = [...new Array(6)].map((_, index) => <CategoryLoader key={index} />)


   return (
      <>
         {categoryIsLoading ? <SearchLoader /> : <Search />}
         {categoryIsLoading ?
            <div className="section_product__wrapper section_product__skeleton">
               {categorySkeleton}
            </div> :
            <div className="section_product__wrapper swiper-wrapper">
               {categoryRow}
            </div>
         }
         {/* 
         <div className="swiper-button-prev3"><span></span></div>
         <div className="swiper-button-next3"><span></span></div> */}
      </>
   )
}

export default Category;