export type IProductBasket = {
   id: number,
   name: string,
   image: string,
   text: string,
   price: number,
   price_container: number,
   count: number,
}
export interface IBasketState {
   items: IProductBasket[],
   totalCount: number,
   totalPrice: number,
   totalContainerPrice: number,
   totalProductPrice: number,
   dostavkaPrice: number,
   promo: number,
}