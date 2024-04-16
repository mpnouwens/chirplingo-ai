import { FC } from "react";
import Image from "next/image";
import WhiteStar from "../assets/svg/white-star.svg";
import BlackStar from "../assets/svg/black-star.svg";
import WhiteArrow from "../assets/svg/white-right-arrow.svg";
import BlackArrow from "../assets/svg/black-right-arrow.svg";

interface Props {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  color: string;
  isFavourited: boolean;
}

const ScenarioCard: FC<Props> = ({ title, level, color, isFavourited }) => {
  const lightColors = ["#ED183E", "#322A8F", "#FF3D00"];

  const darkColors = ["#80FF00", "#FFE500", "#00FFF0"];

  const isColorDark = darkColors.includes(color);
  const isColorLight = lightColors.includes(color);

  return (
    <div
      className="w-64 h-64 flex flex-col rounded-lg justify-between text-start text-black p-3 shadow-md"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-start">
        <h1
          className="flex-grow text-2xl font-semibold"
          style={{
            color: isColorLight ? "#FFFFFF" : "#000000",
          }}
        >
          {title}
        </h1>
        {isColorDark ? (
          <button className="btn btn-sm btn-circle bg-transparent hover:bg-transparent border-none shadow-none">
            <Image src={BlackStar} alt="favourite" />
          </button>
        ) : null}
        {isColorLight ? (
          <button className="btn btn-sm btn-circle bg-transparent hover:bg-transparent border-none shadow-none">
            <Image src={WhiteStar} alt="favourite" />
          </button>
        ) : null}
      </div>
      <div className="flex justify-between items-center font-semibold">
        <h2
          className="flex-grow mr-24"
          style={{
            color: isColorLight ? "#FFFFFF" : "#000000",
          }}
        >
          {level}
        </h2>
        {isColorDark ? (
          <button className="btn btn-sm btn-circle bg-transparent hover:bg-transparent border-none shadow-none">
            <Image src={BlackArrow} alt="Arrow" />
          </button>
        ) : null}
        {isColorLight ? (
          <button className="btn btn-sm btn-circle bg-transparent hover:bg-transparent border-none shadow-none">
            <Image src={WhiteArrow} alt="Arrow" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ScenarioCard;
