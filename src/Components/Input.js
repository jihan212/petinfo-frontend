import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Input = () => {
  const [division_list, setDivisionList] = useState([])
  const [divisionid, setDivisionid] = useState('')
  const [district, setDistrict] = useState([])
  const [selectedDistrict, setselectedDistrict] = useState(null)

  useEffect(() => {
    const getdivision = async () => {
      const req = await fetch('https://bdapis.herokuapp.com/api/v1.1/divisions')
      const getres = await req.json()
      console.log(getres)
      setDivisionList(await getres.data)
    }
    getdivision()
  }, [])

  const getdistrict = async (divisionid) => {
    const lowerDivId = divisionid.toLowerCase()
    const resdistrict = await axios.get(
      `https://bdapis.herokuapp.com/api/v1.1/division/${lowerDivId}`
    )

    const getdis = resdistrict.data.data
    setDistrict(getdis)
    console.log(getdis, '---div')
  }

  const handlecountry = (event) => {
    event.preventDefault()
    const getdivisionid = event.target.value
    setDivisionid(getdivisionid)
    getdistrict(getdivisionid)
    event.preventDefault()
  }

  return (
    <>
      <section className='p-8 m-8'>
        <h1 className='font-black text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-center bangla-font p-5 m-5'>
          আপনার লোকেশন দিন
        </h1>
        <div className='grid grid-cols-4 gap-4 bg-indigo flex justify-around bangla-font'>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-slate-900 font-semibold text-xl'>
              বিভাগ
            </label>
            <select
              onChange={(e) => handlecountry(e)}
              className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'
            >
              <option value='US'>বিভাগ নির্বাচন করুন</option>
              {division_list.map((getdivision) => (
                <option key={getdivision._id} value={getdivision.division}>
                  {getdivision.division}
                </option>
              ))}
            </select>
          </div>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-xl text-slate-900 font-semibold'>
              জেলা
            </label>
            <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'>
              <option value='US'>জেলা নির্বাচন করুন </option>

              {district &&
                district.map((getdistrict) => (
                  <option key={getdistrict._id} value={getdistrict.district}>
                    {getdistrict.district}
                  </option>
                ))}
            </select>
          </div>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-xl text-slate-900 font-semibold'>
              উপজেলা
            </label>
            <select className=' bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'>
              <option value='US'>উপজেলা নির্বাচন করুন</option>
            </select>
          </div>
          <div className='max-w-xs bg-inherit flex flex-col gap-2 m-5'>
            <label className='bg-inherit text-xl text-slate-900 font-semibold'>
              সার্চ
            </label>
            <button className='bg-sky-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 text-lg text-slate-600'>
              Enter
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Input
