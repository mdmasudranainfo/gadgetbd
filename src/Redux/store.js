import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './features/cart/cartSlice'
import { api } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    [api.reducerPath]: api.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})
