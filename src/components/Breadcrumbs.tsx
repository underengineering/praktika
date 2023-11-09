import { Roboto } from "next/font/google";
import Link from "next/link";
import { FC, Fragment } from "react";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

interface Props {
    crumbs: { name: string; href?: string }[];
}

const Breadcrumbs: FC<Props> = ({ crumbs }) => {
    return (
        <div
            className={`flex gap-1 text-xl text-zinc-500 ${roboto.variable} font-sans`}
        >
            {crumbs.map((crumb, index) => (
                <Fragment key={index}>
                    {index !== 0 ? "/" : <></>}
                    {crumb.href !== undefined ? (
                        <Link
                            className={`${
                                index === crumbs.length - 1
                                    ? "text-primary"
                                    : ""
                            }`}
                            href={crumb.href}
                        >
                            {crumb.name}
                        </Link>
                    ) : (
                        <div
                            className={`${
                                index === crumbs.length - 1
                                    ? "text-primary"
                                    : ""
                            }`}
                        >
                            {crumb.name}
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
