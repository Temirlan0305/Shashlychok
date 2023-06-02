import { FC } from 'react';


const NotFoundBasket: FC = () => {
   return (
      <section className="empty mg-top active">
         <div className="container">
            <div className="empty__container content">
               <div className="empty__title title">В вашей корзине пусто!</div>
               <div className="empty__text">
                  Исправить это недоразумение очень просто: выберите в меню интересующий продукт и нажмите кнопку «В
                  корзину».
               </div>
            </div>
         </div>
      </section>
   )
}
export default NotFoundBasket;