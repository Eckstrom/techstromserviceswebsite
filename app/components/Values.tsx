"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    description: "We commit to honest communication, transparency, and high ethical standards in every project.",
    icon: "🤝",
  },
  {
    title: "Precision",
    description: "We take pride in our attention to detail and deliver solutions crafted with expert care.",
    icon: "⚙️",
  },
  {
    title: "Dependability",
    description: "We show up, follow through, and ensure our clients can rely on us every step of the way.",
    icon: "🔒",
  },
];

export default function Values() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        Our Values
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {values.map((val, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-8 border rounded-xl shadow-md bg-gray-50 hover:shadow-xl transition shadow-black/5"
          >
            <div className="text-5xl mb-4">{val.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {val.title}
            </h3>
            <p className="text-gray-600">{val.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
