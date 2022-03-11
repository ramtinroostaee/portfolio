import React from 'react';
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
  GlobeAltIcon,
} from '@heroicons/react/outline';
import Header from './Header';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CursorClickIcon,
} from '@heroicons/react/solid';

import satplat from 'assets/resumeLogos/satplat.png';
import logo from 'assets/resumeLogos/logo-2.png';
import avatar from 'assets/avatar-2.svg';

import Icon from '@mdi/react';
import { mdiLibrary } from '@mdi/js';

const Resume = () => {
  return (
    <div className='resume-bg w-[1300px] m-auto flex justify-center'>
      <div className='relative font-lato-meduim flex h-[1450px]'>
        <div className='w-[300px] flex flex-col bg-[#23282e] text-white relative m-6'>
          <>
            <div className='w-[300px] custom-clip-2 h-[240px] bg-[#282b30] z-10 flex-shrink-0 relative'></div>
            <div className='absolute bg-[#282b30] left-[299px] top-[-1px] w-60 h-[240px] custom-clip-3 z-10'></div>
            <div className='bg-white absolute top-[40px] left-[75px] w-[150px] h-[150px] z-10 rounded-[50%]'>
              <img src={avatar} alt='avatar' className='rounded-[50%] p-0.5' />
            </div>
          </>

          <div className='absolute w-1/2 h-full bg-[#2e3238] left-0'></div>
          <div className='absolute w-1/2 h-full bg-[#383d42] left-1/2'></div>

          <div className='z-10'>
            <Header>CONTACT</Header>

            <ul className='flex flex-col text-sm my-8'>
              <li className='flex justify-start px-5 items-center'>
                <MailIcon className='w-6 h-6 mx-6 my-1' />
                <span className='text-base'>ramtinroostaee@gmail.com</span>
              </li>
              <li className='flex justify-start px-5 items-center'>
                <PhoneIcon className='w-6 h-6 mx-6 my-1' />
                <span className='text-base'>+98 921 632 0375</span>
              </li>
              <li className='flex justify-start px-5 items-center'>
                <LocationMarkerIcon className='w-6 h-6 mx-6 my-1' />
                <span className='text-base'>KARAJ</span>
              </li>
              <li className='flex justify-start px-5 items-center'>
                <GlobeAltIcon className='w-6 h-6 mx-6 my-1' />
                <a
                  href='https://ramtinroostaee.github.io/portfolio/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-base text-[#007bff88]'
                >
                  github.io/portfolio
                </a>
              </li>
            </ul>

            <Header className='mt-12'>SKILLS</Header>

            <ul className='my-5 px-6'>
              <li className='flex flex-col my-2'>
                <span>React, Next</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-11/12 h-1 absolute left-0'></span>
                </span>
              </li>
              <li className='flex flex-col my-2'>
                <span>Git</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-7/12 h-1 absolute left-0'></span>
                </span>
              </li>
              <li className='flex flex-col my-2'>
                <span>Redux, Thunk</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-10/12 h-1 absolute left-0'></span>
                </span>
              </li>
              <li className='flex flex-col my-2'>
                <span>Tailwind</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-9/12 h-1 absolute left-0'></span>
                </span>
              </li>
              <li className='flex flex-col my-2'>
                <span>Mapbox</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-10/12 h-1 absolute left-0'></span>
                </span>
              </li>
              <li className='flex flex-col my-2'>
                <span>MaterialUI, HeadlessUI</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-8/12 h-1 absolute left-0'></span>
                </span>
              </li>
              <li className='flex flex-col my-2'>
                <span>ChartJS</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-9/12 h-1 absolute left-0'></span>
                </span>
              </li>
            </ul>

            <Header>LANGUAGE</Header>

            <ul className='my-5 px-6'>
              <li className='flex flex-col my-2'>
                <span>English</span>
                <span className='w-full bg-[#d48400] h-1 relative '>
                  <span className='bg-white w-9/12 h-1 absolute left-0'></span>
                </span>
              </li>
            </ul>

            <Header>Project Links</Header>
            <ul className='my-5 px-6 flex flex-col'>
              <li className='flex items-center my-2'>
                <span className='align-middle h-10'>
                  <img alt='satplat' width='40px' height='40px' src={satplat} />
                </span>
                <a
                  href='https://dashboard.satplat.com/'
                  className='my-2 text-[#e3e3e3] ml-5'
                  target='_blank'
                  rel='noreferrer'
                >
                  dashboard.satplat.com
                </a>
              </li>
              <li className='flex items-center my-2'>
                <span className='ml-[4px]'>
                  <img alt='logo' width='34px' height='34px' src={logo} />
                </span>
                <a
                  href='http://uldms.abopa.ir/'
                  className='my-2 text-[#e3e3e3] ml-5'
                  target='_blank'
                  rel='noreferrer'
                >
                  uldms.abopa.ir
                </a>
              </li>
              <li className='flex items-center my-1'>
                <span className='ml-3'>
                  {/* <Image alt='aysan' width='30px' height='30px' src={aysan} /> */}
                  <CursorClickIcon className='w-6' />
                </span>
                <a
                  href='https://aysan-eshop.ir/'
                  className='my-2 text-[#e3e3e3] ml-5'
                  target='_blank'
                  rel='noreferrer'
                >
                  aysan-eshop.ir
                </a>
              </li>
            </ul>
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
              Attentive and creative developer with 2 years of experience
              building reusable components and interface features with React JS
              framework. Self-motivated and self-managing.
            </p>
            {/* <p className='font-lato-regular text-sm text-gray-600 mt-8 w-[490px]'>
              front-end web developer, skilled in react library and it's third
              party packages. Self-motivated and self-managing. University
              student currntly (Term 8).
            </p> */}
          </div>
        </div>

        <div className='absolute top-[340px] left-[400px] z-10 text-gray-900'>
          <h1 className='text-3xl mb-3 font-lato-heavyItalic'>ABOUT ME</h1>
          <p className='text-sm text-gray-600 mb-6 w-[650px]'>
            I'm a Forth year Computer Science student in
            <span className='font-lato-bold text-base'> Amirkabir</span>{' '}
            University of Technology. Intrested in UI/UX Design and it's
            combination with Programming. Skilled in react designs and{' '}
            <span className='font-lato-bold text-base'>patterns </span>
            (atomic, hooks, hoc). Looking forward to imcoming{' '}
            <span className='font-lato-bold text-base'>challenges</span> (This
            resume is purly css). Also spend two years of highschool studying
            Astronomy Olympiad.
          </p>
          <h2 className='flex items-center my-12'>
            <AcademicCapIcon className='w-12 mr-6 -ml-5' /> EDUCATION
          </h2>

          <ul className='border-l-gray-200 border-l-4'>
            <li className='pb-28 pt-0 text-center relative -mt-2'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <span className='absolute -top-2 left-24'>1397</span>
              <span className='absolute -top-2 left-80'>
                Admitted to Amirkabir University
              </span>
              <span className='absolute top-4 left-80 text-gray-400 text-sm font-lato-mediumItalic'>
                Ranked 2100 in konkur
              </span>
            </li>
            <li className='pb-24 pt-0 text-center relative'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <span className='absolute -top-2 left-24'>1396</span>
              <span className='absolute -top-2 left-80'>
                Bronze Medal of Astronomy Olympiad
              </span>
              <span className='absolute top-4 left-80 text-gray-400 text-sm font-lato-mediumItalic'>
                Ranked in 40
              </span>
            </li>
          </ul>

          <h2 className='flex items-center my-10 -ml-5'>
            <BriefcaseIcon className='w-12 mr-6' /> EXPERIENCE
          </h2>

          <ul className='border-l-gray-200 border-l-4'>
            <li className='pb-28 pt-0 text-center relative'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <span className='absolute -top-2 left-24'>1399 - 1400</span>
              <span className='absolute -top-2 left-80'>
                React front-end developer Satplat
              </span>
              <span className='absolute top-4 left-80 text-gray-400 text-left text-sm font-lato-mediumItalic'>
                Developed their Dashboard, Admin panel and some outside project
              </span>
            </li>

            <li className='pb-24 pt-0 text-center relative -mt-2'>
              <span className='w-3 h-3 rounded-[50%] bg-slate-300 absolute -left-2 top-0'></span>
              <span className='absolute -top-2 left-24'>1398</span>{' '}
              <span className='absolute -top-2 left-80'>
                Web developer for aysan-eshop
              </span>
              <span className='absolute top-4 left-80 text-gray-400 text-sm font-lato-mediumItalic'>
                E-commerce wordpress
              </span>
            </li>
          </ul>

          <h2 className='flex items-center mt-12 mb-6 -ml-5'>
            <Icon className='mr-6' path={mdiLibrary} title='Library' size={2} />{' '}
            REACT PACKAGES
          </h2>

          <div className='flex items-center w-[600px] flex-wrap'>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>ReactMapGL</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>DeckGl</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>d3-ease</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>turf</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>
              jalali-moment
            </div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>node-sass</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>
              react-datepicker2
            </div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>formik</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>axios</div>
            <div className='bg-[#007bff25] p-1 rounded-md m-2'>
              apollographql
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
