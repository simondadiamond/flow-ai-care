
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Workflow, MessageSquare, Network, Brain, ChartLine, Layout } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: <Workflow className="h-10 w-10 text-flow-blue" />,
      title: "MaintenanceFlow AI",
      description: "Intelligent Care at Your Fingertips. Streamlined tenant submissions with intelligent routing to the right personnel.",
      isAvailable: true
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-flow-blue" />,
      title: "TenantConnect AI",
      description: "Imagine tenant inquiries handled instantly via intelligent voice/chat, freeing your team to focus on higher-value tasks.",
      isAvailable: false
    },
    {
      icon: <Layout className="h-10 w-10 text-flow-blue" />,
      title: "LeaseLens Automation",
      description: "Future AI-powered tools will automate lease generation, renewals, and ensure compliance with local regulations.",
      isAvailable: false
    },
    {
      icon: <ChartLine className="h-10 w-10 text-flow-blue" />,
      title: "RentFlow Insights",
      description: "Gain holistic property performance views with intelligent dashboards on occupancy, rent collection, and maintenance.",
      isAvailable: true
    },
    {
      icon: <Brain className="h-10 w-10 text-flow-blue" />,
      title: "Predictive Occupancy",
      description: "Anticipate vacancies and optimize marketing with future predictive analytics.",
      isAvailable: false
    },
    {
      icon: <Network className="h-10 w-10 text-flow-blue" />,
      title: "CommunityConnect",
      description: "Foster community with integrated communication tools for announcements and engagement.",
      isAvailable: false
    }
  ];

  return (
    <section id="solution" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Welcome to the <span className="gradient-text">Future of Property Management</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Introducing the WorkflowLeaf Property Hub
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
