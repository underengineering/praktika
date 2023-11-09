"use client";

import _ from "lodash";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import Dropdown from "@/components/Dropdown";
import ProductCard from "@/components/ProductCard";
import RadioButton from "@/components/RadioButton";
import {
    IProduct,
    buildSearchParams,
    parseSearchQuery,
    useDatabase,
} from "@/lib/api";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

export default function Search() {
    const router = useRouter();

    const [db] = useDatabase();
    const [breadcrumbs, setBreadcrumbs] = useState<
        {
            name: string;
            href?: string;
        }[]
    >([{ name: "Главная", href: "/" }]);

    const [products, setProducts] = useState<(IProduct & { idx: number })[]>(
        []
    );

    const searchParams = useSearchParams();
    const query = useMemo(() => parseSearchQuery(searchParams), [searchParams]);
    useEffect(() => {
        if (db === undefined) return;

        const newProducts = db.products
            .map((product, index) => ({ ...product, idx: index }))
            .filter((product) => {
                let matches = true;
                if (query.name) matches &&= product.name.includes(query.name);

                if (query.hasDiscount !== undefined)
                    matches &&=
                        query.hasDiscount &&
                        product.discountedPrice !== undefined;

                if (query.tags !== undefined)
                    matches &&= _.reduce(
                        product.tags,
                        (acc, tag) => acc && query.tags!.includes(tag),
                        false
                    );

                const price = product.discountedPrice ?? product.price;
                if (query.priceGt !== undefined)
                    matches &&= price > query.priceGt;
                if (query.priceLt !== undefined)
                    matches &&= price < query.priceLt;

                return matches;
            });

        if (query.sort === "price") {
            console.log("bober");
            newProducts.sort(
                (a, b) =>
                    (a.discountedPrice ?? a.price) -
                    (b.discountedPrice ?? a.price)
            );
        } else if (query.sort === "popularity") {
        } else if (query.sort === "rating") {
            newProducts.sort((a, b) => a.rating - b.rating);
        } else if (query.sort === "discount") {
            newProducts.sort(
                (a, b) =>
                    a.price -
                    (a.discountedPrice ?? a.price) -
                    (b.price - (b.discountedPrice ?? b.price))
            );
        } else if (query.sort === "updates") {
        }

        setProducts(newProducts);

        const newBreadcrumbs: typeof breadcrumbs = [
            { name: "Главная", href: "/" },
        ];

        if (query.sex !== undefined)
            newBreadcrumbs.push({
                name: query.sex === "male" ? "Мужчинам" : "Женщинам",
                href: `/search?${buildSearchParams({
                    ...query,
                    tags: undefined,
                })}`,
            });

        if (query.tags && query.tags.length > 0) {
            const firstTag = query.tags[0];
            const tag = db.tags.find((tag) => tag.name === firstTag);
            if (tag !== undefined)
                newBreadcrumbs.push({
                    name: tag.displayName,
                });
        }

        setBreadcrumbs(newBreadcrumbs);
    }, [query, db]);

    return (
        <main className={`flex flex-col ${roboto.variable} font-sans`}>
            <div className="flex flex-col gap-16 p-2 px-2 py-16 sm:px-36 sm:py-0">
                <span className="text-[40px] font-light leading-[34.92px] text-neutral-900">
                    {searchParams.size > 0 ? (
                        <Breadcrumbs crumbs={breadcrumbs} />
                    ) : (
                        <></>
                    )}
                </span>
                <div className="flex flex-col gap-10 sm:flex-row">
                    <div className="flex shrink-0 flex-col sm:gap-16">
                        <span className="text-xl text-zinc-500">
                            Сортировать по:
                        </span>
                        <div className="flex flex-col gap-5 text-xl text-neutral-900">
                            Цена, б.р
                            <div className="flex flex-col text-[10px] font-light text-zinc-500">
                                <div className="flex gap-1">
                                    <label htmlFor="priceMin">от</label>
                                    <input
                                        id="priceMin"
                                        type="range"
                                        min={0}
                                        onChange={(ev) =>
                                            router.replace(
                                                `/search?${buildSearchParams({
                                                    ...query,
                                                    priceGt:
                                                        +ev.currentTarget.value,
                                                })}`,
                                                { scroll: false }
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex gap-1">
                                    <label htmlFor="priceMax">до</label>
                                    <input
                                        id="priceMax"
                                        type="range"
                                        max={50000}
                                        onChange={(ev) =>
                                            router.replace(
                                                `/search?${buildSearchParams({
                                                    ...query,
                                                    priceLt:
                                                        +ev.currentTarget.value,
                                                })}`,
                                                { scroll: false }
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <fieldset>
                                <Dropdown name="Размер">
                                    {[
                                        "S",
                                        "M",
                                        "L",
                                        "XL",
                                        "2XL",
                                        "3XL",
                                        "36",
                                        "38",
                                        "40",
                                        "42",
                                        "44",
                                        "46",
                                        "48",
                                        "50",
                                        "52",
                                        "54",
                                        "56",
                                        "Универсальный",
                                    ].map((size, index) => (
                                        <div
                                            className="flex gap-6 text-sm font-light text-zinc-500"
                                            key={index}
                                        >
                                            <RadioButton
                                                id={size}
                                                name="size"
                                                onChange={() =>
                                                    router.replace(
                                                        `/search?${buildSearchParams(
                                                            { ...query, size }
                                                        )}`,
                                                        { scroll: false }
                                                    )
                                                }
                                            />
                                            <label htmlFor={size}>{size}</label>
                                        </div>
                                    ))}
                                </Dropdown>
                            </fieldset>
                            <Dropdown name="Цвета">
                                <span></span>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex flex-col gap-9">
                        <div className="flex flex-col text-xl text-neutral-900 sm:flex-row sm:gap-9">
                            {[
                                ["Популярности", "popularity"],
                                ["Рейтингу", "rating"],
                                ["Цене", "price"],
                                ["Скидке", "discount"],
                                ["Обновлению", "updates"],
                            ].map(([displayName, name], index) => (
                                <Link
                                    href={`/search?${buildSearchParams({
                                        ...query,
                                        sort: name as any,
                                    })}`}
                                    key={index}
                                >
                                    {displayName}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {products.map((product, index) => (
                                <ProductCard {...product} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
