import type { Metadata } from "next";

import Header from "@/components/Header";

import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="w-full bg-stone-50">
                <Header />
                {children}
            </body>
        </html>
    );
}
