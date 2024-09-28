"use client"
import React, { useState } from "react"
import { TabsComponent } from "../tabs"
import { MinusIcon, PlusIcon } from "@lib/icons"
import { Review } from "../tabs/Review"
import { Description } from "../tabs/description"

type Tab = "description" | "additional_info" | "reviews" | "ingredients"

const FAQ: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<Tab | null>(null)

  const toggleAccordion = (tab: Tab) => {
    setOpenAccordion(openAccordion === tab ? null : tab)
  }

  return (
    <div className="">
      <TabsComponent />

      <div className="lg:hidden mt-10">
        <div className="border-b">
          <button
            className="w-full py-4 text-sm text-[#222] font-medium text-left flex justify-between items-center"
            onClick={() => toggleAccordion("description")}
          >
            Description
            {openAccordion === "description" ? <MinusIcon /> : <PlusIcon />}
          </button>
          {openAccordion === "description" && (
            <Description />
          )}
        </div>

        <div className="border-b">
          <button
            className="w-full py-4 text-sm text-[#222] font-medium text-left flex justify-between items-center"
            onClick={() => toggleAccordion("additional_info")}
          >
            Additional Information
            {openAccordion === "additional_info" ? <MinusIcon /> : <PlusIcon />}
          </button>
          {openAccordion === "additional_info" && (
            <div className="">
              <table className="min-w-full table-auto border-collapse border border-gray-200">
                <tbody>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium text-gray-600 border-r ">
                      Weight
                    </th>
                    <td className="text-left p-2 text-gray-700">0.055 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="border-b">
          <button
            className="w-full py-4 text-sm text-[#222] font-medium text-left flex justify-between items-center"
            onClick={() => toggleAccordion("reviews")}
          >
            Reviews(2)
            {openAccordion === "reviews" ? <MinusIcon /> : <PlusIcon />}
          </button>
          {openAccordion === "reviews" && (
            <div className="py-4">
              <Review />
            </div>
          )}
        </div>

        <div className="border-b">
          <button
            className="w-full py-4 text-sm text-[#222] font-medium text-left flex justify-between items-center"
            onClick={() => toggleAccordion("ingredients")}
          >
            Ingredients
            {openAccordion === "ingredients" ? <MinusIcon /> : <PlusIcon />}
          </button>
          {openAccordion === "ingredients" && (
            <div className="py-4">
              <p className="text-[#858585]">
                {` Aqua, Olea Europaea Fruit (Olive) Oil, Cocos Nucifera (Coconut) Oil, Helianthus Annuus
              Seed (Sunflower) Oil, Sodium Hydroxide, Ricinus Communis Seed (Castor) Oil,
              Butyrospermum parkii (Shea Butter), Charcoal Powder, Parfum, Cınnamal, Coumarın,
              Eugenol, D-lımonene, Lınalool.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FAQ
