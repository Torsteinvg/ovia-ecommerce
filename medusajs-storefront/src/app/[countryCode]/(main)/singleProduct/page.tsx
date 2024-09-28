import { SingleProduct } from '@modules/singleProduct'
import { Breadcrumb } from '@modules/singleProduct/breadcrumb'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='bg-[#F6F5E8]'>
        <div className="content-container hidden lg:block">
            <Breadcrumb label="Online Store" url='/store' title="Activated Charcoal Hand and body soap" />
        </div>
        <SingleProduct />
    </div>
  )
}

export default SingleProductPage