'use client';
import { motion } from 'framer-motion';
interface config {
    progressPercentage: number
}

const ProgressBar = ({ progressPercentage }: config) => {
    return (
        <div className={`
            flex flex-row
            relative 
            h-full w-full rounded-sm
            border-2 border-bordercolour 
        `}>
            <motion.div className={`bg-progressbar w-[calc(100% - 0.25rem)] h-[calc(100%-2*0.25rem)] m-1 mx-2`}

            ></motion.div>
            <div className={`h-full aspect-square`}>

            </div>
        </div >)
}

export default ProgressBar;