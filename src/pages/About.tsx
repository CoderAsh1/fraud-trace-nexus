
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">About Transaction Tracking System</h1>
            <p className="paragraph text-lg">
              Our mission is to make India's digital economy safer for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="max-w-lg">
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Vision
                </div>
                <h2 className="heading-secondary mb-4">Make India's Digital Economy Safer</h2>
                <p className="paragraph mb-6">
                  We are on a mission to protect India's growing digital economy by providing cutting-edge tools that help banks, law enforcement, and financial institutions combat fraud effectively.
                </p>
                <p className="paragraph mb-6">
                  With digital transactions growing exponentially in India, our vision is to build a secure financial ecosystem where consumers and businesses can transact with confidence, knowing that robust systems are in place to detect and prevent fraud.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Protect consumers from digital payment fraud</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Empower investigation teams with advanced tools</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Build trust in India's digital payment infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-card shadow-lg rounded-xl p-6 border">
                <h3 className="font-display font-semibold text-xl mb-4">The Problem We're Solving</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Rising Digital Fraud</h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        Digital fraud cases have increased by 86% in India over the last two years, with UPI-related scams becoming increasingly sophisticated.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Complex Investigation Process</h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        Tracing fraudulent transactions traditionally requires manual coordination between multiple banks, taking days or weeks to complete.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Time-Critical Response</h4>
                      <p className="text-sm text-foreground/70 mt-1">
                        The first 24-48 hours are crucial for recovering fraudulent transfers, but traditional methods are too slow to freeze funds in time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="max-w-lg mx-auto lg:mx-0">
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Story
                </div>
                <h2 className="heading-secondary mb-4">Founded with a Purpose</h2>
                <p className="paragraph mb-4">
                  Transaction Tracking System was founded by Vikram Sharma, a software engineer with over 15 years of experience in banking technology and cybersecurity.
                </p>
                <p className="paragraph mb-4">
                  After witnessing firsthand the challenges faced by banks and law enforcement in tracing complex fraud cases, Vikram set out to build a solution that would transform the investigation process.
                </p>
                <p className="paragraph mb-6">
                  Starting with a small team of dedicated engineers in 2020, Transaction Tracking System has grown to become a trusted partner for major banks, law enforcement agencies, and financial institutions across India.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mb-6">
                  "We built this system with a clear mission - to make fraud investigation faster and more effective. Every day our platform helps recover funds that would otherwise be lost to scammers."
                  <footer className="text-right mt-2 font-medium not-italic">— Vikram Sharma, Founder & CEO</footer>
                </blockquote>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/eeeeee/cccccc?text=Founder+Photo" 
                  alt="Founder" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl">Vikram Sharma</h3>
                  <p className="text-primary">Founder & CEO</p>
                  <p className="text-sm text-foreground/70 mt-2">
                    Former Head of Security at a leading Indian bank, cybersecurity expert, and passionate advocate for safer digital transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backed By */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Backed By</h2>
            <p className="paragraph max-w-2xl mx-auto">
              We're proud to be supported by leading organizations committed to a safer digital India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl border p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">SI</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Startup India</h3>
              <p className="text-foreground/70 text-sm">
                Recognized and supported by the Startup India initiative under the Ministry of Commerce and Industry
              </p>
            </div>
            
            <div className="bg-background rounded-xl border p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">VC</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">VentureCapital India</h3>
              <p className="text-foreground/70 text-sm">
                Backed by leading venture capital firms focused on fintech innovation and cybersecurity
              </p>
            </div>
            
            <div className="bg-background rounded-xl border p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">TI</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">TechIncubator</h3>
              <p className="text-foreground/70 text-sm">
                Part of India's premier technology incubator program for innovative financial security solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Values */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Our Values</h2>
            <p className="paragraph max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Security First",
                description: "We prioritize the security and integrity of financial data above everything else"
              },
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in fraud detection technology"
              },
              {
                title: "Customer Success",
                description: "Our success is measured by how effectively our customers can fight fraud"
              },
              {
                title: "Integrity",
                description: "We uphold the highest ethical standards in all aspects of our business"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl border p-6 card-hover text-center"
              >
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-primary mb-6">Join us in making India's digital economy safer</h2>
            <p className="paragraph mb-8 text-lg">
              Request a demo to see how our Transaction Tracking System can help your organization fight financial fraud effectively.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
