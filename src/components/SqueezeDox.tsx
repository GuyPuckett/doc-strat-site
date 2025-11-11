import { Sparkles, Database, Search, Link } from 'lucide-react';

export default function SqueezeDox() {
  const features = [
    'Train once. File forever.',
    'No manual data entry. No lost charts.',
    'Search everything — instantly.',
    'Integrates with your EHR, EMR, or DMS.'
  ];

  return (
    <section className="py-24 bg-[#0a1f44] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#7ba695] bg-opacity-20 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#7ba695] mr-2" />
            <span className="text-[#7ba695] text-sm font-semibold tracking-wide">INTELLIGENT BY DESIGN</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#f5ecd7] mb-6">
            Introducing SqueezeDox™<br />
            The Future of Records Management.
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every document you scan with DSC trains your private, secure Large Language Model (LLM).
            Now, your organization's data becomes a living, searchable knowledge base — one that files,
            routes, and retrieves information automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[#0d2850] rounded-2xl p-8 border border-[#7ba695] border-opacity-30">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#7ba695] to-[#5a8575] rounded-full flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#f5ecd7] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#0a1f44]" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#7ba695] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-[#7ba695]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5ecd7] mb-1">Filing</h4>
                    <p className="text-sm text-gray-400">Automated classification and storage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#7ba695] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Link className="w-4 h-4 text-[#7ba695]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5ecd7] mb-1">Routing</h4>
                    <p className="text-sm text-gray-400">Intelligent workflow distribution</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#7ba695] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="w-4 h-4 text-[#7ba695]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5ecd7] mb-1">Archive</h4>
                    <p className="text-sm text-gray-400">Secure, searchable storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-[#0d2850] rounded-lg p-6 border border-[#7ba695] border-opacity-20 hover:border-opacity-50 transition-all"
                >
                  <div className="w-2 h-2 bg-[#7ba695] rounded-full flex-shrink-0"></div>
                  <p className="text-lg text-[#f5ecd7]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brain({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}
