import React from "react"
import { ProductDetailsSlider } from "./productSlider"
import AddToCartForm from "./quantity"
import { CardSlider } from "./cardSlider"
import { TabsComponent } from "./tabs"
import FAQ from "./faq"

export const ProductDeatailsComponents = () => {
  return (
    <div className="content-container">
      <div className="flex flex-col lg:flex-row gap-10 pt-20">
        <div className="w-full lg:w-1/2">
          <ProductDetailsSlider />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="">
            <h5 className="text-[#464E3F] text-base font-medium pb-2">
              Body soap
            </h5>
            <h4 className="text-[#222] text-[30px] leading-[36px] font-normal pb-4">
              Activated Charcoal Hand and body soap
            </h4>
            <h3 className="text-[#464E3F] text-4xl font-bold pb-6">
              NOK 260.00
            </h3>
            <p className="text-base text-[#464E3F] pb-9">
              Real soap from Oviá. A hand and body soap with long duration,
              natural ingredients and plastic-free packaging.
            </p>
            <div className="pb-4">
              <span className="text-sm font-semibold px-2.5 py-[5px] bg-[#E0D3C0] rounded-[20px]">
                {" "}
                3 for 2
              </span>
            </div>
            <AddToCartForm />
            <div className="text-[#858585] text-sm mt-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#858585"
                strokeWidth="2"
                width="1rem"
                height="1rem"
                className="love-icon"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>Add to wish list</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <FAQ />
      </div>
      <div className="py-40">
        <h2 className="text-[44px] pb-14 text-center">Related products</h2>
        <CardSlider />
      </div>
    </div>
  )
}
