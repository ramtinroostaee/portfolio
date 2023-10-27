import React from 'react';
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
  GlobeAltIcon,
  HashtagIcon
} from '@heroicons/react/outline';
import Header from './Header';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ArrowsExpandIcon
} from '@heroicons/react/solid';

import avatar from 'assets/avatar-2.svg';

import Icon from '@mdi/react';
import {mdiLibrary} from '@mdi/js';

const Resume = () => {
  return (
    <div className='resume-bg w-[1400px] m-auto flex justify-center'>
      <div className='relative font-lato-meduim flex h-[1650px] -ml-10'>
        <div className='w-[400px] flex flex-col bg-[#23282e] text-white relative m-6'>
          <>
            <div className='w-[400px] custom-clip-2 h-[240px] bg-[#282b30] z-10 flex-shrink-0 relative'></div>
            <div className='absolute bg-[#282b30] left-[399px] top-[-1px] w-60 h-[240px] custom-clip-3 z-10'></div>
            {/*<div className=' absolute top-[40px] left-[75px] w-[150px] h-[150px] z-10'><div id='hexagon' className='hexagon h-full' /></div>*/}
            <div className='bg-white absolute top-[40px] left-[125px] w-[150px] h-[150px] z-10 rounded-[50%]'>
              <img src={avatar} alt='avatar' className='rounded-[50%] p-0.5'/>
            </div>
          </>

          <div className='absolute w-1/2 h-full bg-[#2e3238] left-0'></div>
          <div className='absolute w-1/2 h-full bg-[#383d42] left-1/2'></div>

          <div className='z-10'>
            <Header>CONTACT</Header>

            <div className='flex justify-center'>
              <ul className='flex flex-col text-sm my-8'>
                <li className='flex justify-start items-center'>
                  <PhoneIcon className='w-6 h-6 mr-4 my-1'/>
                  <span className='text-base'>+98 921 632 0375</span>
                </li>
                <li className='flex justify-start items-center'>
                  <MailIcon className='w-6 h-6 mr-4 my-1'/>
                  <span className='text-base'>ramtinroostaee@gmail.com</span>
                </li>
                <li className='flex justify-start items-center'>
                  <GlobeAltIcon className='w-6 h-6 mr-4 my-1'/>
                  <a
                    href='https://ramtinroostaee.github.io/portfolio/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-base text-[#007bff88]'
                  >
                    ramtinroostaee.github.io/portfolio
                  </a>
                </li>
                <li className='flex justify-start items-center'>
                  <LocationMarkerIcon className='w-6 h-6 mr-4 my-1'/>
                  <span className='text-base'>Tehran</span>
                </li>
              </ul>
            </div>
            <Header>EDUCATION</Header>

              <div className='flex flex-col text-sm my-8 w-[500] mx-4 text-gray-300'>
                <div className='flex flex-col'>
                  <div className='flex items-center'><AcademicCapIcon className='w-8 h-8 ml-4 mr-2 my-1'/>
                  <span className='text-lg'>Amirkabir University</span></div>
                </div>
                <p className='ml-10 mt-6'>
                  I'm a <b className='text-gray-100 font-lato-bold'>Computer Science </b>
                  student graduating this year. Admitted to Amirkabir University in 1397. <br />
                  I spent most of my time in university studying algorithms and databases and also coding ( Android and Web ).
                  <br /><br />
                  Ranked <b className='text-gray-50 font-lato-bold'>300</b> in konkur
                  <br/>
                  1397 - 1402
                </p>
              </div>

              <div className='flex flex-col text-sm my-8 w-[500] mx-4 text-gray-300'>
                  <div className='flex flex-col'>
                    <div className='flex items-center'><ArrowsExpandIcon className='w-8 h-8 ml-4 mr-2 my-1'/>
                    <span className='text-lg'>Sampad</span></div>
                  </div>
                  <p className='ml-10 mt-6'>
                  Spent 5 years in Sampad schools.
                  my main focus was <b className='text-gray-50 font-lato-bold'> Problem solving</b> skills and analyzing different aspects of a problem.
                  {/*<br /> Main studies mathematics, the Geometry and Physics.*/}
                  <br/><br/>
                  1392 - 1397
                </p>
              </div>

              <div className='flex flex-col text-sm my-8 w-[500] mx-4 text-gray-300'>
                  <div className='flex flex-col'>
                    <div className='flex items-center'><HashtagIcon className='w-8 h-8 ml-4 mr-2 my-1'/>
                    <span className='text-lg'>Astronomy Oplympiad</span></div>
                  </div>
                  <p className='ml-10 mt-2'>
                    Spent 2 years studying Astronomy for olympiad national tests and got
                    <b className='text-gray-50 font-lato-bold'> Bronze Medal</b>.
                    <br/>
                    1396
                  </p>
              </div>
          </div>
        </div>

        <div className='custom-clip-1 w-[800px] h-[300px] mt-6 -ml-[24px] bg-[#e3e3e3] shrink-0 relative'>
          <div className='absolute right-0 bottom-0 w-60 h-48 bg-[#d48400] custom-clip-4'></div>
          <div className='absolute left-36 top-12'>
            <div className='font-lato-bold text-5xl'>RAMTIN ROOSTAEE</div>
            <div className='font-lato-mediumItalic text-xl text-gray-600'>
              REACT WEB DEVELOPER
            </div>
            <p className='font-lato-regular text-sm text-gray-600 mt-8 w-[450px]'>
              Attentive and creative developer with 4 years of experience
              building reusable components and interface features with React, Next JS
              framework. Self-motivated and self-managing.
            </p>
          </div>
        </div>

        <div className='absolute top-[340px] left-[500px] z-10 text-gray-900'>
          <h1 className='text-3xl mb-3 font-lato-heavyItalic'>ABOUT ME</h1>
          <p className='text-sm text-gray-600 mb-6 w-[650px]'>
            I'm a Fifth year Computer Science student in
            <span className='font-lato-bold text-base'> Amirkabir</span>{' '}
            University of Technology. Intrested in UI/UX Design and it's
            combination with Programming. Skilled in react principles and
            <span className='font-lato-bold text-base'> design patterns </span>
            (atomic, hooks, hoc). Looking forward to incoming challenges
            (<span className='font-lato-bold text-base'>This
            resume is purely css</span>). Also spent two years of high school studying
            Astronomy Olympiad.
          </p>


          <h2 className='flex items-center mt-9 mb-10 -ml-5'>
            <BriefcaseIcon className='w-12 mr-6'/> EXPERIENCE
          </h2>

          <ul className='border-l-gray-200 border-l-4'>
            <li className='pb-32 pt-0 relative'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <div className='ml-16'>
                <div>Next Js developer Taaghche 1401 - 1402</div> <br/>
                <div className='text-gray-400 text-sm font-lato-mediumItalic'>
                  mainly worked on technical seo and user experience (help user find books).
                  <br/>
                  improved lcp (under 2.5s) and cls (under 0.1) in landing and product detail in only three months.
                  <br/>
                  this project had no packages and all code were written by taaghche developers.
                </div>
              </div>
            </li>
            <li className='pb-32 pt-0 text-center relative'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <span className='absolute -top-2 left-24'>1401</span>
              <span className='absolute -top-2 left-80'>
                React developer iBaar
              </span>
              <span className='absolute top-4 left-80 text-gray-400 text-left text-sm font-lato-mediumItalic'>
                Technologies:
                Redux Toolkit, Tailwind, React Router, Git Flow, Material, persian tools
                <br/>
                Developed iBaar Dashboard, Bourse Admin panel, Barpardakht panel {/*(3 projects in 4 months)*/}
              </span>
            </li>
            <li className='pb-28 pt-0 text-center relative'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <span className='absolute -top-2 left-24'>1399 - 1400</span>
              <span className='absolute -top-2 left-80'>
                React front-end developer Satplat
              </span>
              <span className='absolute top-4 left-80 text-gray-400 text-left text-sm font-lato-mediumItalic'>
                Technologies:
                Redux, Router, MUI, Mapbox, PWA
                <br/>
                Developed their Dashboard, Admin panel and some outside project
              </span>
            </li>

            <li className='pb-20 pt-0 text-center relative -mt-2'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <span className='absolute -top-2 left-24'>1398</span>{' '}
              <span className='absolute -top-2 left-80'>
                Web developer for aysan-eshop
              </span>
              <span className='absolute top-4 left-80 text-gray-400 text-sm text-left font-lato-mediumItalic'>
                Technologies:
                php, html, css, wordpress plugins
                <br/>
                E-commerce wordpress
              </span>
            </li>
          </ul>

          <h2 className='flex items-center mt-12 mb-6 -ml-5'>
            <Icon className='mr-6' path={mdiLibrary} title='Library' size={2}/>{' '}
            REACT PACKAGES
          </h2>

          <div className='flex items-center w-[600px] flex-wrap'>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>MapGL</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>DeckGl</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>d3-ease</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>
              jalali-moment
            </div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>node-sass</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>date-fns</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>chart.js</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>persian-tools</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>formik</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>yup</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>axios</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>react-router</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>redux-toolkit</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>react-table</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>lodash</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>
              Apollographql
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

// Positive and solution-oriented mindset.3
// Self-motivated and self-managing,
// react designs and patterns (atomic, hooks, hoc)
// api design
// react packages and librarys
