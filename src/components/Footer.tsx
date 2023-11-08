"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";

import {
    AccessTimeOutlined,
    Instagram,
    LocalPhoneOutlined,
    Mail,
    Telegram,
} from "@mui/icons-material";

import MobileNavBar from "./MobileNavBar";
import UpButton from "./UpButton";

const roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic"],
    variable: "--font-sans",
});

const Footer = () => {
    const footer = [
        {
            title: "Информация",
            texts: [
                "Главная",
                "Акции",
                "Каталог",
                "Возврат",
                "Доставка",
                "Партнёрам",
                "Способы оплаты",
                "Как сделать заказ?",
            ],
        },
        {
            title: "Мой кабинет",
            texts: ["Мои заказы", "Мои адреса", "Мои скидки", "Моя информация"],
        },
        {
            title: "Контактная информация",
            html: (
                <span className="max-w-[250px] font-light text-stone-50">
                    ИП Вишневский Иван Сергеевич государственная регистрация
                    №690867884 от 31.07.2020. Логойским горисполкомом Защита
                    прав потребителей +375259990755
                </span>
            ),
        },
        {},
    ];

    return (
        <footer
            className={`flex flex-col bg-primary p-2 pb-7 sm:flex-row sm:p-20 ${roboto.variable} font-sans`}
        >
            <Image
                className="inline h-[40px] w-[40px] object-contain sm:hidden"
                src="/logo.png"
                width={128}
                height={128}
                alt=""
            />
            <div className="flex grow justify-around">
                <div className="flex flex-col gap-5 sm:hidden">
                    {footer.map((data, index) => (
                        <span className="text-xl text-stone-50" key={index}>
                            {data.title}
                        </span>
                    ))}
                </div>
                {footer.map((data, index) => (
                    <div className="hidden flex-col gap-5 sm:flex" key={index}>
                        <span className="text-xl text-stone-50">
                            {data.title}
                        </span>
                        <div className="flex flex-col gap-2">
                            {data.texts !== undefined
                                ? data.texts.map((text, index) => (
                                      <span
                                          className="text-xs text-stone-50"
                                          key={index}
                                      >
                                          {text}
                                      </span>
                                  ))
                                : data.html}
                        </div>
                    </div>
                ))}
                <div className="flex flex-col gap-5">
                    <span className="text-xl text-stone-50">Соц. сети</span>
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-3">
                            <Telegram className="fill-stone-50" />
                            <Instagram className="fill-stone-50" />
                            <Mail className="fill-stone-50" />
                        </div>
                        <div className="flex gap-3">
                            <LocalPhoneOutlined className="hidden fill-stone-50 sm:inline" />
                            <span className="text-xs font-light text-stone-50">
                                +375255990755
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <AccessTimeOutlined className="hidden fill-stone-50 sm:inline" />
                            <span className="text-xs font-light text-stone-50">
                                круглосуточно, без выходных
                            </span>
                        </div>
                    </div>
                </div>
                <UpButton
                    className="inline self-end bg-stone-50 sm:hidden"
                    iconClassName="fill-primary"
                    size={29}
                />
            </div>
            <Image
                className="hidden object-contain sm:inline"
                src="/logo.png"
                width={128}
                height={128}
                alt=""
            />
            <MobileNavBar onMenu={() => {}} />
        </footer>
    );
};

export default Footer;
