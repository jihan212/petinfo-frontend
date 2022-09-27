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
      <main class='card_container mt-1 body drop-shadow-2xl'>
        <div className='card'>
          <div className='flex items-center justify-center '>
            <img className='w-2/6' src={vet.img} alt='' />
          </div>

          <ul class='card__info'>
            <li>
              <a
                href={social?.whatsapp}
                className='cursor-pointer text-blue-900'
              >
                <BsWhatsapp size={25} />
              </a>
            </li>
            <li>
              <a
                href={social?.telegram}
                className='cursor-pointer text-blue-900'
              >
                <BsTelegram size={25} />
              </a>
            </li>
            <li>
              <a href={vet.contact} className='cursor-pointer text-blue-900'>
                <BsTelephoneFill size={25} />
              </a>
            </li>
            <li>
              <a
                href={social?.facebook}
                className='cursor-pointer text-blue-900'
              >
                <BsFacebook size={25} />
              </a>
            </li>
            <li>
              <a href={vet.email} className='cursor-pointer text-blue-900'>
                <HiMailOpen size={25} />
              </a>
            </li>
          </ul>

          <div className='card__info'>
            <div className='grid grid-cols-2 gap-4 p-2'>
              <div>
                <p className='font-semibold text-base m-2'>Name</p>
                <p className='font-semibold text-base m-2'>Email</p>
                <p className='font-semibold text-base m-2'>Contact</p>
                <p className='font-semibold text-base m-2'>Division</p>
                <p className='font-semibold text-base m-2'>District</p>
                <p className='font-semibold text-base m-2'>upzila</p>
              </div>
              <div>
                <p className='text-base m-2'>{vet.name}</p>
                <p className='text-base m-2'>{vet.email}</p>
                <p className='text-base m-2'>{vet.contact}</p>
                <p className='text-base m-2'>{address?.division}</p>
                <p className='text-base m-2'>{address?.district}</p>
                <p className='text-base m-2'>{address?.upazila}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Vetdetailscreen
