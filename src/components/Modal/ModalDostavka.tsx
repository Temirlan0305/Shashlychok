
import { FC, useRef } from 'react';
import Modal from '.';
import { useAppSelector } from '../../hooks/hooks';
import { productApi } from '../../redux/services/productApi';
import OrderAddress from '../OrderAddress';

const ModalDostavka: FC = () => {
   const { data, error, isLoading } = productApi.useFetchAllAddressQuery('');
   const { dostavkaModal } = useAppSelector(state => state.modal);
   return (
      <Modal isModal={dostavkaModal}>
         <div className="popup_address__container popup-zindex">
            <div className="popup_address__title">Доставка</div>
            <div id="basket-form_address" className="basket-form__block promo-block popup_dostavka-block">
            </div>
            <div className="basket-form__block promo-block popup_dostavka-block">
               <input type="address" name="address" className="registration__input" id="infoInput" placeholder="подъезд, номер кв" />
            </div>
            <div className="popup_address__title">
               Выберите филиал для доставки
            </div>
            <div className="popup_address__block">
               {data && data.map((obj) => <OrderAddress {...obj} key={obj.id} />)}
            </div>
            <div className="address-button_block">
               <button className="address-button_desk">Маршрут доставки</button>
            </div>
            <div className="popup-dostavka_map">

            </div>
            <div className="price_dostavka_block">
               <div className="price_check_icon"><svg xmlns="http://www.w3.org/2000/svg" fill="#04ad33" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div>
               <div className="price_dostavka_item"><span>Стоимость доставки</span><span id="price_dostavka"></span></div>
               <div className="price_dostavka_item">Бесплатная доставка от 10 000 ₸</div>
            </div>
            <div className="address-button_block">
               <button className="uiHolder-saveAddress mainBtn">Сохранить</button>
            </div>
         </div>
      </Modal >
   )
}

export default ModalDostavka