import React from 'react';
import { IProduct } from '../../models/IProduct';

const Product: React.FC<IProduct> = ({ id, name, image, text, price }) => {
   return (
      <div className="product__column" data-fancybox={id} data-src="#popup26">
         <div className="product__item">
            <div className="product__image">
               <img src={image} alt="product" />
            </div>
            <div className="product__info">
               <div className="product__title">
                  {name}
               </div>
               <div className="product__text">
                  <p>{text}</p>
               </div>
               <div className="product__bottom">
                  <div className="product__price">
                     {price} тг
                  </div>
                  <a href="javascript:;" className="product__button">В корзину</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Product;