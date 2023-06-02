import { FC, ReactNode } from 'react';
import './modal.scss'
import { setCloseModal } from '../../redux/slices/modalSlice';
import { useAppDispatch } from '../../hooks/hooks';

type ModalProps = {
   children: ReactNode,
   isModal: boolean,
}

const Modal: FC<ModalProps> = ({ isModal, children }) => {
   const dispatch = useAppDispatch();
   const onClickModal = () => {
      dispatch(setCloseModal())
      document.body.style.overflow = 'auto'
   }

   return (
      <div className={isModal ? 'modal active' : 'modal'} onClick={() => onClickModal()}>
         <div className={isModal ? 'modal-content active' : 'modal-content'} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default Modal;