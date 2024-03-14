'use client';

import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

function ExpCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[600px] snap-center bg-[#2b2f38] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 cursor-pointer overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/deloitte/us-deloitte-logo.jpg' />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Consultant</h4>
                <p className='font-bold text-2xl mt-1'>Deloitte</p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        src='https://i.pinimg.com/564x/b4/de/20/b4de205cb6d4e7cad43c2971f780cfd9.jpg' />
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bzDdFm0NXdZ35CpPsmsQBZsCWfSZzFFmOjYqNr3FAL6CJA_Kv-NEyBJcxkd6QXqkpAM&usqp=CAU' />
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        src='data:image/png;base64,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' />
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        src='https://i.pinimg.com/564x/b4/de/20/b4de205cb6d4e7cad43c2971f780cfd9.jpg' />
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bzDdFm0NXdZ35CpPsmsQBZsCWfSZzFFmOjYqNr3FAL6CJA_Kv-NEyBJcxkd6QXqkpAM&usqp=CAU' />
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        src='data:image/png;base64,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' />
                </div>
                <p className='uppercase py-5 text-gray-300'>April, 2021 - Present</p>
                <ul className='list-disc space-y-4 ml-5'>
                    <li>Led the development of micro-services architecture using Node.js (Express), React.js,
                        and Angular.js, resulting in a 30% improvement in application performance.
                    </li>
                    <li>
                        Worked on CI/CD pipelines using Azure DevOps, reducing deployment time by 40%.
                        Integrated NoSQL databases, including MongoDB, optimising data storage and retrieval
                        processes.
                    </li>
                    <li>
                        Collaborated with DevOps teams to automate infrastructure provisioning and
                        deployment processes.
                    </li>
                    <li>
                        Contributed on multiple projects with different technical skills.
                    </li>
                    <li>
                        Contributes in the CSR activities as Lead.
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default ExpCard