'use client';

import { motion } from 'framer-motion';
import React from 'react';
type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className='flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1, x: 0
                }}
                viewport={{
                    once: true
                }}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
                src="https://media.licdn.com/dms/image/D4D03AQHqzagKxjeZmQ/profile-displayphoto-shrink_800_800/0/1708016437543?e=1715817600&v=beta&t=xc25IgE1cUdR_6fE7wJRZgyZsvzsH7XW8G_TQDlH-xQ" />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a little background
                </h4>
                <p className='text-sm'>
                    Results-driven and versatile Nodejs developer with 6 years of extensive experience in building scalable and performant web applications. Proficient in Nodejs, ECMA Script, JavaScript/TypeScript, UI Frameworks (React.js and Angular.js) with expertise in CI/CD,  Azure DevOps, and NoSQL databases and SQL databases. Adept at collaborating with cross-functional teams to deliver high-quality software solutions. Having a solid understanding of asynchronous programming, event driven architecture, cloud environment development.
                </p>
            </div>
        </motion.div>
    )
}

export default About