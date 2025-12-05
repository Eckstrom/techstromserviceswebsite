"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0B2D4A] text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* LEFT SIDE: Logo + Company Name */}
      <div className="flex items-center gap-3">
        <img
          src="/techstrom-logo.png"
          alt="Techstrom Services Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-semibold tracking-wide">
          Techstrom Services
        </span>
      </div>

      {/* RIGHT SIDE: Navigation */}
      <div className="flex items-center gap-8 text-lg">
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
