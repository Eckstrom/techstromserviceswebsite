import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import Values from "./components/Values";
import AboutUs from "./components/AboutUs";

export const dynamic = "force-static";
export const revalidate = false;


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="min-h-screen bg-gradient-to-b from-[#0B2D4A] to-black flex items-center justify-center px-6">
        <section className="max-w-5xl text-center text-white">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Powerful Technology Solutions  
            <span className="block text-[#0FB8B3]">Built for Modern Businesses</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Techstrom Services delivers expert technical contracting, software development,
            and infrastructure support — dependable, precise, and built to scale.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-[#0FB8B3] text-black px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:brightness-110 transition"
            >
              Get in Touch
            </a>

            <a
              href="#services"
              className="border border-[#0FB8B3] text-[#0FB8B3] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#0FB8B31A] transition"
            >
              Our Services
            </a>
          </div>

        </section>
      </main>

      <section id="aboutus">
        <AboutUs />
      </section>

      <section id="values">
        <Values />
      </section>

      {/* SERVICES SECTION BELOW HERO */}
      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

    </>
  );
}
