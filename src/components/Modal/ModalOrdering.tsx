import { FC } from 'react';
import Modal from './index'

type ModalOrder = {
   isModal: boolean,
   setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalOrdering: FC<ModalOrder> = ({ isModal, setIsSuccess }) => {
   const onClosePopup = () => {
      setIsSuccess(false)
   }
   return (
      <Modal isModal={isModal}>
         <div className="alert--title box-size">
            <div className="mess">Ваша заявка принята</div>
            <p>В скором времени наш менеджер свяжется с Вами</p>
            <button onClick={onClosePopup} className="basket_popup_close">Ок</button>
         </div>
      </Modal>
   )
}

export default ModalOrdering;