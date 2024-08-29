import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='w-[75%] p-10 px-12 flex flex-wrap gap-8'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductList