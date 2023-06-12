import { FC, useEffect, useRef } from 'react';
import MenuBlock from '../../components/MenuBlock';
import Category from '../../components/Category';
import Sliders from '../../components/Sliders';
import ModalProduct from '../../components/Modal/ModalProduct';
import ModalOrderType from '../../components/Modal/ModalOrderType';
import ModalSamovyvoz from '../../components/Modal/ModalSamovyvoz';
import ModalDostavka from '../../components/Modal/ModalDostavka';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router';
import qs from 'qs';
import { setAddressId, setAddressName } from '../../redux/slices/orderSlice'
import { productApi } from '../../redux/services/productApi';
import { setOpenOrderModal } from '../../redux/slices/modalSlice';
import { useLocation } from 'react-router-dom';


const Home: FC = () => {
   const { addressId } = useAppSelector(state => state.order);
   const { orderModal } = useAppSelector(state => state.modal);
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const location = useLocation();
   const isEffect = useRef(false);
   const isEffectWindow = useRef(false);
   const isEffectLocation = useRef(false);
   const { data } = productApi.useFetchAllAddressQuery('')
   // const dataName = data?.find((obj) => obj.id == addressId); 
   useEffect(() => {
      if (isEffect.current) {
         navigate(`?addressId=${addressId}`)
      }
      isEffect.current = true
   }, [addressId])

   useEffect(() => {
      if (isEffectLocation && location.search == '') {
         dispatch(setOpenOrderModal(true))
      }
      isEffectLocation.current = true
   }, [location])

   function getAddressName(id: number) {
      const dataFilter = data && data.find(obj => obj.id === addressId);
      const dataName = dataFilter ? dataFilter?.name : '';
      dispatch(setAddressName(dataName));
   }

   getAddressName(1)

   useEffect(() => {
      if (window.location.search) {
         isEffectWindow.current = false
         const params = qs.parse(window.location.search.substring(1))
         const id = Number(params.addressId);
         // const dataFind = data && data.find(obj => obj.id === Number(id))
         // console.log(dataFind)
         // const name = dataFind?.name;
         // console.log(name)

         dispatch(setAddressId(id))
         getAddressName(id)
      } else {
         dispatch(setOpenOrderModal(!orderModal))
      }
   }, [])

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
         <ModalProduct />
         {isEffectWindow && <ModalOrderType />}
         <ModalSamovyvoz />
         <ModalDostavka />
      </>
   )
}
export default Home;