'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import TextBox from '../../server/TextBox';
import PassReveal from '../animation/PassReveal';
import EnterButton from '../presentation/EnterButton';
import RegisterButton from '../presentation/RegisterButton';
import { useTransitionContext } from "@/hooks/context/useAnimationContext";
const LoginForm = () => {
    const [error, setError] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [ptrRelPosToEye, setPtrRelPosToEye] = useState(50);
    const [prevRelPos, setPrevRelPos] = useState(50);
    const [revealPassword, setRevealPassword] = useState(false);
    const { setIsTransit } = useTransitionContext();
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    })
    const revealIconRef = useRef<HTMLDivElement>(null);
    const revealIconAbsoluteLocation = revealIconRef.current?.getBoundingClientRect()?.x

    const reset = useCallback(() => {
        setError("");
        setIsSubmit(false);
        setIsRegister(false);
        setFormData(prev => ({ ...prev, password: "" }));

    }, [])
    // update the input
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, password: e.target.value });
    };
    // update the input
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, name: e.target.value });
    };

    // Post the data to backend
    const handleSubmit = useCallback((e: React.FormEvent) => {

        setIsSubmit(true);

        // simulate a fail login
        setTimeout(
            reset,
            2000
        )
        setTimeout(
            () => { setIsTransit(true) },
            1650
        )
        e.preventDefault();
    }, [])

    const passMaskToggle = () => {
        setRevealPassword(prev => !prev);
    }
    const handleRegister = useCallback(() => {
        setIsRegister(true);

        // simulate a fail login
        setTimeout(
            reset,
            2000
        )
        setTimeout(
            () => { setIsTransit(true) },
            1690
        )
    }, [])

    const updatePtrLocation = (event: MouseEvent) => {
        if (event.type == "mousemove" && revealIconAbsoluteLocation) {
            let pos = event.clientX - revealIconAbsoluteLocation; // eye movement range betwen 0-45
            pos = pos <= 0
                ? 0
                : (pos > 40)
                    ? 100
                    : pos / 45
            if (prevRelPos != pos) {
                setPtrRelPosToEye(pos);
                setPrevRelPos(pos);
            }


        }
    }
    useEffect(
        () => {
            if (revealPassword)
                window.addEventListener("mousemove", updatePtrLocation);

            return () => window.removeEventListener("mousemove", updatePtrLocation);
        }, [revealPassword]
    )
    return (
        <div className={`flex flex-col w-full min-w-[350px] gap-1 
            xl:gap-7`}>
            <form onSubmit={(handleSubmit)} className={`relative flex h-full min-w-[350px] gap-3 lg:gap-5`}>
                <div className={`relative flex flex-col gap-1 lg:gap-2 w-[90%]`}>
                    <label>
                        <div className={`flex flex-row 
                            w-full 
                            h-[2.5vw] xl:h-[1.85vw] 2xl:h-[1.5vw] 
                            gap-1 min-h-[22px] `}>
                            <div className={`w-[35%] lg:w-[32%] lg:mr-[3%] h-full text-[0.75rem] leading-[1.1rem] md:text-sm`}>
                                <TextBox > username</TextBox>
                            </div>
                            <div className={`
                    flex flex-row
                    w-[65%] 
                            rounded-sm bg-foreground
                            border-2 border-bordercolour `}>
                                <input
                                    className={`
                                        w-[calc(100%-2.5vw-0.15em)] 
                                        h-[calc(100%-2*0.15em)] 
                                        text-[0.7em] p-[0.3em]
                                bg-progressbar m-[0.15em] rounded-sm
                                text-white font-semibold font-mainfont`}
                                    type={"text"}
                                    value={formData.name}
                                    onChange={handleUsernameChange}
                                />
                                <div ref={revealIconRef} className={`h-full aspect-square `} onClick={passMaskToggle}>
                                </div>

                            </div>
                        </div>

                    </label>
                    <label>
                        <div className={`flex flex-row 
                            w-full 
                            h-[2.5vw] xl:h-[1.85vw] 2xl:h-[1.5vw] 
                            gap-1 min-h-[22px]`}>
                            <div className={`w-[35%] lg:w-[32%] lg:mr-[3%] text-[0.75rem] leading-[1.1rem] md:text-sm lg:text-[0.9rem] lg:leading-[1.3rem]`}>
                                <TextBox > password</TextBox>
                            </div>
                            <div className={`
                            flex flex-row flex-grow justify-between
                            w-[65%] 
                            rounded-sm bg-foreground 
                            border-2 border-bordercolour `}>
                                <input
                                    className={`w-[calc(100%-2.5vw-0.15em)] h-[calc(100%-2*0.15em)] text-[0.7em] p-[0.3em]
                                bg-progressbar m-[0.15em] rounded-sm
                                text-white font-semibold font-mainfont`}
                                    type={(!revealPassword) ? "password" : "text"}
                                    value={formData.password}
                                    onChange={handlePasswordChange}
                                />
                                <div ref={revealIconRef} className={`flex items-center justify-center h-full  aspect-square `} onClick={passMaskToggle}>
                                    <PassReveal isReveal={revealPassword} pointerX={ptrRelPosToEye}></PassReveal>
                                </div>
                            </div>

                        </div>
                    </label>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" className={`h-full w-[8%]  md:w-[7.5%] lg:w-[10.5%] xl:w-[8%]  md:mt-[0.08em] xl:mt-1`}
                >
                    {<div className={`h-full overflow-clip flex
                    ${(!isSubmit)
                            ? "hover:border-box hover:border-textbase hover:border-y-[3.1px] transition-all duration-100 delay-75 ease-out"
                            : "transition-all duration-100"
                        } `} >
                        <EnterButton isClick={isSubmit} />
                    </div>}
                </button>
            </form >

            <div className={`relative flex flex-col items-end mr-[8%]`}>
                <div className={`relative w-[18%] lg:w-[15%] xl:w-[16%] ${isRegister ? "border-2 border-bordercolour rounded-sm" : ""}`} onClick={handleRegister}>
                    <RegisterButton isClick={isRegister}></RegisterButton>
                </div>
            </div>

        </div>

    )
};


export default LoginForm;