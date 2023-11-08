"use client";

import { Roboto } from "next/font/google";
import { useState } from "react";

import SideBar from "@/components/SideBar";
import {
    FavoriteBorderOutlined,
    Menu,
    SearchOutlined,
    ShoppingBagOutlined,
} from "@mui/icons-material";
import PersonOutlined from "@mui/icons-material/PersonOutlined";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const Header = () => {
    const [sideBarOpened, setSideBarOpened] = useState(false);
    return (
        <header
            className={`flex w-full flex-col justify-between px-2 py-3 sm:px-36 sm:py-12 ${
                sideBarOpened ? "bg-primary sm:bg-transparent" : ""
            } ${roboto.variable} font-sans`}
        >
            <div className="flex w-full justify-between">
                <button
                    className="hidden sm:inline-block"
                    onClick={() => setSideBarOpened(!sideBarOpened)}
                >
                    <Menu sx={{ fontSize: 36 }} />
                </button>
                <div className="flex grow items-center gap-9 sm:grow-0">
                    <div className="flex grow gap-4 rounded-xl bg-stone-50 p-1 sm:bg-transparent sm:p-0">
                        <SearchOutlined />
                        <input
                            className="w-full border-b-0 border-b-zinc-500 bg-transparent sm:w-[308px] sm:border-b"
                            placeholder="Поиск"
                            type="text"
                        />
                    </div>
                    <div className="hidden gap-3 sm:flex">
                        <PersonOutlined />
                        <FavoriteBorderOutlined />
                        <ShoppingBagOutlined />
                    </div>
                </div>
            </div>
            {sideBarOpened ? <SideBar /> : <></>}
        </header>
    );
};

export default Header;
