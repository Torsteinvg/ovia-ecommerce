"use client"
import React, { useState } from 'react';
import { AdditionalInformation } from './additionalInformation';
import { Review } from './Review';
import { Ingredients } from './Ingredients';
import { Description } from './description';

interface TabContent {
  title: string;
  content: any;
}

export const TabsComponent: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<number>(0);

  // Content for each tab
  const tabContent: TabContent[] = [
    {
      title: 'Description',
      content: <Description />,
    },
    {
      title: 'Additional information',
      content: <AdditionalInformation />,
    },
    {
      title: 'Reviews (0)',
      content: <Review />,
    },
    {
      title: 'Ingredients',
      content:  <Ingredients />,
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto mt-10 hidden lg:block">
      {/* Tab buttons */}
      <div className="flex justify-start gap-10 mb-5 border-b border-gray-300">
        {tabContent.map((tab, index) => (
          <button
            key={index}
            className={`p-3 text-[#222] text-lg border-[2px] border-transparent hover:border-b-[#222] font-normal ${
              activeTab === index
                ? 'border-b-[#222]'
                : 'border-transparent'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="py-8">
        <div className="">{tabContent[activeTab].content}</div>
      </div>
    </div>
  );
};
