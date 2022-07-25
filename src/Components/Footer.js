import React from 'react'
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-sky-100 bangla-font'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 '>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 '>
          <div className='flex mt-8 space-x-6 text-gray-600 '>
            <a
              href='www.facebook.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsFacebook size={25} />
            </a>

            <a
              href='www.twitter.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsTwitter size={25} />
            </a>
            <a
              href='www.github.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BsGithub size={25} />
            </a>
            <a
              href='www.website.com/'
              target='_blank'
              className='p-4 w-2.5 font-medium cursor-pointer'
            >
              <BiWorld size={25} />
            </a>
          </div>
          <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 '>
            <div>
              <p className='font-medium '>সেবাসমূহ </p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  প্রাণী খাদ্য {' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  প্রাণী সেবা {' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  মেডিসিন {' '}
                </a>
              </nav>
            </div>
            <div>
              <p className='font-medium '>সাহায্যকারী লিংক </p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  যোগাযোগ{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  FAQs{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  সরাসরি কথোপকথন{' '}
                </a>
              </nav>
            </div>
            <div>
              <p className='font-medium '>আইনি</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500 '>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  গোপনীয়তা নীতি{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  শর্তাবলী{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  ফেরত ব্যবস্থা{' '}
                </a>
                <a className='hover:opacity-75 ' href='true'>
                  {' '}
                  অ্যাক্সেসযোগ্যতা{' '}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className='mt-4 text-xs text-gray-800 '>©2022 petInfo by Jihan Binte Jashim</p>
      </div>
    </footer>
  )
}

export default Footer
