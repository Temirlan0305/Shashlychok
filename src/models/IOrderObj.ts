import {IProductBasket} from './IBasketState'

export interface IOrderObj {
   name: string;
   comments: string;
   tel: string;
   promo: string;
   address: string;
   orderType: string;
   totalCount: number;
   totalPrice: number;
   totalProductPrice: number;
   totalContainerPrice: number;
   items: IProductBasket[];
   promoDiscount: string;
}