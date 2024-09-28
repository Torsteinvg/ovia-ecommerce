"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card } from "./Card"
import { SelectFilter } from "./selectFileter"
import { DesktopFiltered } from "./descktopFiltered"
import { MobileFiltered } from "./mobileFiltered"
import ReactSlider from "react-slider"

const categories = [
  {
    name: "Conditioner bar",
    link: "https://ovia.no/product-category/balsam-bar/",
    count: 4,
  },
  {
    name: "Hand soap",
    link: "https://ovia.no/product-category/hand-sape/",
    count: 1,
  },
  {
    name: "Body soap",
    link: "https://ovia.no/product-category/body-soap/",
    count: 4,
  },
  {
    name: "Soap holder",
    link: "https://ovia.no/product-category/sapeholder/",
    count: 0,
  },
  {
    name: "Shampoo bar",
    link: "https://ovia.no/product-category/shampoo-bar/",
    count: 4,
  },
]
const seller = [
  {
    name: "Shea butter Shampoo bar",
    price: "NOK 270.00.NOK 220.00",
    img: "https://ovia.no/wp-content/uploads/2023/04/Sheasmor-sjampobar-grey-1000x667.jpg",
    link: "https://ovia.no/nettbutikk/shea-butter-shampoobar/",
  },
  {
    name: "Shea butter Shampoo bar",
    price: "NOK 270.00",
    img: "https://ovia.no/wp-content/uploads/2023/04/Sheasmor-sjampobar-grey-1000x667.jpg",
    link: "https://ovia.no/nettbutikk/shea-butter-shampoobar/",
  },
  {
    name: "Shea butter Shampoo bar",
    price: "NOK 270.00",
    img: "https://ovia.no/wp-content/uploads/2023/04/Sheasmor-sjampobar-grey-1000x667.jpg",
    link: "https://ovia.no/nettbutikk/shea-butter-shampoobar/",
  },
  {
    name: "Shea butter Shampoo bar",
    price: "NOK 270.00.NOK 220.00",
    img: "https://ovia.no/wp-content/uploads/2023/04/Sheasmor-sjampobar-grey-1000x667.jpg",
    link: "https://ovia.no/nettbutikk/shea-butter-shampoobar/",
  },
  {
    name: "Shea butter Shampoo bar",
    price: "NOK 270.00",
    img: "https://ovia.no/wp-content/uploads/2023/04/Sheasmor-sjampobar-grey-1000x667.jpg",
    link: "https://ovia.no/nettbutikk/shea-butter-shampoobar/",
  },
]

interface FormData {
  search: string;
}

export const Store = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isOpen, setIsOpen] = useState(false)
  const MIN = 90
  const MAX = 280
  const [values, setValues] = useState([MIN,MAX])

  const onSubmit = (data:FormData) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <div className="w-full py-8 lg:py-32">
      <div className="content-container">
        <div className="flex gap-6">
          <div className="hidden lg:block w-1/4 p-4">
            <form
              className="relative w-full pb-12"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="search"
                className="h-[54px] py-2.5 px-5 w-full border border-gray-300"
                placeholder="Search the entire store..."
                {...register("search")}
                autoComplete="off"
                title="Search for:"
              />
              <button className="absolute top-0 right-0 p-3.5" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#222]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                  />
                </svg>
              </button>
            </form>
            <div className="">
              <div className="text-[#222] text-2xl pb-5 font-medium">
                <span>Categories</span>
              </div>
              <ul className="flex flex-col gap-1">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="text-[#858585] text-base py-1 flex justify-between"
                  >
                    <a href={category.link} className="hover:text-[#464e3f]">
                      {category.name}
                    </a>
                    <span className="count text-gray-600 ml-2">
                      ({category.count})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-12">
              <div className="text-[#222] text-2xl pb-5 font-medium">
                <span>By price</span>
              </div>
              {/*@ts-ignore*/}
              <ReactSlider
                  className="slider horizontal-slider w-full h-[5px] bg-[#222]"
                  onChange={setValues}
                  value = {values}
                  min = {MIN}
                  max = {MAX}
              />
              <div className="mt-8 flex items-center gap-2">
                <button className="text-white text-xs py-2 px-4 bg-[#464e3f] uppercase hover:bg-[#222] transition-all ease-in-out">filter</button>
                <p className="text-base text-[#858585]">Price: <span className="font-medium">{`NOK${values[0]}-NOK${values[1]}`}</span></p>
              </div>
            </div>
            <div className="pt-12">
              <div className="text-[#222] text-2xl pb-5 font-medium">
                <span>Best sellers</span>
              </div>
              <ul className="flex flex-col gap-6">
                {seller.map((seller, index) => (
                  <li key={index} className="">
                    <a href={seller.link} className="flex gap-5">
                      <img
                        src={seller.img}
                        className="max-w-[76px] w-full"
                        alt=""
                      />
                      <span>
                        <span className="text-base font-medium block pb-2">
                          {seller.name}
                        </span>
                        <span className="text-[#858585] text-base font-noraml block">
                          {seller.price}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-3/4 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between pb-10">
              <p className="text-base text-[#858585]">
                Showing 1-12 of 13 results
              </p>
              <div className="flex">
                <SelectFilter />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="hidden px-4 py-3 bg-transparent text-[#858585] text-base lg:flex items-center"
                >
                  <span>Filters</span>
                  <svg
                    className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden px-4 py-3 bg-transparent text-[#858585] text-base flex items-center"
                >
                  <span>Filters</span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></svg>
                </button>
              </div>
            </div>
            <div
              className={`overflow-hidden hidden lg:block transition-all duration-300 shadow-custom-light ${
                isOpen ? "h-[250px]" : "h-0"
              }`}
            >
             <DesktopFiltered />
            </div>
            <div
              className={`overflow-hidden absolute top-0 block lg:hidden h-full transition-all duration-300 shadow-custom-light z-50 pt-20 px-5 bg-white ${
                isOpen ? "left-0" : "-left-[100%]"
              }`}
            >
              <div className="absolute top-4 right-4"  onClick={() => setIsOpen(!isOpen)}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
              </div>
             <MobileFiltered />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
