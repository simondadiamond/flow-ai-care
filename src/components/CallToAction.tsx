
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-flow-blue to-flow-teal">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Step into the Future of Property Management
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join the early access program to experience intelligent automation and a unified ecosystem. Let WorkflowLeaf empower you to manage properties with unprecedented efficiency and insight.
          </p>
          <Button className="bg-white text-flow-blue hover:bg-white/90 gap-2 text-lg px-8 py-6">
            Join the Early Access Program
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
