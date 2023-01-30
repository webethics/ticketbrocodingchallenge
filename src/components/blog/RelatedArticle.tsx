import React from 'react';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const RelatedArticle = () => {
  return (
    <div className='mx-auto mt-12 max-w-7xl px-6 sm:mt-20'>
      <div className='mb-8 text-center sm:mb-14'>
        <h2 className='mb-3.5 text-2xl sm:text-4xl'>Related articles</h2>
        <p className='text-gray-500'>
          You might be interested in these articles. Don’t miss them!
        </p>
      </div>
      <div className='grid-cols-auto  mx-auto grid max-w-[1024px] justify-center gap-8 sm:grid-cols-2 sm:justify-items-start sm:gap-5 md:grid-cols-3'>
        <div className='max-w-[320px] sm:max-w-none'>
          <NextImage
            useSkeleton
            className='mb-4 h-auto w-full'
            src='/images/article-img-1.png'
            width='320'
            height='320'
            alt='Article Image'
          />
          <span className='rounded-lg bg-[#F0F2F4] py-1 px-2 text-xs'>
            News
          </span>
          <h4 className='text-1xl my-4 lg:text-2xl'>
            Three keys to keeping your customers satisfied.
          </h4>
          <ul className='flex items-center text-[13px]'>
            <li className='inline-flex items-center'>
              <span className='text-gray-500 '>Inés Guerrero</span>

              <span className='mx-2 h-1 w-1 rounded-2xl bg-[#CBD5E1]' />
            </li>
            <li className='inline-flex items-center'>
              <span className='text-gray-500 '>Mar 20, 2023</span>

              <span className='h-0.5 w-0.5 bg-[#CBD5E1]' />
            </li>
          </ul>
        </div>
        <div className='max-w-[320px] sm:max-w-none'>
          <NextImage
            useSkeleton
            className='mb-4 h-auto w-full'
            src='/images/article-img-2.png'
            width='320'
            height='320'
            alt='Article Image'
          />
          <span className='rounded-lg bg-[#F0F2F4] py-1 px-2 text-xs'>
            News
          </span>
          <h4 className='text-1xl my-4 lg:text-2xl'>
            Top 5 booking features that makes a good booking system.
          </h4>
          <ul className='flex items-center text-[13px]'>
            <li className='inline-flex items-center'>
              <span className='text-gray-500 '>Mia Boskovic</span>

              <span className='mx-2 h-1 w-1 rounded-2xl bg-[#CBD5E1]' />
            </li>
            <li className='inline-flex items-center'>
              <span className='text-gray-500 '>Mar 20, 2023</span>

              <span className='h-0.5 w-0.5 bg-[#CBD5E1]' />
            </li>
          </ul>
        </div>
        <div className='max-w-[320px] sm:max-w-none'>
          <NextImage
            useSkeleton
            className='mb-4 h-auto w-full'
            src='/images/article-img-3.png'
            width='320'
            height='320'
            alt='Article Image'
          />
          <span className='rounded-lg bg-[#F0F2F4] py-1 px-2 text-xs'>
            News
          </span>
          <h4 className='text-1xl my-4 lg:text-2xl'>
            Faster sales with active analytics.
          </h4>
          <ul className='flex items-center text-[13px]'>
            <li className='inline-flex items-center'>
              <span className='text-gray-500 '>Inés Guerrero</span>

              <span className='mx-2 h-1 w-1 rounded-2xl bg-[#CBD5E1]' />
            </li>
            <li className='inline-flex items-center'>
              <span className='text-gray-500 '>Mar 20, 2023</span>

              <span className='h-0.5 w-0.5 bg-[#CBD5E1]' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticle;
