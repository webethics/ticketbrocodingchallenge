import Banner from '@/components/blog/Banner';
import BlogContent from '@/components/blog/BlogContent';
import CallToAction from '@/components/blog/CallToAction';
import RelatedArticle from '@/components/blog/RelatedArticle';

const index = () => {
  return (
    <>
      <div className='relative mx-auto max-w-[720px] px-4 sm:px-6'>
        <Banner />
        <BlogContent />
      </div>
      <RelatedArticle />
      <CallToAction />
    </>
  );
};

export default index;
