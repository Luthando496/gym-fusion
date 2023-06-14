import React from 'react'
import HeaderSecond from '../components/Header-2'

const SignUp = () => {
  return (
    <>
        <HeaderSecond title={'Sign Up'} />

        <section className="mt-20 px-4 lg:px-14 ">
        
        <div className="flex justify-center">
        <div className="w-full lg:w-[40rem] bg-black py-10 px-14 shadow-xl">

        <h2 className="text-center text-2xl font-bold text-white">Sign Up Below</h2>

        <div className="form mt-16">
            <div className="form-control space-y-4">
                <label className='text-white text-xl font-semibold'>Email</label>
                <input type="text" name="name" id="name" className="w-full py-4 focus:outline-none px-8 " placeholder='gymfusion@gmail.com' />
            </div>
            <div className="form-control mt-8 space-y-4">
                <label className='text-white text-xl font-semibold'>Password</label>
                <input type="text" name="name" id="name" className="w-full py-4 focus:outline-none px-8 " placeholder='password' />
            </div>

            <button className="my-14 w-full px-8 py-3 text-2xl bg-sky-500 text-white font-semibold">Sign Up</button>

            <p className="text-base font-medium text-white">Already have account? <span className="text-amber-600 font-bold"> Sign In</span></p>
        </div>

        </div>

        </div>

        </section>
    </>
  )
}

export default SignUp