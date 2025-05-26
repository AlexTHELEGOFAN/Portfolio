'use client'; // This is a client component 👈🏽

import './experiencesCard.scss';

import Image from 'next/image';
import React from 'react';

export default function ExperiencesCard({ partner }) {
  return (
    <div className='partner-card flex flex-col items-center justify-center'>
      <div className='logo-container'>
        <Image
          className='partner-logo
          aspect-w-1 aspect-h-1 md:aspect-w-1 md:aspect-h-1

          object-cover'
          src={partner.logoPath}
          alt={partner.name}
          quality={100}
        />
      </div>
      <div className=''>
        <span
          className='text-white-text experience-text'
          dangerouslySetInnerHTML={{ __html: partner.text }}
        ></span>
      </div>
    </div>
  );
}
