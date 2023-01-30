import Banner from '@/components/blog/Banner';
import CallToAction from '@/components/blog/CallToAction';
import Content from '@/components/blog/Content';
import RelatedArticle from '@/components/blog/RelatedArticle';

const index = () => {
  return (
    <>
      <div className='relative mx-auto max-w-[720px] px-4 sm:px-6'>
        <Banner />
        <Content />
      </div>

      <RelatedArticle />
      <CallToAction />
    </>
  );
};

export default index;
