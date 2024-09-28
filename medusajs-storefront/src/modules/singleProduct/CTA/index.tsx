import Image from "next/image"
import React from "react"
import img from "../../../../public/images/cta-img-1.png"

export const CTA = () => {
  return (
    <div className="cta-bg bg-right-top bg-no-repeat py-10 lg:py-20">
      <div className="content-container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="lg:max-w-[433px] w-full">
            <h2 className="text-[28px] lg:text-[42px] leading-[28px] text-[#222] lg:leading-[54px] font-cloveris pb-3">
                A tribute to nature
            </h2>
            <p className="text-base text-[#222] pb-4">
                Holding a real bar of soap evokes positive emotions in us and provides a richer sensory experience
            </p>
            <p className="text-base text-[#222]">
                The texture, the smell, the feel. All our soaps are made from natural ingredients, and can be rinsed out into nature without posing an environmental hazard.
            </p>
            <button className="text-base text-white font-semibold py-5 px-8 bg-[#464E3F] mt-8 lg:mt-12">Buy now</button>
          </div>
          <div className="">
            <Image src={img} alt="cta img" width={610} height={800} />
          </div>
        </div>
      </div>
    </div>
  )
}
