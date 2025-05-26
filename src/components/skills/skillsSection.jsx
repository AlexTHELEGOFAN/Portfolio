'use client'; // This is a client component 👈🏽

import './skillsSection.scss';

import React from 'react';
import Image from 'next/image';
import Angular from '@/assets/svg/Angular.svg';
import Bootstrap from '@/assets/svg/Bootstrap.svg';
import Cursor from '@/assets/svg/CursorAI.svg';
import Css3 from '@/assets/svg/Css3.svg';
import Dbeaver from '@/assets/svg/Dbeaver.svg';
import Docker from '@/assets/svg/Docker.svg';
import Express from '@/assets/svg/Expressjs.svg';
import Feedly from '@/assets/svg/Feedly.svg';
import Figma from '@/assets/svg/Figma.svg';
import Gatsby from '@/assets/svg/Gatsby.svg';
import GanttProject from '@/assets/images/GanttProject.png';
import Html5Logo from '@/assets/svg/Html5.svg';
import Git from '@/assets/svg/Git.svg';
import Gitlab from '@/assets/svg/Gitlab.svg';
import Github from '@/assets/svg/Github.svg';
import Illustrator from '@/assets/svg/Illustrator.svg';
import Inoreader from '@/assets/images/Inoreader.png';
import Jasmine from '@/assets/images/Jasmine.png';
import Java from '@/assets/svg/Java.svg';
import JavaScript from '@/assets/svg/JavaScript.svg';
import Jest from '@/assets/svg/Jest.svg';
import Jira from '@/assets/svg/Jira.svg';
import Laravel from '@/assets/svg/Laravel.svg';
import mongoDB from '@/assets/images/mongoDB.png';
import noSQL from '@/assets/images/noSQL.png';
import Mysql from '@/assets/svg/Mysql.svg';
import Nextjs from '@/assets/svg/Nextjs.svg';
import Oracle from '@/assets/svg/oracle-6.svg';
import Photoshop from '@/assets/svg/Photoshop.svg';
import Php from '@/assets/svg/Php.svg';
import PhpMyAdmin from '@/assets/images/PhpMyAdmin.png';
import Postman from '@/assets/svg/Postman.svg';
import ReactLogo from '@/assets/svg/React.svg';
import ReactNative from '@/assets/images/react-native.png';
import Postgresql from '@/assets/svg/Postgresql.svg';
import Scrum from '@/assets/images/Scrum.png';
import Sql from '@/assets/svg/Sql.svg';
import Swagger from '@/assets/svg/Swagger.svg';
import Talend from '@/assets/images/Talend.png';
import Tailwindcss from '@/assets/svg/Tailwindcss.svg';
import Typescript from '@/assets/svg/Typescript.svg';
import TDLR from '@/assets/images/TDLR.jpg';
import Vscode from '@/assets/svg/Vscode.svg';
import WebStorm from '@/assets/svg/WebStorm.svg';
import WordPress from '@/assets/images/WordPress.png';
import NodeJS from '@/assets/svg/NodeJS.svg';

function SkillsSection() {
  return (
    <section className='section-white section-skills flex justify-between relative'>
      <div className='content-container flex with-media'>
        {/*Content*/}
        <div className='text-content flex flex-col justify-center'>
          <h3 className='title'>Mes compétences et certificats</h3>

          <div className='content-card'>
            {/* Colonne de gauche */}
            <div className='skills-column'>
              {/* Front-end Development */}
              <ol className='timeline-list'>
                <h2 className='skills-category'>Développement front-end</h2>
                <li className='timeline-item'>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Langages de programmation
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills' title='HTML'>
                        <Html5Logo />
                      </div>
                      <span className='skill-name'>HTML</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Css3 />
                      </div>
                      <span className='skill-name'>CSS</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <JavaScript />
                      </div>
                      <span className='skill-name'>JavaScript</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Librairies et frameworks
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Bootstrap />
                      </div>
                      <span className='skill-name'>Bootstrap</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Tailwindcss />
                      </div>
                      <span className='skill-name'>Tailwind CSS</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <ReactLogo />
                      </div>
                      <span className='skill-name'>React</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Angular />
                      </div>
                      <span className='skill-name'>Angular</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Gatsby />
                      </div>
                      <span className='skill-name'>Gatsby</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Nextjs />
                      </div>
                      <span className='skill-name'>Next.js</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={ReactNative}
                          alt='React Native'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>React Native</span>
                    </li>
                  </ul>
                </li>
              </ol>

              {/* Back-end Development */}
              <ol className='timeline-list'>
                <h2 className='skills-category'>Développement back-end</h2>
                <li className='timeline-item'>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Langages de programmation
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Php />
                      </div>
                      <span className='skill-name'>PHP</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Java />
                      </div>
                      <span className='skill-name'>Java</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Librairies et frameworks
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Express />
                      </div>
                      <span className='skill-name'>Express.js</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Typescript />
                      </div>
                      <span className='skill-name'>Typescript</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <NodeJS />
                      </div>
                      <span className='skill-name'>Node.js</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Laravel />
                      </div>
                      <span className='skill-name'>Laravel</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={WordPress}
                          alt='WordPress'
                          quality={100}
                          className='icon-box-image'
                        />{' '}
                      </div>
                      <span className='skill-name'>WordPress</span>
                    </li>
                  </ul>
                </li>
              </ol>

              {/* BDD */}
              <ol className='timeline-list'>
                <h2 className='skills-category'>Base de données et API</h2>
                <li className='timeline-item'>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Langages de programmation
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Sql />
                      </div>
                      <span className='skill-name'>SQL</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Mysql />
                      </div>
                      <span className='skill-name'>MySQL</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Oracle />
                      </div>
                      <span className='skill-name'>Oracle</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={noSQL}
                          alt='noSQL'
                          width={100}
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>NoSQL</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Postgresql />
                      </div>
                      <span className='skill-name'>PostgreSQL</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={mongoDB}
                          alt='mongoDB'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>MongoDB</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Applications
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Docker />
                      </div>
                      <span className='skill-name'>Docker</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={PhpMyAdmin}
                          alt='PhpMyAdmin'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>PhpMyAdmin</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Postman />
                      </div>
                      <span className='skill-name'>Postman</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Swagger />
                      </div>
                      <span className='skill-name'>Swagger</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Dbeaver />
                      </div>
                      <span className='skill-name'>DBeaver</span>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Colonne de droite */}
            <div className='skills-column'>
              {/* Autres */}
              <ol className='timeline-list'>
                <h2 className='skills-category'>Autres</h2>
                <li className='timeline-item'>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    VCS (Version Control System)
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Git />
                      </div>
                      <span className='skill-name'>Git</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Github />
                      </div>
                      <span className='skill-name'>GitHub</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Gitlab />
                      </div>
                      <span className='skill-name'>GitLab</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Test logiciel
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Jest />
                      </div>
                      <span className='skill-name'>Jest</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={Jasmine}
                          alt='Jasmine'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>Jasmine</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Data
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={Talend}
                          alt='Talend'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>Talend</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Veille technologique
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Feedly />
                      </div>
                      <span className='skill-name'>Feedly</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={Inoreader}
                          alt='Inoreader'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>Inoreader</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={TDLR}
                          alt='TDLR'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>TDLR</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Editeur de code (IDE)
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Vscode />
                      </div>
                      <span className='skill-name'>VS Code</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <WebStorm />
                      </div>
                      <span className='skill-name'>WebStorm</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Cursor />
                      </div>
                      <span className='skill-name'>Cursor</span>
                    </li>
                  </ul>
                </li>
              </ol>

              {/* Design */}
              <ol className='timeline-list'>
                <h2 className='skills-category'>Design</h2>

                <li className='timeline-item'>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Applications
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Figma />
                      </div>
                      <span className='skill-name'>Figma</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Photoshop />
                      </div>
                      <span className='skill-name'>Photoshop</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Illustrator />
                      </div>
                      <span className='skill-name'>Illustrator</span>
                    </li>
                  </ul>
                </li>
              </ol>

              {/* Project Management */}
              <ol className='timeline-list'>
                <h2 className='skills-category'>Gestion de projet</h2>
                <li className='timeline-item'>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Méthodes et framework
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={Scrum}
                          alt='Scrum'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>Scrum</span>
                    </li>
                  </ul>
                  <h4 className='h4 timeline-item-title-skills skills-subcategory'>
                    Applications
                  </h4>
                  <ul className='skills-list'>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Jira />
                      </div>
                      <span className='skill-name'>Jira</span>
                    </li>
                    <li className='skills-item'>
                      <div className='icon-box icon-box-skills'>
                        <Image
                          src={GanttProject}
                          alt='GanttProject'
                          quality={100}
                          className='icon-box-image'
                        />
                      </div>
                      <span className='skill-name'>Gantt Project</span>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
