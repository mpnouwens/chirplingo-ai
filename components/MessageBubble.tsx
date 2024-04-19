import { ThemeContext } from "@/theme/ThemeContext";
import Image from "next/image";
import { FC, useContext } from "react";

interface Props {
  from: "user" | "assistant";
  message: string;
  timestamp: string;
  image: string;
}

const MessageBubble: FC<Props> = ({ from, message, timestamp, image }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`chat ${from === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
         <Image src={image} alt="avatar" width={40} height={40} />
        </div>
      </div>
      <div
        className={`chat-header ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {from === "user" ? "You" : "Assistant"}
        <time className="text-xs opacity-50 ml-2">{timestamp}</time>
      </div>
      <div
        className={`chat-bubble text-white
        } ${from === "user" ? "bg-[#FF3D00]" : "bg-[#322A8F]"}`}
      >
        {message}
        <br/><span className="text-xs italic">TODO: Translated Native Language</span>
      </div>
    </div>
  );
};

export { MessageBubble };
