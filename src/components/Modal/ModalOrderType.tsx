import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Modal from './index';
import { setOrderTypeId } from '../../redux/slices/orderSlice';
import { setOpenOrderModal, setCloseOrderModal } from '../../redux/slices/modalSlice';


const ModalOrderType: FC = () => {
   const { orderTypes } = useAppSelector(state => state.order);
   const { orderModal } = useAppSelector(state => state.modal);
   const dispatch = useAppDispatch();
   const onСhooseOrderType = (id: number) => {
      dispatch(setOrderTypeId(id));
      dispatch(setCloseOrderModal());
   }
   useEffect(() => {
      dispatch(setOpenOrderModal(!orderModal))
   }, [])

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