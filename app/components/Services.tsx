export default function Services() {
  return (
    <div className="bg-black py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          Our <span className="text-[#0FB8B3]">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Technology Consulting */}
          <div className="p-6 bg-[#0D1F2D] rounded-xl border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-lg hover:shadow-[#0FB8B355]">
            <h3 className="text-xl font-bold mb-3">Technology Consulting</h3>
            <p className="text-gray-300 text-sm">
              Strategic planning, systems integration, and guidance to help businesses modernize and scale effectively.
            </p>
          </div>

          {/* Software Development */}
          <div className="p-6 bg-[#0D1F2D] rounded-xl border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-lg hover:shadow-[#0FB8B355]">
            <h3 className="text-xl font-bold mb-3">Software Development</h3>
            <p className="text-gray-300 text-sm">
              Web and mobile applications built with modern architectures and efficient, reliable code.
            </p>
          </div>

          {/* Technical Contracting */}
          <div className="p-6 bg-[#0D1F2D] rounded-xl border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-lg hover:shadow-[#0FB8B355]">
            <h3 className="text-xl font-bold mb-3">Technical Contracting</h3>
            <p className="text-gray-300 text-sm">
              Government and private-sector technical projects completed safely, efficiently, and to specification.
            </p>
          </div>

          {/* Infrastructure & Support */}
          <div className="p-6 bg-[#0D1F2D] rounded-xl border border-[#0FB8B3]/20 hover:border-[#0FB8B3] transition shadow-lg hover:shadow-[#0FB8B355]">
            <h3 className="text-xl font-bold mb-3">Infrastructure & Support</h3>
            <p className="text-gray-300 text-sm">
              Networking, diagnostics, maintenance, and infrastructure planning for long-term stability.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
