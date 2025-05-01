
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function UseCases() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">Transaction Tracking System Use Cases</h1>
            <p className="paragraph text-lg">
              How our system is helping various organizations fight financial fraud across India
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="section-container">
          {/* Banks */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Banks & Financial Institutions
                  </div>
                  <h2 className="heading-secondary mb-4">Investigating UPI Fraud</h2>
                  <p className="paragraph mb-6">
                    Banks across India are using our Transaction Tracking System to rapidly investigate UPI fraud cases and recover funds before they're lost forever.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Reduced Investigation Time</h3>
                        <p className="text-sm text-foreground/70">Cut investigation time from days to minutes with automated transaction tracing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Higher Recovery Rate</h3>
                        <p className="text-sm text-foreground/70">Increase fund recovery by up to 60% by quickly identifying and freezing mule accounts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Customer Satisfaction</h3>
                        <p className="text-sm text-foreground/70">Improve customer trust by resolving fraud cases more efficiently</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-card rounded-xl shadow-lg border p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Case Study: Leading Private Bank</p>
                      <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/80">
                        "Before implementing this system, our team would spend 3-4 days on average tracing complex UPI fraud cases. Now we can completely map the transaction flow within minutes and freeze accounts before funds are withdrawn."
                      </blockquote>
                      <p className="text-right text-sm mt-3">— Fraud Investigation Head, Top 5 Private Bank</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">85%</p>
                        <p className="text-sm mt-1">Reduction in investigation time</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">₹15 Cr+</p>
                        <p className="text-sm mt-1">Fraud losses prevented</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cybercrime Units */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-10">
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Cybercrime Units
                  </div>
                  <h2 className="heading-secondary mb-4">Faster Trace & Freeze Workflows</h2>
                  <p className="paragraph mb-6">
                    Law enforcement agencies are streamlining their investigations with our comprehensive transaction tracing capabilities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Comprehensive Investigation</h3>
                        <p className="text-sm text-foreground/70">Track complete money flow across multiple banks with a single platform</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Automated Documentation</h3>
                        <p className="text-sm text-foreground/70">Generate court-ready reports with complete transaction details</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Case Management</h3>
                        <p className="text-sm text-foreground/70">Track investigation progress and manage multiple cases efficiently</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-card rounded-xl shadow-lg border p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Case Study: State Cybercrime Cell</p>
                      <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/80">
                        "The Transaction Tracking System has revolutionized how we investigate digital fraud. What previously required coordinating with multiple banks over several weeks can now be completed in a single session."
                      </blockquote>
                      <p className="text-right text-sm mt-3">— Deputy Director, State Cybercrime Investigation Cell</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">300+</p>
                        <p className="text-sm mt-1">Cases resolved monthly</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">70%</p>
                        <p className="text-sm mt-1">Increase in case clearance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Government/PSUs */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Government & PSUs
                  </div>
                  <h2 className="heading-secondary mb-4">Monitoring Public Digital Transactions</h2>
                  <p className="paragraph mb-6">
                    Government agencies and public sector units use our system to ensure transparency and security in digital payments.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Enhanced Accountability</h3>
                        <p className="text-sm text-foreground/70">Track government disbursements and ensure funds reach intended recipients</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Fraud Prevention</h3>
                        <p className="text-sm text-foreground/70">Proactively identify suspicious patterns in welfare payment systems</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Compliance Monitoring</h3>
                        <p className="text-sm text-foreground/70">Ensure adherence to financial regulations and guidelines</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-card rounded-xl shadow-lg border p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Case Study: Major PSU Bank</p>
                      <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/80">
                        "With the Transaction Tracking System, we've significantly improved our monitoring of public welfare disbursements. The system has helped us identify and prevent several cases of benefit diversion."
                      </blockquote>
                      <p className="text-right text-sm mt-3">— Financial Controller, Government PSU</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">₹25 Cr+</p>
                        <p className="text-sm mt-1">Protected public funds</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">99.8%</p>
                        <p className="text-sm mt-1">Transaction accuracy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fintech */}
          <div>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Fintech Companies
                  </div>
                  <h2 className="heading-secondary mb-4">Compliance & Fraud Prevention</h2>
                  <p className="paragraph mb-6">
                    Fintech platforms leverage our system to strengthen their compliance framework and prevent fraudulent transactions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Regulatory Compliance</h3>
                        <p className="text-sm text-foreground/70">Meet RBI and other regulatory requirements for transaction monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Risk Management</h3>
                        <p className="text-sm text-foreground/70">Identify and mitigate potential fraud risks before they impact customers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">API Integration</h3>
                        <p className="text-sm text-foreground/70">Seamlessly integrate with existing fintech platforms and workflows</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-card rounded-xl shadow-lg border p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">Case Study: Leading Payment App</p>
                      <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/80">
                        "Implementing this transaction tracking solution has dramatically improved our ability to detect suspicious activity. Our fraud losses have decreased by 40% while customer trust has increased."
                      </blockquote>
                      <p className="text-right text-sm mt-3">— Head of Risk, Payment Fintech</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">40%</p>
                        <p className="text-sm mt-1">Reduction in fraud</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg border">
                        <p className="text-3xl font-display font-bold text-primary">95%</p>
                        <p className="text-sm mt-1">Integration accuracy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-primary mb-6">See how our system can work for your organization</h2>
            <p className="paragraph mb-8 text-lg">
              Join hundreds of organizations across India that are already using Transaction Tracking System to fight financial fraud.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/dashboard" className="flex items-center">
                  View Dashboard Preview <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
