import React, { useState } from "react"
import ReactSlider from "react-slider"

export const DesktopFiltered = () => {
  const MIN = 90
  const MAX = 280
  const [values, setValues] = useState([MIN, MAX])
  return (
    <div className="flex justify-between w-full">
      <div className="">
        <div className="text-[#222] text-2xl pb-5 font-medium">
          <span>By price</span>
        </div>
        {/*@ts-ignore*/}
        <ReactSlider
          className="slider horizontal-slider w-full h-[5px] bg-[#222]"
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
        />
        <div className="w-full">
        <p className="text-base text-[#858585] pt-1.5 pb-5">
          Price:{" "}
          <span className="font-medium">{`NOK${values[0]}-NOK${values[1]}`}</span>
        </p>
        </div>
        <button className="text-white text-xs py-2 px-4 bg-[#464e3f] uppercase hover:bg-[#222] transition-all ease-in-out">
          filter
        </button>
      </div>
      <div className="">
        <h4 className="">
          <span className="text-lg font-semibold">Categories</span>
        </h4>
        <ul className="product-categories menu mt-2">
          <li className="cat-item cat-item-15">
            <a
              href="https://ovia.no/product-category/balsam-bar/"
              className="text-[#858585] block text-sm py-1  hover:text-black"
            >
              Conditioner bar
            </a>
          </li>
          <li className="cat-item cat-item-51">
            <a
              href="https://ovia.no/product-category/hand-sape/"
              className="text-[#858585] block py-1 text-sm hover:text-black"
            >
              Hand soap
            </a>
          </li>
          <li className="cat-item cat-item-48">
            <a
              href="https://ovia.no/product-category/body-soap/"
              className="text-[#858585] block py-1 text-sm hover:hover:text-black"
            >
              Body soap
            </a>
          </li>
          <li className="cat-item cat-item-49">
            <a
              href="https://ovia.no/product-category/sapeholder/"
              className="text-[#858585] block py-1 text-sm hover:hover:text-black"
            >
              Soap holder
            </a>
          </li>
          <li className="cat-item cat-item-38">
            <a
              href="https://ovia.no/product-category/shampoo-bar/"
              className="text-[#858585] block py-1 text-sm hover:hover:text-black"
            >
              Shampoo bar
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <h4 className="font-semibold">
          <span>After Tags</span>
        </h4>
        <div className=" mt-2">
          <a
            href="https://ovia.no/product-category/balsam-bar/"
            className="text-[#858585] text-sm py-1 mr-2 hover:underline hover:text-black"
          >
            Fragrances
          </a>
          <a
            href="https://ovia.no/product-category/balsam-bar/"
            className="text-[#858585] text-sm py-1 hover:underline hover:text-black"
          >
            Perfume
          </a>
          <a
            href="https://ovia.no/product-category/balsam-bar/"
            className="text-[#858585] block text-sm py-1 hover:underline hover:text-black"
          >
            Perfume2
          </a>
        </div>
      </div>
    </div>
  )
}
