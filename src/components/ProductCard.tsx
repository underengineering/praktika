import _ from "lodash";
import { FC } from "react";

import {
    Favorite,
    FavoriteBorderOutlined,
    ShoppingBagOutlined,
    Star,
} from "@mui/icons-material";

interface Props {
    className?: string;

    name: string;
    price: number;
    discountedPrice?: number;
    rating: number;
    favorited: boolean;
}

const ProductCard: FC<Props> = ({
    className,
    name,
    price,
    discountedPrice,
    rating,
    favorited,
}) => {
    return (
        <div
            className={`flex w-[150px] flex-col font-sans sm:w-[278px] ${
                className !== undefined ? className : ""
            }`}
        >
            <div className="h-[171px] rounded bg-primary shadow sm:h-[319px] sm:rounded-none"></div>
            <div className="flex items-center gap-6">
                <div className="text-sm text-neutral-900">
                    {(discountedPrice ?? price).toFixed(2)} р
                </div>
                {discountedPrice !== undefined ? (
                    <div className="text-xs font-light text-zinc-500 line-through">
                        {price.toFixed(2)} р
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className="flex justify-between">
                <div className="text-ellipsis text-[10px] text-zinc-500 sm:text-xs">
                    {name}
                </div>
                <div className="flex">
                    {favorited ? <Favorite /> : <FavoriteBorderOutlined />}
                    <ShoppingBagOutlined />
                </div>
            </div>
            <div className="flex justify-between">
                <button className="group hidden items-center gap-2 border border-neutral-900 px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-stone-50 active:bg-primary active:text-stone-50 sm:flex">
                    Подробнее
                    <svg
                        className="fill-primary transition-colors group-hover:fill-stone-50 group-active:fill-stone-50"
                        width="26"
                        height="4"
                        viewBox="0 0 26 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Arrow 9"
                            d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z"
                        />
                    </svg>
                </button>
                <div className="flex self-end">
                    {_.range(rating).map((_, index) => (
                        <Star className="fill-primary" key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
