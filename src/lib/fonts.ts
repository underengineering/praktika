import { Bad_Script, Roboto } from "next/font/google";

function test() {
    //
}

export const roboto = Roboto({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-sans",
});

export const badScript = Bad_Script({
    weight: "400",
    subsets: ["latin", "cyrillic"],
    variable: "--font-script",
});
