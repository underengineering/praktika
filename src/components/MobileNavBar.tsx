import Link from "next/link";
import { FC } from "react";

import { buildSearchParams } from "@/lib/api";
import {
    FavoriteBorderOutlined,
    HomeOutlined,
    MenuOutlined,
    PersonOutlined,
    ShoppingBagOutlined,
} from "@mui/icons-material";

const MobileNavBar: FC<{ onMenu: () => void }> = ({ onMenu }) => {
    return (
        <div className="fixed bottom-0 left-0 z-50 mb-auto flex w-full justify-around bg-primary py-4 sm:hidden">
            <Link href="/">
                <HomeOutlined className="fill-stone-50" sx={{ fontSize: 25 }} />
            </Link>
            <Link href={`/search?${buildSearchParams({ favorited: true })}`}>
                <FavoriteBorderOutlined
                    className="fill-stone-50"
                    sx={{ fontSize: 25 }}
                />
            </Link>
            <PersonOutlined className="fill-stone-50" sx={{ fontSize: 25 }} />
            <ShoppingBagOutlined
                className="fill-stone-50"
                sx={{ fontSize: 25 }}
            />
            <button onClick={onMenu}>
                <MenuOutlined className="fill-stone-50" sx={{ fontSize: 25 }} />
            </button>
        </div>
    );
};

export default MobileNavBar;
