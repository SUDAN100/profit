
import React from 'react';
import { Search, PieChart, Zap, LineChart } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Discovery',
      description: 'We analyze your business, industry, competitors, and target audience to create a customized strategy.',
      icon: <Search className="h-10 w-10 text-purple-600" />,
    },
    {
      id: 2,
      title: 'Strategy',
      description: 'Based on our research, we develop a data-driven marketing plan focused on your specific goals and KPIs.',
      icon: <PieChart className="h-10 w-10 text-purple-600" />,
    },
    {
      id: 3,
      title: 'Implementation',
      description: 'Our team executes the strategy across all channels, optimizing campaigns for maximum performance.',
      icon: <Zap className="h-10 w-10 text-purple-600" />,
    },
    {
      id: 4,
      title: 'Reporting & Optimization',
      description: 'We continuously monitor results, provide detailed reports, and refine our approach to maximize ROI.',
      icon: <LineChart className="h-10 w-10 text-purple-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Proven Process
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            A systematic approach that delivers consistent results for your business.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-purple-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative z-10">
                <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="rounded-full bg-purple-100 p-4">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-purple-700 text-white font-bold">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
