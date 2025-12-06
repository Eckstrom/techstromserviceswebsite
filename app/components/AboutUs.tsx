"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* TOP — CENTERED TITLE + INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-16"
        >
          <h2 className="text-4xl font-bold text-teal-600 mb-6">
            About Techstrom Services
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Techstrom Services is a tech engineering firm built on precision,
            reliability, and hands-on technical expertise. Combining software
            engineering with mechanical and systems knowledge, we deliver
            practical, efficient solutions for modern businesses.
          </p>
        </motion.div>

        {/* TWO CARDS SIDE BY SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-24">
          
          {/* HUNTER CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0D1F2D] rounded-2xl p-8 border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#0FB8B3] mb-2">
              Hunter Eckstrom
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Co-Founder • Mechanical Engineer & Technical Compliance Specialist
            </p>
            <p className="text-gray-400 leading-relaxed">
              Hunter brings both hands-on mechanical and electrical engineering experience,
              compliance expertise, technical contracting skills, and a deep
              understanding of physical systems. His approach emphasizes safety,
              durability, and precision — ensuring dependable, real-world
              results.
            </p>
          </motion.div>

          {/* PHIL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0D1F2D] rounded-2xl p-8 border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#0FB8B3] mb-2">
              Phil Eckstrom
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Co-Founder • Lead Software Engineer
            </p>
            <p className="text-gray-400 leading-relaxed">
              Phil specializes in software development, mobile applications,
              systems architecture, and custom tooling. His engineering
              background allows him to build reliable applications and modernize
              workflows with thoughtful, efficient solutions.
            </p>
          </motion.div>

        </div>

        {/* BOTTOM SECTION — IMAGE LEFT + TEXT RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT — GLOW IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="absolute -inset-2 bg-teal-400/30 blur-xl rounded-xl"></div>

            <img
              src="/techstrom-logo.png"
              width={500}
              height={400}
              alt="Techstrom Services Logo"
              className="rounded-xl relative z-10 shadow-xl max-h-[400px] object-contain"
            />
          </motion.div>

          {/* RIGHT — TEXT + CENTERED BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center max-h-[400px]"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether it’s deploying smart devices, installing Bitcoin ATMs,
              optimizing business technology, or developing robust software
              tools, we deliver solutions that are modern, secure, and built to
              last.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Our mission is simple: empower businesses with technology that
              works seamlessly — backed by transparent communication,
              trustworthy service, and hands-on expertise.
            </p>

            {/* CENTERED BUTTON */}
            <div className="flex justify-center">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition"
              >
                Learn More
              </motion.a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
