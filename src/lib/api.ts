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
    tags: string[];
}

export interface IReview<TStatus = TDeserialized> {
    rating: number;
    text: string;
    user: { name: string; surname: string };
    createdAt: DateSerializeable<TStatus>;
}

export interface ITag {
    name: string;
    displayName: string;
}

export interface IUser {
    fullName: string;
    phone: string;
    email: string;
}

export interface ISearchQuery {
    name?: string;
    tags?: string[];
    sex?: "male" | "female";
    sort?: "popularity" | "rating" | "price" | "discount" | "updates";
    ageGt?: number;
    ageLt?: number;
    priceGt?: number;
    priceLt?: number;
    size?: string;
    hasDiscount?: boolean;
    favorited?: boolean;
}

export function buildSearchParams(query: ISearchQuery) {
    const url = new URLSearchParams();
    if (query.name !== undefined) url.set("name", query.name);
    if (query.tags !== undefined) url.set("tags", query.tags.join(","));
    if (query.sex !== undefined) url.set("sex", query.sex);
    if (query.sort !== undefined) url.set("sort", query.sort);
    if (query.ageGt !== undefined) url.set("ageGt", query.ageGt.toString());
    if (query.ageLt !== undefined) url.set("ageLt", query.ageLt.toString());
    if (query.priceGt !== undefined)
        url.set("priceGt", query.priceGt.toString());
    if (query.priceLt !== undefined)
        url.set("priceLt", query.priceLt.toString());
    if (query.size !== undefined) url.set("size", query.size);
    if (query.hasDiscount !== undefined)
        url.set("hasDiscount", query.hasDiscount.toString());
    if (query.favorited !== undefined)
        url.set("favorited", query.favorited.toString());

    return url;
}

export function parseSearchQuery(params: URLSearchParams): ISearchQuery {
    const searchQuery: ISearchQuery = {};

    const name = params.get("name");
    if (name !== null) searchQuery.name = name;

    const tags = params.get("tags");
    if (tags !== null) searchQuery.tags = tags.split(",");

    const sex = params.get("sex");
    if (sex !== null && (sex === "male" || sex === "female"))
        searchQuery.sex = sex;

    const sort = params.get("sort");
    if (sort !== null) searchQuery.sort = sort as any;

    const ageGt = params.get("ageGt");
    if (ageGt !== null) searchQuery.ageGt = +ageGt;

    const ageLt = params.get("ageLt");
    if (ageLt !== null) searchQuery.ageLt = +ageLt;

    const priceGt = params.get("priceGt");
    if (priceGt !== null) searchQuery.priceGt = +priceGt;

    const priceLt = params.get("priceLt");
    if (priceLt !== null) searchQuery.priceLt = +priceLt;

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
    tags: ITag[];
}

const database: IDatabase = {
    products: [
        {
            name: "Блузка женская классная",
            price: 0,
            discountedPrice: 800,
            rating: 4,
            favorited: false,
            tags: ["skirt"],
        },
        {
            name: "Блузка мужская базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
            tags: ["skirt"],
        },
        {
            name: "штоны)",
            price: 90,
            rating: 1,
            favorited: false,
            tags: ["shorts"],
        },
        {
            name: "Блузка моя базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
            tags: ["skirt"],
        },
        {
            name: "Блузка моя базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
            tags: ["skirt"],
        },
        {
            name: "Блузка моя базированная",
            price: 65,
            discountedPrice: 50,
            rating: 4,
            favorited: false,
            tags: ["skirt"],
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
    ],
    users: [],
    tags: [
        { name: "tshirt", displayName: "Майки" },
        { name: "costume", displayName: "Костюмы" },
        { name: "trousers", displayName: "Брюки" },
        { name: "jeans", displayName: "Джинсы" },
        { name: "skirt", displayName: "Юбки" },
        { name: "shorts", displayName: "Шорты" },
        { name: "hoody", displayName: "Свитшоты, худи" },
        { name: "blouses", displayName: "Блузки и рубашки" },
        { name: "jacket", displayName: "Пиджаки и жакеты" },
        { name: "dress", displayName: "Платья и сарафаны" },
        { name: "outerwear", displayName: "Верхняя одежда" },
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
