
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Investors() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">Investor Information</h1>
            <p className="paragraph text-lg">
              Join us in our mission to secure India's digital economy and build the future of financial fraud prevention
            </p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm font-medium mb-4">
                The Problem
              </div>
              <h2 className="heading-secondary mb-4">Digital Fraud is Exploding in India</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  With UPI transactions reaching ₹17.5 trillion monthly, digital fraud has increased by 86% year-over-year, resulting in losses of over ₹50,000 crore annually.
                </p>
                <div className="bg-card rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">86%</p>
                      <p className="text-sm text-foreground/70">Increase in digital fraud</p>
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">₹50,000 Cr</p>
                      <p className="text-sm text-foreground/70">Annual losses to fraud</p>
                    </div>
                  </div>
                </div>
                <p className="paragraph">
                  Traditional fraud investigation methods are painfully slow, requiring manual coordination between banks and taking days or weeks to trace funds—by which time the money is usually gone.
                </p>
                <div className="flex items-center border-l-4 border-red-500 pl-4">
                  <p className="text-foreground/80 italic">
                    "Banks and law enforcement are fighting 21st century fraud with 20th century tools."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Solution */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Our Solution
              </div>
              <h2 className="heading-secondary mb-4">Real-time Transaction Tracing</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  Transaction Tracking System provides a revolutionary platform that traces fraud across multiple banks and payment systems in minutes, not days.
                </p>
                <div className="bg-card rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">95%</p>
                      <p className="text-sm text-foreground/70">Faster investigation</p>
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">60%</p>
                      <p className="text-sm text-foreground/70">Higher fund recovery</p>
                    </div>
                  </div>
                </div>
                <p className="paragraph">
                  Our AI-powered platform uses advanced graph visualization, risk scoring, and automated freeze request workflows to transform how banks and law enforcement fight digital fraud.
                </p>
                <div className="flex items-center border-l-4 border-primary pl-4">
                  <p className="text-foreground/80 italic">
                    "We've reduced investigation time from days to minutes, and significantly increased our fund recovery rate."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market & Traction */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Market */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Market Opportunity
              </div>
              <h2 className="heading-secondary mb-4">Massive & Growing Market</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  India's digital payments market is one of the fastest growing in the world, creating an urgent need for advanced fraud prevention solutions.
                </p>
                <div className="bg-card rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">₹3,200 Cr</p>
                      <p className="text-sm text-foreground/70">Market size (2025)</p>
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">24%</p>
                      <p className="text-sm text-foreground/70">Annual growth rate</p>
                    </div>
                  </div>
                </div>
                <p className="paragraph">
                  Our total addressable market includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>293 banks including public, private, and foreign entities</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>732 district and state cybercrime units</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>2,400+ fintech companies with anti-fraud needs</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>Government agencies and PSUs with large digital payment volumes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Traction */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-gold text-secondary-foreground rounded-full text-sm font-medium mb-4">
                Traction & Growth
              </div>
              <h2 className="heading-secondary mb-4">Rapid Adoption & Revenue Growth</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  Since our launch in 2022, we've achieved significant traction with key customers and strong revenue growth.
                </p>
                <div className="bg-card rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">42</p>
                      <p className="text-sm text-foreground/70">Enterprise clients</p>
                    </div>
                    <div>
                      <p className="text-3xl font-display font-bold text-primary">₹3.2 Cr</p>
                      <p className="text-sm text-foreground/70">ARR (growing 18% QoQ)</p>
                    </div>
                  </div>
                </div>
                <p className="paragraph">
                  Our key customers include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>8 of the top 20 banks in India</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>12 state and metropolitan cybercrime units</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>3 major government financial agencies</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-2" />
                    <span>4 leading payment platforms and fintech companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model & Team */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Business Model */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Business Model
              </div>
              <h2 className="heading-secondary mb-4">Sustainable & Scalable Revenue</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  Our business model combines enterprise SaaS subscriptions with transaction-based pricing for maximum scalability.
                </p>
                <div className="bg-card rounded-lg border p-4 space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Enterprise Subscriptions</span>
                    <span className="text-primary font-semibold">70% of revenue</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Transaction-based Fees</span>
                    <span className="text-primary font-semibold">25% of revenue</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Implementation & Training</span>
                    <span className="text-primary font-semibold">5% of revenue</span>
                  </div>
                </div>
                <p className="paragraph">
                  Key metrics:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-3 rounded-lg border">
                    <p className="text-sm text-foreground/70">CAC</p>
                    <p className="font-semibold">₹8.2 Lakhs</p>
                  </div>
                  <div className="bg-background p-3 rounded-lg border">
                    <p className="text-sm text-foreground/70">LTV</p>
                    <p className="font-semibold">₹92 Lakhs</p>
                  </div>
                  <div className="bg-background p-3 rounded-lg border">
                    <p className="text-sm text-foreground/70">LTV:CAC</p>
                    <p className="font-semibold">11.2:1</p>
                  </div>
                  <div className="bg-background p-3 rounded-lg border">
                    <p className="text-sm text-foreground/70">Gross Margin</p>
                    <p className="font-semibold">82%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Team & Advisors
              </div>
              <h2 className="heading-secondary mb-4">Experienced Leadership</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  Our team combines deep expertise in fintech, cybersecurity, and AI with a passion for fighting financial fraud.
                </p>
                <div className="bg-card rounded-lg border p-4 space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 mr-4"></div>
                    <div>
                      <p className="font-medium">Vikram Sharma</p>
                      <p className="text-sm text-foreground/70">Founder & CEO • Ex-Head of Security at HDFC Bank</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 mr-4"></div>
                    <div>
                      <p className="font-medium">Priya Mehta</p>
                      <p className="text-sm text-foreground/70">CTO • Former ML Lead at PayTM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 mr-4"></div>
                    <div>
                      <p className="font-medium">Rajiv Kapoor</p>
                      <p className="text-sm text-foreground/70">COO • 18 years in banking operations</p>
                    </div>
                  </div>
                </div>
                <p className="paragraph">
                  Advisors:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-3 rounded-lg border">
                    <p className="font-medium">Dr. Anil Kumar</p>
                    <p className="text-sm text-foreground/70">Former RBI Deputy Governor</p>
                  </div>
                  <div className="bg-background p-3 rounded-lg border">
                    <p className="font-medium">Sanjay Patel</p>
                    <p className="text-sm text-foreground/70">CTO, Global Banking Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Current Investment Round</h2>
            <p className="paragraph max-w-2xl mx-auto">
              We're raising Series A funding to accelerate our growth and expand our impact across India
            </p>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg border p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-sm text-foreground/70">Raising</p>
                  <p className="text-3xl font-display font-bold text-primary">₹40 Crore</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Pre-money Valuation</p>
                  <p className="text-3xl font-display font-bold text-primary">₹160 Crore</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="font-display font-semibold text-xl mb-4">Use of Funds</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Product Development</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '40%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Sales & Marketing</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Team Expansion</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '20%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Operations & Working Capital</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="font-display font-semibold text-xl mb-4">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Expand to 100+ enterprise clients within 18 months</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Launch AI-powered predictive fraud prevention module</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Achieve ₹15 Crore ARR by end of FY 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="section-container">
          <div className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-secondary mb-6">Ready to learn more about our investment opportunity?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Download our detailed investor brief or schedule a meeting with our founder to discuss potential investment opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href="#" download>
                    <Download size={18} className="mr-2" /> Get Investor Brief PDF
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Schedule Investor Meeting</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
