import React from 'react'
import { useSelector } from 'react-redux'

export default function NavBar() {
  const {amount} = useSelector(state => state.cart)
  console.log(amount)
  return (
    <div>
      <h1>NavBar</h1>
      <h2>Amount : {amount}</h2>


    </div>
  )
}
