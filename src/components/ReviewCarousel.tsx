"use client";

import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

import { IDatabase, useDatabase } from "@/lib/api";

import Carousel from "./Carousel";
import ReviewCard from "./ReviewCard";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const ReviewCarousel = () => {
    const [db, _] = useDatabase();
    return (
        <>
            <Carousel className="flex">
                <div
                    className={`flex grow gap-4 sm:gap-20 ${roboto.variable} font-sans`}
                >
                    {db !== undefined ? (
                        db.reviews.map((review, index) => (
                            <ReviewCard
                                className="shrink-0 grow-0"
                                {...review}
                                key={index}
                            />
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </Carousel>
        </>
    );
};

export default ReviewCarousel;
