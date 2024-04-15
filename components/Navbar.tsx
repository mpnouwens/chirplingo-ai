import { FC } from "react";
import ChirplingoDark from "../assets/chirp-dark.png";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
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
        <a className=" btn btn-ghost navbar-brand">
          <Image src={ChirplingoDark} alt="Chirplingo" height={40} />
        </a>
      </div>

      <div className="navbar-end">
        <div className="flex">
          <div className="btn btn-sm btn-ghost btn-circle w-10 h-8 mr-2">
            <a className="avatar">
              <div className="w-8 h-8 rounded-full ring ring-offset-base-100 ring-offset-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png"
                  className="object-cover h-full"
                />
              </div>
            </a>
          </div>
          <div className="btn btn-sm btn-ghost btn-circle mr-2">
            <a className="avatar">
              <div className=" rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Flag_of_the_Netherlands.png"
                  className="object-cover h-full"
                />
              </div>
            </a>
          </div>
          <div className="btn btn-sm btn-ghost btn-circle w-8 h-8 mr-2">
            <a className="avatar">
              <div className="w-8 h-8 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Spain_flag_300.png"
                  className="object-cover h-full"
                />
              </div>
            </a>
          </div>
          {/* add button */}
          <div className="btn btn-sm  btn-circle w-8 h-8 mr-2 flex items-center justify-center">
            <a className="avatar">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                &#43;
              </div>
            </a>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
