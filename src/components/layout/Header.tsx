import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { MdNavigateNext } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/svg/logo.svg';

const solutions = [
  {
    name: 'Home',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Features',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Case studies',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Pricing',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Blog',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const features = [
  {
    name: 'Home',
    href: '#',
    icon: MdNavigateNext,
  },
  {
    name: 'Features',
    href: '#',
    icon: MdNavigateNext,
  },
  {
    name: 'Case studies',
    href: '#',
    icon: MdNavigateNext,
  },
  {
    name: 'Pricing',
    href: '#',
    icon: MdNavigateNext,
  },
  {
    name: 'Blog',
    href: '#',
    icon: MdNavigateNext,
  },
];

const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className='relative bg-white'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex items-center justify-between py-6 md:space-x-10 lg:justify-start'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <span className='sr-only'>ticketbro</span>
              <Logo className='h-[24px] text-[134.18px]' />
            </a>
          </div>
          <div className='-my-2 -mr-2 lg:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>

          <Popover.Group as='nav' className='hidden space-x-10 lg:flex'>
            <UnstyledLink
              href='#'
              className='text-base font-medium text-gray-700 hover:text-primary-500'
            >
              Home
            </UnstyledLink>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-700',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-primary-500 focus-visible:outline-none'
                    )}
                  >
                    <span>Features</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-700',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                            >
                              <item.icon
                                className='h-6 w-6 flex-shrink-0 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-700',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-primary-500 focus-visible:outline-none'
                    )}
                  >
                    <span>Case studies</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-700',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0'>
                      <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                            >
                              <item.icon
                                className='h-6 w-6 flex-shrink-0 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <UnstyledLink
              href='#'
              className='text-base font-medium text-gray-700 hover:text-primary-500'
            >
              Pricing
            </UnstyledLink>
            <UnstyledLink
              href='#'
              className='text-base font-medium text-gray-700 hover:text-primary-500'
            >
              Blog
            </UnstyledLink>
          </Popover.Group>
          <div className='hidden items-center justify-end md:flex-1 lg:flex lg:w-0'>
            <Button variant='primary'>Get started</Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-40 origin-top-right transform p-2 transition lg:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <Logo className='h-[24px] text-[134.18px]' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  {features.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      <item.icon
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
                        aria-hidden='true'
                      />
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
