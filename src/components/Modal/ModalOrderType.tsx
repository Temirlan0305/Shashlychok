import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Modal from './index';
import { setOrderTypeId } from '../../redux/slices/orderSlice';
import { setCloseOrderModal, setOpenTypeModal } from '../../redux/slices/modalSlice';
import { setDostavkaPrice } from '../../redux/slices/basketSlice';

const ModalOrderType: FC = () => {
   const { orderTypes } = useAppSelector(state => state.order);
   const { orderModal } = useAppSelector(state => state.modal);
   const dispatch = useAppDispatch();
   const onСhooseOrderType = (id: number) => {
      dispatch(setOrderTypeId(id));
      document.body.style.overflow = 'hidden'
      dispatch(setCloseOrderModal());
      dispatch(setOpenTypeModal(id))
      dispatch(setDostavkaPrice())
   }

   return (
      <Modal isModal={orderModal}>
         <div className="popup_status__container popup-zindex">
            <div className="popup_status__title">Выберите тип заказа</div>
            <div className="popup_status__block">
               {orderTypes.map((item, id) => (
                  <button className="popup_status__button" key={id} onClick={() => onСhooseOrderType(id)}>
                     {item}
                  </button>
               ))}
            </div>
         </div>
      </Modal>
   )
}

export default ModalOrderType;