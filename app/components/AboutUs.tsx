"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="w-full py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — IMAGE WITH TECH GLOW */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-teal-400/40 blur-xl rounded-xl"></div>
          <img
            src="/techstrom-logo.png"   // placeholder — we will update this
            width={600}
            height={450}
            alt="Techstrom Services Team"
            className="rounded-xl relative z-10 shadow-lg"
          />
        </motion.div>

        {/* RIGHT — TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-teal-600 mb-6">
            About Techstrom Services
          </h2>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          Techstrom Services is a tech engineering firm built on precision, reliability, 
          and hands-on technical expertise. Combining software engineering with mechanical and 
          systems knowledge, we deliver practical, efficient solutions for modern businesses.
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Hunter's Card */}
          <div className="bg-[#0D1F2D] rounded-2xl p-8 border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-xl">
            <h3 className="text-2xl font-bold mb-2 text-[#0FB8B3]">Hunter Eckstrom</h3>
            <p className="text-gray-300 text-sm mb-4">
              Co-Founder • Mechanical Engineer & Technical Compliance Specialist
            </p>

            <p className="text-gray-400 leading-relaxed">
              Hunter brings hands-on mechanical engineering experience, compliance expertise, technical contracting 
              skills, and a deep understanding of physical systems. His approach emphasizes safety, 
              durability, and precision — ensuring that every project meets industry standards and 
              produces dependable, real-world results.
            </p>
          </div>
          
          {/* Phil's Card */}
          <div className="bg-[#0D1F2D] rounded-2xl p-8 border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-xl">
            <h3 className="text-2xl font-bold mb-2 text-[#0FB8B3]">Phil Eckstrom</h3>
            <p className="text-gray-300 text-sm mb-4">
              Co-Founder • Lead Software Engineer  
            </p>

            <p className="text-gray-400 leading-relaxed">
              Phil specializes in software development, mobile applications, systems architecture, 
              and custom tooling. With a background in engineering and full-stack development, he 
              handles the digital side of Techstrom’s solutions — building reliable applications and 
              modernizing workflows through thoughtful engineering.
            </p>
          </div>

        </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether it’s deploying smart devices, installing Bitcoin ATMs, 
            optimizing business technology, or developing robust software tools, 
            we deliver solutions that are modern, secure, and built to last.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our mission is simple: empower businesses with technology that 
            works seamlessly — backed by transparent communication, 
            trustworthy service, and hands-on expertise.
          </p>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
