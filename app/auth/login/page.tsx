'use client';
import LoginForm from "@/components/client/functional/LoginForm";
import TransitionScreen from "@/components/client/presentation/TransitionScreen";
import { TransitionProvider } from "@/hooks/context/useAnimationContext";

const Login = () => {

    return (

        <TransitionProvider>

            <TransitionScreen children={undefined}></TransitionScreen>
            <div className={`relative flex h-screen w-full bg-background overflow-clip`}>
                <div className={`relative h-full w-[4%] border-r-2 border-bordercolour`}></div>
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
                            <div className="flex text-end content-end items-end h-auto w-auto text-textbase">
                                <h1 className={`
                            relative h-16 
                            w-auto
                            z-10
                             -rotate-90 
                             -translate-y-28 
                             md:translate-x-[5vh] lg:1translate-x-[5vh] 2xl:translate-x-[10vh]
                             text-5xl font-mainfont uppercase
                             opacity-25`}>My todo</h1>
                            </div>

                            <div className="flex items-end  h-full w-[30%]">
                                <div className={` h-16 w-auto uppercase text-textbase text-6xl font-mainfont -translate-x-64 -translate-y-3`}> My todo</div>
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
                        <div className={`h-auto w-6/12 min-w-[500px] `}><LoginForm></LoginForm> </div>
                        <div />
                    </div>
                </div>

            </div>
        </TransitionProvider>
    )
}

export default Login;