import React from 'react'
import HeaderSecond from '../components/Header-2'
import AboutWho from '../components/AboutWho'


const About = () => {
  return (
    <>
        <HeaderSecond />
        <AboutWho />

        <section className="my-16 w-full grid lg:grid-cols-2 grid-cols-1 px-10">
        {/*  */}
        <div className="w-full py-16 px-5">
        <div className="flex justify-center h-20">
            <img src="https://gymate-iota.vercel.app/static/media/target.da971912c971d7fe3fbe.png" alt="image" className="h-full object-cover" />
        </div>
        <h2 className="text-center my-4 text-2xl font-bold capitalize text-black">Our History</h2>
        <p className="text-center text-base text-gray-500 font-semibold leading-[1.7] px-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>

        </div>
        {/*  */}
        <div className="w-full overflow-hidden">
            <img src="https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='w-full '/>
        </div>
        {/*  */}
        {/*  */}
        <div className="w-full">
            <img src="https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
        </div>
        {/*  */}
        <div className="w-full py-16 px-5">
        <div className="flex justify-center h-20">
            <img src="/assets/mountain.png" alt="image" className="h-full object-cover" />
        </div>
        <h2 className="text-center my-4 text-2xl font-bold capitalize text-black">Our History</h2>
        <p className="text-center text-base text-gray-500 font-semibold leading-[1.7] px-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>

        </div>
        {/*  */}

        </section>
    </>
  )
}

export default About;