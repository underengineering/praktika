"use client";

import useEmblaCarousel from "embla-carousel-react";
import React, { FC, ReactNode, useCallback } from "react";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface Props {
    className?: string;
    children: ReactNode | ReactNode[];
}

const Carousel: FC<Props> = ({ children, className }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi !== undefined) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi !== undefined) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={className}>
            <button className="shrink-0" onClick={scrollPrev}>
                <ChevronLeft />
            </button>
            <div className="min-w-0 overflow-clip" ref={emblaRef}>
                {children}
            </div>
            <button className="shrink-0" onClick={scrollNext}>
                <ChevronRight />
            </button>
        </div>
    );
};

export default Carousel;
