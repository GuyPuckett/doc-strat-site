import { Package, Clock, AlertTriangle } from 'lucide-react';

export default function Problem() {
  const painPoints = [
    {
      icon: Package,
      title: 'Storage Costs',
      description: 'Rooms full of boxes and no visibility.'
    },
    {
      icon: Clock,
      title: 'Time Waste',
      description: 'Hours spent searching for misplaced files.'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance Risk',
      description: 'Missing audit trails, retention gaps, and human error.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
            Paper is Expensive.<br />Disorganized Data is Worse.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Most organizations still rely on manual filing, outdated scanners, or siloed vendors.
            The result? Lost productivity, compliance risks, and frustrated teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#7ba695] transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-[#7ba695] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <point.icon className="w-8 h-8 text-[#7ba695]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-3">{point.title}</h3>
              <p className="text-gray-600 text-lg">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-[#0a1f44]">
            It's time to stop managing paper — and start managing intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
