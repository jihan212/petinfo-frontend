import React from 'react'
import { Link } from 'react-router-dom'
import {
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsTelephoneFill,
} from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'

const Vetcard = (props) => {
  const { _id, name, email, contact, img, social, online, education } = props.vet

  return (
    <>
      {online && (
        <div className='max-w-sm bg-white rounded-2xl border border-gray-200 drop-shadow-2xl '>
          <div className='flex justify-end px-4 pt-4'></div>
          <div className='flex flex-col items-center p-10'>
            <img
              className='mb-3 w-20 h-20 rounded-full shadow-lg'
              src={img}
              alt=''
            />
            <h5 className='mb-1  text-2xl font-semibold text-blue-900'>
              {name}
            </h5>
            <p className='mt-3 text-sm text-gray-500'>
              Bachelor: {education.bachelor} <br />
              Masters: {education.masters} <br />
            </p>
            <div className='flex mt-4 space-x-3 lg:mt-6'>
              <Link
                to={`/details/${_id}`}
                className='inline-flex items-center py-2 px-4 text-sm font-medium text-center bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-700'
              >
                See Details
              </Link>
            </div>
            <div className='flex mt-4 space-x-3 lg:mt-6'>
              <a
                href={social.whatsapp}
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
              <a
                href={social.telegram}
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
              <a
                href={contact}
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsTelephoneFill size={25} />
              </a>
              <a
                href={social.facebook}
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
              <a
                href={email}
                className='p-4 w-2.5 font-medium cursor-pointer text-blue-900'
              >
                <HiMailOpen size={25} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Vetcard
