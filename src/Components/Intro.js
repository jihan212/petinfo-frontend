import React from 'react';

const Intro = () => {
    return (
      <div>
        <div className='bg-sky-100'>
          <div className='container mx-auto flex flex-col items-center py-12 sm:py-24'>
            <div className='w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10'>
              <h1 className='font-black tracking-tight text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center bangla-font p-5 m-5'>
                স্বাগতম
                <span className='text-gray-800'> PetInfo </span>
                তে
                <br />
                আপনার পোষা প্রাণীর জন্য একটি বিশ্বস্ত জায়গা
              </h1>
              <p className='mt-5 sm:mt-10 lg:w-10/12 text-blue-900 font-normal bangla-font text-center text-sm sm:text-lg'>
                অনলাইন এবং স্থানীয় পশুচিকিত্সকদের সম্পর্কে তথ্য খুঁজুন, তাদের
                বিবরণ সহ।
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Intro;