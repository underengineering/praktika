"use client";

import { Straight } from "@mui/icons-material";

const UpButton = () => {
    return (
        <button
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary shadow-primary transition-transform hover:scale-110 hover:shadow-2xl active:scale-110 active:shadow-2xl"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <Straight className="fill-stone-50" sx={{ fontSize: 36 }} />
        </button>
    );
};

export default UpButton;
