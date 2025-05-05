
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [units, setUnits] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the form data to a backend
    console.log({ name, email, company, units });
    
    // Show success message
    setSubmitted(true);
    toast({
      title: "Request submitted!",
      description: "We'll be in touch soon about early access.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-primary gap-2 text-lg">
          Request Early Access
          <ArrowRight className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Request Early Access</DialogTitle>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Thank you for your interest!</h3>
            <p className="text-gray-600 mb-4">
              We've received your request for early access to MaintenanceFlow AI. Our team will be in touch shortly.
            </p>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input 
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  placeholder="Property Management Inc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="units">Number of Units</Label>
                <Input 
                  id="units"
                  type="number"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  placeholder="100"
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full btn-primary">
              Submit Request
            </Button>
            
            <p className="text-xs text-center text-gray-500">
              By submitting, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
