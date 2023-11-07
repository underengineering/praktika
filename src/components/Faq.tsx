"use client";

import { Roboto } from "next/font/google";
import { useState } from "react";

import { Add, Close } from "@mui/icons-material";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

const Faq = () => {
    const texts = [
        { q: "Как сделать заказ?", a: "никак" },
        { q: "Способы оплаты", a: "Душой или телом" },
        { q: "Доставка", a: "Почта россии" },
        { q: "Сроки доставки", a: "от 1 до 2 лет" },
        { q: "Как сделать обмен?", a: "да" },
        { q: "Как сделать возврат?", a: "Никак терпи лошпед" },
        {
            q: "Куда и когда вернутся деньги за возвращенный товар?",
            a: "Никуда",
        },
    ];

    const [activeIndices, setActiveIndices] = useState<number[]>([]);
    return (
        <div className={`flex flex-col gap-6 ${roboto.variable} font-sans`}>
            {texts.map((text, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <button
                        className="flex justify-between"
                        onClick={() =>
                            activeIndices.includes(index)
                                ? setActiveIndices(
                                      activeIndices.filter(
                                          (idx) => idx !== index
                                      )
                                  )
                                : setActiveIndices([index, ...activeIndices])
                        }
                    >
                        <span className="text-xl text-neutral-900">
                            {text.q}
                        </span>
                        {activeIndices.includes(index) ? <Close /> : <Add />}
                    </button>
                    {activeIndices.includes(index) ? (
                        text.a
                    ) : (
                        <div className="border border-zinc-500"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;
