import { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            className="w-full border-b border-b-zinc-500 bg-transparent text-center font-thin sm:w-[308px] sm:text-start"
            {...props}
        />
    );
};

export default Input;
