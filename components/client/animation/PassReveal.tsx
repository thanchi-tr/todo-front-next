'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface config {
    isReveal: boolean,
    pointerX: number
}
const PassReveal = ({ isReveal, pointerX }: config) => {

    const [isInit, setIsInit] = useState(false);
    useEffect(() => console.log(isInit), [isInit])
    useEffect(
        () => {
            setIsInit(true)
            let timer = setTimeout(() => setIsInit(false), 2740);

        }, []
    )
    const eyeMaxBallScale = (pointerX < 90 && pointerX > 20)
        ? (pointerX > 20) ? 1 : 0.82
        : 0.75
    const variants = {
        "init-eye-open": {
            scaleY: [1, 1, 0.2, 0.95],
            scaleX: [1, 1, 1.2, 1],
            y: [0, 0, 0.25, 0.05],
            rotate: [0, 0, -11, 0.05],
            transition: {
                duration: 1.2,       // Animation duration
                repeat: 2,    // Animation will play 3 times (1 initial + 2 repeats)
                repeatType: "loop",  // Loop the animation
            }
        },
        "init-eyeball-opened": {
            scaleY: [1, 1, 1, 1, 0.7, 0.41, 0.01, 0.41, 0.7, 1, 1].map(val => val * eyeMaxBallScale),
            // x: (pointerX > 0) ? `${(pointerX) / 15}%` : `-5%`,
            transition: {
                scaleY: {
                    duration: 1.2,      // Animation duration for scaleY
                    repeat: 2, // Animation will play 3 times (1 initial + 2 repeats)
                    repeatType: "loop",
                    delay: 0.07
                },
            },
        },
        "eye-open": {
            scaleY: [1, 1, 0.2, 0.95],
            scaleX: [1, 1, 1.2, 1],
            y: [0, 0, 0.25, 0.05],
            rotate: [0, 0, -7, 0.05],
            transition: {
                duration: 3,       // Animation duration
                repeat: Infinity,    // Repeat infinitely
                repeatType: "loop",  // Loop the animation
            }
        },
        "eyeball-opened": {
            scaleY: [1, 1, 1, 1, 0.7, 0.41, 0.01, 0.41, 0.7, 1, 1].map(val => val * eyeMaxBallScale),
            x: (pointerX > 0) ? `${(pointerX) / 15}%` : `-5%`,
            transition: {
                scaleY: {
                    duration: 3,      // Animation duration for scaleY
                    repeat: Infinity, // Repeat infinitely
                    repeatType: "loop",
                    delay: 0.07
                },
                x: {
                    duration: 0.4,
                    delay: 0.02,
                    ease: "easeIn"
                }
            },
        },
        "eyeball-closed": { scaleY: 0 },
        "eyelid-closed": {
            scaleY: 0.3, scaleX: 1.2,
            rotate: -11
        }
    }
    const pulpilVariants = {
        "init-pulpil-opened": {
            scaleY: [1, 1, 1, 1, 0.85, 0.35, 0.006, 0.29, 0.569, 1, 1].map(val => val * eyeMaxBallScale),
            y: [0, 0, 0, 0.4, 2.1, 1, 0.6, 0], // Negative values move the element upwards
            transition: {
                scaleY: {
                    duration: 1.2,      // Animation duration for scaleY
                    repeat: 2,
                    repeatType: "loop",
                },
                y: {
                    duration: 3,
                    repeat: Infinity, // Repeat infinitely
                    ease: "easeIn"
                }
            },

        },
        "pulpil-opened": {
            scaleY: [1, 1, 1, 1, 0.85, 0.35, 0.006, 0.29, 0.569, 1, 1].map(val => val * eyeMaxBallScale),
            x: (pointerX > 0) ? `${(pointerX) / 15}%` : `-5%`,
            y: [0, 0, 0, 0.4, 2.1, 1, 0.6, 0], // Negative values move the element upwards
            transition: {
                scaleY: {
                    duration: 3,      // Animation duration for scaleY
                    repeat: Infinity, // Repeat infinitely
                    repeatType: "loop",
                    delay: 0.04
                },
                x: {
                    duration: 0.4,
                    delay: 0.02,
                    ease: "easeIn"
                },
                y: {
                    duration: 3,
                    repeat: Infinity, // Repeat infinitely
                    ease: "easeIn"
                }
            },

        },
        "pulpil-closed": { scaleY: 0, y: 1.8, transition: { delay: 0.01 } },
    }
    return (
        <svg className={`h-full  aspect-auto border border-black hover:cursor-pointer`} viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                variants={variants}
                initial={"eyelid-closed"}
                animate={(isReveal) ? "eye-open" :
                    (isInit) ? "init-eye-open" : "eyelid-closed"}

                d="M29.3065 11.6939C28.1857 16.6546 23.4803 20.775 15.9336 20.775C8.59643 20.775 4.08593 16.5473 2.58268 11.5947C3.31831 8.80911 4.7514 6.64364 6.76483 5.13282C8.93073 3.50759 11.9571 2.5 15.9336 2.5C23.2521 2.5 28.1394 7.52976 29.3065 11.6939Z" fill="#545454" stroke="#D9D9D9" strokeWidth="5" >

            </motion.path>




            <motion.ellipse
                variants={variants}
                initial={"eyeball-closed"}
                animate={(isReveal)
                    ? "eyeball-opened"
                    : (isInit) ? "init-eyeball-opened" : "eyeball-closed"}

                cx="16.3793" cy="11.4883" rx="7.24254" ry="9.69793" fill="#D9D9D9" />
            <motion.ellipse
                variants={variants}
                initial={"eyeball-closed"}
                animate={(isReveal)
                    ? "eyeball-opened"
                    : (isInit) ? "init-eyeball-opened" : "eyeball-closed"}

                cx="16.3793" cy="11.4883" rx="5.01407" ry="6.71395" fill="#545454" />
            <motion.ellipse
                variants={pulpilVariants}
                initial={"pulpil-closed"}
                animate={(isReveal)
                    ? "pulpil-opened"
                    : (isInit) ? "init-pulpil-opened" : "pulpil-closed"}

                cx="16.2679" cy="9.25032" rx="3.34271" ry="4.47597" fill="#D9D9D9" />

        </svg>

    )
}

export default PassReveal;