
import React from 'react';
import { m } from 'framer-motion';

const EfficiencySection = () => {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              One Platform, Limitless Potential
            </h2>
            <p className="text-lg text-gray-600">
              The WorkflowLeaf Property Hub connects tenants and managers through a unified interface. Start with intelligent maintenance and seamlessly unlock future tools designed to revolutionize property management.
            </p>
          </div>
          
          <m.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gradient-to-br from-flow-blue to-flow-teal p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">For Property Managers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1">✓</span>
                    <span>Centralized dashboard for all property activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1">✓</span>
                    <span>Automated tenant request routing and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1">✓</span>
                    <span>Performance insights and optimization recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1">✓</span>
                    <span>Enhanced tenant satisfaction through faster response times</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">For Tenants</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1 text-flow-blue">✓</span>
                    <span>Simple, intuitive interface for submitting maintenance requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1 text-flow-blue">✓</span>
                    <span>Real-time updates on request status and resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1 text-flow-blue">✓</span>
                    <span>Transparent communication with property management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-3 mt-1 text-flow-blue">✓</span>
                    <span>Higher satisfaction through faster issue resolution</span>
                  </li>
                </ul>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;
