import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totall: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.products.find(
        product => product.id === action.payload.id
      )
      if (existing) {
        existing.quantity = existing.quantity + 1
      } else {
        state.products.push({ ...action.payload, quantity: 1 })
      }
      state.totall = state.totall + action.payload.price
    },
    RemoveCart: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload.id
      )
      state.totall =
        state.totall - action.payload.price * action.payload.quantity
      // state.totall = state.totall + action.payload.price
    },
    removeQuantity: (state, action) => {
      const existing = state.products.find(
        product => product.id === action.payload.id
      )
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1
        state.totall = state.totall - action.payload.price
      } else {
        // state.products = state.products.filter(
        //   product => product.id !== action.payload.id
        // )
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, RemoveCart, removeQuantity } = CartSlice.actions

export default CartSlice.reducer
