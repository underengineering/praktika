import { Bad_Script, Roboto } from "next/font/google";
import Image from "next/image";

import ArrowButton from "@/components/ArrowButton";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import CatalogButton from "@/components/CatalogButton";
import ChatButton from "@/components/ChatButton";
import Checkbox from "@/components/Checkbox";
import Faq from "@/components/Faq";
import Input from "@/components/Input";
import ProductCarousel from "@/components/ProductCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import UpButton from "@/components/UpButton";
import {
    AccountBalanceOutlined,
    Circle,
    FormatListBulletedOutlined,
    GroupsOutlined,
    SettingsOutlined,
} from "@mui/icons-material";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

const badScript = Bad_Script({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-script",
});

const Welcome = () => {
    return (
        <section
            className={`flex flex-col gap-7 p-2 py-16 sm:px-36 sm:py-0 ${roboto.variable} ${badScript.variable}`}
        >
            <div className="flex justify-between gap-8 sm:gap-0">
                <div className="flex flex-col gap-7 sm:gap-14">
                    <Image
                        className="absolute left-0 top-0 z-[-1] h-[750px] object-cover shadow sm:static sm:h-[242px] sm:w-[278px]"
                        src="/main1.jpg"
                        width="2592"
                        height="3872"
                        alt=""
                    />
                    <div className="flex flex-wrap justify-center sm:justify-start">
                        <span
                            className={`text-center font-sans text-6xl font-light leading-[52.38px] text-stone-50 sm:text-start sm:text-neutral-900`}
                        >
                            Добро пожаловать в
                        </span>
                        <span className="text-center font-sans text-6xl font-light leading-[52.38px] text-stone-50 sm:text-start sm:text-zinc-500">
                            &nbsp;
                        </span>
                        <span
                            className={`text-center font-script text-6xl leading-[69.84px] text-stone-50 sm:text-start sm:text-slate-600`}
                        >
                            Cocteil
                        </span>
                    </div>
                    <span
                        className={`text-center font-sans text-base font-light leading-[18.88px] text-stone-50 sm:text-start sm:text-zinc-500`}
                    >
                        Экономим Ваше время!
                        <br />
                        Предлагаем лучшие цены!
                        <br />
                        Доставляем в кратчайшие сроки!
                    </span>
                </div>
                <Image
                    className="hidden h-full max-h-[416px] w-full max-w-[476px] object-contain shadow sm:inline"
                    src="/main2.jpg"
                    width="1080"
                    height="720"
                    alt=""
                />
            </div>
            <CatalogButton className="self-center" />
        </section>
    );
};

const About = () => {
    const whyUs = [
        [
            "Скидки постоянным клиентам от 5%",
            "Предлагаем самые выгодные цены",
            "Наши покупатели всегда остаются довольны",
            "Широкий ассортимент товаров для всей семьи",
        ],
        [
            "Возможность доставки в любой город Беларуси",
            "Пункты выдачи заказов рядом с домом",
        ],
    ];

    return (
        <section
            className={`flex flex-col gap-24 p-2 py-16 sm:px-36 sm:py-0 ${roboto.variable} font-sans font-light`}
        >
            <span className="text-center text-[25px] leading-[34.92px] text-neutral-900 sm:text-start sm:text-[40px]">
                Почему выбирают нас?
            </span>
            <div className="hidden flex-col gap-24 pr-36 text-sm leading-none sm:flex">
                <div className="flex justify-between">
                    <div className="flex">
                        <span className="max-w-[180px] text-zinc-500">
                            {whyUs[0][0]}
                            <Circle
                                className="text-primary"
                                sx={{ fontSize: 28 }}
                            />
                        </span>
                    </div>
                    <span className="max-w-[180px] text-zinc-500">
                        {whyUs[0][1]}
                    </span>
                    <div className="flex">
                        <span className="max-w-[185px] text-zinc-500">
                            {whyUs[0][2]}
                        </span>
                        <Circle
                            className="relative top-[-2rem] text-primary"
                            sx={{ fontSize: 47 }}
                        />
                    </div>
                    <span className="max-w-[185px] text-zinc-500">
                        {whyUs[0][3]}
                    </span>
                </div>
                <div className="flex justify-between pr-44">
                    <span className="max-w-[227px] text-zinc-500">
                        {whyUs[1][0]}
                        <Circle
                            className="ml-2 text-primary"
                            sx={{ fontSize: 47 }}
                        />
                    </span>
                    <div className="flex">
                        <span className="max-w-[180px] text-zinc-500">
                            {whyUs[1][1]}
                        </span>
                        <Circle
                            className="relative top-[-0.5rem] text-primary"
                            sx={{ fontSize: 28 }}
                        />
                    </div>
                </div>
            </div>
            <Carousel className="flex sm:hidden">
                <div className={`flex grow gap-6 text-stone-50`}>
                    {whyUs.flat().map((text, index) => (
                        <div
                            className="shrink-0 grow-0 basis-[47%] rounded-xl bg-primary p-7"
                            key={index}
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </Carousel>
            <div className="flex justify-between">
                <UpButton iconClassName="fill-stone-50" />
                <ChatButton />
            </div>
        </section>
    );
};

const Products = () => {
    return (
        <section
            className={`flex flex-col gap-16 p-2 py-16 font-sans text-[25px] font-light sm:py-0 sm:text-[40px] ${roboto.variable} ${badScript.variable}`}
        >
            <div className="flex justify-center text-center sm:px-36 sm:text-start">
                <span className="leading-[34.92px] text-neutral-900">
                    Успей купить!
                </span>
                &nbsp;
                <span className="mt-8 font-script leading-[34.92px] text-primary sm:mt-12">
                    Акции
                </span>
            </div>
            <ProductCarousel />
        </section>
    );
};

const Reviews = () => {
    return (
        <section className="flex flex-col gap-8 sm:px-36">
            <div
                className={`p-2 py-16 text-[40px] font-light leading-[34.92px] text-neutral-900 sm:px-36 sm:py-0 ${roboto.variable} font-sans`}
            >
                Отзывы наших покупателей
            </div>
            <ReviewCarousel />
            <Button className="hidden self-start sm:block">
                Добавить отзыв
            </Button>
        </section>
    );
};

const FaqSection = () => {
    return (
        <section
            className={`flex flex-col gap-16 p-2 py-16 sm:px-36 sm:py-0 ${roboto.variable} ${badScript.variable} font-sans`}
        >
            <div className="flex gap-4">
                <span className="text-[40px] font-light leading-[34.92px] text-neutral-900">
                    Часто задаваемые вопросы
                </span>
                <span className="mt-11 font-script text-[40px] leading-[34.92px] text-primary">
                    FAQ
                </span>
            </div>
            <Faq />
        </section>
    );
};

const Cooperation = () => {
    const texts = [
        [
            "Становитесь партнером",
            "Регистрируйтесь и переходите в свой кабинет",
        ],
        [
            "Рекламируйте товары",
            ["Рекламируйте наши товары на форумах, сайтах, в социальных сетях"],
        ],
        [
            "Приводите покупателей",
            "Приводите покупателей на наш сайт по уникальной ссылке",
        ],
        ["Получайте бонусы", "Копите бонусы от каждого оплаченного заказа"],
    ];

    const advantages = [
        {
            icon: (
                <SettingsOutlined
                    className="self-center fill-primary"
                    sx={{ fontSize: 30 }}
                />
            ),
            text: "Автоматизация процессов",
        },
        {
            icon: (
                <FormatListBulletedOutlined
                    className="self-center fill-primary"
                    sx={{ fontSize: 30 }}
                />
            ),
            text: "Пополнение ассортимента",
        },
        {
            icon: (
                <GroupsOutlined
                    className="self-center fill-primary"
                    sx={{ fontSize: 30 }}
                />
            ),
            text: "Поддержка и обучение",
        },
        {
            icon: (
                <AccountBalanceOutlined
                    className="self-center fill-primary"
                    sx={{ fontSize: 30 }}
                />
            ),
            text: "Бонусы за новых клиентов",
        },
    ];

    return (
        <section
            className={`flex flex-col gap-16 p-2 py-16 sm:px-36 sm:py-0 ${roboto.variable} font-sans`}
        >
            <span className="text-center text-[40px] font-light leading-[34.92px] text-neutral-900 sm:self-start sm:text-start">
                Сотрудничество с нами
            </span>
            <span className="text-center text-[25px] font-light leading-[18.88px] text-zinc-500 sm:self-start sm:text-start sm:text-base">
                Наша компания постоянно растёт и расширяет рынок, поэтому мы
                заинтересованы в новых партнёрах и рассматриваем новые проекты,
                которые могут быть привлекательны и интересны с коммерческой
                точки зрения.
            </span>
            <div className="flex flex-wrap justify-around gap-8 sm:flex-nowrap sm:gap-0">
                {texts.map(([text1, text2], index) => (
                    <div
                        className="flex h-[78px] w-[165px] grow basis-1/3 flex-col justify-center rounded-xl bg-primary sm:h-auto sm:w-auto sm:justify-start sm:gap-6 sm:bg-transparent"
                        key={index}
                    >
                        <span className="px-11 py-7 text-center text-xs leading-normal text-stone-50 sm:px-0 sm:py-0 sm:text-xl sm:text-neutral-900">
                            {text1}
                        </span>
                        <span className="hidden text-center text-xs font-light leading-[14.16px] text-zinc-500 sm:inline">
                            {text2}
                        </span>
                    </div>
                ))}
            </div>
            <div className="items:justify-start flex justify-center text-xl leading-[17.46px] text-neutral-900">
                <span className="hidden sm:inline">Это выгодно.&nbsp;</span>
                <span>Какие преимущества?</span>
            </div>
            <div className="flex flex-col items-center justify-between gap-9 sm:flex-row sm:items-start sm:gap-0">
                {advantages.map((advantage, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                        {advantage.icon}
                        <div className="text-sm font-light leading-none text-zinc-500">
                            {advantage.text}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const InviteForm = () => {
    return (
        <section
            className={`w-full bg-primary px-2 py-9 sm:w-4/6 sm:px-32 sm:py-10 ${roboto.variable} font-sans`}
        >
            <div className="flex flex-col gap-8 bg-stone-50 px-12 py-9 sm:gap-10">
                <div className="text-center text-xs leading-normal text-neutral-900 sm:text-start sm:text-xl">
                    Приглашаем к сотрудничеству производителей и поставщиков
                    одежды, обуви и аксессуаров
                </div>
                <form method="POST" className="flex flex-col gap-6">
                    <Input type="text" placeholder="Ваше имя" name="name" />
                    <Input
                        type="text"
                        placeholder="Номер телефона"
                        name="phone"
                    />
                    <Input
                        type="email"
                        placeholder="Электронная почта"
                        name="email"
                    />
                    <div className="flex items-center gap-1">
                        <Checkbox id="accept" name="accept" />
                        <label
                            className="text-xs font-thin leading-[9.44px] text-zinc-500 sm:text-sm"
                            htmlFor="accept"
                        >
                            Даю согласие на обработку персональных данных
                        </label>
                    </div>
                    <ArrowButton className="mt-10 w-48" type="submit">
                        Отправить
                    </ArrowButton>
                </form>
            </div>
        </section>
    );
};

export default function Home() {
    return (
        <main className="flex flex-col">
            <div className="flex flex-col gap-36">
                <Welcome />
                <About />
                <Products />
                <Reviews />
                <FaqSection />
                <Cooperation />
                <InviteForm />
            </div>
        </main>
    );
}
