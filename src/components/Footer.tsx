import { Roboto } from "next/font/google";
import Image from "next/image";

import {
    AccessTimeOutlined,
    Instagram,
    LocalPhoneOutlined,
    Mail,
    Telegram,
} from "@mui/icons-material";

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
        {
            title: "Соц. сети",
            html: (
                <div className="flex flex-col gap-7">
                    <div className="flex gap-3">
                        <Telegram className="fill-stone-50" />
                        <Instagram className="fill-stone-50" />
                        <Mail className="fill-stone-50" />
                    </div>
                    <div className="flex gap-3">
                        <LocalPhoneOutlined className="fill-stone-50" />
                        <span className="text-xs font-light text-stone-50">
                            +375255990755
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <AccessTimeOutlined className="fill-stone-50" />
                        <span className="text-xs font-light text-stone-50">
                            круглосуточно, без выходных
                        </span>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <footer
            className={`flex flex-col bg-primary p-2 sm:flex-row sm:p-20 ${roboto.variable} font-sans`}
        >
            <div className="flex grow justify-around">
                {footer.map((data, index) => (
                    <div className="flex flex-col gap-5" key={index}>
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
            </div>
            <Image
                className="object-contain"
                src="/logo.png"
                width={128}
                height={128}
                alt=""
            />
        </footer>
    );
};

export default Footer;
