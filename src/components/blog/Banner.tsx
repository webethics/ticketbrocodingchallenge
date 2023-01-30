import NextImage from '@/components/NextImage';

const Banner = () => {
  return (
    <NextImage
      useSkeleton
      className='-mx-4 h-auto w-auto overflow-hidden sm:mx-0 sm:rounded-[32px] md:mt-10'
      src='/images/blog-lg-img.png'
      width='672'
      height='408'
      alt='Blog Image'
    />
  );
};

export default Banner;
