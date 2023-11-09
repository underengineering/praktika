"use client";

import { Roboto } from "next/font/google";
import { FC, ReactElement, useState } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const Dropdown: FC<{
    name: string;
    children: ReactElement | ReactElement[];
}> = ({ name, children }) => {
    const [shown, setShown] = useState(false);
    return (
        <div className="flex flex-col gap-4">
            <button
                className={`flex items-center gap-1 text-xl text-neutral-900 ${roboto.variable} font-sans`}
                onClick={() => setShown(!shown)}
            >
                {name}
                {shown ? (
                    <ExpandLess
                        className="fill-primary"
                        sx={{ fontSize: 20 }}
                    />
                ) : (
                    <ExpandMore
                        className="fill-primary"
                        sx={{ fontSize: 20 }}
                    />
                )}
            </button>
            {shown ? <div className="flex flex-col">{children}</div> : <></>}
        </div>
    );
};

export default Dropdown;
