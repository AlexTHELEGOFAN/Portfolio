'use client'; // This is a client component 👈🏽

import './aboutMe.scss';

import React from 'react';
import { contentData } from '@/assets/data/data';
import Image from 'next/image';
import LegoHead from '@/assets/images/lego_head.png';
import RunShoe from '@/assets/images/run-shoe.png';
import spaceImage from "@/assets/images/space.jpg";

function AboutMe() {
  return (
    <section className='section-intro flex justify-between relative'>
      <Image src={spaceImage} alt="" fill="true" className="image-element"
             quality={100}/>
      <div className='content-container flex with-media'>
        <div className='text-content flex flex-col justify-center'>
          <h3 className='title'>A propos de moi</h3>

          <span
            className='description text-justify'
            dangerouslySetInnerHTML={{ __html: contentData.homeText.text }}
          ></span>
        </div>

        <div className='interests-content flex flex-col justify-center'>
          <h3 className='title'>Centres d&apos;intérêts</h3>

          <ul className='interests-list'>
            <li className='interest-item'>
              <span className='interest-text'>Passionné de LEGO</span>
            </li>
            <li className='interest-item'>
              <span className='interest-text'>
                Sport en salle et course à pied
              </span>
            </li>
            <li className='interest-item'>
              <span className='interest-text'>Cinéma</span>
            </li>
            <li className='interest-item'>
              <span className='interest-text'>Musique</span>
            </li>
            <li className='interest-item'>
              <span className='interest-text'>Jeux vidéo</span>
            </li>
            <li className='interest-item'>
              <span className='interest-text'>Lecture</span>
            </li>
            <li className='interest-item'>
              <span className='interest-text'>Voyages</span>
            </li>
            <li className='interest-item'>
              <span className='interest-text'>
                Animation et modélisation 3D
              </span>
            </li>
          </ul>

          <div className='corner-images'>
            <div className='lego corner-image top-right'>
              <Image
                src={LegoHead}
                alt='LEGO'
                width={80}
                height={80}
                className='corner-icon'
              />
            </div>
            <div className='corner-image bottom-left'>
              <Image
                src={RunShoe}
                alt='Course à pied'
                width={80}
                height={80}
                className='corner-icon'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
