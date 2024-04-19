import { FC, useContext, useState } from "react";
import Image from "next/image";
import { ThemeContext } from "@/theme/ThemeContext";

interface Props {
  whiteIcon: string;
  blackIcon: string;
  title: string;
  onClick?: () => void;
}

const AnimatedCircleButton: FC<Props> = ({ whiteIcon, blackIcon, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);

  const calcMaxWidth = title.length * 9;

  return (
    <button
      onClick={onClick}
      className="btn btn-md rounded-full h-10 m-1 flex flex-row items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "all 0.3s ease",
        paddingLeft: !isHovered ? 10 : 15,
        paddingRight: !isHovered ? 3 : 15,
      }}
    >
      <Image
        src={theme === "dark" ? whiteIcon : blackIcon}
        alt="filter"
        style={{
          height: 24,
          width: 24,
          marginTop: 2,
          transition: "all 0.3s ease",
        }}
      />
      <p
        className={`${theme === "dark" ? "text-white" : "text-black"} ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 0.3s ease 0.1s, max-width 0.3s ease 0.1s",
          maxWidth: isHovered ? calcMaxWidth : "0",
        }}
      >
        {title}
      </p>
    </button>
  );
};

export { AnimatedCircleButton };
