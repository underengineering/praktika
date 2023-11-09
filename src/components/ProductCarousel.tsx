"use client";

import { Roboto } from "next/font/google";

import { useDatabase } from "@/lib/api";

import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const ProductCarousel = () => {
    const [db, _] = useDatabase();
    return (
        <>
            <Carousel className="hidden sm:flex">
                <div
                    className={`flex grow gap-20 ${roboto.variable} font-sans`}
                >
                    {db !== undefined ? (
                        db.products.map((product, index) => (
                            <ProductCard
                                className="shrink-0 grow-0"
                                idx={index}
                                {...product}
                                key={index}
                            />
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </Carousel>
            <div className="flex flex-wrap justify-around gap-4 sm:hidden sm:px-36">
                {db !== undefined ? (
                    db.products
                        .slice(0, 4)
                        .map((product, index) => (
                            <ProductCard idx={index} {...product} key={index} />
                        ))
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

export default ProductCarousel;
