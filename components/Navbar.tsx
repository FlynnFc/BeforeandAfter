import React from "react";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], display: "swap" });
const Navbar = () => {
  return (
    <div
      className={`flex rounded-btn shadow-lg mt-4 navbar max-w-8/12 md:w-6/12 bg-glassbg/40 ${lora.className}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-btn  w-52"
          >
            <li>
              <a className="text-lg font-semibold">Word of the day</a>
            </li>
            <li>
              <a className="text-lg font-semibold">Random word</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn normal-case text-3xl font-bold">
          Word of the day
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
