import Link from 'next/link';
import React from 'react';

type Breadcrumb = {
  url: string; 
  label: string;
  title: string;
};

export const Breadcrumb = ({ url, label, title }: Breadcrumb) => {
  return (
    <div className="flex items-center gap-1.5 py-8">
      <Link href="/" className='text-sm text-[#222222]'>Home / </Link>  
      <Link href={url} className='text-sm text-[#222222]'>{label} / </Link> 
      <p className='text-sm text-[#222222] opacity-60'>{title}</p>
    </div>
  );
};
