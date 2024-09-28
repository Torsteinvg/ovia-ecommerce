import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"


const footerLink = [
  {
    label: "About Us",
    link : "https://ovia.no/om-ovia/"
  },
  {
    label: "Contact",
    link : "https://ovia.no/kontakt/"
  },
  {
    label: "Blog",
    link : "https://ovia.no/blog/"
  },
  {
    label: "Purchase terms",
    link : "https://ovia.no/kjopsvilkar/"
  },
]

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <>
      <footer className="bg-[#464E3F]">
        <div className="content-container ">
        <div className="mx-auto flex flex-wrap justify-between items-center py-16">
          <div className="p-2.5 flex flex-col w-full md:w-auto justify-center gap-5">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <LocalizedClientLink href="https://ovia.no">
                <img
                  src="https://ovia.no/wp-content/uploads/2022/04/03_Ovia_hovedlogo_naturhvit_v1.png"
                  alt="Ovia Logo"
                  className="w-[140px] h-[54px]"
                />
              </LocalizedClientLink>
            </div>
              <p className="text-white text-center text-sm">
                <strong>Organization number:</strong> 915 956 564
              </p>
          </div>
          <div className="p-2.5 flex flex-col gap-5">
            <div className="flex space-x-6">
              {
                footerLink.map((item, idx) => (
                  <LocalizedClientLink
                  href={item.link}
                  className="hover:text-white text-[#d8e4e5] transition-all ease-in-out"
                  key={idx}
                >
                 {item.label}
                </LocalizedClientLink>
                ))
              }
            </div>

            <div className="flex items-center justify-center md:justify-end gap-4">
              <div className="flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="70"
                  height="18"
                  viewBox="0 0 290 74"
                >
                  <defs>
                    <path id="a" d="M44.413.054V56.09H.12V.054h44.294z" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#fff"
                      d="M39.04 1.861l-12.281 35.91L14.38 1.862H-.043L21.36 55.127h10.7L53.463 1.861zm63.187 15.233c0 4.246-3.35 7.2-7.259 7.2-3.908 0-7.257-2.954-7.257-7.2 0-4.247 3.349-7.2 7.257-7.2 3.909 0 7.26 2.953 7.26 7.2M85.475 46.542c9.027 0 14.145-4.339 18.985-10.615 2.604-3.415 6.047-4.064 8.374-2.216 2.512 1.939 2.605 5.447 0 8.862-6.978 9.232-15.912 14.77-27.359 14.77-12.469 0-23.17-6.83-30.893-18.554-2.139-3.047-1.582-6.555.744-8.217 2.513-1.754 5.956-1.016 8.19 2.308 5.583 8.123 12.75 13.662 21.96 13.662m51.092-18.186c0 10.894 6.328 16.618 13.401 16.618 6.699 0 13.586-5.355 13.586-16.618 0-11.079-6.887-16.432-13.494-16.432-7.165 0-13.493 5.077-13.493 16.432zm0-26.403v7.295c3.63-4.986 9.305-8.77 17.587-8.77 10.423 0 22.613 8.676 22.613 27.233 0 19.386-11.724 28.803-23.73 28.803-6.42 0-12.096-2.494-16.47-8.403v25.48h-13.12V1.953h13.12zm63.002 26.403c0 10.894 6.327 16.618 13.4 16.618 6.699 0 13.585-5.355 13.585-16.618 0-11.079-6.886-16.432-13.493-16.432-7.165 0-13.493 5.077-13.493 16.432zm0-26.403v7.295c3.629-4.986 9.304-8.77 17.586-8.77 10.423 0 22.613 8.676 22.613 27.233 0 19.386-11.725 28.803-23.73 28.803-6.42 0-12.096-2.494-16.47-8.403v25.48h-13.12V1.953h13.12z"
                    />
                    <g transform="translate(245.051 .423)">
                      <mask id="b" fill="#fff">
                        <use xlinkHref="#a" />
                      </mask>
                      <path
                        d="M22.45.054c10.796 0 18.705 4.984 21.963 17.54L32.594 19.44c-.186-6.37-4.187-8.307-9.864-8.307-4.467 0-7.723 1.937-7.723 4.984 0 2.4 1.674 4.893 6.7 5.816l9.025 1.66c8.84 1.664 13.587 7.386 13.587 15.234 0 11.539-10.515 17.264-20.38 17.264-10.422 0-21.96-5.356-23.82-18.372l11.817-1.847c.652 6.74 4.84 9.14 11.539 9.14 5.118 0 8.561-1.846 8.561-5.077 0-2.862-1.582-4.986-7.166-6.001l-8.189-1.476C8.028 30.888 2.725 24.794 2.725 17.04 2.725 5.038 13.703.054 22.45.054"
                        fill="#fff"
                        mask="url(#b)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 238.63 53.26"
                  className="h-[18px] w-[80px] fill-white"
                >
                  <title>Brand_assets_master</title>
                  <path d="M42,0H30.25A30,30,0,0,1,18.11,24.23l-4.65,3.48,18,24.57H46.29L29.71,29.67A41.56,41.56,0,0,0,42,0Z"></path>
                  <polygon points="0 52.28 12.03 52.28 12.03 0 0 0 0 52.28 0 52.28"></polygon>
                  <polygon points="49.79 52.26 61.12 52.26 61.12 0.01 49.79 0.01 49.79 52.26 49.79 52.26"></polygon>
                  <path d="M160.49,15.15c-4.32,0-8.41,1.34-11.14,5V16.12H138.57V52.26h10.91v-19c0-5.5,3.68-8.19,8.12-8.19,4.76,0,7.49,2.84,7.49,8.11V52.26H175.9v-23c0-8.41-6.69-14.13-15.41-14.13Z"></path>
                  <path d="M85.51,43.49a9.56,9.56,0,0,1-9.8-9.3,9.82,9.82,0,0,1,19.61,0,9.56,9.56,0,0,1-9.81,9.3Zm9.84-27.37v2.31A19.07,19.07,0,1,0,84.63,53.26,18.89,18.89,0,0,0,95.35,50v2.31h10.83V16.12Z"></path>
                  <path d="M122.92,20.83V16.12H111.84V52.26h11.1V35.39c0-5.7,6.17-8.76,10.46-8.76h.12V16.12c-4.39,0-8.43,1.88-10.6,4.71Z"></path>
                  <path d="M199.68,43.49a9.56,9.56,0,0,1-9.8-9.3,9.82,9.82,0,0,1,19.61,0,9.56,9.56,0,0,1-9.81,9.3Zm9.85-27.37v2.31a19.07,19.07,0,1,0,0,31.52v2.31h10.82V16.12Z"></path>
                  <path d="M231.84,39.44a6.8,6.8,0,1,0,6.79,6.8,6.79,6.79,0,0,0-6.79-6.8Z"></path>
                </svg>
              </div>
              <div className="flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[80px] h-[32px] fill-white"
                  viewBox="0 0 500 200"
                >
                  <path d="M41.2 95.2C42.6 77 57.9 62.6 76.5 62.6s33.9 14.4 35.3 32.6H177c-1.5-37.8-32.6-68-70.8-68-38.2 0-69.3 30.2-70.8 68h5.8z"></path>
                  <path d="M111.8 100.8c-1.4 18.2-16.7 32.6-35.3 32.6S42.6 119 41.2 100.8h-5.7c1.5 37.8 32.6 68 70.8 68 38.2 0 69.3-30.2 70.8-68h-65.3z"></path>
                  <path d="M228.3 99.7c-6.8 0-14.2.8-18.9 5.6V80.7h-14.5v82.5h13v-5c3.8 3.5 9.7 6 18 6 24.9 0 26.6-16.9 26.6-32.1.1-18.9-2.9-32.4-24.2-32.4zm-3.2 51.5c-12.4 0-16-3.5-16-19.1 0-15.6 3.6-19.1 16-19.1 10.7 0 13 4.5 13 19.1 0 14.6-2.3 19.1-13 19.1zm64.7-51.5c-7.3 0-13.1 2.3-17.1 6.7v-5.6h-12.5v62.4h14.5v-27.1c0-4.9-.3-11.8 1.4-16.2 1.5-4.2 5.2-7.4 11.3-7.4 6 0 8.4 1.3 8.4 7H310c0-13.7-6.8-19.8-20.2-19.8zm81.5 0c-8.8 0-14.5 2.8-18 6v-4.9h-12.5v62.4h14.5v-29c0-10.9-1.1-21.6 14.5-21.6 12.5 0 11.4 5.8 11.4 17.8v32.9h14.5v-34c-.2-13.7.8-29.6-24.4-29.6zm76.3 1.1v4.9c-4.9-4.3-12.8-6-19.4-6-21.5 0-24.9 12.9-24.9 31.9 0 15 1.4 31.6 25.1 31.6 6 0 13.4-1.4 17.9-5.5 0 3.2.1 7.7-.3 10.9-.8 5.9-6.8 8.4-15.1 8.4-8.1 0-10.6-2.3-10.6-6.8h-15.7c0 15.9 14.2 19 26.7 19 11.5 0 26.6-3.1 28.9-17.9.5-3.5.5-9.1.5-14.9v-55.7h-13.1v.1zm-17 49.3c-10.7 0-12.9-4-12.9-18.6s2.2-19.1 12.9-19.1c12.4 0 15.7 3.5 15.7 19.1 0 15.7-3.3 18.6-15.7 18.6zm-113.7 13.1h14.5v-62.4h-14.5v62.4zm0-68h14.5V80.7h-14.5v14.5z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-white">
          <div className="text-center text-[#d8e4e5] text-xs">
            COPYRIGHT 2023 © OVIA. ALL RIGHTS RESERVED.
          </div>
        </div>
        </div>
      </footer>
      
    </>
  )
}
