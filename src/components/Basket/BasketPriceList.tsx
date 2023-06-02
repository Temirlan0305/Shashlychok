import { FC } from 'react'
import { useAppSelector } from '../../hooks/hooks';

const BasketPriceList: FC = () => {
   const { totalPrice, totalContainerPrice, totalProductPrice } = useAppSelector(state => state.basket)
   return (
      <div className="basket_right__block">
         <div className="basket_right__buttons">
            <a className="basket_right__dostavka basket_right__button tabs-btn-two samovyvoz active">Самовывоз<input type="radio" name="delivery" className="radio_delivery" id="samovyvoz" value="pickup" /></a>
         </div>
         <div className="basket__right__wrappers">
            <div className="dostavka_tab basket__right__columns basket__right__tab tabs__row-two active">
               <div className="basket__footer-container">
                  <div className="basket__all_prices">
                     <div className="basket-prices_dostavka"></div>
                     <div className="basket-prices__block">
                        <p>Сумма:</p>
                        <div className="js-product-total-summa">{totalProductPrice} тг</div>
                     </div>
                     <div className="basket-prices__block">
                        <p>Доставка:</p>
                        <div className="price_dostavka_list">0 тг</div>
                     </div>
                     <div className="basket-prices__block">
                        <p>Контейнеры:</p>
                        <div className="js-cart-total-container">{totalContainerPrice} тг</div>
                     </div>
                     <div className="basket-prices__block">
                        <p>Итого:</p>
                        <div className="final__price busket__form-count total js-all-summa js-cart-total-summa total-summ">{totalPrice} тг</div>
                     </div>
                  </div>
                  <button type="submit" className="form-button basket__btn basket__btn-all">Оформить</button>
               </div>
            </div>
            {/* <div className="samovyvoz_tab basket__right__columns basket__right__tab tabs__row-two active" id="tab_2">
               <div className="basket__footer-container">
                  <div className="basket__all_prices">
                     <div className="basket-block__address">
                        <div className="basket-address__name">
                           Адрес филиала
                        </div>
                        <div className="basket-address__wrap">
                        </div>
                     </div>
                     <div className="basket-prices__block">
                        <p>Сумма:</p>
                        <div className="js-product-total-summa" data-prod="99750">99 750 тг</div>
                     </div>
                     <div className="basket-prices__block">
                        <p>Контейнеры:</p>
                        <div className="js-cart-total-container" data-container="0">0 тг</div>
                     </div>
                     <div className="basket-prices__block">
                        <p>Итого:</p>
                        <div className="final__price busket__form-count total js-all-summa js-cart-total-summa total-summ" data-summ="99750">99 750 тг</div>
                     </div>
                  </div>
                  <button type="submit" className="form-button basket__btn basket__btn-all">Оформить</button>
               </div>
            </div> */}
         </div>
      </div>
   )
}

export default BasketPriceList;