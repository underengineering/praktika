import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type TSerialized = { __brand: "serialized" };
export type TDeserialized = { __brand: "deserialized" };

export type DateSerializeable<T> = T extends TSerialized
    ? string
    : T extends TDeserialized
    ? Date
    : never;

export interface IProduct {
    name: string;
    price: number;
    discountedPrice?: number;
    rating: number;
    favorited: boolean;
}

export interface IReview<TStatus = TDeserialized> {
    rating: number;
    text: string;
    user: { name: string; surname: string };
    createdAt: DateSerializeable<TStatus>;
}

export interface ISearchQuery {
    type?: string;
    sex?: "male" | "female";
    ageGt?: number;
    ageLt?: number;
    size?: string;
    hasDiscount?: boolean;
    favorited?: boolean;
}

export function buildSearchParams(query: ISearchQuery) {
    const url = new URLSearchParams();
    if (query.type !== undefined) url.set("type", query.type);
    if (query.sex !== undefined) url.set("sex", query.sex);
    if (query.ageGt !== undefined) url.set("ageGt", query.ageGt.toString());
    if (query.ageLt !== undefined) url.set("ageLt", query.ageLt.toString());
    if (query.size !== undefined) url.set("size", query.size);
    if (query.hasDiscount !== undefined)
        url.set("hasDiscount", query.hasDiscount.toString());
    if (query.favorited !== undefined)
        url.set("favorited", query.favorited.toString());

    return url;
}

export interface IDatabase<TStatus = TDeserialized> {
    products: IProduct[];
    reviews: IReview<TStatus>[];
}

const database: IDatabase = {
    products: [
        {
            name: "Блузка женская классная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
        },
        {
            name: "Блузка мужская базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
        },
        {
            name: "Блузка моя базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
        },
        {
            name: "Блузка моя базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
        },
        {
            name: "Блузка моя базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
        },
        {
            name: "Блузка моя базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
        },
    ],
    reviews: [
        {
            rating: 5,
            text: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            user: { name: "Анна", surname: "Котловановна" },
            createdAt: new Date(),
        },
        {
            rating: 5,
            text: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
            user: { name: "Анна", surname: "Котловановна" },
            createdAt: new Date(),
        },
        {
            rating: 1,
            text: "Купила блузку, а она кал, топором бы переебать ее создателя!)",
            user: { name: "Анна", surname: "Котловановна" },
            createdAt: new Date(),
        },
    ],
};

function serialize(database: IDatabase<TDeserialized>): IDatabase<TSerialized> {
    return {
        ...database,
        reviews: database.reviews.map((review) => ({
            ...review,
            createdAt: review.createdAt.toISOString(),
        })),
    };
}

function deserialize(
    database: IDatabase<TSerialized>
): IDatabase<TDeserialized> {
    return {
        ...database,
        reviews: database.reviews.map((review) => ({
            ...review,
            createdAt: new Date(review.createdAt),
        })),
    };
}

function getDatabaseData(): IDatabase {
    const jsonData = localStorage.getItem("db");
    if (jsonData === null) {
        const initialData = serialize(database);
        localStorage.setItem("db", JSON.stringify(initialData));
        return database;
    }

    return deserialize(JSON.parse(jsonData));
}

// should be used only in client components
export function useDatabase(): [
    IDatabase | undefined,
    Dispatch<SetStateAction<IDatabase>>,
] {
    const [db, setDb] = useState<IDatabase | undefined>();
    useEffect(() => setDb(getDatabaseData()), []);
    useEffect(() => {
        // Not loaded yet
        if (db === undefined) return;

        localStorage.setItem("db", JSON.stringify(db));
    }, [db]);

    return [db, setDb as Dispatch<SetStateAction<IDatabase>>];
}
