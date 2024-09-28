import React from "react"

const TableComponent: React.FC = () => {
  return (
    <div className="max-w-[1030px] w-full mx-auto">
      <div className="grid grid-cols-4 gap-px border-x border-[#464E3F0D]">
        {/* Header */}
        <div className="px-14 flex items-center justify-start text-left text-base font-semibold text-[#222] tracking-wider border-t border-b border-r-2  border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
       
        </div>
        <div className="px-14 bg-[#FFFFFF4D] flex items-center justify-center text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-t-2 border-b border-t-[#464E3F] border-r-[#464E3F] border-r-2 border-[#464E3F0D] h-[120px]">
          <img
            src="https://ovia.no/wp-content/uploads/2022/04/01_Ovia_hovedlogo_sort_v1.png"
            alt="Ovia Logo"
            className="w-24 h-auto"
          />
        </div>
        <div className="px-14 flex items-center justify-center text-center text-base font-semibold text-[#222] tracking-wider border-t border-b border-r border-[#464E3F0D] h-[120px]">
          {`Masseprodusert fast såpe`}
        </div>
        <div className="px-14 flex items-center justify-center text-center text-base font-semibold text-[#222] tracking-wider border-t border-b border-[#464E3F0D] h-[120px]">
          {`Store brand flytende såpe`}
        </div>

        {/* Row 1 */}
        <div className="px-14 flex items-center justify-start text-center whitespace-wrap text-base font-semibold text-[#222] border-b border-r-2 border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
          Miljøvennlighet
        </div>
        <div className="px-14 bg-[#FFFFFF4D] flex items-center justify-center text-center whitespace-rap text-base text-[#222] border-b border-r-2 border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
          100% miljøvennlig, ingen plast
        </div>
        <div className="px-14 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-r  border-[#464E3F0D] h-[120px]">
          {`Miljøvennlig, men emballasje med plast`}
        </div>
        <div className="px-6 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-[#464E3F0D] h-[120px]">
          Inneholder mikroplast
        </div>

        {/* Row 2 */}
        <div className="px-14 flex items-center justify-start  whitespace-wrap text-base font-semibold text-[#222] border-b border-r-2 border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
          Varighet
        </div>
        <div className="px-14 bg-[#FFFFFF4D] flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-r-2 border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
          {`Varer lengre enn flytende såpe`}
        </div>
        <div className="px-14 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-r border-[#464E3F0D] h-[120px]">
          Ganske lang varighet
        </div>
        <div className="px-14 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-[#464E3F0D] h-[120px]">
          {`Må kjøpes oftere`}
        </div>

        {/* Row 3 */}
        <div className="px-14 flex items-center justify-start whitespace-wrap text-base font-semibold text-[#222] border-b border-r-2 border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
          Håndlaget
        </div>
        <div className="px-14 bg-[#FFFFFF4D] flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-r-2 border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
          Håndlaget i Tyrkia
        </div>
        <div className="px-14 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-r border-[#464E3F0D] h-[120px]">
          Masseprodusert
        </div>
        <div className="px-14 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-[#464E3F0D] h-[120px]">
          Masseprodusert
        </div>

        {/* Row 4 */}
        <div className="px-14 flex items-center justify-start whitespace-wrap text-base font-semibold text-[#222] border-b border-r-2 border-r-[#464E3F] border-[#464E3F0D] h-[120px]">
        Plastfri emballasje
        </div>
        <div className="px-14 bg-[#FFFFFF4D] flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b-2 border-r-2 border-r-[#464E3F] border-b-[#464E3F] h-[120px]">
          {`Ja, helt plastfri`}
        </div>
        <div className="px-14 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b border-r border-[#464E3F0D] h-[120px]">
        {`Ja, helt plastfri`}
        </div>
        <div className="px-14 flex items-center justify-center text-center whitespace-wrap text-base text-[#222] border-b  border-[#464E3F0D] h-[120px]">
        {`Ja, helt plastfri`}
        </div>
      </div>
    </div>
  )
}

export default TableComponent
