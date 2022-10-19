import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer} from './Reducers'
const cart = createContext()

export default function Contex({children}) {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
  }))
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    carts : []
  })
  return (
    <cart.Provider value={{state, dispatch}}>
      {children}

    </cart.Provider>
  )
}


export const CarteState = () => {
  return useContext(cart)
}
