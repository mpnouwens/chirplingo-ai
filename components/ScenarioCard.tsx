import { FC, useState } from "react";
import Image from "next/image";
import WhiteStar from "../assets/svg/white-star.svg";
import BlackStar from "../assets/svg/black-star.svg";
import WhiteArrow from "../assets/svg/white-right-arrow.svg";
import BlackArrow from "../assets/svg/black-right-arrow.svg";
import { useRouter } from "next/navigation";
import FilledBlackStar from "../assets/svg/filled-black-star.svg";
import FilledWhiteStar from "../assets/svg/filled-white-star.svg";

interface Props {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  color: string;
  isFavourited: boolean;
}

const ScenarioCard: FC<Props> = ({ title, level, color, isFavourited }) => {
  const [isStarFilled, setIsStarFilled] = useState(false);

  const lightColors = ["#ED183E", "#322A8F", "#FF3D00"];
  const darkColors = ["#80FF00", "#FFE500", "#00FFF0"];

  const isColorDark = darkColors.includes(color);
  const isColorLight = lightColors.includes(color);

  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/dashboard/${title}`)}
      className="w-60 h-60 flex flex-col rounded-lg justify-between text-start text-black p-3 shadow-md transform transition-all duration-300 hover:scale-95 hover:bg-blue-200 cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-start">
        <h1
          className="flex-grow text-xl font-semibold"
          style={{
            color: isColorLight ? "#FFFFFF" : "#000000",
          }}
        >
          {title}
        </h1>
        <button
          onClick={(event) => {
            event.stopPropagation();
            setIsStarFilled(!isStarFilled);
          }}
          className="btn btn-sm btn-circle bg-transparent hover:bg-transparent border-none shadow-none z-10"
        >
          {isStarFilled ? (
            isColorDark ? (
              <Image src={FilledBlackStar} alt="favourite" />
            ) : (
              <Image src={FilledWhiteStar} alt="favourite" />
            )
          ) : isColorDark ? (
            <Image src={BlackStar} alt="favourite" />
          ) : isColorLight ? (
            <Image src={WhiteStar} alt="favourite" />
          ) : null}
        </button>
      </div>
      <div className="flex justify-between items-center font-semibold w-full">
        <h2
          className="flex-grow"
          style={{
            color: isColorLight ? "#FFFFFF" : "#000000",
          }}
        >
          {level}
        </h2>

        <button className="btn btn-sm btn-circle bg-transparent hover:bg-transparent border-none shadow-none">
          {isColorDark ? (
            <Image src={BlackArrow} alt="Arrow" />
          ) : (
            <Image src={WhiteArrow} alt="Arrow" />
          )}
        </button>
      </div>
    </button>
  );
};

export default ScenarioCard;
