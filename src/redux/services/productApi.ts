import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IProduct} from '../../models/IProduct'
import {ICategory} from '../../models/ICategory'
import {ISliders} from '../../models/ISliders'
import { IFilterApi } from '../../models/IFilterApi';
import { IAddress } from '../../models/IAddress';
import { IPromo } from '../../models/IPromo';
import { IOrderObj } from '../../models/IOrderObj';


export const productApi = createApi({
   reducerPath: 'productApi',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4200/'}),
   endpoints: (builder) => ({
      fetchAllCategory: builder.query<ICategory[], string>({
         query: () => ({
            url: '/category'
         })
      }),
      fetchAllProducts: builder.query<IProduct[], IFilterApi >({
         query: ({categoryId, searchParams}) => ({
            url: `/products?category=${categoryId}${searchParams}`,
         })
      }),
      fetchAllSliders: builder.query<ISliders[], string>({
         query: () => ({
            url: '/sliders'
         })
      }),
      fetchAllAddress: builder.query<IAddress[], string>({
         query: () => ({
            url: '/address'
         })
      }),
      fetchAllPromo: builder.query<IPromo[], string>({
         query: (promo) => ({
            url: `/promo?name=${promo}`,
         })
      }),
      orderingProduct: builder.mutation<IOrderObj, IOrderObj>({
         query: (post) => ({
            url: '/order',
            method: 'POST',
            body: post         
         })
      })
   }),
})
