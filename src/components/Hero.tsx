'use client';

import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgrounCircle from './BackgrounCircle';
import Link from 'next/link';

type Props = {}


const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words:
            [
                "Hi, The Name's  Tejj",
                'Guy-who-loves-chai.tsx',
                '<ButLovesToCodeMore />'
            ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgrounCircle />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src='https://media.licdn.com/dms/image/D4D03AQHqzagKxjeZmQ/profile-displayphoto-shrink_800_800/0/1708016437543?e=1715817600&v=beta&t=xc25IgE1cUdR_6fE7wJRZgyZsvzsH7XW8G_TQDlH-xQ' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#EEEEEE' />
                </h1>
                <div className='pt-5'>
                    <Link href={"#about"}>
                        <button className='hero-btn'>About</button>
                    </Link>
                    <Link href={"#eperience"}>
                        <button className='hero-btn'>Eperience</button>
                    </Link>
                    <Link href={"#skills"}>
                        <button className='hero-btn'>Skills</button>
                    </Link>
                    <Link href={"#projects"}>
                        <button className='hero-btn'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero