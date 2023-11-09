"use client";

import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

import SideBar from "@/components/SideBar";
import { buildSearchParams } from "@/lib/api";
import {
    FavoriteBorderOutlined,
    Menu,
    SearchOutlined,
    ShoppingBagOutlined,
} from "@mui/icons-material";
import PersonOutlined from "@mui/icons-material/PersonOutlined";

import UserMenu from "./UserMenu";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const Header = () => {
    const router = useRouter();

    const [query, setQuery] = useState("");

    const [sideBarOpened, setSideBarOpened] = useState(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

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
                    <form
                        className="flex grow gap-4 rounded-xl bg-stone-50 p-1 sm:bg-transparent sm:p-0"
                        onSubmit={(ev) => {
                            ev.preventDefault();
                            router.replace(
                                `/search?${buildSearchParams({ name: query })}`
                            );
                        }}
                    >
                        <SearchOutlined />
                        <input
                            className="w-full border-b-0 border-b-zinc-500 bg-transparent sm:w-[308px] sm:border-b"
                            placeholder="Поиск"
                            type="text"
                            value={query}
                            onChange={(ev) => setQuery(ev.currentTarget.value)}
                        />
                    </form>
                    <div className="relative hidden gap-3 sm:flex">
                        <button
                            onClick={() => setUserMenuOpened(!userMenuOpened)}
                        >
                            <PersonOutlined />
                        </button>
                        {userMenuOpened ? (
                            <div className="absolute mt-8">
                                <UserMenu />
                            </div>
                        ) : (
                            <></>
                        )}
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
