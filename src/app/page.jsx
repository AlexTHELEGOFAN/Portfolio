'use client'; // This is a client component 👈🏽

import './globals.scss';

import RootLayout from '@/components/layout/rootLayout';
import HomeBanner from '@/components/homeBanner';
import AboutMe from '@/components/aboutMe';
import ExperiencesSection from '@/components/experiences/experiencesSection';
import SectorSkills from '@/components/skills/sectorSkills';

import Github from '@/assets/svg/github-white.svg';
import Linkedin from '@/assets/svg/linkedin-white.svg';
import ContactSection from '@/components/contact/contactSection';
import { useEffect, useRef } from 'react';
import SchoolsSection from '@/components/schools/schoolsSection';

function HomePage() {
  const topWallRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topWallRef.current) {
        const value = window.scrollY;
        const scaleY = Math.max(0.5, 1 - value * 0.0001); // Ne jamais descendre en-dessous de 0.5
        topWallRef.current.style.transform = `translateY(${
          value * -0.07
        }px) scale(1, ${scaleY})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage propre pour éviter les fuites mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <RootLayout>
      <ul className='top-buttons flex flex-wrap justify-between self-stretch fixed'>
        <li>
          <a
            className='social-media-button flex mr-4'
            href='https://github.com/AlexTHELEGOFAN'
            target='_blank'
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            className='social-media-button flex'
            href='https://www.linkedin.com/in/alexandre-pozzi-29875a201/'
            target='_blank'
          >
            <Linkedin />
          </a>
        </li>
        <button className='cv-button flex items-center justify-center absolute'>
          {/*Curriculum Vitae*/}
          {/*<FontAwesomeIcon icon={faAngleRight} size="xl" className="ml-3"/>*/}
        </button>
      </ul>

      {/* Bannière d'accueil */}
      <HomeBanner />

      <div className='content'>
        <AboutMe />

        <SchoolsSection />

        <ExperiencesSection />

        <SectorSkills />

        <ContactSection />
      </div>
    </RootLayout>
  );
}

export default HomePage;
