import { ReactNode } from "react";

interface config {
    children: ReactNode

}
const TextBox = ({ children }: config) => {
    return (
        <h1 className={`relative box-border
            h-full w-full 
            pl-1 lg:pl-2
            uppercase 
            text-textbase text-justify 
            tracking-wide
            font-bold font-mainfont 
            bg-foreground border`
        }>
            {children}
        </h1 >)
}

export default TextBox;