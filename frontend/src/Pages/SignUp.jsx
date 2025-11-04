import React from 'react'
import '../style/Signup.css';

const SignUp = () => {
    return (
        <div className='bg-zinc-900 w-screen h-screen flex flex-col items-center justify-center'>
            <div className='heading mb-15 -mt-20'>
                <h1 className='gradient-text text-8xl font-[title-font]'>PixelTalk</h1>
            </div>
            <div className='signup-box px-10 py-10 bg-zinc-800 rounded-3xl flex flex-col items-center shadow-2xl'>
                <h2 className='subheading text-4xl  text-white mb-8 '>
                    Sign Up
                </h2>

                <div className='signup-inputs flex flex-col gap-4 w-full'>
                    <input
                        type='text'
                        placeholder='Username'
                        className='inputs px-4 py-3 rounded-2xl border border-gray-600 bg-zinc-900 text-white placeholder-gray-400 focus:outline-none '
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        className='inputs px-4 py-3 rounded-2xl border border-gray-600 bg-zinc-900 text-white placeholder-gray-400 focus:outline-none '
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='inputs px-4 py-3 rounded-2xl border border-gray-600 bg-zinc-900 text-white placeholder-gray-400 focus:outline-none '
                    />
                </div>

                <div className='submit-btn mt-8'>
                    <button className='glow-on-hover  rounded-2xl text-white'>
                        Submit
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SignUp
