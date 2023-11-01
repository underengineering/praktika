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

    const [activeQuestion, setActiveQuestion] = useState<number | undefined>(
        undefined
    );

    return (
        <div className={`flex flex-col gap-6 ${roboto.variable} font-sans`}>
            {texts.map((text, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <button
                        className="flex justify-between"
                        onClick={() =>
                            activeQuestion === index
                                ? setActiveQuestion(undefined)
                                : setActiveQuestion(index)
                        }
                    >
                        <span className="text-xl text-neutral-900">
                            {text.q}
                        </span>
                        {activeQuestion === index ? <Close /> : <Add />}
                    </button>
                    {activeQuestion === index ? (
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
