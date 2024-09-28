import React from "react"

export const Description = () => {
  return (
    <div className="py-4">
      <h3 className="text-[24px] lg:text-[32px] leading-8 lg:leading-[42px] text-[#222222] font-cloveris mb-2">
        Et bedre alternativ ✌️
      </h3>
      <p className="text-[#222] text-base">
        Invester i en bærekraftig livsstil uten å gå på kompromiss med kvalitet
        og luksus.
      </p>
      <div className="flex flex-col gap-6 lg:gap-8 mt-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#464E3F] w-6 h-6 rounded-full text-white font-cloveris text-base flex items-center justify-center">
              1
            </div>
            <h4 className="text-lg lg:text-[20px] lg:leading-[28px] font-medium text-[#222]">
              Null plast
            </h4>
          </div>
          <p className="text-base text-[#222]">
            Miljøvennlig såpe og emballasje, helt uten plast.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#464E3F] w-6 h-6 rounded-full text-white font-cloveris text-base flex items-center justify-center">
              2
            </div>
            <h4 className="text-lg lg:text-[20px] lg:leading-[28px] font-medium text-[#222]">
              Varer og varer
            </h4>
          </div>
          <p className="text-base text-[#222]">
            Oppdag følelsen av å bruke en såpe som varer og varer. Våre
            såpestykker varer mye lenger enn flytende såper, noe som betyr færre
            kjøp og mindre avfall.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#464E3F] w-6 h-6 rounded-full text-white font-cloveris text-base flex items-center justify-center">
              3
            </div>
            <h4 className="text-lg lg:text-[20px] lg:leading-[28px] font-medium text-[#222]">
              Følelsen av luksus i ditt hjemme-spa
            </h4>
          </div>
          <p className="text-base text-[#222]">
            Våre såper kombinerer naturlige dufter med rene, nærende
            ingredienser. En sensorisk opplevelse som vekker minner og skaper
            nye øyeblikk av ro.
          </p>
        </div>
      </div>
    </div>
  )
}
