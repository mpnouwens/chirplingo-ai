import { ThemeContext } from "@/theme/ThemeContext";
import { FC, useContext } from "react";

interface Props {
  type: string;
  setType: (type: string) => void;
}

const ToggleType: FC<Props> = ({ type, setType }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="inline-flex bg-base-200 border border-base-200 rounded-full overflow-hidden mb-5">
      <button
        onClick={() => setType("text")}
        className={`btn rounded-full px-4 py-2 ${
          theme === "dark" ? "text-white" : "text-black"
        } ${type === "text" ? "bg-blue-500" : "bg-base-200"} `}
      >
        Text
      </button>
      <button
        onClick={() => setType("audio")}
        className={`btn rounded-full px-4 py-2 ${
          theme === "dark" ? "text-white" : "text-black"
        } ${type === "audio" ? "bg-blue-500" : "bg-base-200"}`}
      >
        Audio
      </button>
    </div>
  );
};

export { ToggleType };
