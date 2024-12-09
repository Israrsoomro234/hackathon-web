import React from 'react'
import { GiPriceTag } from 'react-icons/gi'

const NewArrivals = () => {
  return (
    <div>
      {/* New Arrivals */}
      <section className="products">
        <h2>NEW ARRIVALS</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/image 7.png" alt="T-Shirt" />
            <img src='/Frame 35.png' alt='star' />
            <p className="product-name">T-shirt with Tape Details</p>
            <p className="product-price">$120</p>
          </div>
          <div className="product">
            <img src="/image 8.png" alt="Jeans" />
            <img src='/Frame 39.png' alt='star' />
            <p className="product-name">Skinny Fit Jeans</p>
            <p className="flex product-price text-center justify-center mx-5">$240 <svg
      width={58}
      height={28}
      viewBox="0 0 58 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
      
    >
      <rect width={58} height={28} rx={14} fill="#F33" fillOpacity={0.1} />
      <path
        d="M14.256 16.324v-1.008h3.66v1.008h-3.66zm10.117 2.664L18.517 19v-.9l2.796-2.412c1.404-1.212 1.8-1.8 1.8-2.724 0-1.092-.624-1.74-1.668-1.74-1.068 0-1.764.78-1.788 2.016H18.48c.036-1.86 1.212-3.072 2.976-3.072 1.74 0 2.856 1.056 2.856 2.724 0 1.236-.612 2.112-2.148 3.444l-1.8 1.56h4.008v1.092zm1.082-4.32c0-2.688 1.392-4.512 3.576-4.512 2.172 0 3.564 1.824 3.564 4.512 0 2.7-1.332 4.488-3.564 4.488-2.244 0-3.576-1.788-3.576-4.488zm1.164 0c0 2.136.888 3.432 2.412 3.432s2.4-1.296 2.4-3.432c0-2.16-.876-3.456-2.4-3.456s-2.412 1.296-2.412 3.456zm11.453-2.292c0 1.284-.913 2.208-2.197 2.208-1.272 0-2.184-.924-2.184-2.208 0-1.296.912-2.22 2.184-2.22 1.285 0 2.197.924 2.197 2.22zm4.572-2.04L36.056 19h-1.152l6.587-8.664h1.153zm-5.496 2.04c0-.78-.517-1.32-1.273-1.32-.743 0-1.26.54-1.26 1.32 0 .768.517 1.308 1.26 1.308.745 0 1.273-.54 1.273-1.308zm6.731 4.572c0 1.284-.923 2.208-2.195 2.208-1.273 0-2.197-.924-2.197-2.208 0-1.296.924-2.208 2.197-2.208 1.272 0 2.196.912 2.196 2.208zm-.935 0c0-.78-.505-1.32-1.26-1.32-.744 0-1.26.54-1.26 1.32 0 .768.516 1.308 1.26 1.308s1.26-.54 1.26-1.308z"
        fill="#F33"
      />
    </svg></p>

          </div>
          <div className="product">
            <img src="/image 9.png" alt="Checkered Shirt" />
            <img src='/Frame 40.png' alt='Star' />
            <p className="product-name">Checkered Shirt</p>
            <p className="product-price">$140</p>
          </div>
          <div className="product">
            <img src="image 10.png" alt="Stripe" />
            <img src='/Frame 41.png' alt='Star' />
            <p className="product-name">Sleeve Stripe T-shirt</p>
            <p className="product-price">$130 <del className='text-[#00000066]'>$160</del></p>
          </div>
          {/* Add more products */}
        </div>
      </section>
    </div>
  )
};

export default NewArrivals
