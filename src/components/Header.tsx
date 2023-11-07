"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ISearchQuery, buildSearchParams } from "@/lib/api";
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

const SideBar = () => {
    type TLink = { title: string; query: ISearchQuery };
    const links: TLink[] = [
        { title: "Женщинам", query: { sex: "female" } },
        { title: "Мужчинам", query: { sex: "male" } },
        { title: "Детям", query: { ageLt: 18 } },
        { title: "Обувь", query: { type: "shoes" } },
        { title: "Игрушки", query: { type: "toys" } },
        { title: "Аксессуары", query: { type: "accessories" } },
        { title: "Большие размеры", query: { size: "XL" } },
        { title: "Акции", query: { hasDiscount: true } },
    ];

    type TType = { name: string; query: ISearchQuery };
    const types: TType[] = [
        { name: "Майки", query: { type: "tshirt" } },
        { name: "Костюмы", query: { type: "costume" } },
        { name: "Брюки", query: { type: "trousers" } },
        { name: "Джинсы", query: { type: "jeans" } },
        { name: "Юбки", query: { type: "skirt" } },
        { name: "Шорты", query: { type: "shorts" } },
        { name: "Свитшоты, худи", query: { type: "hoody" } },
        { name: "Блузки и рубашки", query: { type: "blouses" } },
        { name: "Пиджаки и жакеты", query: { type: "jacket" } },
        { name: "Платья и сарафаны", query: { type: "dress" } },
        { name: "Верхняя одежда", query: { type: "outerwear" } },
    ];

    const [activeIdx, setActiveIdx] = useState<number | undefined>();
    return (
        <nav
            className={`fixed left-0 top-14 z-50 flex h-full w-full flex-col gap-1 bg-neutral-900 py-8 sm:left-36 sm:top-24 sm:w-auto sm:min-w-[280px] sm:py-0 ${roboto.variable} font-sans`}
        >
            <Image src="/logo.png" width={128} height={128} alt="" />
            <div className="flex justify-between px-4">
                <ol className="flex flex-col gap-5">
                    {links.map((link, index) => (
                        <li
                            className="text-sm font-light text-stone-50"
                            key={index}
                        >
                            {activeIdx !== index ? (
                                <button onClick={() => setActiveIdx(index)}>
                                    {link.title}
                                </button>
                            ) : (
                                <Link
                                    className="text-xl font-normal"
                                    href={`/search?${buildSearchParams(
                                        link.query
                                    )}`}
                                >
                                    {link.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
                {activeIdx !== undefined ? (
                    <ol className="flex flex-col gap-5">
                        {types.map((type, index) => (
                            <li
                                className="text-sm font-light text-stone-50"
                                key={index}
                            >
                                <Link
                                    href={`/search?${buildSearchParams({
                                        ...links[activeIdx].query,
                                        ...type.query,
                                    })}`}
                                >
                                    {type.name}
                                </Link>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
};

const Header = () => {
    const [sideBarOpened, setSideBarOpened] = useState(false);
    return (
        <header
            className={`flex w-full flex-col justify-between px-2 py-3 sm:px-36 sm:py-12 ${
                sideBarOpened ? "bg-primary sm:bg-transparent" : ""
            }`}
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
