import React from 'react';
import MenuBlock from '../../components/MenuBlock';
import Category from '../../components/Category';
import Sliders from '../../components/Sliders';
import ModalProduct from '../../components/Modal/ModalProduct'

const Home: React.FC = () => {
   return (
      <>
         <div className="main mg-top">
            <div className="main__container container">
               <div className="main__slider">
                  <Sliders />
               </div>
            </div>
         </div>
         <div className="section">
            <div className="section__container container">
               <div className="section__wrapper">
                  <div className="section_product__buttons">
                     <Category />
                  </div>
                  <MenuBlock />
               </div>
            </div>
         </div>
         <ModalProduct/>
      </>
   )
}
export default Home;