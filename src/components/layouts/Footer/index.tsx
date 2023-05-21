import React from 'react';
import logo from '../../../assets/img/logo.svg'


const Footer: React.FC = () => {
   return (
      <footer className="footer">
         <div className="footer__container container">
            <div className="footer__block">
               <a href="/" className="footer__image">
                  <img src={logo} alt="" />
               </a>
               <div className="footer__address footer-pd">
                  <div className="footer__title">Доставка</div>
                  <div className="footer__text">Круглосуточно</div>
               </div>
               <div className="footer__social footer-pd">
                  <div className="footer__title">Мы в соц. сетях</div>
                  <ul className="footer__list">
                     <li><a href="https://www.instagram.com/" className="footer__instagram footer-icon">@shashlychok01</a></li>
                     <li><a href="" className="footer__facebook footer-icon">Шашлычок Астана</a></li>
                     <li><a href="https://api.whatsapp.com/send?phone=+77477829898" className="footer__whatsapp footer-icon">+7 (708) 510 42 42</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;