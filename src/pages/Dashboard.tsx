
import { ArrowRight, FileText, Lock, Download, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TransactionGraph from '@/components/TransactionGraph';

export default function Dashboard() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">Dashboard Preview</h1>
            <p className="paragraph text-lg">
              See how our Transaction Tracking System visualizes and helps you investigate suspicious transactions
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16">
        <div className="section-container">
          <div className="bg-card border rounded-xl shadow-lg p-6 lg:p-8">
            <div className="flex flex-col space-y-6">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-center pb-4 border-b">
                <div className="mb-4 sm:mb-0">
                  <h2 className="font-display font-semibold text-xl">Transaction ID: UTR123456789</h2>
                  <p className="text-sm text-foreground/70">Source: HDFC Bank ● Amount: ₹50,000 ● Date: 15 Apr 2025</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <FileText size={16} className="mr-2" /> Export Report
                  </Button>
                  <Button variant="destructive" size="sm" className="flex items-center">
                    <Lock size={16} className="mr-2" /> Request Freeze
                  </Button>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                {/* Graph Area */}
                <div className="w-full lg:w-3/4">
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Transaction Graph</h3>
                      <div className="text-sm text-foreground/70">
                        Showing 7 accounts in transaction chain
                      </div>
                    </div>
                  </div>
                  <TransactionGraph />
                </div>
                
                {/* Sidebar */}
                <div className="w-full lg:w-1/4 bg-muted rounded-lg p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">Transaction Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-foreground/70">Original Amount</span>
                          <span className="font-medium">₹50,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-foreground/70">Transaction Hops</span>
                          <span className="font-medium">6</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-foreground/70">High Risk Accounts</span>
                          <span className="font-medium text-red-600">3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-foreground/70">Time to First Split</span>
                          <span className="font-medium">2 minutes</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <h3 className="font-display font-semibold text-lg mb-2">Selected Account</h3>
                      <div className="bg-background rounded-lg p-3 border">
                        <p className="font-medium">Account 3</p>
                        <p className="text-sm text-foreground/70">Bank: ICICI Bank</p>
                        <div className="flex items-center mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                            High Risk
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm">
                          <span className="text-foreground/70">Received</span>
                          <span className="font-medium">₹15,000</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground/70">Forwarded</span>
                          <span className="font-medium">₹5,000</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground/70">Remaining</span>
                          <span className="font-medium">₹10,000</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4">
                      <h3 className="font-display font-semibold text-lg mb-2">Actions</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Download size={16} className="mr-2" /> Export Details
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <ShieldCheck size={16} className="mr-2" /> Request Account Freeze
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="border-t border-border pt-6 mt-4">
                <h3 className="font-display font-semibold text-lg mb-4">Transaction Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                        1
                      </div>
                      <div className="h-full w-0.5 bg-border"></div>
                    </div>
                    <div className="bg-background rounded-lg border p-3 flex-grow">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Initial Transaction</p>
                        <p className="text-sm text-foreground/70">15 Apr 2025, 10:05 AM</p>
                      </div>
                      <p className="text-sm text-foreground/70 mt-1">
                        ₹50,000 transferred from Source Account (HDFC) to Account 1, Account 2, and Account 3
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                        2
                      </div>
                      <div className="h-full w-0.5 bg-border"></div>
                    </div>
                    <div className="bg-background rounded-lg border p-3 flex-grow">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">First Hop Transfer</p>
                        <p className="text-sm text-foreground/70">15 Apr 2025, 10:07 AM</p>
                      </div>
                      <p className="text-sm text-foreground/70 mt-1">
                        Account 1 transferred ₹10,000 to Account 4 and ₹5,000 to Account 5
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                        3
                      </div>
                    </div>
                    <div className="bg-background rounded-lg border p-3 flex-grow">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">Second Hop Transfer</p>
                        <p className="text-sm text-foreground/70">15 Apr 2025, 10:15 AM</p>
                      </div>
                      <p className="text-sm text-foreground/70 mt-1">
                        Account 3 transferred ₹5,000 to Account 6
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Dashboard Features</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Our comprehensive dashboard makes fraud investigation intuitive and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Visualization",
                description: "Intuitive graph-based interface makes it easy to understand complex transaction flows"
              },
              {
                title: "Detailed Account Information",
                description: "View comprehensive details for every account in the transaction chain"
              },
              {
                title: "Risk Highlighting",
                description: "Automatically identify and highlight high-risk accounts for immediate attention"
              },
              {
                title: "Timeline View",
                description: "Chronological display of all transactions to understand the sequence of events"
              },
              {
                title: "Quick Actions",
                description: "Generate reports and freeze requests directly from the dashboard"
              },
              {
                title: "Summary Statistics",
                description: "Get key metrics and insights about the transaction pattern at a glance"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl border p-6 card-hover"
              >
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="section-container">
          <div className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-secondary mb-6">Ready to explore the full dashboard?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Request a personalized demo to see how our Transaction Tracking System can transform your fraud investigation process.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
