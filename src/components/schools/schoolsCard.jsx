'use client'; // This is a client component 👈🏽

import './schoolsCard.scss';

import Image from 'next/image';
import React from 'react';

export default function SchoolsCard({ school }) {
  return (
    <div className='partner-card flex flex-col items-center justify-center'>
      <div className='logo-container'>
        <Image
          className='partner-logo aspect-w-1 aspect-h-1 md:aspect-w-5 md:aspect-h-4 object-cover'
          src={school.logoPath}
          alt={school.name}
          quality={100}
        />
      </div>
      <div className=''>
        <span
          className='text-white-text experience-text'
          dangerouslySetInnerHTML={{ __html: school.text }}
        ></span>
      </div>
    </div>
  );
}
