import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Modal from './index';
import OrderAddress from '../OrderAddress/index';
import { productApi } from '../../redux/services/productApi';



const ModalOrderType: FC = () => {
   const { samovyvozModal } = useAppSelector(state => state.modal);
   const { data, error, isLoading } = productApi.useFetchAllAddressQuery('')

   return (
      <Modal isModal={samovyvozModal}>
         <div className="popup_address__container popup-zindex">
            <div className="popup_address__title">
               Выберите филиал
            </div>
            <div className="popup_address__block">
               {data && data.map((obj) => <OrderAddress {...obj} key={obj.id} />)}
            </div>
         </div>
      </Modal>
   )
}

export default ModalOrderType;