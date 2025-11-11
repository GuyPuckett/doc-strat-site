import { Shield, Lock, Users2, FileCheck } from 'lucide-react';

export default function Security() {
  const features = [
    { icon: Shield, text: 'HIPAA & SOC 2 certified processes' },
    { icon: Lock, text: 'End-to-end encryption' },
    { icon: Users2, text: 'Role-based access control' },
    { icon: FileCheck, text: 'Chain of custody and retention audit logs' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#7ba695] bg-opacity-10 rounded-full mb-6">
            <Lock className="w-5 h-5 text-[#7ba695] mr-2" />
            <span className="text-[#7ba695] text-sm font-semibold tracking-wide">COMPLIANCE & TRUST</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
            Security at the Core.
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From data intake to archive, your documents are handled in compliance with the strictest standards:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white rounded-xl p-6 border border-gray-200 hover:border-[#7ba695] transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-[#0a1f44] rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#7ba695]" />
              </div>
              <p className="text-lg text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#0a1f44] text-white rounded-lg hover:bg-[#0d2850] transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            <Lock className="mr-2 w-5 h-5" />
            Learn About Our Security Standards
          </a>
        </div>
      </div>
    </section>
  );
}
