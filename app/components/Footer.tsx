export default function Footer() {
  return (
    <footer className="bg-[#0A2530] text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">

        {/* Logo + Company Name */}
        <div className="flex flex-col items-center">
          <img 
            src="/logo.png" 
            alt="Techstrom Logo" 
            className="h-12 w-auto mb-2"
          />
          <h2 className="text-lg font-semibold text-white">
            Techstrom Services
          </h2>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-teal-400 transition">Home</a>
          <a href="#services" className="hover:text-teal-400 transition">Services</a>
          <a href="#about" className="hover:text-teal-400 transition">About Us</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </div>

        {/* Contact */}
        <p className="text-sm">
          Contact:{" "}
          <a 
            href="mailto:techstromservices@gmail.com" 
            className="text-teal-400 hover:underline"
          >
            techstromservices@gmail.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Techstrom Services. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
