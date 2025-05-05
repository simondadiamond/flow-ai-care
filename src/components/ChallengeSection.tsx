
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { X, Clock, MessageSquare } from 'lucide-react';

const ChallengeSection = () => {
  const challenges = [
    {
      icon: <Clock className="h-8 w-8 text-flow-blue" />,
      title: "Time-Consuming Processes",
      description: "Manual tracking and dispatching wastes valuable time and resources."
    },
    {
      icon: <X className="h-8 w-8 text-flow-blue" />,
      title: "Error-Prone Systems",
      description: "Paper forms and siloed communication lead to costly mistakes."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-flow-blue" />,
      title: "Poor Communication",
      description: "Missed updates and unclear status leave tenants frustrated."
    }
  ];

  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Drowning in Reactive Maintenance?
          </h2>
          <p className="text-lg text-gray-600">
            Manual maintenance request processes are time-consuming, error-prone, and frustrating for both property managers and tenants. Missed communications, delayed responses, and inefficient dispatching lead to wasted resources and unhappy residents. Isn't it time for a smarter approach?
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="card-gradient border shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-white p-4 rounded-full shadow-md">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
