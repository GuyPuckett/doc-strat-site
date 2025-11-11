import { Calendar, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0a1f44] via-[#0d2850] to-[#0a1f44] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#f5ecd7] mb-6">
          Ready to Simplify Your<br />Document Management?
        </h2>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Let's talk about your workflow, compliance goals, and how we can unlock the full value of your records.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:guy@documentstrategyconsultants.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#7ba695] text-white rounded-lg hover:bg-[#6a9585] transition-all transform hover:scale-105 font-semibold shadow-lg"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Schedule Your Free Consultation
          </a>
          <a
            href="mailto:guy@documentstrategyconsultants.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#7ba695] text-[#7ba695] rounded-lg hover:bg-[#7ba695] hover:text-white transition-all font-semibold"
          >
            <Mail className="mr-2 w-5 h-5" />
            Email Guy Directly
          </a>
        </div>

        <div className="bg-[#0d2850] bg-opacity-50 rounded-xl p-8 border border-[#7ba695] border-opacity-30">
          <div className="text-gray-400 mb-2">Contact Information</div>
          <div className="text-[#f5ecd7] text-lg mb-1">
            <a href="mailto:guy@documentstrategyconsultants.com" className="hover:text-[#7ba695] transition-colors">
              guy@documentstrategyconsultants.com
            </a>
          </div>
          <div className="text-[#f5ecd7] text-lg mb-1">
            <a href="tel:+13107046176" className="hover:text-[#7ba695] transition-colors">
              (310) 704-6176
            </a>
          </div>
          <div className="text-gray-400 mt-4">
            25202 Crenshaw Blvd, Torrance, CA 90505
          </div>
        </div>
      </div>
    </section>
  );
}
