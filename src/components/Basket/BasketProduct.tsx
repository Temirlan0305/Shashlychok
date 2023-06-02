import { FC, MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { IProductBasket } from '../../models/IBasketState';
import { setDeleteProduct, setMinusProduct, setPlusProduct } from '../../redux/slices/basketSlice';


const BasketProduct: FC<IProductBasket> = ({ id, name, image, count, price, price_container }) => {
   const dispatch = useAppDispatch();
   const onMinusCount = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(setMinusProduct(id));
   }

   const onPlusCount = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(setPlusProduct(id));
   }
   const onDeleteProduct = () => {
      dispatch(setDeleteProduct(id));
   }

   return (
      <div data-id={id} className="basket__good">
         <a href="" className="basket__img"><img src={image} alt="" /></a>
         <a href="" className="basket__good-title">{name}</a>
         <div className="basket-counter__block">
            <div className="shoppingcard__item-amount">
               <button className="minus js-minus" onClick={(event) => onMinusCount(event)}>-</button>
               <p className="quantity shoppingcard__nums js-cart-item-quantity">{count}</p>
               <button className="plus js-plus" onClick={(event) => onPlusCount(event)}>+</button>
            </div>
         </div>

         <p className="js-cart-total-summa" data-summ="99750">{price} тг</p>
         <span className="js-cart-item-totalprice">{price * count} тг</span>
         <span className="js-cart-item-container">{price_container}</span>

         <div onClick={() => onDeleteProduct()} className="busket__card-remove shoppingcard__item-delete busket__card-remove remove">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10.4188 1.50909H14.597V2.21214H16.1059V1.41068C16.1061 0.632858 15.4736 0 14.6962 0H10.3196C9.54214 0 8.90967 0.632858 8.90967 1.41068V2.21214H10.4188V1.50909Z" fill="#888888"></path>
               <path d="M19.5904 8.19092H5.42488C5.03674 8.19092 4.73118 8.52203 4.76246 8.90903L5.94673 23.5529C6.01273 24.3704 6.6946 25 7.51381 25H17.5013C18.3205 25 19.0023 24.3704 19.0683 23.5527L20.2526 8.90903C20.2841 8.52203 19.9785 8.19092 19.5904 8.19092ZM8.85486 23.4381C8.83903 23.439 8.8232 23.4396 8.80756 23.4396C8.41198 23.4396 8.07991 23.1316 8.0553 22.7314L7.31316 10.7096C7.2876 10.2936 7.60403 9.93557 8.01983 9.91001C8.43429 9.88483 8.79383 10.2005 8.81939 10.6167L9.56135 22.6385C9.5871 23.0545 9.27067 23.4123 8.85486 23.4381ZM13.2706 22.6851C13.2706 23.1016 12.9328 23.4394 12.516 23.4394C12.0993 23.4394 11.7615 23.1016 11.7615 22.6851V10.663C11.7615 10.2463 12.0993 9.90849 12.516 9.90849C12.9326 9.90849 13.2706 10.2463 13.2706 10.663V22.6851ZM17.7021 10.7075L16.9935 22.7293C16.9701 23.1302 16.6374 23.4394 16.2411 23.4394C16.2262 23.4394 16.2111 23.439 16.1961 23.4383C15.7801 23.4137 15.4627 23.0566 15.4873 22.6406L16.1957 10.6186C16.2201 10.2026 16.576 9.88522 16.9931 9.90982C17.4091 9.93423 17.7265 10.2915 17.7021 10.7075Z" fill="#888888"></path>
               <path d="M22.1996 5.86244L21.7041 4.377C21.5734 3.98542 21.2068 3.72125 20.7939 3.72125H4.22113C3.80838 3.72125 3.44159 3.98542 3.31113 4.377L2.8156 5.86244C2.72004 6.14893 2.8444 6.44113 3.07653 6.58685C3.17113 6.64617 3.28309 6.68184 3.40612 6.68184H21.6091C21.7321 6.68184 21.8443 6.64617 21.9387 6.58666C22.1708 6.44094 22.2952 6.14874 22.1996 5.86244Z" fill="#888888"></path>
            </svg>
         </div>
      </div>
   )
}

export default BasketProduct;