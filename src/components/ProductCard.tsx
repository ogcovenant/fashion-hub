import React from 'react'

const ProductCard = () => {
  return (
    <div className='border-[1px] border-[#F4E8F3] bg-[#F4E8F3] rounded-lg px-3'>
      <div className='p-3'>
        <img src="/images/shoes.png" alt="Picture of shoes" />
      </div>
      <div className='p-3 text-main font-medium text-lg'>
        <p>Running Shoes</p>
        <p>$500</p>
      </div>
    </div>
  )
}

export default ProductCard