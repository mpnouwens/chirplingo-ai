import { ThemeContext } from "@/theme/ThemeContext";
import { FC, useContext } from "react";

interface Props {
  type: string;
  setType: (type: string) => void;
}

const ToggleType: FC<Props> = ({ type, setType }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="inline-flex bg-base-200 border border-base-200 rounded-full overflow-hidden">
      <button
        onClick={() => setType("text")}
        className={`btn rounded-full px-4 py-2 ${
          theme === "dark" ? "text-white" : "text-black"
        } ${type === "text" ? "bg-[#322A8F]" : "bg-base-200"} ${type === "text" ? "hover:bg-[#322A8F]" : "hover:bg-base-300"}`}
      >
        Text
      </button>
      <button
        onClick={() => setType("audio")}
        className={`btn rounded-full px-4 py-2 ${
          theme === "dark" ? "text-white" : "text-black"
        } ${type === "audio" ? "bg-[#322A8F]" : "bg-base-200"} ${type === "audio" ? "hover:bg-[#322A8F]" : "hover:bg-base-300"}`}
      >
        Audio
      </button>
    </div>
  );
};

export { ToggleType };
