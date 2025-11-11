import { Brain, FolderTree, Lock, RotateCcw, Building2, Users } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Intake',
      description: 'Capture data from mail, fax, and uploads. Classify and extract key info instantly.'
    },
    {
      icon: FolderTree,
      title: 'Automated Filing & Routing',
      description: 'Teach the system once — it learns your rules forever.'
    },
    {
      icon: Lock,
      title: 'Secure Archiving',
      description: 'HIPAA & SOC 2 compliant digital storage with full audit trails.'
    },
    {
      icon: RotateCcw,
      title: 'Lifecycle Management',
      description: 'Scanning, indexing, archiving, and shredding — one contract, one bill.'
    },
    {
      icon: Building2,
      title: 'Rightsizing & Consolidation',
      description: 'Merge and migrate record systems securely when downsizing.'
    },
    {
      icon: Users,
      title: 'Human-in-the-Loop Oversight',
      description: 'Every process verified by certified compliance specialists.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
            One Vendor. One Platform.<br />Zero Headaches.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            We combine 30+ years of document management experience with today's most advanced automation and AI.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From intake to destruction, every document follows a secure, automated lifecycle — managed by DSC and powered by <span className="font-bold text-[#7ba695]">SqueezeDox™</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#7ba695] transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-[#0a1f44] rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#7ba695]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 bg-[#0a1f44] text-white rounded-lg hover:bg-[#0d2850] transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            Explore Our Process
          </a>
        </div>
      </div>
    </section>
  );
}
