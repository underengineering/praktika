import { Roboto } from "next/font/google";
import { useState } from "react";

import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import { useUser } from "@/lib/api";
import {
    FavoriteBorderOutlined,
    LogoutOutlined,
    ShoppingBagOutlined,
    VisibilityOutlined,
} from "@mui/icons-material";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const UserMenu = () => {
    const [user, setUser] = useUser();

    const [loginModalOpened, setLoginModalOpened] = useState(false);
    const [registerModalOpened, setRegisterModalOpened] = useState(false);

    return (
        <div
            className={`flex flex-col gap-4 bg-stone-50 px-6 py-4 shadow ${roboto.variable} font-sans`}
        >
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

            <div className="h-[39px] w-[39px] self-center rounded-full bg-stone-300" />
            {user !== undefined ? (
                <span className="self-center text-sm leading-none text-neutral-900">
                    {user.fullName}
                </span>
            ) : (
                <button
                    className="self-center border border-primary bg-primary px-9 py-2 text-sm text-stone-50 shadow shadow-primary"
                    onClick={() => setLoginModalOpened(true)}
                >
                    Войти
                </button>
            )}
            <div className="flex items-center gap-3">
                <ShoppingBagOutlined />
                <span className="text-xs font-light leading-[14.16px] text-neutral-900">
                    Корзина
                </span>
            </div>
            <div className="w-full border border-zinc-500"></div>
            <div className="flex items-center gap-3">
                <FavoriteBorderOutlined />
                <span className="text-xs font-light leading-[14.16px] text-neutral-900">
                    Избранное
                </span>
            </div>
            <div className="flex items-center gap-3">
                <VisibilityOutlined />
                <span className="text-xs font-light leading-[14.16px] text-neutral-900">
                    Просмотренные
                </span>
            </div>
            {user !== undefined ? (
                <button
                    className="flex items-center gap-3"
                    onClick={() => setUser(undefined)}
                >
                    <LogoutOutlined />
                    <span className="text-xs font-light leading-[14.16px] text-neutral-900">
                        Выйти
                    </span>
                </button>
            ) : (
                <></>
            )}
        </div>
    );
};

export default UserMenu;
