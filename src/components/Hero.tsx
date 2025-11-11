import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1f44] via-[#0d2850] to-[#0a1f44] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <div className="w-10 h-10 rounded-full border-2 border-[#7ba695] flex items-center justify-center">
              <span className="text-[#f5ecd7] font-bold text-xl">D</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#7ba695] flex items-center justify-center -ml-2">
              <span className="text-[#f5ecd7] font-bold text-xl">S</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#7ba695] flex items-center justify-center -ml-2">
              <span className="text-[#f5ecd7] font-bold text-xl">C</span>
            </div>
          </div>
          <div className="ml-2">
            <div className="text-[#f5ecd7] font-bold text-sm tracking-wide">DOCUMENT STRATEGY</div>
            <div className="text-[#f5ecd7] font-bold text-sm tracking-wide">CONSULTANTS</div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#services" className="text-[#7ba695] hover:text-[#f5ecd7] transition-colors">Services</a>
          <a href="#about" className="text-[#7ba695] hover:text-[#f5ecd7] transition-colors">About</a>
          <a href="#contact" className="text-[#7ba695] hover:text-[#f5ecd7] transition-colors">Contact</a>
          <a
            href="https://secure.vfilecabinet.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#7ba695] text-white rounded-lg hover:bg-[#6a9585] transition-all font-semibold text-sm"
          >
            Login
          </a>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-[#7ba695] bg-opacity-20 rounded-full mb-6">
            <span className="text-[#7ba695] text-sm font-semibold tracking-wide">SMART. SECURE. COMPLIANT.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#f5ecd7] leading-tight">
            Turn Your Records<br />Into Knowledge.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Eliminate paper forever. Automate filing, routing, and archiving with AI that learns your workflow.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            From scanning and mailroom automation to intelligent archiving — Document Strategy Consultants helps you manage every record, at every stage, securely and effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/guypuckett"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#7ba695] text-white rounded-lg hover:bg-[#6a9585] transition-all transform hover:scale-105 font-semibold shadow-lg"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#7ba695] text-[#7ba695] rounded-lg hover:bg-[#7ba695] hover:text-white transition-all font-semibold">
              <Play className="mr-2 w-5 h-5" />
              Watch How It Works
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
