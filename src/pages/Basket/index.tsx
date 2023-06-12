import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import BasketProduct from '../../components/Basket/BasketProduct';
import NotFoundBasket from '../../components/Basket/NotFoundBasket';
import BasketPriceList from '../../components/Basket/BasketPriceList';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IFormInputs } from '../../models/IFormInputs';
import InputMask from "react-input-mask";
import debounce from 'lodash.debounce';
import { productApi } from '../../redux/services/productApi';
import { setPromoPrice } from '../../redux/slices/basketSlice'
import { IOrderObj } from '../../models/IOrderObj';
import { setClearItems } from '../../redux/slices/basketSlice';
import ModalLoader from '../../components/Modal/ModalLoader';
import ModalOrdering from '../../components/Modal/ModalOrdering';



const Basket: FC = () => {
   const { items, totalCount, promo, totalPrice, totalContainerPrice, totalProductPrice } = useAppSelector(state => state.basket);
   const { orderTypeId, orderTypes } = useAppSelector(state => state.order);
   const dispatch = useAppDispatch()
   const promoRef = useRef<HTMLInputElement>(null);
   const [promoValue, setPromoValue] = useState('')
   const [promoCopyValue, setPromoCopyValue] = useState('')
   const { data } = productApi.useFetchAllPromoQuery(promoValue);
   const [orderingProduct, { isLoading, error }] = productApi.useOrderingProductMutation();
   const [isLoader, setIsLoader] = useState(false);
   const [isSuccess, setIsSuccess] = useState<boolean>(false);
   const isLoaderRef = useRef(false)
   const {
      register,
      formState: {
         errors
      },
      handleSubmit,
      control
   } = useForm<IFormInputs>({
      mode: "onBlur"
   })

   useEffect(() => {
      if (isLoaderRef) {
         if (isLoading) {
            setIsLoader(true)
         }
      }
      isLoaderRef.current = true;
   }, [isLoading])

   const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
      const orderObj: IOrderObj = {
         orderType: orderTypes[orderTypeId],
         totalCount,
         totalPrice,
         totalProductPrice,
         totalContainerPrice,
         items,
         promoDiscount: `${promo}%`,
         ...data,
      }
      if (orderObj) {
         await orderingProduct(orderObj);
         if (!error) {
            setIsSuccess(true)
         }
         dispatch(setClearItems())
      }
   }

   const onPromoDebounce = useCallback(
      debounce((str: string) => {
         setPromoValue(str)
      }, 350), [])

   useEffect(() => {
      if (data) {
         if (data.length > 0) {
            dispatch(setPromoPrice(data[0].discount))
         } else {
            dispatch(setPromoPrice(0))
         }
      }
   }, [data]);

   const onPromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPromoCopyValue(event.target.value)
      onPromoDebounce(event.target.value)
   }
   console.log(isLoading)
   if (items.length < 1) {
      return (<>
         <NotFoundBasket />
         <ModalOrdering isModal={isSuccess} setIsSuccess={setIsSuccess} />
      </>
      )
   }
   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} className="basket__form busket shoppingcard mg-top">
            <div className="container">
               <div className="basket-form__wrapper">
                  <div className="basket__left">

                     <div className="basket__header">
                        <div className="title">Корзина</div>

                        <div className="basket__quantity">
                           <span className="js-cart-total-count-items">{totalCount}</span>товаров
                        </div>
                     </div>

                     <div className="js-cart">
                        {items.map((item) => (
                           <BasketProduct {...item} key={item.id} />
                        ))}
                     </div>
                     <div className="basket-onlain__block">
                        <div className="basket-onlain__block basket-checked__onlain">
                           {/* <div className="custom_radio">
                           <input type="radio" id="test1" name="radio-group" className="only" checked>
                              <label for="test1">Online оплата Visa/Mastercard</label>
                        </div>
                        <div className="custom_radio">
                           <input type="radio" id="test2" name="radio-group" className="nal" checked>
                              <label for="test2">Оплата наличными</label>
                        </div> */}
                        </div>
                     </div>
                     <div className="basket-contact__block">
                        <div className="basket-contact__title">Контактная информация</div>
                        <div className="basket-contact__wrapper">
                           <div className="basket-form__block">
                              <label>Имя <span>*</span></label>
                              <input {...register("name", { required: 'Пустая поля', minLength: { value: 3, message: 'Некорректно написали имя' } })} id="name_regist" className="registration__input" placeholder="Введите ваше имя" />
                              {errors?.name && <div className="promocode_required">{errors?.name?.message || 'Ошибка!'}</div>}
                           </div>
                           {orderTypes[orderTypeId] === 'Доставка' ? <div className="basket-form__block">
                              <label>Адрес доставки <span>*</span></label>
                              <input {...register("address", { required: 'Пустая поля', minLength: { value: 3, message: 'Некорректно написали имя' } })} id="name_regist" className="registration__input" placeholder="Введите ваш адрес" />
                              {errors?.name && <div className="promocode_required">{errors?.name?.message || 'Ошибка!'}</div>}
                           </div> : ''}
                           <div className="basket-form__block">
                              <label>Телефон <span>*</span></label>
                              <Controller
                                 control={control}
                                 name="tel"
                                 rules={{ required: 'Введите номер' }}
                                 render={({ field }) => (
                                    <InputMask
                                       {...field}
                                       mask="+9999-999-99-99"
                                       id="phone"
                                       className="registration__input"
                                       placeholder="Номер телевона"
                                       required
                                    />
                                 )}
                              />
                              {errors?.tel && <div className="promocode_required">{'Error'}</div>}
                           </div>
                           <div className="basket-form__block basket-right__comment">
                              <label>Комментарий к заказу</label>
                              <textarea {...register("comments", { required: false })} id="comment" className="basket-product__textarea" placeholder="Я хочу ..."></textarea>
                           </div>
                           <div className="basket-form__block promo-block">
                              <label >Введите промокод</label>
                              <input {...register("promo", { required: false })} ref={promoRef} type="promo" value={promoCopyValue} name="promo" className="registration__input" id="inputPromocod" placeholder="Введите промокод" onChange={(e) => onPromoChange(e)} />
                              <div className="promocode_required"></div>
                           </div>
                        </div>
                     </div>
                     <div className="basket_wrapper__text">
                        <ul className="basket__delete__list">
                           <li>* Минимальная сумма заказа 3000 тг</li>
                           <li>* Доставка бесплатная от 10000 тг</li>
                           <li>* Сумма доставки может варьироваться между 1000 и 1500 тг</li>
                           <li>* За одноразовую посуду взимается дополнительная оплата</li>
                        </ul>
                     </div>
                  </div>
                  <div className="basket__right basket_right">
                     <BasketPriceList />
                  </div>
               </div>
            </div>
         </form>
         <ModalLoader loader={isLoader} />
      </>
   )
}

export default Basket;
