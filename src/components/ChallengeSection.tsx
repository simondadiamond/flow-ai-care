
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { m } from 'framer-motion';

const ChallengeSection = () => {
  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tired of Managing Properties in Silos?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Juggling multiple communication channels, manual processes, and disjointed systems wastes valuable time and creates friction. From maintenance to lease documents and inquiries, the complexity hinders growth and impacts satisfaction. There's a smarter way – a unified hub for everything property-related.
          </p>
          
          <m.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              repeat: Infinity, 
              repeatType: "reverse"
            }}
          >
            <ArrowDown className="h-8 w-8 text-flow-blue" />
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
