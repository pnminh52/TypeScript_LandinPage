import React from 'react'
import ProductList from '~/components/ProductList'

type Props = {}

const Shop: React.FC = (props: Props) => {
  return (
    <div>
      <h2 className=''></h2>
      <ProductList category='nam' />
    </div>
  )
}

export default Shop
