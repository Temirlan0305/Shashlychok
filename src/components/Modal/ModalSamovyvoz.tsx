import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Modal from './index';
import OrderAddress from '../OrderAddress/index'



const ModalOrderType: FC = () => {
   const { samovyvozModal } = useAppSelector(state => state.modal);
   const dispatch = useAppDispatch();

   return (
      <Modal isModal={samovyvozModal}>
         <div className="popup_address__container popup-zindex">
            <div className="popup_address__title">
               Выберите филиал
            </div>
            <div className="popup_address__block">
               <OrderAddress />
            </div>
         </div>
      </Modal>
   )
}

export default ModalOrderType;