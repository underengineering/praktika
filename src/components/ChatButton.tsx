import { FC } from "react";

import { Comment } from "@mui/icons-material";

interface Props {
    onClick?: () => void;
}

const ChatButton: FC<Props> = ({ onClick }) => {
    return (
        <button
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary shadow-primary transition-[width,height,box-shadow] hover:h-[82px] hover:w-[82px] hover:shadow-2xl active:h-[82px] active:w-[82px] active:shadow-2xl"
            onClick={onClick}
        >
            <Comment className="fill-stone-50" sx={{ fontSize: 36 }} />
        </button>
    );
};

export default ChatButton;
