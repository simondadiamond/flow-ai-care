
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  // Function to smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-4 px-6 md:px-10 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-r from-flow-blue to-flow-teal rounded-md"></div>
          <h1 className="text-xl font-bold text-flow-blue">MaintenanceFlow AI</h1>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-flow-blue transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('problem')} 
            className="text-gray-700 hover:text-flow-blue transition-colors"
          >
            The Challenge
          </button>
          <button 
            onClick={() => scrollToSection('solution')} 
            className="text-gray-700 hover:text-flow-blue transition-colors"
          >
            Solution
          </button>
          <Button className="btn-primary">
            Request Early Access
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
