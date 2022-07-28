import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import {
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsTelephoneFill,
} from 'react-icons/bs'
import { HiMailOpen } from 'react-icons/hi'

const Vetdetailscreen = () => {
  const { vetId } = useParams()
  const [vet, setVet] = useState({})

  useEffect(() => {
    const url = `https://petinfo-server.herokuapp.com/vets/${vetId}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => setVet(data))
  }, [vetId])

  const address = vet.address
  const social = vet.social

  return (
    <>
      <Header />
      <h1 className='font-black text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center bangla-font p-2 m-2'>
        Details About : <span className='text-gray-800'>{vet.name} </span>
      </h1>

      <div class='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
        <div class='grid grid-rows-2 grid-flow-col'>
          <div className='flex items-center justify-center '>
            <img className='w-3/6' src={vet.img} alt='' />
          </div>
          <div className='flex justify-center mt-5 space-x-4'>
            <a
              href={social?.whatsapp}
              className='cursor-pointer text-blue-900'
            >
              <BsWhatsapp size={25} />
            </a>
            <a
              href={social?.telegram}
              className='cursor-pointer text-blue-900'
            >
              <BsTelegram size={25} />
            </a>
            <a
              href={vet.contact}
              className='cursor-pointer text-blue-900'
            >
              <BsTelephoneFill size={25} />
            </a>
            <a
              href={social?.facebook}
              className=' cursor-pointer text-blue-900'
            >
              <BsFacebook size={25} />
            </a>
            <a
              href={vet.email}
              className='cursor-pointer text-blue-900'
            >
              <HiMailOpen size={25} />
            </a>
          </div>
          
        </div>

        <div className='header-font'>
          <div className='grid grid-cols-2 gap-4 p-2'>
            <div>
              <p className='font-semibold text-xl'>Name</p>
            </div>
            <div>
              <p className='text-xl'>{vet.name}</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>Email</p>
            </div>
            <div>
              <p className='text-xl'>{vet.email}</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>Contact</p>
            </div>
            <div>
              <p className='text-xl'>{vet.contact}</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>Division</p>
            </div>
            <div>
              <p className=' text-xl'>{address?.division}</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>District</p>
            </div>
            <div>
              <p className=' text-xl'>{address?.district}</p>
            </div>
            <div>
              <p className='font-semibold text-xl'>upzila</p>
            </div>
            <div>
              <p className='text-xl'>{address?.upazila}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vetdetailscreen
