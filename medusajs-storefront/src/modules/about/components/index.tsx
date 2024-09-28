import LocalizedClientLink from "@modules/common/components/localized-client-link"

const AboutComponents = () => {
  return (
    <main className="bg-[#f6f5e8] pt-10">
      {/* SECTION ONE  */}

      <div className=" w-full py-14 lg:py-24">
        <div className="content-container bg-[#464e3f]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-y-5 sm:p-5 lg:px-0 lg:pb-0">
            <div className="">
              <img
                src="https://ovia.no/wp-content/uploads/2023/10/Clip-path-group.png"
                className="attachment-full size-full wp-image-3707"
                alt=""
              />
            </div>
            <div className="lg:max-w-[540px] w-full lg:ml-52">
              <h2 className="text-2xl font-cloveris font-medium text-white mb-8">
                About Oviá
              </h2>
              <p className="text-base text-white">
                Oviá was started by two childhood friends, who asked themselves
                a simple question. Why have we replaced beautiful bars of soap
                with dispensers and shampoo bottles that are watered down to
                last less, cost more and produce so much unnecessary waste? So
                they decided to take the packaging out of the product and give
                you a real bar of soap that you can touch and feel. A soap that
                lasts and lasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TWO  */}

      <div className="content-container pt-10 lg:pt-16">
        <div className="max-w-[1200px] w-full mx-auto">
          <img
            src="https://ovia.no/wp-content/uploads/2023/10/Group-1.png"
            className="attachment-full size-full wp-image-3720"
            alt=""
          />
        </div>
      </div>

      {/* SECTION THREE  */}
      <div className="content-container my-24 lg:my-52">
        <div className="flex flex-col lg:flex-row">
          <div className="px-5 py-5 lg:py-0 lg:px-[75px] flex flex-col lg:flex-row lg:items-center justify-center lg:max-w-[650px] w-full border border-t-0 lg:border-t lg:border-r-0 border-[#464E3F]">
            <div className="">
              <h2 className="text-xl font-cloveris md:text-4xl mb-4 text-[#222]">
                Social responsibility
              </h2>

              <p className="mt-20">
                Oviá is committed to making a positive difference. Our solid
                soaps are a tribute to traditional values ​​and future
                sustainability. With a longer lifespan, less packaging and zero
                plastic, they are a conscious choice for those who want to
                reduce their environmental footprint and feel the feeling of
                real soap.
              </p>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
                <div className="border my-4 border-[#464e3f] w-full "></div>
              </div>
            </div>
            <div className="">
              <h2 className="text-[56px] leading-[53px] font-cloveris font-normal p-2.5">o</h2>
            </div>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat lg:max-w-[650px] w-full h-[250px] md:h-[535px]"
            style={{
              backgroundImage:
                "url('https://ovia.no/wp-content/uploads/2023/10/Rectangle-2.jpg')",
            }}
          ></div>
        </div>
      </div>

      {/* SECTION FOUR  */}
      <div className="content-container mb-14 lg:mb-16">
        <div className="max-w-[1030px] w-full mx-auto text-center">
          <h2 className="text-2xl text-[30px] lg:leading-[42px] font-cloveris font-medium text-[#222] mb-8">
            A tribute to nature
          </h2>
          <p className="text-lg text-black">
            Holding a real bar of soap evokes positive emotions in us and
            provides a richer sensory experience. The texture, the smell, the
            feel. All our soaps are made from natural ingredients, and can be
            rinsed out into nature without posing an environmental hazard.
          </p>
        </div>
      </div>

      {/* SECTION FIVE  */}
      <div className="bg-[#464e3f] w-full py-14 lg:py-24">
        <div className="content-container">
          <div className="max-w-[888px] w-full mx-auto">
            <img
              loading="lazy"
              decoding="async"
              src="https://ovia.no/wp-content/uploads/2023/10/Group-1-1.jpg"
              className="attachment-full size-full wp-image-3779"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SECTION SIX  */}
      <div className="content-container py-16 lg:py-36">
        <div className="flex flex-col lg:flex-row">
          <div className="">
          <img src="https://ovia.no/wp-content/uploads/2023/10/Group-2.png" className="lg:px-28 w-full" alt="" />
          </div>
          <div className="lg:max-w-[582px] w-full">
            <img src="https://ovia.no/wp-content/uploads/2023/10/Group.png" className="lg:mt-6 mb-6 lg:mb-10" alt="" />
            <p className="text-base">
              Our soaps are handmade in Turkey and contain only natural ingredients. Lasts a long time and gives a fresh scent to the whole bathroom. Thank you for playing along with nature.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutComponents
