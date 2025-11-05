import React from 'react';
import '../style/login.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Login = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        // Animate heading
        gsap.from('.heading', {
            opacity: 0,
            duration: 2.2,
        });

        // Animate login box
        tl.from('.login-box', {
            y: 800,
            opacity: 0,
            scale: 0.5,
            duration: 2.5,
            ease: 'elastic.out(1,0.5)',
        });
    });

    return (
        <div className='bg-zinc-900 w-screen h-screen flex flex-col items-center justify-center overflow-hidden'>
            <div className='heading mb-16 -mt-20'>
                <h1 className='gradient-text text-8xl'>PixelTalk</h1>
            </div>

            <div className='login-box px-10 py-10 bg-zinc-800 rounded-3xl flex flex-col items-center shadow-2xl'>
                <h2 className='subheading text-4xl text-white mb-8'>Login</h2>

                <div className='login-inputs flex flex-col gap-4 w-full'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='inputs px-4 py-3 rounded-2xl border border-gray-600 bg-zinc-900 text-white placeholder-gray-400 focus:outline-none'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='inputs px-4 py-3 rounded-2xl border border-gray-600 bg-zinc-900 text-white placeholder-gray-400 focus:outline-none'
                    />
                </div>
                <p className='mt-5 text-zinc-400'>
                    Don't have an account? <a href='#' className='text-blue-500'>Sign Up</a>
                </p>
                <div className='submit-btn mt-5'>
                    <button className='glow-on-hover rounded-2xl text-white'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
