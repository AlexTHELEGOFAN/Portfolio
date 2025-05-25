'use client'; // This is a client component 👈🏽

import './aboutMe.scss';

import React from 'react';
import { contentData } from '@/assets/data/data';
import Image from 'next/image';
import LegoHead from '@/assets/images/lego_head.png';
import RunShoe from '@/assets/images/run-shoe.png';

function AboutMe() {
  return (
    <section className='section-intro flex justify-between relative'>
      {/*' : ' without-media'}*/}
      <div className={`content-container flex with-media`}>
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

        {/*{media &&*/}

        {/*    <div className="media-container flex justify-center items-center">*/}
        {/*        {media.mediaType === "video" &&*/}
        {/*            <iframe*/}
        {/*                width="560"*/}
        {/*                height="315"*/}
        {/*                src={media.src}*/}
        {/*                title={media.title}*/}
        {/*                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
        {/*                allowFullScreen*/}
        {/*            ></iframe>*/}
        {/*        }*/}
        {/*        {media.mediaType === "pdf" &&*/}
        {/*            <iframe*/}
        {/*                width="100%"*/}
        {/*                height="460px"*/}
        {/*                src={media.src}*/}
        {/*                title={media.title}*/}
        {/*                style={{border: "none"}}*/}
        {/*            ></iframe>*/}
        {/*        }*/}
        {/*    </div>*/}
        {/*}*/}
      </div>
    </section>
  );
}

export default AboutMe;
