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

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Techstrom Services is a two–brother engineering venture built on 
            integrity, technical excellence, and a passion for solving problems 
            the right way. With combined backgrounds in software engineering, 
            mechanical engineering, and modern digital solutions, we bring 
            precision and reliability to every project.
          </p>

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
