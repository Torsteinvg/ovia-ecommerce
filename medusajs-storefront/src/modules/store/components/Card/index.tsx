import Link from "next/link"
import React from "react"
import { Tooltip } from "react-tooltip"

export const Card = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl group">
      <div className="overflow-hidden relative border-b border-gray-200">
        <span className="absolute top-2.5 left-1.5 text-sm text-gray-500 font-medium uppercase">
          New
        </span>

        <div className="relative">
          <a href="/singleProduct" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10"></a>
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              className="w-full transition duration-300"
              src="https://ovia.no/wp-content/uploads/2023/04/Aktivt-kull-sapebar-blue-1000x667.jpg"
              alt="product-1"
            />
            <div className="absolute -bottom-10 inset-x-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-300 ease-out">
              {/* Cart Icon with Tooltip */}

              <Link
                href={"#"}
                data-tooltip-id="cart"
                data-tooltip-content="Add to cart"
                className="relative w-10 h-10 flex items-center justify-center bg-white hover:bg-[#464e3f] hover:text-white transition-all ease-out mx-2 group"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Shopping_Cart">
                    <path d="M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z"></path>
                  </g>
                </svg>
              </Link>
              <Tooltip id="cart" />
              {/* Wishlist Icon with Tooltip */}
              <Link
                href={"/singleProduct"}
                data-tooltip-id="wishlist"
                data-tooltip-content="Add to wishlist"
                className="relative w-10 h-10 flex items-center justify-center bg-white hover:bg-[#464e3f] hover:text-white transition-all ease-out mx-2 group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1"
                  />
                </svg>
              </Link>
              <Tooltip id="wishlist" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-base font-normal lg:text-2xl text-gray-700 mb-2">
          <a
            href="/singleProduct"
            className="block font-cloveris  overflow-hidden "
          >
            Activated Charcoal Hand and Body Soap
          </a>
        </h4>
        <div className="">
          <span className="text-lg font-medium text-gray-700">
            NOK 270.00 NOK 210.00
          </span>
        </div>
      </div>
    </div>
  )
}
