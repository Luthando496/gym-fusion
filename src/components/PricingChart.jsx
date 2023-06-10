import React from 'react'

const PricingChart = () => {
  return (
    <section className='mt-[9rem] bg-white mb-5'>
         <div className="flex flex-col text-center items-center relative">
    <h2 className="font-semibold text-white text-xl w-[70%] relative uppercase z-10 ">Pricing Chart
        <img src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="img" className='w-[17rem] absolute top-[-12px] z-[-8] left-[6%] md:left-[16%] lg:left-[35%]' />
    </h2>
    </div>
    <h3 className="text-center text-2xl capitalize mt-12 font-semibold">Exclusive Pricing Plan</h3>
    <p className="text-center text-md tracking-[1.8] leading-[1.8] text-gray-500 my-8">Gymat an unknown printer took a galley of type and scrambled <br className='hidden md:block'/> make a type specimen book.</p>
    </section>
  )
}

export default PricingChart