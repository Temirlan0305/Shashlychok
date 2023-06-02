import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import BasketProduct from '../../components/Basket/BasketProduct';
import NotFoundBasket from '../../components/Basket/NotFoundBasket';
import BasketTotal from '../../components/Basket/BasketPriceList';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IFormInputs } from '../../models/IFormInputs';
import InputMask from 'react-input-mask';


const Basket: FC = () => {
   const { items, totalCount } = useAppSelector(state => state.basket);
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

   const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      alert(JSON.stringify(data))
   }

   if (items.length < 1) {
      return (
         <NotFoundBasket />
      )
   }
   return (
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
                     <div className="basket-onlain__title">
                        Способ оплаты Kaspi
                     </div>
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
                        <div className="basket-form__block">
                           <label>Телефон <span>*</span></label>
                           <input {...register("tel", { required: true, minLength: 3 })} id="phone" name="phone" className="registration__input" placeholder="+7-999-999-99=99" />
                           <InputMask {...register('tel')} mask="+7 (999) 999-99-99" maskChar={null}>
                              <input type="tel" {...register('tel')} />
                           </InputMask>
                           {/* <Controller
                              control={control}
                              name="tel"
                              defaultValue=""
                              render={({ field }) => (
                                 <InputMask {...field} mask="+7 (999) 999-99-99" maskChar={null}>
                                    {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
                                       <input {...inputProps} type="tel" />
                                    )}
                                 </InputMask>
                              )}
                           /> */}
                        </div>
                        <div className="basket-form__block basket-right__comment">
                           <label>Комментарий к заказу</label>
                           <textarea {...register("comments", { required: false })} id="comment" className="basket-product__textarea" placeholder="Я хочу ..."></textarea>
                        </div>
                        <div className="basket-form__block promo-block">
                           <label >Введите промокод</label>
                           <input {...register("promo", { required: false })} type="promo" name="promo" className="registration__input" id="inputPromocod" placeholder="Введите промокод" />
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
                  <BasketTotal />
               </div>
            </div>
         </div>
      </form>
   )
}

export default Basket;
