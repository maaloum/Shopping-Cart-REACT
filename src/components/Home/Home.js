import React from 'react'
import { CarteState } from '../../Contex/Contex';
import SingleProduct from '../SingleProduct/SingleProduct'

export default function Home() {

  const {state : {products},} = CarteState()
  console.log(products)
  return (
    <div className='home'>
      {/* <Filters /> */}
      <div className='productContainer'>

          {products.map((prod) => {
              return<SingleProduct prod = {prod} key={prod.id} />
          })}
      </div>
    </div>
  )
}
