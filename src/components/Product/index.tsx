import React from 'react';
import { IProduct } from '../../models/IProduct';
import { setOpenModal } from '../../redux/slices/modal';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Product: React.FC<IProduct> = ({ id, name, image, text, price }) => {
   const { isModal } = useAppSelector(state => state.modal);
   const dispatch = useAppDispatch();
   const onOpenModal = () => {
      dispatch(setOpenModal({ id, name, image, text, price, isModal: !isModal }))
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