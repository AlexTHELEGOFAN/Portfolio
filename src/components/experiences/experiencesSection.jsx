'use client'; // This is a client component 👈🏽

import './experiencesSection.scss';

import React from 'react';
import ExperiencesCard from './experiencesCard';
import { contentData } from '@/assets/data/data';
import Image from 'next/image';
import lyonImage from '@/assets/images/lyon.jpg';
import Water from '@/assets/svg/water.svg';

export default function ExperiencesSection() {
  return (
    <section className='section-experiences flex flex-col justify-center items-center relative'>
      {/* SVG filter visible dans le DOM principal */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id='turbulence' x='-70%' y='-70%' width='200%' height='200%'>
          <feTurbulence
            id='sea-filter'
            type='turbulence'
            baseFrequency='0.004 0.008'
            numOctaves='2'
            result='turbulence'
            seed='5'
          >
            <animate
              attributeName='baseFrequency'
              dur='20s'
              values='0.004 0.008; 0.006 0.004; 0.004 0.008'
              repeatCount='indefinite'
            />
          </feTurbulence>
          <feDisplacementMap
            in='SourceGraphic'
            in2='turbulence'
            scale='5'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>
      </svg>

      {/* Image reflétée */}
      <div className='background-image absolute'>
        <Image
          src={lyonImage}
          alt=''
          fill
          objectPosition='0% 60%'
          objectFit='cover'
          quality={100}
          className='reflected-image'
        />
      </div>

      <div
        className='overlay absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at center bottom, rgba(0,0,0,0.6), transparent 70%)',
        }}
      />

      {/* Content */}
      <div className='z-20 flex flex-col justify-between h-full'>
        <h3 className='title text-white-text text-center'>Mes expériences</h3>

        {/*Partners list*/}
        <div className='partners-list grid justify-center w-full items-start'>
          {contentData.experiences.map((partner, index) => (
            <ExperiencesCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
