import { FC } from 'react'
import { useAppSelector } from '../../hooks/hooks';


const BasketPriceList: FC = () => {
   const { orderTypeId, orderTypes } = useAppSelector(state => state.order);
   const { totalPrice, totalContainerPrice, totalProductPrice, dostavkaPrice } = useAppSelector(state => state.basket);
   const { addressName } = useAppSelector(state => state.order)
   const styleText = { justifyContent: 'center', width: '100%', fontWeight: 500, marginTop: '20px', marginBottom: 0 }
   return (
      <div className="basket_right__block">
         <div className="basket_right__buttons">
            <a className="basket_right__dostavka basket_right__button tabs-btn-two samovyvoz active">{orderTypes[orderTypeId]}<input type="radio" name="delivery" className="radio_delivery" id="samovyvoz" value="pickup" /></a>
         </div>
         <div className="basket__right__wrappers">
            <div className="dostavka_tab basket__right__columns basket__right__tab tabs__row-two active">
               <div className="basket__footer-container">
                  <div className="basket__all_prices">
                     <div className="basket-prices_dostavka">{addressName}</div>
                     <div className="basket-prices__block">
                        <p>Сумма:</p>
                        <div className="js-product-total-summa">{totalProductPrice} тг</div>
                     </div>{orderTypeId === 1 ?
                        <div className="basket-prices__block">
                           <p>Доставка:</p>
                           <div className="price_dostavka_list">{dostavkaPrice} тг</div>
                        </div> : ''}
                     <div className="basket-prices__block">
                        <p>Контейнеры:</p>
                        <div className="js-cart-total-container">{totalContainerPrice} тг</div>
                     </div>
                     <div className="basket-prices__block">
                        <p>Итого:</p>
                        <div className="final__price busket__form-count total js-all-summa js-cart-total-summa total-summ">{totalPrice} тг</div>
                     </div>
                  </div>
                  {totalPrice > 3000 ? <button type="submit" className="form-button basket__btn basket__btn-all">Оформить</button> : <div className="basket-prices_dostavka" style={styleText}>Минимальная сумма заказа 3000 тг</div>}

               </div>
            </div>
         </div>
      </div>
   )
}

export default BasketPriceList;