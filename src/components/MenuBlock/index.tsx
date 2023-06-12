import React, { useMemo } from 'react';
import { productApi } from '../../redux/services/productApi';
import { useAppSelector } from '../../hooks/hooks';
import Product from '../Product';
import ProductLoader from '../Product/ProductLoader';
import MenuTitleLoader from './MenuTitleLoader';

const MenuBlock: React.FC = () => {
   const { categoryId, searchValue, categoryName } = useAppSelector(state => state.filter);
   const { addressId } = useAppSelector(state => state.order)

   const searchParams = searchValue ? `&q=${searchValue}` : ''
   const { data: productData, error: productError, isLoading: productsIsLoading } = productApi.useFetchAllProductsQuery({ categoryId, searchParams });
   // console.log(productData)
   // const productFilterData = useMemo(() => productData && productData.filter((obj) => obj.city_id.includes(addressId)), [addressId])
   const productSkeleton = [...new Array(8)].map((_, index) => <ProductLoader key={index} />)
   const productBlock = productData && productData.map((item) => <Product {...item} key={item.id} />)
   const productTitle = searchValue ? `Поиск по: "${searchValue}"` : categoryName;

   return (
      <div className="section_product__card">
         <div className="section_product__row section_product-row tabs__row" id="tab_4">
            <div className="product_title_name">{productsIsLoading ? <MenuTitleLoader /> : productTitle}</div>
            <div className="product__block">
               {productsIsLoading === true ? productSkeleton : productBlock}
            </div>
         </div>
      </div>
   )
}


export default MenuBlock;