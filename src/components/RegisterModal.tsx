"use client";

import { Roboto } from "next/font/google";
import { FC, useCallback, useState } from "react";

import Input from "@/components/Input";
import { IUser, useDatabase } from "@/lib/api";
import { Close } from "@mui/icons-material";

import ArrowButton from "./ArrowButton";
import Checkbox from "./Checkbox";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

interface Props {
    onClose: () => void;
    onLogin: () => void;
}

const RegisterModal: FC<Props> = ({ onClose, onLogin }) => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [index, setIndex] = useState("");
    const [fullAddress, setFullAddress] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [accept, setAccept] = useState(false);

    const [db, setDb] = useDatabase();
    const onRegister = useCallback(() => {
        if (db === undefined) return;
        if (!accept) return;
        console.log("ACEC", accept);

        const user: IUser = {
            fullName,
            phone,
            email,
        };

        setDb({ ...db, users: [...db.users, user] });
        onLogin();
    }, [db, setDb, email, fullName, phone, accept, onLogin]);

    return (
        <div
            className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-stone-50 p-3 backdrop-blur sm:bg-transparent sm:p-0 ${roboto.variable} font-sans`}
        >
            <div className="flex gap-44 bg-white p-4 shadow sm:p-32">
                <div className="flex flex-col items-center gap-14 sm:items-start">
                    <div className="text-3xl font-light leading-[34.92px] text-neutral-900">
                        Регистрация
                    </div>
                    <form
                        onSubmit={(ev) => {
                            ev.preventDefault();
                            onRegister();
                        }}
                    >
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-8 sm:flex-row sm:gap-32">
                                <div className="flex flex-col gap-8">
                                    <Input
                                        name="fullName"
                                        placeholder="ФИО"
                                        value={fullName}
                                        onChange={(ev) =>
                                            setFullName(ev.currentTarget.value)
                                        }
                                    />
                                    <Input
                                        name="phone"
                                        placeholder="Контактный телефон"
                                        value={phone}
                                        onChange={(ev) =>
                                            setPhone(ev.currentTarget.value)
                                        }
                                    />
                                    <Input
                                        name="index"
                                        placeholder="Индекс"
                                        value={index}
                                        onChange={(ev) =>
                                            setIndex(ev.currentTarget.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-8">
                                    <Input
                                        name="fullAddress"
                                        placeholder="Ваш полный адрес (только РБ)"
                                        value={fullAddress}
                                        onChange={(ev) =>
                                            setFullAddress(
                                                ev.currentTarget.value
                                            )
                                        }
                                    />
                                    <Input
                                        name="email"
                                        placeholder="Электронная почта"
                                        value={email}
                                        onChange={(ev) =>
                                            setEmail(ev.currentTarget.value)
                                        }
                                    />
                                    <Input
                                        name="comment"
                                        placeholder="Комментарий"
                                        value={comment}
                                        onChange={(ev) =>
                                            setComment(ev.currentTarget.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Checkbox
                                    id="accept"
                                    name="accept"
                                    value={accept ? "1" : "0"}
                                    onChange={(ev) => {
                                        setAccept(ev.currentTarget.checked);
                                    }}
                                />
                                <label
                                    className="text-thin text-[8px] text-zinc-500"
                                    htmlFor="accept"
                                >
                                    Даю согласие на обработку персональных
                                    данных
                                </label>
                            </div>
                            <div className="flex gap-11">
                                <ArrowButton type="submit">
                                    Отправить
                                </ArrowButton>
                                <button
                                    className="self-center border border-primary px-6 py-3 text-sm text-neutral-900 shadow shadow-primary"
                                    onClick={onLogin}
                                >
                                    Войти в кабинет
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

export default RegisterModal;
