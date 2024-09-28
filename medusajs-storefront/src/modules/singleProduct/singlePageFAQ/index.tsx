"use client"
import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export const SinglePageFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: "What is your return policy?", answer: "Our return policy allows for returns within 30 days of purchase." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to most countries." },
    { question: "How can I track my order?", answer: "You can track your order through the 'My Orders' section in your account." },
    { question: "Can I change or cancel my order?", answer: "Orders can be changed or canceled within 24 hours of purchase." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards and PayPal." }
  ];

  return (
    <div className="p-4 max-w-[800px] mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="mb-4 border-b border-[#464E3F0D] rounded">
            <div
              className="flex items-center justify-between px-4 py-2 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h3 className="text-base lg:text-xl text-[#222]">{faq.question}</h3>
              <div className="w-6 h-6 flex items-center justify-center">
                {isOpen ? (
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.432 5.992C13.6453 5.992 13.752 6.09867 13.752 6.312V7.656C13.752 7.86933 13.6453 7.976 13.432 7.976H8.12C8.03467 7.976 7.992 8.01867 7.992 8.104V13.288C7.992 13.5013 7.88533 13.608 7.672 13.608H6.328C6.11467 13.608 6.008 13.5013 6.008 13.288V8.104C6.008 8.01867 5.96533 7.976 5.88 7.976H0.568C0.354667 7.976 0.248 7.86933 0.248 7.656V6.312C0.248 6.09867 0.354667 5.992 0.568 5.992H5.88C5.96533 5.992 6.008 5.94933 6.008 5.864V0.424C6.008 0.210667 6.11467 0.104 6.328 0.104H7.672C7.88533 0.104 7.992 0.210667 7.992 0.424V5.864C7.992 5.94933 8.03467 5.992 8.12 5.992H13.432Z" fill="#222222"/>
                  </svg>
                )}
              </div>
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
              <p className="px-4 py-2">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

