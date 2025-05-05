
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import EfficiencySection from '@/components/EfficiencySection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  // Replace all early access buttons with the ContactForm component
  React.useEffect(() => {
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Find and click the DialogTrigger button
        const dialogTrigger = document.querySelector('[data-state="closed"] [role="button"]');
        if (dialogTrigger instanceof HTMLElement) {
          dialogTrigger.click();
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <EfficiencySection />
        <CallToAction />
      </main>
      <Footer />
      
      {/* Hidden component that contains the dialog */}
      <div className="hidden">
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
