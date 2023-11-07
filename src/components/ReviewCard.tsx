import _ from "lodash";
import { Roboto } from "next/font/google";
import { FC } from "react";

import { Star } from "@mui/icons-material";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

interface Props {
    className?: string;

    rating: number;
    text: string;
    user: { name: string; surname: string };
    createdAt: Date;
}

const ReviewCard: FC<Props> = ({
    className,
    rating,
    text,
    user,
    createdAt,
}) => {
    return (
        <div
            className={`flex w-[220px] gap-3 px-3 py-3 font-sans shadow sm:w-[460px] sm:gap-12 sm:px-6 sm:py-12 ${
                roboto.variable
            } ${className !== undefined ? className : ""}`}
        >
            <div className="h-full max-h-[35px] w-full max-w-[35px] self-center rounded-full bg-primary sm:max-h-[94px] sm:max-w-[94px]"></div>
            <div className="flex w-full flex-col justify-between">
                <div className="flex">
                    {_.range(rating).map((_, index) => (
                        <Star
                            className="fill-primary"
                            sx={{ fontSize: 10 }}
                            key={index}
                        />
                    ))}
                </div>
                <div className="text-[10px] font-light leading-tight text-zinc-500 sm:text-xs">
                    {text}
                </div>
                <div className="flex justify-between">
                    <div className="text-[8px] leading-tight text-neutral-900 sm:text-xs">
                        {`${user.name} ${user.surname}`}
                    </div>
                    <div className="text-[8px] leading-tight text-slate-600 sm:text-xs">
                        {`${createdAt.getDay()}.${createdAt.getMonth()}.${createdAt.getFullYear()}`}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
