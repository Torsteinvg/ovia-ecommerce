import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"

export default async function Nav() {
  // @ts-ignore 
  const regions = await listRegions().then((regions) => regions)

  return (
    <>
    
      <header className="sticky top-0 bg-white inset-x-0 z-50 group py-6 lg:py-8 mx-auto border-b duration-200">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <img
              src="https://ovia.no/wp-content/uploads/2022/04/01_Ovia_hovedlogo_sort_v1.png"
              alt="Ovia Logo"
              className="w-24 h-auto"
            />
            </LocalizedClientLink>
          </div>

         
          <div className="flex-1 basis-0 h-full flex items-center ">
           
            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden lg:flex items-center gap-x-6 h-full">

              <LocalizedClientLink
                className="relative text-black text-lg hover:after:w-full hover:text-[#db572e] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#db572e] after:w-0 after:transition-all after:duration-300"
                href="/store"
                data-testid="nav-account-link"
              >
                Online store
              </LocalizedClientLink>
              <LocalizedClientLink
                className="relative text-black text-lg hover:after:w-full hover:text-[#db572e] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#db572e] after:w-0 after:transition-all after:duration-300"
                href="/about"
                data-testid="nav-account-link"
              >
                 About Oviá
              </LocalizedClientLink>
              <LocalizedClientLink
                className="relative text-black text-lg hover:after:w-full hover:text-[#db572e] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#db572e] after:w-0 after:transition-all after:duration-300"
                href="/contact"
                data-testid="nav-account-link"
              >
                Contact
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex items-center"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <span className="relative inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="fill-current">
                      <path d="M17.884 6.113A.395.395 0 0 0 17.551 6h-4.775V3.849C12.776 1.723 11.086 0 9 0 6.915 0 5.224 1.723 5.224 3.849V6H.45c-.133 0-.266 0-.333.113a.39.39 0 0 0-.111.34l1.666 9.283C1.903 17.03 3 17.978 4.29 18h9.418c1.295-.032 2.389-.988 2.62-2.287l1.666-9.26a.39.39 0 0 0-.11-.34ZM6.113 3.85C6.113 2.223 7.405.906 9 .906s2.887 1.317 2.887 2.943V6H6.113V3.849ZM15.44 15.6a1.787 1.787 0 0 1-1.732 1.494H4.29A1.787 1.787 0 0 1 2.56 15.6L.982 6.906h16.036L15.44 15.6Z" fill="currentColor"></path>
                      <path d="M12.332 11.32a.448.448 0 0 0 .444-.452V9.509a.449.449 0 0 0-.444-.452.449.449 0 0 0-.445.452v1.359c0 .25.2.453.445.453ZM5.668 11.32a.449.449 0 0 0 .445-.452V9.509a.449.449 0 0 0-.445-.452.449.449 0 0 0-.444.452v1.359c0 .25.2.453.444.453Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="ml-2 relative inline-block">
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      0
                    </span>
                  </span>
                </LocalizedClientLink>
              }
            >
             
              <CartButton />
            </Suspense>
            <div className="lg:hidden">
              <SideMenu regions={regions} />
            </div>
          </div>
          </div>
        </nav>
      </header>
    </>
  )
}
