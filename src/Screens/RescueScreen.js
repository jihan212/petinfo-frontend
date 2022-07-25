import React from 'react'
import Header from '../Components/Header'
import {
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsTelephoneFill,
} from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'
import obhoyoaronno from '../Images/obhoyoaronno.jpg'
import robinhood from '../Images/robinhood.jpg'
import art from '../Images/art.jpg'

const RescueScreen = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 m-8 p-8 bangla-font'>
        <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <div className='flex justify-end px-4 pt-4'></div>
          <div className='flex flex-col items-center p-10 '>
            <img
              className='mb-3 w-20 h-20 rounded-full shadow-lg'
              src={obhoyoaronno}
              alt=''
            />
            <h5 className='mb-1 text-xl text-gray-900'>
              অভয়ারণ্য - বাংলাদেশ এনিম্যাল ওয়েলফেয়ার ফাউন্ডেশন
            </h5>
            <p className='flex mt-4 space-x-3 lg:mt-6 font-medium'>
              অভয়ারণ্য এমন একটি বাংলাদেশের স্বপ্ন দেখে যেখানে মানুষ প্রাণীদের
              অভ্যন্তরীণ মূল্য বুঝতে পারে এবং প্রানীদের প্রতি সহানুভূতি এবং
              সম্মান প্রদর্শন করে ।
            </p>
            <div className='flex mt-4 space-x-3 lg:mt-6'>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelephoneFill size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <HiMailOpen size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <div className='flex justify-end px-4 pt-4'></div>
          <div className='flex flex-col items-center p-10'>
            <img
              className='mb-3 w-20 h-20 rounded-full shadow-lg'
              src={robinhood}
              alt=''
            />
            <h5 className='mb-1 text-xl text-2xl text-gray-900'>
              রবিনহুড দ্য অ্যানিমেল রেসকিউয়ার
            </h5>
            <p className='flex mt-4 space-x-3 lg:mt-6 font-medium'>
              আমাদের দেশে পশুপাখিরা আর নিরাপদ নয় বিশেষ করে রাস্তার বিড়াল ও
              কুকুর তাই তাদের বাঁচানোই আমাদের প্রথম মিশন এবং পাশাপাশি একটি
              উপযুক্ত ভেটেরিনারি হাসপাতাল তৈরি করা এবং শক্তিশালী পশু আইন তৈরি
              করা।
            </p>
            <div className='flex mt-4 space-x-3 lg:mt-6'>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelephoneFill size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <HiMailOpen size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <div className='flex justify-end px-4 pt-4'></div>
          <div className='flex flex-col items-center p-10'>
            <img
              className='mb-3 w-20 h-20 rounded-full shadow-lg'
              src={art}
              alt=''
            />
            <h5 className='mb-1 text-xl text-2xl text-gray-900'>
              বাংলাদেশ অ্যানিম্যাল রিস্কিউ
            </h5>
            <p className='flex mt-4 space-x-3 lg:mt-6 font-medium'>
              আমাদের দেশে প্রাণী সংরক্ষণ ও রক্ষা করুন
            </p>
            <div className='flex mt-4 space-x-3 lg:mt-6'>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelephoneFill size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
              <a
                href='www.whatsapp'
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <HiMailOpen size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RescueScreen
