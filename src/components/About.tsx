import { Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[#7ba695] bg-opacity-10 rounded-full mb-6">
              <Award className="w-5 h-5 text-[#7ba695] mr-2" />
              <span className="text-[#7ba695] text-sm font-semibold tracking-wide">30+ YEARS OF EXPERTISE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              Decades of Document Mastery.
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded and led by industry veteran <span className="font-bold text-[#0a1f44]">Guy Puckett</span>,
              DSC has evolved with every major technological shift in records management — from microfilm and
              imaging to AI and LLM-driven automation.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just digitize your documents — we transform them into a strategic asset that powers
              visibility, efficiency, and compliance.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#7ba695] text-white rounded-lg hover:bg-[#6a9585] transition-all font-semibold shadow-lg"
            >
              Meet Our Team
            </a>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#0a1f44] to-[#0d2850] rounded-2xl p-12 text-white">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7ba695] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#7ba695]">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#f5ecd7] mb-2">Microfilm Era</h4>
                    <p className="text-gray-400">Pioneer in analog document preservation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7ba695] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#7ba695]">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#f5ecd7] mb-2">Digital Imaging</h4>
                    <p className="text-gray-400">Leading the transition to digital archives</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#7ba695] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#7ba695]">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#f5ecd7] mb-2">AI & Automation</h4>
                    <p className="text-gray-400">Transforming records into intelligent systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
