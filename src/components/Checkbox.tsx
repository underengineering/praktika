import { FC, InputHTMLAttributes } from "react";

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            className="h-3 min-h-[0.75rem] w-3 min-w-[0.75rem] appearance-none rounded-full border border-primary transition-colors checked:bg-primary"
            type="checkbox"
            {...props}
        />
    );
};

export default Checkbox;
