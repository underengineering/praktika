import { Roboto } from "next/font/google";
import { ButtonHTMLAttributes, FC } from "react";

import { ArrowRightAlt, TrendingFlat } from "@mui/icons-material";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

const ArrowButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={`group flex items-center justify-center gap-4 border border-primary bg-primary px-6 py-3 shadow-primary transition-[background-color,box-shadow] hover:bg-primary hover:shadow-2xl active:bg-primary active:shadow-2xl sm:bg-primary sm:bg-transparent ${
                className !== undefined ? className : ""
            }`}
        >
            <span
                className={`text-xl text-stone-50 transition-colors group-hover:text-stone-50 group-active:text-stone-50 sm:text-primary ${roboto.variable} font-sans`}
            >
                {children}
            </span>
            <TrendingFlat
                className="fill-stone-50 group-hover:fill-stone-50 group-active:fill-stone-50 sm:fill-primary"
                sx={{ fontSize: 30 }}
            />
        </button>
    );
};

export default ArrowButton;
