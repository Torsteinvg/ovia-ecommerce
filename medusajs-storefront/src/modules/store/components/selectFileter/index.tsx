"use client";
import React, { useState } from 'react';

const sortOptions = [
  {
    label: "Sort by default",
    link: "/nettbutikk/?min_price=90&max_price=280&orderby=menu_order",
  },
  {
    label: "Sort by popularity",
    link: "/nettbutikk/?min_price=90&max_price=280&orderby=popularity",
  },
  {
    label: "Sort by ranked",
    link: "/nettbutikk/?min_price=90&max_price=280&orderby=rating",
  },
  {
    label: "Sort by latest",
    link: "/nettbutikk/?min_price=90&max_price=280&orderby=date",
  },
  {
    label: "Sort by price:",
    link: "/nettbutikk/?min_price=90&max_price=280&orderby=price",
    icon: "up" as const,
  },
  {
    label: "Sort by price:",
    link: "/nettbutikk/?min_price=90&max_price=280&orderby=price-desc",
    icon: "down" as const,
  },
];

// Define a type for the icons
type IconType = "up" | "down";

const renderIcon = (icon: IconType) => {
  if (icon === "up") {
    return (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M348.3 216.4c-5 5.1-13.3 5.1-18.4.1L269 155.8v231.3c0 7.1-5.8 12.9-13 12.9s-13-5.8-13-12.9V155.8l-60.9 60.8c-5.1 5-13.3 4.9-18.4-.1-5-5.1-5-13.2.1-18.3l83-82.4c1.2-1.1 2.5-2 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l83 82.4c5.2 4.9 5.3 13.1.3 18.2z"></path>
      </svg>
    );
  } else if (icon === "down") {
    return (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"></path>
      </svg>
    );
  }
  return null;
};

export const SelectFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-4 py-3 bg-transparent text-[#858585] text-base flex items-center">
        <span>Sort by default</span>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul
          className={`absolute left-0 w-48 bg-white border border-[#dedede] rounded-md shadow-lg z-10 transform transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {sortOptions.map((option, index) => (
            <li
              key={index}
              className={`px-4 py-2 border-b border-[#dedede] text-[#464e3f] hover:bg-[#f1f0f0] cursor-pointer flex justify-between ${option.icon ? "flex-row" : ""
              }`}
            >
              <a href={option.link} className="text-sm">{option.label}</a>
              {option.icon && renderIcon(option.icon)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

