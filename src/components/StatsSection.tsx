
import React from 'react';

const StatsSection = () => {
  const stats = [
    { id: 1, value: '150+', label: 'Happy Clients' },
    { id: 2, value: '280%', label: 'Average ROI' },
    { id: 3, value: '430K+', label: 'Keywords Ranked' },
    { id: 4, value: '$2.1M+', label: 'Revenue Generated' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Results That Speak
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We measure our success by your business growth.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-purple-700">{stat.value}</div>
              <div className="mt-2 text-lg font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
