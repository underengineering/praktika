"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ISearchQuery, buildSearchParams, useDatabase } from "@/lib/api";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const SideBar = () => {
    const [db, _] = useDatabase();

    type TLink = { title: string; query: ISearchQuery };
    const links: TLink[] = [
        { title: "Женщинам", query: { sex: "female" } },
        { title: "Мужчинам", query: { sex: "male" } },
        { title: "Детям", query: { ageLt: 18 } },
        { title: "Обувь", query: { tags: ["shoes"] } },
        { title: "Игрушки", query: { tags: ["toys"] } },
        { title: "Аксессуары", query: { tags: ["accessories"] } },
        { title: "Большие размеры", query: { size: "XL" } },
        { title: "Акции", query: { hasDiscount: true } },
    ];

    type TType = { name: string; query: ISearchQuery };
    const [types, setTypes] = useState<TType[] | undefined>();

    useEffect(() => {
        if (db === undefined) return;

        const typeNames = [
            "tshirt",
            "costume",
            "trousers",
            "jeans",
            "skirt",
            "shorts",
            "hoody",
            "blouses",
            "jacket",
            "dress",
            "outerwear",
        ];

        const newTypes = [];
        for (const name of typeNames) {
            const tag = db.tags.find((tag) => tag.name === name);
            if (tag === undefined) throw new Error(`Tag '${name}' not found`);

            newTypes.push({ name: tag.displayName, query: { tags: [name] } });
        }

        setTypes(newTypes);
    }, [db]);

    const [activeIdx, setActiveIdx] = useState<number | undefined>();
    return (
        <nav
            className={`fixed left-0 top-14 z-40 flex h-full w-full flex-col gap-1 bg-neutral-900 py-8 sm:left-36 sm:top-24 sm:w-auto sm:min-w-[280px] sm:py-0 ${roboto.variable} font-sans`}
        >
            <Image src="/logo.png" width={128} height={128} alt="" />
            <div className="flex justify-between gap-2 px-4">
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
                {activeIdx !== undefined && types !== undefined ? (
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

export default SideBar;
