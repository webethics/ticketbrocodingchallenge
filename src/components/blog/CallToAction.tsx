import Button from '@/components/buttons/Button';

const CallToAction = () => {
  return (
    <div className='mt-20 bg-blue-950 px-5 py-8 text-center text-white sm:py-20'>
      <div className='mx-auto max-w-md'>
        <h2 className='mb-4 text-2xl font-bold sm:text-4xl'>
          Do you want to know more about ticketbro?
        </h2>
        <p className='mb-6 text-xs sm:mb-14 sm:text-base'>
          Let’s get started. It only takes a few minutes.
        </p>
        <Button className='min-w-[189px] justify-center border-0 bg-white text-secondary'>
          Get started
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
