import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const bangla = () => {
  return (
    <>
      <nav className='w-full border-b'>
        <div className='py-5 md:py-0 container mx-auto px-6 flex items-center justify-between'>
          <div aria-label='Home.logo' role='img'>
            <Link to='/'>
              <img className='w-4/6' src={logo} alt='vetInfo' />
            </Link>
          </div>
          <div>
            <div id='menu' className='md:block lg:block hidden'>
              <ul className='flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
                <li className='text-gray-700 hover:text-gray-900 bangla-font lg:text-lg pt-10 md:pt-0'>
                  <Link
                    to='/about'
                    className='no-underline text-xl text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li className='text-gray-700 hover:text-gray-900 bangla-font text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link
                    to='/rescue'
                    className='no-underline text-xl text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    রিস্কিউ
                  </Link>
                </li>
                <li className='text-gray-700 hover:text-gray-900 bangla-font text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link
                    to='/services'
                    className='no-underline text-xl text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    সেবাসমূহ
                  </Link>
                </li>
                <li className='text-gray-700 hover:text-gray-900 bangla-font lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link
                    to='/blogs'
                    className='no-underline text-xl text-black hover:text-blue-dark mx-5 px-5 text-3xl font-semibold'
                  >
                    ব্লগ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default bangla
