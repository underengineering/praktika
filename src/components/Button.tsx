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
            className={`bg-primary px-[25px] py-[14px] text-sm text-stone-50 transition-[padding] hover:px-[25px] hover:py-[16px] active:px-[25px] active:py-[16px] ${
                roboto.variable
            } font-sans ${className !== undefined ? className : ""}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
