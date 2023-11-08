import { Roboto } from "next/font/google";
import { FC } from "react";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

const CatalogButton: FC<{ className?: string }> = ({ className }) => {
    return (
        <button
            className={`group flex h-[193px] w-[193px] flex-col items-center justify-center gap-4 rounded-full border border-primary bg-primary shadow-primary transition-[background-color,box-shadow] hover:bg-primary hover:shadow-2xl active:bg-primary active:shadow-2xl sm:bg-transparent ${
                className !== undefined ? className : ""
            }`}
        >
            <span
                className={`mr-9 h-3.5 w-[79px] text-xl text-stone-50 transition-colors group-hover:text-stone-50 group-active:text-stone-50 sm:text-primary ${roboto.variable} font-sans`}
            >
                Каталог
            </span>
            <svg
                className="ml-9 fill-stone-50 transition-colors group-hover:fill-stone-50 group-active:fill-stone-50 sm:fill-primary"
                width="80"
                height="8"
                viewBox="0 0 80 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Arrow 8"
                    d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z"
                />
            </svg>
        </button>
    );
};

export default CatalogButton;
