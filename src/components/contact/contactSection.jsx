'use client'; // This is a client component 👈🏽

import './contactSection.scss';

import React from 'react';

import Image from 'next/image';
import redDigitalImage from '@/assets/images/red-digital.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactSection() {
  const emailPerso = 'alexandre.pozzi69';
  const emailPro = 'alexandre.pozzi';
  const emailCompanyDomain = 'atos.net';

  return (
    <section className='section-contact index-1 flex flex-col justify-center items-center relative'>
      {/* Image */}
      <div className='background-image absolute'>
        <Image
          src={redDigitalImage}
          alt=''
          fill='true'
          className={"image-object"}
          quality={100}
        />
      </div>

      <div className='overlay absolute inset-0 bg-black opacity-60 z-10'></div>

      {/* Content */}
      <div className='z-20 flex flex-col justify-between h-full w-[60%]'>
        <h3 className='title text-white-text text-center'>
          Me contacter par email
        </h3>

        <div className='text-white '>
          <p className='max-w-2xl mb-10'>
            Voici mon adresse email au cas-où vous voulez me contacter :
          </p>

          <div className='flex justify-between'>
            <div>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailPerso}@gmail.com&su=Contact%20depuis%20votre%20site`}
                target='_blank'
                rel='noopener noreferrer'
                className='button-white-icon-right'
              >
                Adresse email personnelle
                <FontAwesomeIcon icon={faEnvelope} size='xl' className='ml-3' />
              </a>
            </div>
            <div>
              <a
                href={`mailto:${emailPro}@${emailCompanyDomain}?subject=Contact%20depuis%20votre%20site&body=Bonjour,%0AJe%20souhaite%20vous%20contacter%20concernant...`}
                className='button-white-icon-right'
              >
                Adresse email professionnelle
                <FontAwesomeIcon icon={faEnvelope} size='xl' className='ml-3' />
              </a>
            </div>
          </div>

          {/* <div className='w-20 h-1 bg-blue-400 mx-auto'></div> */}

          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
