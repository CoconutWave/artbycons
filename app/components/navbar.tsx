"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const currentPathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      name: "Commission",
      url: "/commission",
    },
    {
      name: "About",
      url: "/about",
    },
  ];
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* mobile main menu */}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* menu close icon */}
                <svg
                  className={(menuOpen ? "hidden" : "block") + " h-6 w-6"}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* menu open icon */}
                <svg
                  className={(menuOpen ? "block" : "hidden") + " h-6 w-6"}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="mx-3 font-bold text-xl flex items-center">art by Cons</div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {routes.map((item, index) => {
                    var navClassName = "";
                    if (currentPathname == item.url) {
                      navClassName =
                        "bg-gray-950 text-white rounded-md px-3 py-2 text-sm font-medium";
                    } else {
                      navClassName =
                        "text-gray-300 rounded-md transition-colors px-3 py-2 text-sm font-medium hover:bg-gray-950";
                    }
                    return (
                      <a href={item.url} className={navClassName} key={index}>
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="sm:hidden" id="mobile-menu">
          {menuOpen && (
            <div className="space-y-1 px-2 pb-3 pt-2">
              {routes.map((item, index) => {
                var navClassName = "";
                if (currentPathname == item.url) {
                  navClassName =
                    "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium";
                } else {
                  navClassName =
                    "text-gray-500 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium";
                }
                return (
                  <a href={item.url} className={navClassName} key={index}>
                    {item.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
