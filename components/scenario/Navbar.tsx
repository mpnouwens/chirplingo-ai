import { FC, useContext, useState } from "react";
import { ThemeContext } from "@/theme/ThemeContext";
import { AnimatedCircleButton } from "../AnimatedCircleButton";
import CloseDark from "@/assets/svg/close-dark.svg";
import CloseLight from "@/assets/svg/close-light.svg";
import { useRouter } from "next/navigation";

interface Props {
  goBack: () => void;
  targetTitle: string;
  nativeTitle: string;
}

const Navbar: FC<Props> = ({ goBack, targetTitle, nativeTitle }) => {
  const router = useRouter();

  const { theme } = useContext(ThemeContext);
  const [close, setClose] = useState(false);

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
          onClick={() => setClose(true)}
        />
      </div>
      {close ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-70 z-40"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-base-200 outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="text-red-500">
                    Are you sure you want to leave? As leaving, you will
                    permanently clear your progress.
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setClose(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-white bg-red-500 active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => {
                        setClose(false);
                        // Stop session
                        router.push("/dashboard");
                      }}
                    >
                      Exit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export { Navbar };
