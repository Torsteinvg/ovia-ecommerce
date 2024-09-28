import { CheckmarkIcon, StarIcon } from "@lib/icons"
import { CardSlider } from "@modules/productDetails/cardSlider"
import FAQ from "@modules/productDetails/faq"
import { ProductDetailsSlider } from "@modules/productDetails/productSlider"
import AddToCartForm from "@modules/productDetails/quantity"
import React from "react"
import { Bundle } from "./bundle"
import { CTA } from "./CTA"
import { CTA2 } from "./CTA2"
import { Features } from "./features"
import TableComponent from "./table"
import { SinglePageFAQ } from "./singlePageFAQ"

export const SingleProduct = () => {
  return (
    <div>
      <div className="content-container px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:pt-20 pb-10 lg:pb-[120px]">
          <div className="w-full lg:w-1/2">
            <ProductDetailsSlider />
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <div className="">
              <h4 className="text-[#222] text-[26px] leading-[30px] lg:text-[32px] lg:leading-[38px] font-normal pb-10">
                Activated Charcoal Hand and body soap
              </h4>
              <div className="flex items-center gap-1.5">
                <StarIcon />
                <span className="text-sm lg:text-base text-[#222]">
                  (202 Reviews)
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <h3 className="text-[#464E3F] text-[26px] lg:text-[28px] font-bold">
                  210 kr
                  <span className="text-base text-[#222] opacity-60 ml-2 line-through">
                    270 kr
                  </span>
                </h3>
                <div className="p-2 bg-[#464E3F] text-sm font-medium text-white inline-block rounded-[2px]">
                  Spar 30%
                </div>
              </div>
              <p className="text-base text-[#464E3F] mt-10">
                Ekte såpe fra Oviá. En hånd og kroppssåpe med lang varighet,
                naturlige ingredienser og plastfri emballasje.
              </p>
              <div className="flex flex-col gap-3 mb-8 mt-10">
                <div className="flex items-center gap-2">
                  <CheckmarkIcon />
                  <p className="text-base text-[#222] font-medium">
                    Kun naturlige ingredienser
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckmarkIcon />
                  <p className="text-base text-[#222] font-medium">
                    Varer lenge og gir frisk duft
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckmarkIcon />
                  <p className="text-base text-[#222] font-medium">
                    Håndlaget i Tyrkia
                  </p>
                </div>
              </div>
              <Bundle />
            </div>
          </div>
        </div>
        
      </div>
      <div className="content-container">
          <FAQ />
      </div>
      <div className="pb-10 lg:pb-[120px]">
        <CTA />
      </div>
      <div className="content-container hidden lg:block pb-[120px]">
        <TableComponent />
      </div>
      <div className="">
        <Features />
      </div>
      <div className="py-10 lg:py-[120px]">
        <CTA2 />
      </div>
      <div className="content-container">
        <h2 className="text-[#222] text-[28px] lg:text-[54px] leading-[30px] lg:leading-[60px] font-cloveris lg:text-center pb-8 lg:pb-16">FAQ</h2>
        <SinglePageFAQ />
      </div>
      <div className="content-container py-10 lg:py-[120px]">
          <h2 className="text-[44px] pb-14 text-center">Related products</h2>
          <CardSlider />
        </div>
    </div>
  )
}
