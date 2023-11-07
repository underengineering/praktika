"use client";

import { FC } from "react";

import { Straight } from "@mui/icons-material";

const UpButton: FC<{
    className?: string;
    iconClassName?: string;
    size?: number;
}> = ({ className, iconClassName, size }) => {
    return (
        <button
            className={`flex items-center justify-center rounded-full bg-primary shadow-primary transition-transform hover:scale-110 hover:shadow-2xl active:scale-110 active:shadow-2xl ${
                className !== undefined ? className : ""
            }`}
            style={{
                width: `${size ?? 72}px`,
                height: `${size ?? 72}px`,
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <Straight className={iconClassName} sx={{ fontSize: 36 }} />
        </button>
    );
};

export default UpButton;
