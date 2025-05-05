
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Workflow, Network, Brain, MessageSquare, ChartLine } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: <Workflow className="h-10 w-10 text-flow-blue" />,
      title: "Intelligent Intake",
      description: "Tenants can effortlessly submit requests through a streamlined digital portal.",
      isAvailable: true
    },
    {
      icon: <Network className="h-10 w-10 text-flow-blue" />,
      title: "Dynamic Routing",
      description: "Our adaptive system intuitively directs requests to the right personnel, minimizing delays.",
      isAvailable: true
    },
    {
      icon: <Brain className="h-10 w-10 text-flow-blue" />,
      title: "Proactive Insights",
      description: "Anticipate potential issues with data-driven analysis, moving from reactive to predictive maintenance.",
      isAvailable: false
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-flow-blue" />,
      title: "Seamless Communication",
      description: "Foster transparent communication between tenants, managers, and maintenance teams – all in one platform.",
      isAvailable: false
    },
    {
      icon: <ChartLine className="h-10 w-10 text-flow-blue" />,
      title: "Performance Optimization",
      description: "Gain valuable insights into maintenance trends to optimize resource allocation and improve service delivery.",
      isAvailable: true
    }
  ];

  return (
    <section id="solution" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Introducing <span className="gradient-text">MaintenanceFlow AI</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The Intelligent Hub for Property Care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient border shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-white p-4 rounded-full shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {feature.title}
                    {!feature.isAvailable && (
                      <span className="text-xs bg-flow-green px-2 py-0.5 rounded-full text-flow-blue">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
