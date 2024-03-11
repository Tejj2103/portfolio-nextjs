import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

function BackgrounCircle({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                scale: [1, 2, 2, 3, 1],
            }}
            transition={{
                duration: 2.5
            }}
            className='relative flex justify-center items-center mt-52'>
            <div className='absolute border border-[#31363F] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
            <div className='rounded-full border border-[#31363F] h-[300px] w-[300px] absolute mt-52' />
            <div className='rounded-full border border-[#31363F] h-[500px] w-[500px] absolute mt-52'/>
            <div className='rounded-full border border-[#FF6700] opacity-20 h-[650px] w-[650px] mt-52 absolute animate-pulse' />
            <div className='rounded-full border border-[#31363F] h-[800px] w-[800px] mt-52 absolute' />
        </motion.div>
    )
}

export default BackgrounCircle