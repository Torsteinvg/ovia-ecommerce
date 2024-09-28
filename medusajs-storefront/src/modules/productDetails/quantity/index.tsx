"use client"
import { useState } from 'react';

const AddToCartForm = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e:any) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add to cart logic here
    console.log("Added to cart:", quantity);
  };

  return (
    <form className="cart" action="https://ovia.no/nettbutikk/activated-charcoal-hand-og-kroppssape/" method="post" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border">
          <button
            type="button"
            className="px-3 py-1 text-gray-600"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
          </button>
          <input
            type="text"
            className="w-12 text-center border-none outline-none"
            name="quantity"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
          <button
            type="button"
            className="px-3 py-1 h-14 text-gray-600"
            onClick={() => setQuantity(quantity + 1)}
          >
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
        <button type="submit" className="px-12 py-4 text-white bg-[#222] hover:bg-[#464E3F] ml-1.5">
          Add to Cart
        </button>
      </div>
    </form>
  );
};

export default AddToCartForm;
