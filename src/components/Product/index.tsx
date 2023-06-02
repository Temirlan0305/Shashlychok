import React from 'react';
import { IProduct } from '../../models/IProduct';
import { setModalProduct } from '../../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setOpenProductModal } from '../../redux/slices/modalSlice';

const Product: React.FC<IProduct> = ({ id, name, image, text, price, price_container }) => {
   const { productModal } = useAppSelector(state => state.modal)
   const dispatch = useAppDispatch();
   const onOpenModal = () => {
      dispatch(setModalProduct({ id, name, image, text, price, price_container }));
      dispatch(setOpenProductModal(!productModal))
      document.body.style.overflow = 'hidden'
   }
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
                     {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} тг
                  </div>
                  <button className="product__button" onClick={() => onOpenModal()}>Подробнее</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Product;