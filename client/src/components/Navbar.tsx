import React, { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-blush sticky left-0 top-0 z-50">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-2"
              onClick={() => setShowMenu((currVal) => !currVal)}
            >
              <svg
                className={`${showMenu ? "hidden" : "block"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${showMenu ? "block" : "hidden"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <div className="hidden ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="underline-animation"
                  >
                  Home
                </a>
                <a
                  href="/"
                  className="underline-animation"
                >
                  About
                </a>
                <a
                  href="/"
                  className="underline-animation"
                  id="nav-services"
                >
                  Services
                </a>
                <a
                  href="/"
                  className="underline-animation"
                  id="nav-contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMenu && <div id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/"
            className="block px-3 py-2 text-base font-medium text-navy"
          >
            Home
          </a>
          <a
            href="/"
            className="block px-3 py-2 text-base font-medium text-navy"
          >
            About
          </a>
          <a
            href="/"
            className="block px-3 py-2 text-base font-medium text-navy"
          >
            Services
          </a>
          <a
            href="/"
            className="block px-3 py-2 text-base font-medium text-navy"
          >
            Contact
          </a>
        </div>
      </div>}
    </nav>
  );
}

export default Navbar;
