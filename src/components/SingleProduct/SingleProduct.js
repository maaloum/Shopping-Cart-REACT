import React from 'react'

export default function SingleProduct({prod}) {
  return (
    <div>
      {prod.name}
      {prod.price}$
      <image src={prod.image} alt= "product-image"/>
    </div>

  )
}
