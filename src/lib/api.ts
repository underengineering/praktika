import { useEffect, useState } from "react";

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

export interface IUser {
    fullName: string;
    phone: string;
    email: string;
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

export function parseSearchQuery(params: URLSearchParams): ISearchQuery {
    const searchQuery: ISearchQuery = {};

    const type = params.get("type");
    if (type !== null) searchQuery.type = type;

    const sex = params.get("sex");
    if (sex !== null && (sex === "male" || sex === "female"))
        searchQuery.sex = sex;

    const ageGt = params.get("ageGt");
    if (ageGt !== null) searchQuery.ageGt = +ageGt;

    const ageLt = params.get("ageLt");
    if (ageLt !== null) searchQuery.ageLt = +ageLt;

    const size = params.get("size");
    if (size !== null) searchQuery.size = size;

    const hasDiscount = params.get("hasDiscount");
    if (hasDiscount !== null) searchQuery.hasDiscount = hasDiscount === "true";

    const favorited = params.get("favorited");
    if (favorited !== null) searchQuery.favorited = favorited === "true";

    return searchQuery;
}

export interface IDatabase<TStatus = TDeserialized> {
    products: IProduct[];
    reviews: IReview<TStatus>[];
    users: IUser[];
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
    users: [],
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
    (db: IDatabase) => void,
] {
    const [db, setDb] = useState<IDatabase | undefined>();
    useEffect(() => {
        setDb(getDatabaseData());
    }, []);

    const updateDb = (db: IDatabase) => {
        console.log("SAVE DB", db);
        localStorage.setItem("db", JSON.stringify(db));
        setDb(db);
    };

    return [db, updateDb];
}

export function useUser(): [
    IUser | undefined,
    (email: string | undefined) => void,
] {
    const [db, _] = useDatabase();
    const [user, setUser] = useState<IUser | undefined>();
    useEffect(() => {
        if (db === undefined) return;

        const userIdx = localStorage.getItem("userIdx");
        if (userIdx === null) return;

        setUser(db.users[+userIdx]);
    }, [db]);

    const updateUser = (email: string | undefined) => {
        if (db === undefined) return;
        if (email === undefined) {
            setUser(undefined);
            localStorage.removeItem("userIdx");
            return;
        }

        const userIdx = db.users.findIndex((user) => user.email === email);
        if (userIdx === -1) return;

        localStorage.setItem("userIdx", userIdx.toString());
        setUser(db.users[userIdx]);
    };

    return [user, updateUser];
}
