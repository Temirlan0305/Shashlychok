import React from 'react'

const Basket: React.FC = () => {
   return (
      <form action="" className="basket__form busket shoppingcard mg-top">
         <div className="container">
            <div className="basket-form__wrapper">
               <div className="basket__left">

                  <div className="basket__header">
                     <div className="title">Корзина</div>

                     <div className="basket__quantity">
                        <span className="js-cart-total-count-items">5</span>товаров
                     </div>
                  </div>

                  <div className="js-cart">
                     <div data-id="29" className="basket__good">
                        <a href="" className="basket__img"><img src="/img/products/58010a02c6a3a121f4cb68ff8f72cab3.jpeg" alt="" /></a>
                        <a href="" className="basket__good-title">Лучшие Друзья</a>
                        <div className="basket-counter__block">
                           <div className="shoppingcard__item-amount">
                              <button className="minus js-minus">-</button>
                              <p className="quantity shoppingcard__nums js-cart-item-quantity">5</p>
                              <button className="plus js-plus">+</button>
                           </div>
                        </div>

                        <p className="js-cart-total-summa" data-summ="99750">19 950 тг</p>
                        <span className="js-cart-item-totalprice">99750 тг</span>
                        <span className="js-cart-item-container">0</span>

                        <div className="busket__card-remove shoppingcard__item-delete busket__card-remove remove">
                           <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.4188 1.50909H14.597V2.21214H16.1059V1.41068C16.1061 0.632858 15.4736 0 14.6962 0H10.3196C9.54214 0 8.90967 0.632858 8.90967 1.41068V2.21214H10.4188V1.50909Z" fill="#888888"></path>
                              <path d="M19.5904 8.19092H5.42488C5.03674 8.19092 4.73118 8.52203 4.76246 8.90903L5.94673 23.5529C6.01273 24.3704 6.6946 25 7.51381 25H17.5013C18.3205 25 19.0023 24.3704 19.0683 23.5527L20.2526 8.90903C20.2841 8.52203 19.9785 8.19092 19.5904 8.19092ZM8.85486 23.4381C8.83903 23.439 8.8232 23.4396 8.80756 23.4396C8.41198 23.4396 8.07991 23.1316 8.0553 22.7314L7.31316 10.7096C7.2876 10.2936 7.60403 9.93557 8.01983 9.91001C8.43429 9.88483 8.79383 10.2005 8.81939 10.6167L9.56135 22.6385C9.5871 23.0545 9.27067 23.4123 8.85486 23.4381ZM13.2706 22.6851C13.2706 23.1016 12.9328 23.4394 12.516 23.4394C12.0993 23.4394 11.7615 23.1016 11.7615 22.6851V10.663C11.7615 10.2463 12.0993 9.90849 12.516 9.90849C12.9326 9.90849 13.2706 10.2463 13.2706 10.663V22.6851ZM17.7021 10.7075L16.9935 22.7293C16.9701 23.1302 16.6374 23.4394 16.2411 23.4394C16.2262 23.4394 16.2111 23.439 16.1961 23.4383C15.7801 23.4137 15.4627 23.0566 15.4873 22.6406L16.1957 10.6186C16.2201 10.2026 16.576 9.88522 16.9931 9.90982C17.4091 9.93423 17.7265 10.2915 17.7021 10.7075Z" fill="#888888"></path>
                              <path d="M22.1996 5.86244L21.7041 4.377C21.5734 3.98542 21.2068 3.72125 20.7939 3.72125H4.22113C3.80838 3.72125 3.44159 3.98542 3.31113 4.377L2.8156 5.86244C2.72004 6.14893 2.8444 6.44113 3.07653 6.58685C3.17113 6.64617 3.28309 6.68184 3.40612 6.68184H21.6091C21.7321 6.68184 21.8443 6.64617 21.9387 6.58666C22.1708 6.44094 22.2952 6.14874 22.1996 5.86244Z" fill="#888888"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
                  {/* <div className="basket-onlain__block">
                     <div className="basket-onlain__title">
                        Способ оплаты Kaspi
                     </div>
                     <div className="basket-onlain__block basket-checked__onlain">
                        <div className="custom_radio">
                           <input type="radio" id="test1" name="radio-group" className="only" checked>
                              <label for="test1">Online оплата Visa/Mastercard</label>
                        </div>
                        <div className="custom_radio">
                           <input type="radio" id="test2" name="radio-group" className="nal" checked>
                              <label for="test2">Оплата наличными</label>
                        </div>
                     </div>
                  </div>
                  <div className="basket-contact__block">
                     <div className="basket-contact__title">Контактная информация</div>
                     <div className="basket-contact__wrapper">
                        <div className="basket-form__block">
                           <label>Имя <span>*</span></label>
                           <input id="name_regist" type="text" name="name" className="registration__input" required="" placeholder="Введите ваше имя">
                        </div>
                        <div className="basket-form__block">
                           <label>Телефон <span>*</span></label>
                           <input id="phone" name="phone" type="text" className="registration__input" required="" placeholder="Ваш номер телефона">
                        </div>
                        <div className="basket-form__block basket-right__comment">
                           <label for="comment">Комментарий к заказу</label>
                           <textarea name="message" id="comment" className="basket-product__textarea" placeholder="Я хочу ..."></textarea>
                        </div>
                        <div className="basket-form__block">
                           <label for="email">Введите почту *</label>
                           <input type="email" name="email" className="registration__input" id="inputEmail"
                              placeholder="example@gmail.com" required="">
                        </div>
                        <div className="basket-form__block promo-block">
                           <label for="promo">Введите промокод *</label>
                           <input type="promo" name="promo" className="registration__input" id="inputPromocod" placeholder="Введите промокод">
                              <div className="promocode_required"></div>
                        </div>
                     </div>
                  </div> */}
                  <div className="basket_wrapper__text">
                     <ul className="basket__delete__list">
                        <li>* Минимальная сумма заказа 3000 тг</li>
                        <li>* Доставка бесплатная от 10000 тг</li>
                        <li>* Сумма доставки может варьироваться между 1000 и 1500 тг</li>
                        <li>* За одноразовую посуду взимается дополнительная оплата</li>
                     </ul>
                  </div>
               </div>
               {/* <div className="basket__right basket_right">
                  <div className="basket_right__block">
                     <div className="basket_right__buttons">
                        <a className="basket_right__dostavka basket_right__button tabs-btn-two dostavka" data-link="#tab_1" style="display: none;">Доставка<input type="radio" name="delivery" className="radio_delivery" id="dostavka" value="delivery"></a>
                        <a className="basket_right__dostavka basket_right__button tabs-btn-two samovyvoz active" data-link="#tab_2">Самовывоз<input type="radio" name="delivery" className="radio_delivery" id="samovyvoz" value="pickup"></a>
                     </div>
                     <div className="basket__right__wrappers">
                        <div className="dostavka_tab basket__right__columns basket__right__tab tabs__row-two" id="tab_1" style="display: none;">
                           <div className="basket__footer-container">
                              <div className="basket__all_prices">
                                 <div className="basket-prices_dostavka"></div>
                                 <div className="basket-prices__block">
                                    <p>Сумма:</p>
                                    <div className="js-product-total-summa" data-prod="99750">99 750 тг</div>
                                 </div>
                                 <div className="basket-prices__block">
                                    <p>Доставка:</p>
                                    <div className="price_dostavka_list">0 тг</div>
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
                        </div>
                        <div className="samovyvoz_tab basket__right__columns basket__right__tab tabs__row-two active" id="tab_2">
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
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </form>
   )
}

export default Basket;
