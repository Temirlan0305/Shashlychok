import React from 'react';
import { productApi } from '../../redux/services/productApi';
import { useAppSelector } from '../../hooks/hooks';
import Product from '../Product';

const MenuBlock: React.FC = () => {
   const { categoryId } = useAppSelector(state => state.category)
   const { data, error, isLoading } = productApi.useFetchAllProductsQuery(categoryId);
   return (
      <div className="section_product__card">
         <div className="section_product__row section_product-row tabs__row" id="tab_4">
            <div className="product_title_name">Комбо</div>
            <div className="product__block">
               {data && data.map(item => <Product {...item} key={item.id} />)}
            </div>
         </div>
      </div>
   )
}


export default MenuBlock;