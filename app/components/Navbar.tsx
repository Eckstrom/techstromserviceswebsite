"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0B2D4A] text-white px-4 py-3 flex items-center justify-between shadow-md flex-wrap">
      {/* LEFT SIDE: Logo + Company Name */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <img
          src="/techstrom-logo.png"
          alt="Techstrom Services Logo"
          width={40}
          height={40}
        />
        <span className="text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
          Techstrom Services
        </span>
      </div>

      {/* RIGHT SIDE: Navigation */}
      <div className="
        flex 
        items-center 
        gap-4 md:gap-8 
        text-base md:text-lg 
        mt-3 md:mt-0 
        flex-wrap justify-end
      ">
        <a href="#about" className="hover:text-[#0FB8B3] transition">
          About
        </a>
        <a href="#services" className="hover:text-[#0FB8B3] transition">
          Services
        </a>
        <a href="#contact" className="hover:text-[#0FB8B3] transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
