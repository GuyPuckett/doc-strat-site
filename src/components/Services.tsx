import { Layers, FileText, Mail } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: 'TotalDocs™',
      description: 'All-in-one lifecycle solution combining scanning, SqueezeDox automation, and secure shredding — with unlimited users and monthly flat-rate pricing.'
    },
    {
      icon: FileText,
      title: 'Backfile Scanning & Conversion',
      description: 'Digitize decades of paper records. Pickup, prep, scanning, OCR, and indexing — with 60-day retention and certified destruction.'
    },
    {
      icon: Mail,
      title: 'Mailroom Automation',
      description: 'Convert daily US mail into structured, searchable digital data. Scanned, classified, and delivered directly to your internal systems.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
            Our Core Offerings
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#7ba695] transition-all hover:shadow-2xl group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#0a1f44] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-[#7ba695]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#7ba695] text-white rounded-lg hover:bg-[#6a9585] transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
