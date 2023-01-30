import NextImage from '@/components/NextImage';

const Content = () => {
  return (
    <>
      <h1 className='mt-6 text-2xl sm:mt-14 sm:text-5xl'>
        How to create and use an online booking system?
      </h1>

      <div className='my-10 flex flex-row items-center gap-4'>
        <div className='flex-shrink-0'>
          <a href='#' className='relative block'>
            <NextImage
              className='mx-auto'
              useSkeleton
              src='/images/avatar.png'
              width='64'
              height='64'
              alt='Avtar'
            />
          </a>
        </div>
        <div className=' flex flex-col'>
          <span className='text-sm font-medium text-gray-600 dark:text-white sm:text-lg'>
            Mia Boskovic
          </span>
          <span className='text-xs text-gray-400'>Marketing</span>
        </div>
      </div>

      <div className='mb-8 rounded-2xl bg-[#F0F2F4] p-8 italic leading-[26px]'>
        Imagine you are the owner of a business that has to be accessed through
        tickets. It's an autumn day, people are waiting in a queue under the
        rain. Your clients are getting cold and wet, probably not the best way
        to start the weekend, don´t you think?. How would you manage a weekend
        day when hundreds of people are lined up in front of your business?
      </div>

      <p className='mb-8 leading-[26px]'>
        The person at the entrance collecting the tickets is not going fast
        enough to get the large queue of people into the venue in less than 20
        minutes of waiting. In this moment is when you think about the idea of
        having an online booking system. With an online booking system you will
        be able to know in advance how many people you are going to get each
        day, there will be no need for them to stand in a long line or wait
        because they will have done the work of paying and getting their ticket
        easily through their mobile.No queuing, no waiting line. The customer
        enters directly and easily with the ticket they have on their smartphone
        and has a great day at your venue. You may think thats not possible but,
        in the time it has taken you to read this article, approximately x
        minutes x people could have comfortably accessed your venue. While you
        do other things. Its a step into a new era of making money easily simply
        by having an online booking system. Let us help you manage your business
        and you, do the rest, that is whatever you want to do.
      </p>

      <h4 className='mb-4 text-[21px] font-semibold tracking-[-0.02em]'>
        What do we consider to be the main advantages of having an online
        booking system?
      </h4>
      <p className='leading-[26px]'>
        Apart from the fact that you will still be able to sell tickets online
        at any time of the day. Your business will be closed and in the
        meantime, you will be able to see in real time how your customers buy
        tickets from their smartphone. You will have all the information about
        your venue and the information you need to manage it in your ticketbro
        app on your smartphone. You will be able to check how many people will
        visit your venue every day, how many tickets you have sold, how much
        money you have earned from sales. From anywhere in the world. You can
        create new types of tickets, as well as special days, manage the offers
        you want to put on specific days.
      </p>
      <p className='mt-1'>
        Its time to forget about analogic and switch to digital. You will save
        time and money!
      </p>
    </>
  );
};

export default Content;
