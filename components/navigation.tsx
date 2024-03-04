"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // import state

export const Navigation = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <section className="MOBILE-MENU flex flex-col lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col lg:flex-1">
              <Link
                className={`link ${
                  pathname === "/" ? "active" : ""
                } text-2xl leading-6 p-3 text-gray-900 `}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`link ${
                  pathname === "/prices" ? "active" : ""
                } text-2xl leading-6 p-3 text-gray-900 `}
                href="/prices"
              >
                Prices
              </Link>
              <Link
                className={`link ${
                  pathname === "/testimonials" ? "active" : ""
                } text-2xl leading-6 p-3 text-gray-900 `}
                href="/testimonials"
              >
                Testimonials
              </Link>
              <Link
                className={`link ${
                  pathname === "/services" ? "active" : ""
                } text-2xl leading-6 p-3 text-gray-900 `}
                href="/services"
              >
                Services
              </Link>
            </div>
          </div>
        </section>

        <div className="flex hidden lg:block lg:flex-1">
          <Link
            className={`link ${
              pathname === "/" ? "active" : ""
            } text-2xl leading-6 p-3 text-gray-900 `}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${
              pathname === "/prices" ? "active" : ""
            } text-2xl leading-6 p-3 text-gray-900 `}
            href="/prices"
          >
            Prices
          </Link>
          <Link
            className={`link ${
              pathname === "/testimonials" ? "active" : ""
            } text-2xl leading-6 p-3 text-gray-900 `}
            href="/testimonials"
          >
            Testimonials
          </Link>
          <Link
            className={`link ${
              pathname === "/services" ? "active" : ""
            } text-2xl leading-6 p-3 text-gray-900 `}
            href="/services"
          >
            Services
          </Link>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
};
