import React from 'react'
import Header from '../Components/Header'
import {
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsTelephoneFill,
} from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'
import Pawcare from '../Images/Pawcare.png'
import petbangla from '../Images/petbangla.png'
import petservicebd from '../Images/petservicebd.png'

const ServiceScreen = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 m-8 p-8 bangla-font'>
        <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <div class='flex justify-end px-4 pt-4'></div>
          <div class='flex flex-col items-center p-10 '>
            <img
              class='mb-3 w-20 h-20 rounded-full shadow-lg'
              src={Pawcare}
              alt=''
            />
            <h5 class='mb-1 text-xl text-gray-900'>Paw Care</h5>
            <p class='flex mt-4 space-x-3 lg:mt-6 font-medium'>
              A professionally equipped pet center, where the real
              transformation happens. It is very important to care for your pet
              with vital resources such as vaccination, deworming, the supply of
              nutrition, grooming, and regular check-ups, that is why “Paw Care”
              is working for.
            </p>
            <div class='flex mt-4 space-x-3 lg:mt-6'>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelephoneFill size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <HiMailOpen size={25} />
              </a>
            </div>
          </div>
        </div>
        <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <div class='flex justify-end px-4 pt-4'></div>
          <div class='flex flex-col items-center p-10'>
            <img
              class='mb-3 w-20 h-20 rounded-full shadow-lg'
              src={petbangla}
              alt=''
            />
            <h5 class='mb-1 text-xl text-2xl text-gray-900'>Pet Bangla</h5>
            <p class='flex mt-4 space-x-3 lg:mt-6 font-medium'>
              Pet Bangla is the first online pet supplies store in Bangladesh
              which was started by an ordinary pet lover and an enthusiast on
              2011 with a different name and the current name was taken on June
              2014. Order pet supplies cat food, dog, food, cat litter, rabbit
              food, bird food and grooming supplies online get free home
              delivery in Dhaka and all over Bangladesh for your pet and get
              them home delivered in a short amount of time.
            </p>
            <div class='flex mt-4 space-x-3 lg:mt-6'>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelephoneFill size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <HiMailOpen size={25} />
              </a>
            </div>
          </div>
        </div>
        <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <div class='flex justify-end px-4 pt-4'></div>
          <div class='flex flex-col items-center p-10'>
            <img
              class='mb-3 w-20 h-20 rounded-full shadow-lg'
              src={petservicebd}
              alt=''
            />
            <h5 class='mb-1 text-xl text-2xl text-gray-900'>Pet Service BD</h5>
            <p class='flex mt-4 space-x-3 lg:mt-6 font-medium'>
              Pet Service BD is appreciating your profound fondness for your
              pet. It is a world-famous ONE-STOP Pet Relocation Service Provider
              where we relocate your pet worldwide with aright safety. We have
              been working with pets since 2014. Therefore, we have more
              experience to serve better. We are professionals who work both
              domestically and internationally. We are a worldwide certified
              provider.
            </p>
            <div class='flex mt-4 space-x-3 lg:mt-6'>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelephoneFill size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
              <a
                href='www.whatsapp'
                class='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
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

export default ServiceScreen
