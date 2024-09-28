"use client"
import { ArrowIcon, MasterCardIcon, VPSSVGIcon, Visa } from "@lib/icons"
import React, { useState } from "react"
import Image from "next/image"
import img from "../../../../public/images/img-1.png"
import img2 from "../../../../public/images/img-2.png"
import img3 from "../../../../public/images/img-2.png"
import icon from "../../../../public/images/master-card.svg"

// Define a type for accordion items
type AccordionItem = {
  number: string
  img: any // Use `StaticImageData` for imported images
  title: string
  content: string
}

export const Bundle = () => {
  // State with type number | null
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Handle accordion toggle
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Accordion items array
  const accordionItems: AccordionItem[] = [
    {
      number: "#1",
      img: img,
      title: "Aloe Vera Hånd- og kroppssåpe",
      content: "Content for the first accordion item.",
    },
    {
      number: "#2",
      img: img2,
      title: "Activated Charcoal Hånd- og kroppssåpe",
      content: "Content for the second accordion item.",
    },
    {
      number: "#3",
      img: img3,
      title: "Hamam Kroppssåpe",
      content: "Content for the third accordion item.",
    },
  ]

  return (
    <div>
      <div className="flex items-center gap-4 p-[18px] border border-[#464E3F0D] rounded-[3px]">
        <input type="radio" />
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-base font-semibold text-[#222]">Kjøp 1</h4>
            <p className="text-sm text-[#222]">Du spar 60 kr</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <h4 className="text-base font-semibold text-[#222]">210 kr</h4>
            <p className="text-sm text-[#222] opacity-60 line-through">270 kr</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 py-6">
        <div className="w-full h-[1px] bg-[#464E3F1A]"></div>
        <p className="whitespace-nowrap text-base text-[#222222]">Bundle & Save</p>
        <div className="w-full h-[1px] bg-[#464E3F1A]"></div>
      </div>

      <div className="border border-[#464E3F] p-[18px] mb-8">
        {accordionItems.map((item, index: number) => (
          <div className="flex gap-3" key={index}>
            <h4 className="text-sm font-semibold py-5">{item.number}</h4>
            <div className="bg-white border border-gray-200 rounded-[4px] mb-2 w-full">
              <div
                className="flex items-center justify-between p-1.5 pr-6 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center gap-3">
                  <Image width={42} height={42} src={item.img} alt="img" />
                  <h2 className="text-base font-normal text-[#222222]">
                    {item.title}
                  </h2>
                </div>
                <ArrowIcon isOpen={openIndex === index} />
              </div>

              <div
                className={`overflow-hidden transition-[max-height] ease-in-out duration-500 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="p-4 w-full">{item.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button type="submit" className="w-full text-center text-lg text-white font-bold bg-[#464E3F] py-6 rounded-[3px]">
        Add to cart
      </button>

      <div className="mt-6 flex items-center justify-center gap-6">
        <VPSSVGIcon />
        <Visa />
        <Image src={icon} alt="master card icon" />
      </div>
    </div>
  )
}
