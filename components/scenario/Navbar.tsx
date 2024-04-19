import { FC, useContext } from "react";
import { ThemeContext } from "@/theme/ThemeContext";
import { AnimatedCircleButton } from "../AnimatedCircleButton";
import CloseDark from "@/assets/svg/close-dark.svg";
import CloseLight from "@/assets/svg/close-light.svg";

interface Props {
  goBack: () => void;
  targetTitle: string;
  nativeTitle: string;
}

const Navbar: FC<Props> = ({ goBack, targetTitle, nativeTitle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* white for dark mode */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={theme === "dark" ? "#FFFFFF" : "currentColor"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        {/* go back */}
        <button
          onClick={goBack}
          className="btn btn-sm btn-circle w-12 h-12 mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color={theme === "dark" ? "white" : "black"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <a className="btn btn-sm avatar btn-ghost btn-circle w-12 h-12 mr-2">
          <div className="rounded-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Spain_flag_300.png"
              className="object-cover h-full"
            />
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex flex-col">
        <h1
          className={`text-lg font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >{`Goal: "${targetTitle}"`}</h1>
        {/* subtitle */}
        <h2
          className={`text-sm italic ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >{`"${nativeTitle}"`}</h2>
      </div>
      <div className="navbar-end">
        <AnimatedCircleButton
          blackIcon={CloseDark}
          whiteIcon={CloseLight}
          title="Close"
        />
      </div>
    </div>
  );
};

export { Navbar };
