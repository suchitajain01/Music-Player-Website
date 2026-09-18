function Navbar() {
  return (
    <header className="sticky top-0 z-[1000] w-full">
      <nav className="mx-auto flex h-[70px] w-full max-w-[1200px] items-center px-6">

        {/* Logo */}
        <div className="flex items-center justify-start">
          <a
            href="#"
            className="mr-[70px] gap-[10px] text-xl font-medium no-underline"
          >
            BrandLogo
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center">
          <ul className="flex list-none gap-[45px] rounded-lg border border-[rgb(176,189,189)] px-[15px] py-[15px]">

            <li>
              <a
                href="/playlists"
                className="rounded-md bg-[#eff6ff] px-3 py-1.5 text-[0.95rem] font-medium text-[#ce488d]"
              >
                Playlists
              </a>
            </li>

            <li>
              <a
                href="/charts"
                className="px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
              >
                Charts
              </a>
            </li>

            <li>
              <a
                href="#"
                className="whitespace-nowrap px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
              >
                New Releases
              </a>
            </li>

            <li>
              <a
                href="#"
                className="whitespace-nowrap px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
              >
                Live Shows
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-3 py-1.5 text-[0.95rem] font-medium hover:rounded-md hover:bg-[#eff6ff] hover:text-[#ce488d]"
              >
                Discover
              </a>
            </li>

          </ul>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-[10px]">

          {/* Profile */}
          <div className="mr-2">
            <a href="/profile">
              <img
                src="/profile.png"
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover hover:scale-105"
              />
            </a>
          </div>

          {/* Login */}
          <a
            href="#login"
            className="rounded-md border border-[#d1d5db] px-[18px] py-2 text-[0.9rem] font-semibold text-[#a8abb0] hover:bg-[#f3f4f6]"
          >
            Log In
          </a>

          {/* Sign Up */}
          <a
            href="#signup"
            className="rounded-md border border-[#a8b0c2] bg-[#8b95aa] px-[18px] py-2 text-[0.9rem] font-semibold text-white hover:bg-[#bcbec3]"
          >
            Sign Up
          </a>

        </div>

      </nav>
    </header>
  )
}

export default Navbar