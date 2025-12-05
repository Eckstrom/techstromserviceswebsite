export default function AboutSection() {
  return (
    <div id="about" className="bg-black py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
          About <span className="text-[#0FB8B3]">Techstrom Services</span>
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

      </div>
    </div>
  );
}
