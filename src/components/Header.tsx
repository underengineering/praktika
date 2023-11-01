import {
    FavoriteBorderOutlined,
    Menu,
    SearchOutlined,
    ShoppingBagOutlined,
} from "@mui/icons-material";
import PersonOutlined from "@mui/icons-material/PersonOutlined";

const Header = () => {
    return (
        <header className="flex w-full justify-between px-2 py-3 sm:px-0 sm:py-12">
            <div className="flex w-full justify-between">
                <Menu
                    className="hidden sm:inline-block"
                    sx={{ fontSize: 36 }}
                />
                <div className="flex grow items-center gap-9 sm:grow-0">
                    <div className="flex grow gap-4 rounded-xl bg-stone-50 p-1 sm:bg-transparent sm:p-0">
                        <SearchOutlined />
                        <input
                            className="w-full border-b-0 border-b-zinc-500 bg-transparent sm:w-[308px] sm:border-b"
                            placeholder="Поиск"
                            type="text"
                        />
                    </div>
                    <div className="hidden gap-3 sm:flex">
                        <PersonOutlined />
                        <FavoriteBorderOutlined />
                        <ShoppingBagOutlined />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
