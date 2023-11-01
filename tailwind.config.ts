import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#514A7E",
            },
            backgroundImage: {
                main: "url('/main1.jpg')",
            },
            fontFamily: {
                sans: ["var(--font-roboto)"],
                script: ["var(--font-script)"],
            },
        },
    },
    plugins: [],
};
export default config;
