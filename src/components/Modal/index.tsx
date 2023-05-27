import React from 'react';
import './modal.scss'
import { setCloseModal } from '../../redux/slices/modal';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';


const Modal: React.FC<any> = ({ children }) => {
   const { isModal } = useAppSelector(state => state.modal);
   const dispatch = useAppDispatch();
   const onClickModal = () => {
      dispatch(setCloseModal(!isModal))
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