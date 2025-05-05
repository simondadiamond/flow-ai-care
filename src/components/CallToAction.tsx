
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-flow-blue to-flow-teal">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Experience the Evolution of Property Care
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join the waitlist for MaintenanceFlow AI and be among the first to transform your maintenance operations. Embrace a smarter, more efficient, and ultimately more profitable approach to property management.
          </p>
          <Button className="bg-white text-flow-blue hover:bg-white/90 gap-2 text-lg px-8 py-6">
            Request Early Access
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
