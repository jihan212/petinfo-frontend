import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import Input from '../Components/Input'
import VetCard from '../Components/Vetcard'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'

const Homescreen = () => {
  const [vets, setVets] = useState([])

  useEffect(() => {
    fetch('https://petinfo-server.herokuapp.com/vets')
      .then((res) => res.json())
      .then((data) => setVets(data))
  })

  return (
    <>
      <Header />
      <Intro />
      <Input />
      <section>
        <h1 className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center bangla-font p-5 m-5'>
          আপনার এলাকায় আয়ত্তাধীন পশু চিকিৎসক
        </h1>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 m-8 p-8'>
          {vets.map((vet) => (
            <VetCard vet={vet}></VetCard>
          ))}
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  )
}

export default Homescreen
