import { Heart, Scale, DollarSign } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant archiving, EHR integration, and medical chart automation.'
    },
    {
      icon: Scale,
      title: 'Legal',
      description: 'Secure client file management and retention-ready indexing.'
    },
    {
      icon: DollarSign,
      title: 'Financial',
      description: 'SOC 2 controls, encrypted workflows, and document-level access tracking.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
            Built for Regulated Environments.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're a healthcare provider, law firm, or financial institution, DSC helps you
            meet your compliance, privacy, and operational mandates effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ba695] transition-all hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#7ba695] to-[#5a8575] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">{industry.title}</h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
