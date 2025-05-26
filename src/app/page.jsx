'use client'; // This is a client component 👈🏽

import './globals.scss';

import React, { useEffect } from 'react';

import Github from '@/assets/svg/github-white.svg';
import Linkedin from '@/assets/svg/linkedin-white.svg';

import RootLayout from '@/components/layout/rootLayout';
import HomeBanner from '@/components/homeBanner';
import AboutMe from '@/components/aboutMe';
import SchoolsSection from '@/components/schools/schoolsSection';
import ExperiencesSection from '@/components/experiences/experiencesSection';
import SkillsSection from '@/components/skills/skillsSection';
import ContactSection from '@/components/contact/contactSection';

function HomePage() {

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.includes('#')) {
      const scrollAmount = window.innerHeight * 0.05; // 5% de la hauteur de la fenêtre
      window.scrollBy(0, -scrollAmount); // Faire défiler vers le haut
    }
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
        <button className='cv-button flex items-center justify-center absolute'
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CV_Alexandre_Pozzi.pdf';
                  link.download = 'CV_Alexandre_Pozzi.pdf'; // nom de fichier côté utilisateur
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
        >

        </button>
      </ul>

      <HomeBanner />

      <div className='content'>
        <AboutMe />

        <SchoolsSection />

        <ExperiencesSection />

        <SkillsSection />

        <ContactSection />
      </div>
    </RootLayout>
  );
}

export default HomePage;
