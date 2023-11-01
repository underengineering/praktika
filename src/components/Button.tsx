import { Roboto } from "next/font/google";
import { FC } from "react";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

interface Props {
    className?: string;
    children: string;
}

const Button: FC<Props> = ({ children, className }) => {
    return (
        <button
            className={`bg-primary px-[25px] py-[14px] text-sm text-stone-50 transition-[padding] hover:px-[25px] hover:py-[16px] active:px-[25px] active:py-[16px] ${
                roboto.variable
            } font-sans ${className !== undefined ? className : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
