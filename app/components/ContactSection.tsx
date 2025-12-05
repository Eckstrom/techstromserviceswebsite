"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meoyzzgw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed request");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div id="contact" className="bg-[#0B2D4A] py-24 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
          <span className="text-[#0FB8B3]">Contact</span> Us
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Send us a message and we’ll respond as soon as possible.
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0D1F2D] shadow-xl border border-[#0FB8B3]/20 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white focus:border-[#0FB8B3] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white focus:border-[#0FB8B3] outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              value={message}
              required
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-gray-600 text-white focus:border-[#0FB8B3] outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-[#0FB8B3] text-black font-bold py-3 rounded-lg text-lg hover:brightness-110 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center font-semibold mt-2">
              ✔ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center font-semibold mt-2">
              ✘ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
