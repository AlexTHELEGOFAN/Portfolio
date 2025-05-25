'use client'; // This is a client component 👈🏽

import './schoolsSection.scss';

import React from 'react';
import { contentData } from '@/assets/data/data';
import Image from 'next/image';
import lyonImage from '@/assets/images/lyon.jpg';
import SchoolsCard from './schoolsCard';

export default function SchoolsSection() {
  return (
    <section className='section-schools flex flex-col justify-center items-center relative'>
      {/* Image */}
      <div className='background-image absolute'>
        <Image
          src={lyonImage}
          alt=''
          fill='true'
          objectPosition='0% 60%'
          objectFit='cover'
          quality={100}
        />
      </div>

      <div className='overlay absolute inset-0 bg-black opacity-60 z-10'></div>

      {/* Content */}
      <div className='z-20 flex flex-col justify-between h-full'>
        <h3 className='title text-white-text text-center'>
          Mon parcours d'études
        </h3>

        {/*Partners list*/}
        <div className='partners-list grid justify-center w-full items-start'>
          {contentData.schools.map((school, index) => (
            <SchoolsCard key={index} school={school} />
          ))}
        </div>
      </div>
    </section>
  );
}
