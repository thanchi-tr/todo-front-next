'use client';
import { TransitionProvider, useTransitionContext } from "@/hooks/context/useAnimationContext";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
interface config {
    children: ReactNode
}


const TransitionScreen = ({ children }: config) => {

    const variants = useMemo(() => ({
        "unmounted": {
            x: "-105%",
            transition: { duration: 0.6, ease: "anticipate" }
        },
        "mounted": {
            x: "0%",
            transition: { duration: 0.6, ease: "anticipate" }
        }
    }), []);

    const { isTransit, setIsTransit, nextRoute } = useTransitionContext();
    const [isInit, setIsInit] = useState(true);
    const router = useRouter();
    useEffect(() => {
        console.log(`Is in transition: ${isTransit}`)
        if (isTransit) {
            let timer = setTimeout(() => {
                setIsTransit(false)

            }, 2000);
            return () => clearTimeout(timer);
        }
        if (!isInit) setTimeout(() => router.push(nextRoute), 2500);
    }, [isTransit])
    return (
        <motion.div
            className={`absolute top-0 z-50 w-[100vw] h-[100vh] bg-progressbar `}
            variants={variants}
            initial={"mounted"}
            animate={(isTransit) ? "mounted" : "unmounted"}
        >
            {children}
            <div className={`relative flex h-screen w-full  overflow-clip`}>
                <div className={`relative h-full w-[4%] `}></div>
                <div className={`
            relative flex flex-col
            h-screen w-[96%]`}>
                    <div className={`
                flex flex-row relative flex-grow  justify-between
                h-[32%] `}>
                        <div className={``}></div>
                        <div className={`relative
                    flex flex-row  flex-grow  justify-between
                    h-auto w-[60%]`}>
                            <div className=""></div>
                            <div className={`flex text-end content-end items-end h-auto w-auto text-textbase z-50 transition-all  ease-out ${isTransit ? "opacity-100  duration-200 delay-[0.4s]" : "opacity-0 duration-150 delay-0"}`}>
                                <h1 className={`
                            relative h-16 
                                w-auto
                               
                             -rotate-90 
                             -translate-y-[9.55rem]
                             md:translate-x-[5vh] lg:1translate-x-[5vh] 2xl:translate-x-[10vh]
                             text-5xl font-mainfont uppercase
                             opacity-25`}>My todo</h1>
                            </div>

                            <div className="flex  h-full w-[30%]">
                                <div className={` h-16 w-auto `}> </div>
                            </div>
                            <div className=""></div>
                        </div>
                        <div className={``}></div>
                    </div>
                    <div className="h-[10%] min-h-4" />
                    <div className={`
                relative flex flex-row flex-grow  justify-between
                h-auto w-[96%] `}>
                        <div className="h-[10%] min-h-4" />
                        <div className={`h-auto w-6/12 min-w-[500px] `}></div>
                        <div />
                    </div>
                </div>

            </div>
        </motion.div >

    )

}

export default TransitionScreen;