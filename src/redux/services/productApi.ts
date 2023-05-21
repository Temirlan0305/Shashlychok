import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IProduct} from '../../models/IProduct'
import {ICategory} from '../../models/ICategory'


export const productApi = createApi({
   reducerPath: 'productApi',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4200/'}),
   endpoints: (builder) => ({
      fetchAllCategory: builder.query<ICategory[], string>({
         query: (category) => ({
            url: '/category'
         })
      }),
      fetchAllProducts: builder.query<IProduct[], number>({
         query: (categoryId) => ({
            url: `/products?category=${categoryId}`
         })
      }),
   }),
})
