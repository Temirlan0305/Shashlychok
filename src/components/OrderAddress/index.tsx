import React from 'react'

const OrderAddress = () => {
   return (
      <div className="popup_address__column">
         <a href="/?branche_id=1" className="popup_address__item">
            <div className="popup_address__icon">
               <svg width="20" height="20" fill="#CC2A10" className="isActiveBranchIcon">
                  <circle cx="10" cy="10" r="10" fill="#fff"></circle>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.25c3.74 0 6.75 3.01 6.75 6.75s-3.01 6.75-6.75 6.75S3.25 13.74 3.25 10 6.26 3.25 10 3.25zM18.25 10c0-4.57-3.68-8.25-8.25-8.25S1.75 5.43 1.75 10s3.68 8.25 8.25 8.25 8.25-3.68 8.25-8.25z">
                  </path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.881 8.076a.6.6 0 010 .848l-3.638 3.639a.6.6 0 01-.849 0l-1.818-1.82a.6.6 0 11.848-.848L8.82 11.29l3.214-3.214a.6.6 0 01.848 0z">
                  </path>
               </svg>
            </div>
            <div className="popup_address__subtitle">
               Туран Магнум                            </div>
            <div className="popup_address__text">
               Туран, 55/3 киоск                            </div>
            <div className="popup_address__time">
               11:00-01:00                            </div>
         </a>
      </div>
   )
}

export default OrderAddress;