
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-[1000] w-full">
        <nav className="mx-auto flex h-[70px] w-full max-w-[1200px] items-center px-6">

          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link
              to="/home"
              className="mr-[70px] gap-[10px] text-xl font-medium no-underline"
            >
              BrandLogo
            </Link>
          </div>


          {/* Navigation Links */}
          <div className="flex items-center justify-center">
            <ul className="flex list-none gap-[45px] rounded-lg border border-[rgb(176,189,189)] px-[15px] py-[15px]">

              <li>
                <Link
                  to="/playlists"
                  className="rounded-md bg-[#eff6ff] px-3 py-1.5 text-[0.95rem] font-medium text-[#ce488d]"
                >
                  Playlists
                </Link>
              </li>

              <li>
                <Link
                  to="/charts"
                  className="px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
                >
                  Charts
                </Link>
              </li>

              <li>
                <Link
                  to="/new-releases"
                  className="whitespace-nowrap px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
                >
                  New Releases
                </Link>
              </li>

              <li>
                <Link
                  to="/live-shows"
                  className="whitespace-nowrap px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
                >
                  Live Shows
                </Link>
              </li>

              <li>
                <Link
                  to="/discover"
                  className="px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
                >
                  Discover
                </Link>
              </li>

            </ul>
          </div>


          {/* Right Side */}
          <div className="ml-auto flex items-center gap-[10px]">

            {/* Profile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white hover:bg-gray-700"
              aria-label="Open profile sidebar"
            >
              👤
            </button>


            {/* Login */}
            <Link
              to="/login"
              className="rounded-md border border-[#d1d5db] px-[18px] py-2 text-[0.9rem] font-semibold text-[#a8abb0] hover:bg-[#f3f4f6]"
            >
              Log In
            </Link>


            {/* Sign Up */}
            <Link
              to="/signup"
              className="rounded-md border border-[#a8b0c2] bg-[#8b95aa] px-[18px] py-2 text-[0.9rem] font-semibold text-white hover:bg-[#bcbec3]"
            >
              Sign Up
            </Link>

          </div>

        </nav>
      </header>


      {/* Dark Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-[1100] bg-black/50"
        ></div>
      )}


      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-[1200] h-full w-72 bg-[#111827] text-white shadow-lg
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute right-5 top-5 text-2xl hover:text-cyan-400"
          aria-label="Close sidebar"
        >
          ✕
        </button>


        {/* Profile Section */}
        <div className="mt-20 px-6">

          <div className="mb-8 text-center">

            <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gray-600 text-3xl">
              👤
            </div>

            <h2 className="text-xl font-semibold">
              Suchita Jain
            </h2>

          </div>


          {/* Sidebar Options */}
          <div className="space-y-5">

            <Link
              to="/profile"
              onClick={() => setSidebarOpen(false)}
              className="block w-full hover:text-cyan-400"
            >
              My Account
            </Link>

            <Link
              to="/settings"
              onClick={() => setSidebarOpen(false)}
              className="block w-full hover:text-cyan-400"
            >
              Settings And privacy
            </Link>

            <button
              className="block w-full text-left hover:text-cyan-400"
            >
             Updates
            </button>


          </div>

        </div>

      </aside>
    </>
  );
}

export default Navbar;
