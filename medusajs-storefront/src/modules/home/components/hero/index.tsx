import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <main className="bg-[#f6f5e8] pt-10 pb-10 lg:pb-52">
      {/* SECTION ONE  */}
      <div className="content-container">
        <div className="flex items-center">
          <div className="relative w-full max-w-full">
            <img
              decoding="async"
              width="2560"
              height="1707"
              src="https://ovia.no/wp-content/uploads/2024/02/DSC09176-scaled.jpg"
              alt="Large image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* <div className="relative w-full h-full aspect-w-16 aspect-h-9">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              // poster="https://ovia.no/wp-content/uploads/2023/04/DSCF1333.jpg"
            />
          </div> */}
          {/* <div class="video-container">
            <video
              class="video"
              src="/video/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
            ></video>
          </div> */}

          <div className="relative w-full max-w-full">
            <img
              decoding="async"
              width="2560"
              height="1707"
              src="https://ovia.no/wp-content/uploads/2023/04/rsz_dsc09193-scaled.jpg"
              alt="Another large image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative w-full max-w-full">
            <img
              decoding="async"
              width="2560"
              height="1707"
              src="https://ovia.no/wp-content/uploads/2023/04/rsz_dsc09193-scaled.jpg"
              alt="Another large image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* SECTION TWO  */}
      <div className="content-container">
        <div className="flex flex-col items-center pt-10 lg:px-12">
          <div className="lg:px-4 flex flex-col md:flex-row justify-between w-full">
            <div className="w-full max-w-[300px] mb-8">
              <h2 className="text-4xl font-cloveris lg:text-[52px] lg:leading-[57px] font-normal">
                Real soap. Zero plastic.
              </h2>
            </div>
            <div className="w-full max-w-[560px] lg:ml-20">
              <div className="flex justify-center flex-col gap-4">
                <p className="text-base">
                 {` Discover Oviá's handmade soaps. Real soap, which lasts longer,
                  feels better and produces less waste. Made using traditional
                  methods in Turkey, our natural soaps bring luxury and
                  well-being to your home.`}
                </p>
                <div className="">
                  <LocalizedClientLink
                    href="https://ovia.no/om-ovia/"
                    className="inline-block font-barlow text-sm md:text-lg font-semibold tracking-wide text-black border-b-2 border-black bg-transparent hover:bg-opacity-10 transition-all"
                    role="button"
                  >
                    <span className="inline-block">
                      <span>Read more</span>
                    </span>
                  </LocalizedClientLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION THREE  */}
      <div className="content-container my-24 lg:my-52">
        <div className="flex items-center justify-center flex-col md:flex-row w-full ">
          <div className="relative max-w-[650px] w-full h-full flex items-center justify-center">
            <div className="w-full h-full aspect-[4/3]">
              <video
                className="w-full h-full object-cover masked-video"
                src="https://ovia.no/wp-content/uploads/2023/11/production_id_4812205-1080p.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
              />
            </div>
          </div>

          {/* Heading and Description */}
          <div className="">
            <div className="py-8 max-w-[380px] w-full">
              <h2 className="font-cloveris text-lg lg:text-3xl font-medium">
                A better alternative
              </h2>
              <p className="text-lg mt-4">
                Invest in a sustainable lifestyle without compromising on
                quality and luxury.
              </p>
            </div>

            {/* Icon Box Section */}
            <div className="grid grid-cols-1 gap-8 max-w-[380px] w-full">
              {/* Icon Box 1 */}
              <div className="py-5 border-b border-[#464E3F]">
                <h6 className="text-lg lg:text-xl font-semibold mb-2">
                  1. Zero plastic
                </h6>
                <p className="text-base">
                  Environmentally friendly soap and packaging, completely
                  without plastic.
                </p>
              </div>

              {/* Icon Box 2 */}
              <div className="py-5 border-b border-[#464E3F]">
                <h6 className="text-lg lg:text-xl font-semibold mb-2">
                  2. Goods and goods
                </h6>
                <p className="text-base">
                  Discover the feeling of using a soap that lasts and lasts. Our
                  soap bars last much longer than liquid soaps, which means
                  fewer purchases and less waste.
                </p>
              </div>

              {/* Icon Box 3 */}
              <div className="py-5 border-b border-[#464E3F]">
                <h6 className="text-lg lg:text-xl font-semibold mb-2">
                  3. The feeling of luxury in your home spa
                </h6>
                <p className="text-base">
                  Our soaps combine natural scents with pure, nourishing
                  ingredients. A sensory experience that awakens memories and
                  creates new moments of calm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION FOUR  */}
      <div className="content-container">
        <div className="flex flex-col lg:flex-row">
          <div
            className="bg-cover bg-center bg-no-repeat lg:max-w-[650px] w-full h-[250px] md:h-[535px]"
            style={{
              backgroundImage:
                "url('https://ovia.no/wp-content/uploads/2023/04/rsz_dsc09180-scaled.jpg')",
            }}
          ></div>
          <div className="px-5 py-5 lg:py-0 lg:px-[75px] flex items-center justify-center lg:max-w-[650px] w-full border border-t-0 lg:border-t lg:border-l-0 border-[#464E3F]">
            <div className="">
              <h2 className="text-xl font-cloveris md:text-4xl mb-4 text-[#222]">
                Hand soap, shampoo & conditioner
              </h2>

              <p className="mb-8">
                The soaps are handmade in Turkey and contain only natural
                ingredients. Lasts a long time and gives a fresh scent to the
                whole bathroom. Choose from a variety of fragrances and
                properties, designed to suit all skin types.
              </p>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
                <a
                  href="https://ovia.no/nettbutikk/"
                  className="inline-block text-[#464e3f] border-[#000000] border rounded-none px-8 py-3 bg-transparent border-solid transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#464e3f] hover:border-[#464e3f] focus:text-white"
                >
                  <span className="flex items-center justify-center">
                    <span className="text-base font-medium">
                      Go to online store
                    </span>
                  </span>
                </a>

                <div className="border-t border-[#464e3f] w-52 lg:w-[23%] xl:w-52"></div>

                <h2 className="text-[56px] font-cloveris leading-[53px] font-normal p-2.5">
                  o
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION FIVE  */}
      <div className="content-container my-24 lg:my-52">
        <div className="flex flex-col lg:flex-row">
          <div className="px-5 py-5 lg:py-0 lg:px-[75px] flex items-center justify-center lg:max-w-[650px] w-full border border-t-0 lg:border-t lg:border-r-0 border-[#464E3F]">
            <div className="">
              <h2 className="text-xl md:text-4xl font-cloveris mb-4 text-[#222]">
                Hand soap, shampoo & conditioner
              </h2>

              <p className="mb-8">
                The soaps are handmade in Turkey and contain only natural
                ingredients. Lasts a long time and gives a fresh scent to the
                whole bathroom. Choose from a variety of fragrances and
                properties, designed to suit all skin types.
              </p>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
                <a
                  href="https://ovia.no/nettbutikk/"
                  className="inline-block text-[#464e3f] border-[#000000] border rounded-none px-8 py-3 bg-transparent border-solid transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#464e3f] hover:border-[#464e3f] focus:text-white"
                >
                  <span className="flex items-center justify-center">
                    <span className="text-base font-medium">
                      Go to online store
                    </span>
                  </span>
                </a>

                <div className="border-t border-[#464e3f] w-52 lg:w-[23%] xl:w-52"></div>

                <h2 className="text-[56px] leading-[53px] font-cloveris font-normal p-2.5">
                  o
                </h2>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat lg:max-w-[650px] w-full h-[250px] md:h-[535px]"
            style={{
              backgroundImage:
                "url('https://ovia.no/wp-content/uploads/2024/01/rsz_dsc09095-2048x1365.jpg')",
            }}
          ></div>
        </div>
      </div>

      {/* SECTION SIX  */}
      <div className="content-container">
        <div className="flex md:items-center flex-col md:flex-row gap-y-10">
          <div className="bg-[url('https://ovia.no/wp-content/uploads/2023/12/Ovia-sape.jpg')] bg-cover max-w-[775px] w-full md:py-20 flex items-center justify-center">
            <img
              src="https://ovia.no/wp-content/uploads/2023/10/Vector.png"
              alt="zero icon"
              className="w-[173px] h-[165px] md:w-auto md:h-auto"
            />
          </div>
          <div className="ml-0 md:ml-10 lg:ml-24">
            <div className="md:max-w-[300px] w-full">
              <img
                src="https://ovia.no/wp-content/uploads/2023/10/Group.png"
                width="128"
                height="92"
                alt="Group Image"
                className="object-contain mb-10"
              />
              <p className="text-base">
                Thank you for making informed choices. In Oviá, sustainability
                is not just a word, it is a way of life. Our products are made
                with respect for nature, using traditional methods and pure,
                natural ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
