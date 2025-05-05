
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-r from-flow-blue to-flow-teal rounded-md"></div>
              <h2 className="text-xl font-bold">MaintenanceFlow AI</h2>
            </div>
            <p className="text-gray-400 mt-2">Transforming property maintenance with intelligent automation</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              <a href="#" className="text-gray-400 hover:text-flow-teal transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-flow-teal transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-flow-teal transition-colors">
                Contact
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} WorkflowLeaf. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
