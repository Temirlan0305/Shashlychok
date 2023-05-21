import React from 'react';
import logo from '../../../assets/img/logo.svg'
import insta from '../../../assets/img/insta.svg'
import facebook from '../../../assets/img/facebook.svg'
import whatsapp from '../../../assets/img/whatsapp.svg'

const Header: React.FC = () => {
   return (
      <header className="header">
         <div className="header__container container">
            <div className="header__block">
               <a href="/" className="header__logo">
                  <img src={logo} />
               </a>
               <div className="header-right__block">
                  <div className="header-block__body">
                     <nav className="header__nav">
                        <ul className="header__list">
                           <li><a href="/" className="header__link">Меню</a></li>
                           <li><a href="/contacts" className="header__link">Контакты</a></li>
                           <li><a href="http://shashlychokteam.tilda.ws/" target="_blank" className="header__link">О
                              нас</a></li>
                        </ul>
                     </nav>
                     <div className="header__left">
                        <div className="header__address" data-fancybox="" data-src="#popup_address">
                           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                              <path d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
                              </path>
                           </svg>
                           <span>Косшы Магнум</span>
                        </div>
                        <a href="/baskets" className="basket-view count__busket">
                           <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.2029 12.2222V4.81482C10.2029 2.96297 11.9302 1.11111 15.0009 1.11111C17.8797 1.11111 19.7988 2.5926 19.7988 4.81482V12.2222M25.5564 9.90741V27.5C25.5564 28.2671 24.9346 28.8889 24.1675 28.8889H5.8342C5.06714 28.8889 4.44531 28.2671 4.44531 27.5V9.90741C4.44531 9.14035 5.06714 8.51852 5.8342 8.51852H24.1675C24.9346 8.51852 25.5564 9.14035 25.5564 9.90741Z" stroke="#1B1918" strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round"></path>
                           </svg>
                           <p> Корзина</p>
                        </a>
                        <div className="header__social">
                           <ul className="header_social__list">
                              <li><a target="_blank" href="https://www.instagram.com/" className="header__insta header__icon"><img src={insta} alt="" /></a>
                              </li>
                              <li><a target="_blank" href="" className="header__facebook  header__icon"><img src={facebook} alt="" /></a></li>
                              <li><a target="_blank" href="https://api.whatsapp.com/send?phone=77477829898" className="header__whatsapp  header__icon"><img src={whatsapp} alt="" /></a></li>
                           </ul>
                        </div>
                        {/* <div className="header__phone">
                           <a href="tel:77085104242" className="header_phone__link">
                              +7 (708) 510 42 42                            </a>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div className="menu__burger menu-burger">
                  <div className="menu-burger__block">
                     <span></span>
                     <span></span>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;