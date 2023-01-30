import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

import IconButton from '@/components/buttons/IconButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import Logo from '~/svg/logo.svg';

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <div className='m-auto flex max-w-6xl flex-wrap justify-center pt-14 pb-8 text-gray-800'>
          <div className='flex w-full flex-col p-5 sm:w-48 '>
            <div className=' mb-6 font-bold uppercase text-secondary'>
              <Logo className='h-[24px] text-[134.18px]' />
            </div>
            <div className='flex items-center gap-1'>
              <IconButton
                className='min-h-0 !min-w-[27px] !p-0 text-2xl text-gray-400'
                variant='ghost'
                icon={AiFillFacebook}
              />
              <IconButton
                className='min-h-0 !min-w-[27px] !p-0 text-2xl text-gray-400'
                variant='ghost'
                icon={AiFillYoutube}
              />
              <IconButton
                className='min-h-0 !min-w-[27px] !p-0 text-2xl text-gray-400'
                variant='ghost'
                icon={AiFillInstagram}
              />
              <IconButton
                className='min-h-0 !min-w-[27px] !p-0 text-2xl text-gray-400'
                variant='ghost'
                icon={AiFillLinkedin}
              />
              <IconButton
                className='h-[20px] !min-h-0 w-[20px] !min-w-0 rounded-sm bg-gray-400 !p-0 text-sm text-white hover:bg-gray-400'
                variant='ghost'
                icon={FaTiktok}
              />
            </div>
          </div>
          <div className='flex w-2/4 flex-col p-5 sm:w-48'>
            <div className='font-semibold text-secondary'>Product</div>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Selfstarter <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Enterprise <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Pricing <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
          </div>
          <div className='flex w-2/4 flex-col p-5 sm:w-48 '>
            <div className=' font-semibold  text-secondary'>Features</div>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Analytics <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Workload <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Bookable 24/7
            </UnstyledLink>
          </div>
          <div className='flex w-2/4 flex-col p-5 sm:w-48 '>
            <div className=' font-semibold  text-secondary'>Company</div>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Careers
              <span className='ml-2 inline-block rounded-lg bg-[#E6E8FE] p-4 py-1 px-2 text-sm text-primary-500'>
                Hiring
              </span>
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              About us <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Blog
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Contact Sales
            </UnstyledLink>
          </div>
          <div className='flex w-2/4 flex-col p-5 sm:w-48 '>
            <div className=' font-semibold  text-secondary'>Help</div>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              FAQs <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Customer support{' '}
            </UnstyledLink>
            <UnstyledLink
              className='mt-3 inline-block text-gray-500 hover:text-primary-500'
              href='#/'
            >
              Help center <span className='p-1 text-xs text-teal-600'></span>
            </UnstyledLink>
          </div>
          <div className='flex w-full flex-col p-5 sm:w-48 '>
            <div className='font-semibold  text-secondary'>Get the app</div>
            <UnstyledLink className='mt-3 inline-block' href='#/'>
              <NextImage
                useSkeleton
                className='h-auto w-auto'
                src='/images/app-store-btn.png'
                width='133'
                height='44'
                alt='app-store-btn'
              />
            </UnstyledLink>
            <UnstyledLink className='mt-3 inline-block' href='#/'>
              <NextImage
                useSkeleton
                className='h-auto w-auto'
                src='/images/google-play.png'
                width='133'
                height='40'
                alt='google-play'
              />
            </UnstyledLink>
          </div>
        </div>
      </div>

      <div className='bg-blue-950 pt-2 '>
        <div className='m-auto flex max-w-6xl flex-col-reverse items-center  justify-between px-3 pb-5 pt-5 text-sm text-gray-400 sm:flex-col md:flex-row'>
          <div className='mt-4 text-xs sm:mt-0'>
            © Copyright 2023 ticketbro GmbH
          </div>
          <nav className='rounded-md text-[13px]'>
            <ol className='list-reset flex flex-col gap-4 text-center sm:flex-row sm:gap-0 sm:text-left'>
              <li>
                <UnstyledLink className='hover:text-white' href='#/'>
                  Imprint
                </UnstyledLink>
              </li>
              <li className='hidden sm:block'>
                <span className='mx-2 text-gray-500'>|</span>
              </li>
              <li>
                <UnstyledLink className='hover:text-white' href='#/'>
                  Data policy
                </UnstyledLink>
              </li>
              <li className='hidden sm:block'>
                <span className='mx-2 text-gray-500'>|</span>
              </li>
              <li>
                <UnstyledLink className='hover:text-white' href='#/'>
                  Terms & conditions
                </UnstyledLink>
              </li>
              <li className='hidden sm:block'>
                <span className='mx-2 text-gray-500'>|</span>
              </li>
              <li>
                <UnstyledLink
                  href='#/'
                  className='flex items-center justify-center hover:text-white sm:justify-start'
                >
                  <HiOutlineGlobeAlt className='mr-1' />
                  English
                </UnstyledLink>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
