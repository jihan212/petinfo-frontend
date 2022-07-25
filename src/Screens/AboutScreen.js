import React from 'react'
import Header from '../Components/Header'
import doggy from '../Images/doggy.jpeg'
import cat from '../Images/cat.jpeg'

const AboutScreen = () => {
  return (
    <>
      <Header />
      <div className='p-8 m-8 bangla-font'>
        <h2 className='text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12 '>
          আমাদের সম্পর্কে
        </h2>
        <ul className='flex items-start gap-12 flex-wrap'>
          <li className='w-2/5'>
            <img src={doggy} alt='' />
          </li>
          <li className='w-2/5'>
            <p className='text-lg font-medium leading-6 text-gray-900'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus atque ad repudiandae accusamus repellendus vitae veniam
              placeat? Dicta accusantium iste non quis consectetur. Amet
              eveniet, et eum optio, nostrum aliquam dolorem modi quisquam iure
              vel porro velit a minus animi maxime atque doloremque sit ea
              aspernatur saepe perspiciatis labore ex!
            </p>
            <p className='text-base leading-6 text-gray-500 mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              placeat minus voluptates fugit a inventore perspiciatis ab ullam,
              voluptas veniam id facere illo quod labore totam ad? Ipsa magni
              ad, expedita libero ab quos delectus nisi modi vel perferendis,
              omnis soluta sint fugiat quasi minus sit blanditiis inventore
              possimus id, dolore odit nulla necessitatibus consectetur. Neque,
              aspernatur odit. Ullam provident totam hic odit nisi nostrum
              dignissimos aliquam obcaecati, quas cum quidem asperiores nihil
              sed, pariatur quam blanditiis officiis tempore facilis temporibus
              assumenda accusantium voluptates minus et? Soluta ea mollitia sed,
              dicta nemo facilis autem totam impedit eos, atque hic. Ducimus.
            </p>
          </li>
          <li className='w-2/5'>
            <p className='text-lg font-medium leading-6 text-gray-900'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus atque ad repudiandae accusamus repellendus vitae veniam
              placeat? Dicta accusantium iste non quis consectetur. Amet
              eveniet, et eum optio, nostrum aliquam dolorem modi quisquam iure
              vel porro velit a minus animi maxime atque doloremque sit ea
              aspernatur saepe perspiciatis labore ex!
            </p>
            <p className='text-base leading-6 text-gray-500 mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              placeat minus voluptates fugit a inventore perspiciatis ab ullam,
              voluptas veniam id facere illo quod labore totam ad? Ipsa magni
              ad, expedita libero ab quos delectus nisi modi vel perferendis,
              omnis soluta sint fugiat quasi minus sit blanditiis inventore
              possimus id, dolore odit nulla necessitatibus consectetur. Neque,
              aspernatur odit. Ullam provident totam hic odit nisi nostrum
              dignissimos aliquam obcaecati, quas cum quidem asperiores nihil
              sed, pariatur quam blanditiis officiis tempore facilis temporibus
              assumenda accusantium voluptates minus et? Soluta ea mollitia sed,
              dicta nemo facilis autem totam impedit eos, atque hic. Ducimus.
            </p>
          </li>
          <li className='w-2/5'>
            <img src={cat} alt='' />
          </li>
        </ul>
      </div>
    </>
  )
}

export default AboutScreen
