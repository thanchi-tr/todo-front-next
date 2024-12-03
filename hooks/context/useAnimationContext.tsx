import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TransitionContext {
    isTransit: boolean;
    setIsTransit: React.Dispatch<React.SetStateAction<boolean>>;
    inputNextRoute: (url: string) => void;
    nextRoute: string
}

const TransitionContext = createContext<TransitionContext | undefined>(undefined);

export const useTransitionContext = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error('useAttempt must be used within an AttemptProvider');
    }
    return context;
}

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [isTransit, setIsTransit] = useState(false);
    const [nextRoute, setNextRoute] = useState("/auth/login");
    const inputNextRoute = (url: string) => {
        setNextRoute(currentRoute => (url !== "") ? url : currentRoute);
    }

    return (
        <TransitionContext.Provider value={{ isTransit, setIsTransit, inputNextRoute, nextRoute }}>
            {children}
        </TransitionContext.Provider>
    )
}