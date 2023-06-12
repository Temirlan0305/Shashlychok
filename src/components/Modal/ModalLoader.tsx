import { FC } from 'react'


type ModalLoader = {
   loader: boolean
}
const ModalLoader: FC<ModalLoader> = ({ loader }) => {
   return (
      <div className={loader ? "popup form_loader active" : "popup form_loader"} id="form_loader">
         <div className="form_loader_block">
            <div className="form_loader_animate"></div>
            <div className="form_loader_text">Пожалуйста, подождите</div>
         </div>
      </div>
   )
}

export default ModalLoader;