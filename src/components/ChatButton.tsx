import { FC } from "react";

import { Comment } from "@mui/icons-material";

interface Props {
    onClick?: () => void;
}

const ChatButton: FC<Props> = ({ onClick }) => {
    return (
        <button
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary shadow-primary transition-transform hover:scale-110 hover:shadow-2xl active:scale-110 active:shadow-2xl"
            onClick={onClick}
        >
            <Comment className="fill-stone-50" sx={{ fontSize: 36 }} />
        </button>
    );
};

export default ChatButton;
