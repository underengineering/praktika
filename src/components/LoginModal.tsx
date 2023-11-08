"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { FC, useState } from "react";

import Input from "@/components/Input";
import { useUser } from "@/lib/api";
import { Close } from "@mui/icons-material";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

interface Props {
    onClose: () => void;
    onRegister: () => void;
}

const LoginModal: FC<Props> = ({ onClose, onRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [_, setUser] = useUser();

    return (
        <div
            className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-stone-50 p-3 backdrop-blur sm:bg-transparent sm:p-0 ${roboto.variable} font-sans`}
        >
            <div className="flex gap-44 bg-white p-4 shadow sm:p-32">
                <div className="flex flex-col items-center gap-14 sm:items-start">
                    <div className="text-3xl font-light leading-[34.92px] text-neutral-900">
                        Вход в личный кабинет
                    </div>
                    <form
                        onSubmit={() => {
                            setUser(email);
                            onClose();
                        }}
                    >
                        <div className="flex flex-col gap-8">
                            <Input
                                name="email"
                                placeholder="Электронная почта"
                                value={email}
                                onChange={(ev) =>
                                    setEmail(ev.currentTarget.value)
                                }
                            />
                            <Input
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(ev) =>
                                    setPassword(ev.currentTarget.value)
                                }
                            />

                            <Link
                                className="text-base font-light leading-[18.88px] text-primary"
                                href="/"
                            >
                                Не помню пароль
                            </Link>
                            <div className="flex gap-11">
                                <button
                                    className="self-center border border-primary bg-primary px-9 py-2 text-sm text-stone-50 shadow shadow-primary"
                                    type="submit"
                                >
                                    Войти в кабинет
                                </button>
                                <button
                                    className="self-center border border-primary px-9 py-2 text-sm text-neutral-900 shadow shadow-primary"
                                    onClick={onRegister}
                                >
                                    Регистрация
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <button
                    className="hidden h-[47px] w-[47px] items-center justify-center rounded-full bg-primary shadow-md shadow-primary sm:flex"
                    onClick={onClose}
                >
                    <Close className="fill-stone-50" />
                </button>
            </div>
        </div>
    );
};

export default LoginModal;
