"use client";

import Link from "next/link";
import { FC, useState } from "react";

import { buildSearchParams } from "@/lib/api";
import {
    FavoriteBorderOutlined,
    HomeOutlined,
    MenuOutlined,
    PersonOutlined,
    ShoppingBagOutlined,
} from "@mui/icons-material";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const MobileNavBar: FC<{ onMenu: () => void }> = ({ onMenu }) => {
    const [loginModalOpened, setLoginModalOpened] = useState(false);
    const [registerModalOpened, setRegisterModalOpened] = useState(false);
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 mb-auto flex w-full justify-around bg-primary py-4 sm:hidden">
                <Link href="/">
                    <HomeOutlined
                        className="fill-stone-50"
                        sx={{ fontSize: 25 }}
                    />
                </Link>
                <Link
                    href={`/search?${buildSearchParams({ favorited: true })}`}
                >
                    <FavoriteBorderOutlined
                        className="fill-stone-50"
                        sx={{ fontSize: 25 }}
                    />
                </Link>
                <button onClick={() => setLoginModalOpened(true)}>
                    <PersonOutlined
                        className="fill-stone-50"
                        sx={{ fontSize: 25 }}
                    />
                </button>
                <ShoppingBagOutlined
                    className="fill-stone-50"
                    sx={{ fontSize: 25 }}
                />
                <button onClick={onMenu}>
                    <MenuOutlined
                        className="fill-stone-50"
                        sx={{ fontSize: 25 }}
                    />
                </button>
            </div>
            {loginModalOpened ? (
                <LoginModal
                    onClose={() => setLoginModalOpened(false)}
                    onRegister={() => {
                        setLoginModalOpened(false);
                        setRegisterModalOpened(true);
                    }}
                />
            ) : (
                <></>
            )}
            {registerModalOpened ? (
                <RegisterModal
                    onClose={() => setRegisterModalOpened(false)}
                    onLogin={() => {
                        setLoginModalOpened(true);
                        setRegisterModalOpened(false);
                    }}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default MobileNavBar;
