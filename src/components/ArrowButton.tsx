import { Roboto } from "next/font/google";
import { ButtonHTMLAttributes, FC } from "react";

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
            className={`group flex items-center gap-2 border border-neutral-900 bg-primary px-6 py-3 text-sm text-primary shadow-primary transition-colors hover:bg-primary hover:text-stone-50 hover:shadow-md active:bg-primary active:text-stone-50 active:shadow-md sm:bg-transparent ${
                className !== undefined ? className : ""
            }`}
        >
            <span
                className={`text-xl text-stone-50 transition-colors group-hover:text-stone-50 group-active:text-stone-50 sm:text-primary ${roboto.variable} font-sans`}
            >
                {children}
            </span>
            <svg
                className="fill-stone-50 transition-colors group-hover:fill-stone-50 group-active:fill-stone-50 sm:fill-primary"
                width="26"
                height="4"
                viewBox="0 0 26 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Arrow 9"
                    d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z"
                />
            </svg>
        </button>
    );
};

export default ArrowButton;
