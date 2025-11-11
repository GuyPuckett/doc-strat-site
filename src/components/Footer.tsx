export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 rounded-full border-2 border-[#7ba695] flex items-center justify-center">
                  <span className="text-[#f5ecd7] font-bold text-sm">D</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#7ba695] flex items-center justify-center -ml-1">
                  <span className="text-[#f5ecd7] font-bold text-sm">S</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#7ba695] flex items-center justify-center -ml-1">
                  <span className="text-[#f5ecd7] font-bold text-sm">C</span>
                </div>
              </div>
            </div>
            <p className="text-[#7ba695] font-bold text-sm mb-2">
              DOCUMENT STRATEGY CONSULTANTS
            </p>
            <p className="text-sm mb-4">Smart. Secure. Compliant.</p>
            <p className="text-xs">
              Total Document Lifecycle Management — From Intake to Intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-[#f5ecd7] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[#7ba695] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#7ba695] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#7ba695] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5ecd7] font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:guy@documentstrategyconsultants.com" className="hover:text-[#7ba695] transition-colors">
                  guy@documentstrategyconsultants.com
                </a>
              </li>
              <li>
                <a href="tel:+13107046176" className="hover:text-[#7ba695] transition-colors">
                  (310) 704-6176
                </a>
              </li>
              <li className="pt-2">
                25202 Crenshaw Blvd<br />
                Torrance, CA 90505
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Document Strategy Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
