import { FC } from 'react'
import Modal from '.';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setAddProduct, setMinusProduct, setPlusProduct } from '../../redux/slices/basketSlice';
import { IProductBasket } from '../../models/IBasketState';

const ModalProduct: FC = () => {
   const { id, name, image, text, price, price_container } = useAppSelector(state => state.product)
   const { items } = useAppSelector(state => state.basket);
   const { productModal } = useAppSelector(state => state.modal)
   const isProduct = items.find((obj) => obj.id === id)
   const dispatch = useAppDispatch();
   const onAddProduct = () => {
      const productObj: IProductBasket = {
         id,
         name,
         image,
         text,
         price,
         price_container,
         count: 1,
      }
      dispatch(setAddProduct(productObj))
   }
   const onPlusCount = () => {
      dispatch(setPlusProduct(id));
   }
   const onMinusCount = () => {
      dispatch(setMinusProduct(id));
   }
   return (
      <Modal isModal={productModal}>
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
                  {
                     !isProduct ? (
                        <button className="product-fancy__button basket__btn buy__product buy-product js-buy" onClick={() => onAddProduct()}>
                           Добавить в корзину
                        </button>
                     ) : <div className="shoppingcard__item-amount">
                        <button className="minus js-minus" onClick={() => onMinusCount()}>-</button>
                        <p className="quantity shoppingcard__nums js-cart-item-quantity">{isProduct.count}</p>
                        <button className="plus js-plus" onClick={() => onPlusCount()}>+</button>
                     </div>
                  }
               </div>
            </div>
         </div>
      </Modal>
   )
}

export default ModalProduct;
