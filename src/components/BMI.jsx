import React from 'react'

const BMI = () => {
  return (
    <section className='my-10 w-full py-10 px-2 md:pl-10 bg-black/60 bmi'>
    <h1 className="lg:text-[3.3rem] mb-[2rem] text-xl font-semibold text-white">Let's Calculate Your <span className="text-amber-600">BMI</span></h1>
    <p className="text-md text-gray-300">Easily determine your body mass index with our accurate <br /> calculation tool.</p>

    <div className="grid grid-cols-2 gap-5 md:gap-10 w-full md:w-[50%] mt-9">
        <input type="text" placeholder='Weight / kg' className='px-8 py-4 focus:outline-none  focus:border focus:border-red-300' />
        <input type="text" placeholder='Height / cm' className='px-8 py-4 focus:outline-none  focus:border focus:border-red-300' />
    </div>
    <button className="px-10 py-3 bg-amber-300 mt-4 font-semibold tracking-[4px] uppercase text-md text-white">Calculate</button>

    </section>
  )
}

export default BMI;