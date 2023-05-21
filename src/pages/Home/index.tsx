import React from 'react';
import MenuBlock from '../../components/MenuBlock';
import Category from '../../components/Category';

const Home: React.FC = () => {
   return (
      <>
         <div className="main mg-top">
            <div className="main__container container">
               <div className="main_slider">
               </div>
            </div>
         </div>
         <div className="section">
            <div className="section__container container">
               <div className="section__wrapper">
                  <Category />
                  <MenuBlock />
               </div>
            </div>
         </div>
      </>
   )
}
export default Home;