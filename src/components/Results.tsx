import { Lightbulb, Users, Database, Clock } from 'lucide-react';

export default function Results() {
  const stats = [
    { icon: Lightbulb, value: '90%', label: 'Time saved on filing' },
    { icon: Users, value: '50+', label: 'Medical practices onboarded' },
    { icon: Database, value: '100%', label: 'Searchable archives' },
    { icon: Clock, value: '15-20 hrs', label: 'Staff time reclaimed per week' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
            When Paper Ends,<br />Productivity Begins.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-[#0a1f44] to-[#0d2850] rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-[#7ba695] bg-opacity-20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[#7ba695]" />
                </div>
              </div>
              <div className="text-5xl font-bold text-[#f5ecd7] mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border-l-4 border-[#7ba695] shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="text-6xl text-[#7ba695] leading-none">"</div>
              <div>
                <p className="text-2xl text-gray-700 mb-6 leading-relaxed italic">
                  We went from drowning in paper to total digital transparency. SqueezeDox is the best investment we made this year.
                </p>
                <p className="text-gray-600 font-semibold">
                  — Clinic Administrator, Los Angeles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
