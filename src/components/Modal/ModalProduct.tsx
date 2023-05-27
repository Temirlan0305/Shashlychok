import React, { Children } from 'react'
import Modal from '.';
import { useAppSelector } from '../../hooks/hooks';

const ModalProduct: React.FC = () => {
   const { id, name, image, text, price } = useAppSelector(state => state.modal)
   return (
      <Modal>
         <div className="product-fancy js-product">
            <div className="product-fancy__image">
               <img src={image} alt="" />
            </div>
            <div className="product-fancy__right">
               <div className="product-fancy__top">
                  <div className="product-fancy__title">{name}</div>
                  <div className="product-fancy__text">
                     <p>{text}</p>
                  </div>

                  <div className="product-fancy__recomandation product-recomandation">
                     <div className="product-recomandation__title">
                        Рекомендации
                     </div>
                     {/* swiper */}
                  </div>
               </div>
               <div className="product-fancy__block">
                  <div className="product-fancy__price">
                     {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸
                  </div>
                  <a className="product-fancy__button basket__btn buy__product buy-product js-buy">
                     Добавить в корзину
                  </a>
               </div>
            </div>
         </div>
      </Modal>
   )
}

export default ModalProduct;
