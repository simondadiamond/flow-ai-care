
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Layers } from 'lucide-react';
import { m } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 flow-pattern opacity-50"></div>
      
      {/* Floating elements for visual interest */}
      <div className="hidden md:block absolute top-1/4 left-1/5 h-16 w-16 rounded-full bg-flow-blue/10 animate-float"></div>
      <div className="hidden md:block absolute bottom-1/3 right-1/4 h-24 w-24 rounded-full bg-flow-teal/10 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="hidden md:block absolute top-1/2 right-1/6 h-12 w-12 rounded-full bg-flow-lightBlue/10 animate-float" style={{ animationDelay: "1s" }}></div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <m.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Predictive Property Care,</span>
              <br />
              <span>Effortlessly Managed.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Intelligent maintenance request routing and streamlined workflows that anticipate needs and resolve issues faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="btn-primary gap-2 text-lg">
                Request Early Access
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </m.div>
          
          {/* Visual element */}
          <m.div 
            className="flex-1 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Abstract flow graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-3/4 h-3/4 rounded-full bg-flow-teal/10 animate-pulse-slow"></div>
                <div className="absolute w-1/2 h-1/2 rounded-full bg-flow-blue/10 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                
                {/* Network nodes */}
                <m.div 
                  className="absolute top-1/4 left-1/4 bg-flow-blue p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Activity className="h-6 w-6 text-white" />
                </m.div>
                <m.div 
                  className="absolute bottom-1/4 right-1/4 bg-flow-teal p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Layers className="h-6 w-6 text-white" />
                </m.div>
                <m.div 
                  className="absolute bottom-1/5 left-1/3 bg-flow-lightBlue p-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Activity className="h-6 w-6 text-white" />
                </m.div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <m.line 
                    x1="50" y1="50" x2="150" y2="150" 
                    stroke="#33C3F0" 
                    strokeWidth="2" 
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <m.line 
                    x1="150" y1="50" x2="75" y2="150" 
                    stroke="#0F72B9" 
                    strokeWidth="2" 
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                </svg>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
