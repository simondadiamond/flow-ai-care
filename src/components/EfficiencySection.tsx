
import React from 'react';
import { User, Building, Clock } from 'lucide-react';

const EfficiencySection = () => {
  const benefits = [
    {
      icon: <User className="h-10 w-10 text-flow-blue" />,
      title: "For Tenants",
      points: [
        "Submit requests in seconds through a user-friendly portal",
        "Track repair status in real-time",
        "Communicate directly with maintenance teams",
        "Receive automated updates at every stage"
      ]
    },
    {
      icon: <Building className="h-10 w-10 text-flow-blue" />,
      title: "For Property Managers",
      points: [
        "Centralized overview of all maintenance activities",
        "Automated routing and assignment of requests",
        "Custom workflows based on property needs",
        "Reduced administrative overhead"
      ]
    },
    {
      icon: <Clock className="h-10 w-10 text-flow-teal" />,
      title: "Save Time & Resources",
      points: [
        "50% reduction in request processing time",
        "30% decrease in maintenance response time",
        "Elimination of duplicate entry and paperwork",
        "Fewer callbacks and follow-ups needed"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple for Tenants, <span className="gradient-text">Powerful for You</span>
          </h2>
          <p className="text-lg text-gray-600">
            MaintenanceFlow AI is designed with intuitive interfaces for all users. Tenants can submit requests in seconds, and property managers gain a centralized overview of all maintenance activities without the administrative burden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mb-6 flex justify-center">
                <div className="bg-flow-green p-4 rounded-full">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{benefit.title}</h3>
              <ul className="space-y-2">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="h-5 w-5 mt-0.5 rounded-full bg-flow-teal/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-flow-teal"></div>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;
