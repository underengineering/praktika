import { Roboto } from "next/font/google";
import { ButtonHTMLAttributes, FC } from "react";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={`bg-primary px-[25px] py-[14px] text-sm text-stone-50 transition-transform hover:scale-110 active:scale-110 ${
                roboto.variable
            } font-sans ${className !== undefined ? className : ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
