'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface config {
    isClick: boolean
}
const EnterButton = ({ isClick }: config) => {
    useEffect(() => {
        console.log("EnterButton receive state changes:", isClick);
    }, [isClick]);
    return (
        <div className={`relative h-full group w-full hover:cursor-pointer
            ${(!isClick)
                ? "bg-background"
                : "bg-progressbar transition-colors duration-[0.6s] delay-[0.55s] ease-in border-2 border-bordercolour rounded-sm overflow-clip"} 
                
        `}

        >
            <svg className={`w-full group h-auto aspect-auto 
            
                group-hover:translate-x-[80px] 
                transition-all duration-[1.5s] ease-in-out`}
                viewBox="0 0 95 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15.2558" y="2" className="h-full w-auto aspect-auto" fill="#D9D9D9" stroke="#7C3023" strokeWidth="4" />
                <rect className={` ${(!isClick) ? "" : "hidden"}`} y="33.6875" width="77.4308" height="12.4722" rx="6.2361" fill="#545454" />
                <rect className={` ${(!isClick) ? "" : "hidden"}`} width="40.1701" height="12.051" rx="6.02552" transform="matrix(0.6815 0.731818 -0.6815 0.731818 52.3989 9.625)" fill="#545454" />
                <rect className={` ${(!isClick) ? "" : "hidden"}`} width="40.1701" height="12.051" rx="6.02552" transform="matrix(0.6815 -0.731818 0.6815 0.731818 44.186 58.2723)" fill="#545454" />
                <rect className={` ${(!isClick) ? "" : "hidden"}`} x="88.3721" width="6.62791" height="77" fill="#7C3023" />
            </svg>

            <motion.div className={`w-full h-full
            
                absolute 
                flex flex-col text-[0.55rem] leading-[0.65rem] sm:text-[0.7rem] sm:leading-[0.7rem] md:text-[0.75rem] md:leading-[0.72rem] lg:text-[0.85rem] lg:leading-[1rem]   xl:text-[0.8rem] xl:leading-[1rem] 
                items-center content-center justify-center
                font-mainfont 
                top-0 gap-0 
                -left-[90px] opacity-20
                ${((isClick)
                    ? "text-progressbar transition-all duration-500 ease-out"
                    : "text-textbase group-hover:transition-all duration-700 group-hover:delay-[0.75s]")}
                
                group-hover:opacity-100 
                group-hover:left-0
                uppercase
                `}
                animate={
                    (isClick)
                        ? { scale: 1.6, transition: { duration: 0.65, ease: "anticipate" } }
                        : {}
                }
            >
                <p className={`w-full text-center`}>Log</p>
                <p className={`w-auto text-center`}>in</p>
            </motion.div>
        </div >


    )
}
export default EnterButton;