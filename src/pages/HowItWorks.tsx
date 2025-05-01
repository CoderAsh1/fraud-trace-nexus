
import { ArrowRight, Search, Database, FileText, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">How Transaction Tracking System Works</h1>
            <p className="paragraph text-lg">
              Our powerful platform simplifies the complex task of tracing fraudulent transactions across multiple accounts and banking systems
            </p>
          </div>
        </div>
      </section>

      {/* Step Process */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                1
              </div>
              <div className="absolute top-8 bottom-0 -left-0.5 w-px bg-primary/30 z-0"></div>
              <div className="pl-8">
                <h2 className="heading-secondary mb-4">Enter UTR or Transaction ID</h2>
                <p className="paragraph mb-6">
                  Begin your investigation by entering any UPI, IMPS, or NEFT transaction reference number that you suspect is linked to fraudulent activity.
                </p>
                <div className="bg-card shadow-lg border rounded-xl p-6 relative">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Transaction Reference</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="UTR123456789" 
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                          readOnly
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <Search size={16} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Transaction Type</label>
                      <select 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background" 
                        defaultValue="upi"
                      >
                        <option value="upi">UPI</option>
                        <option value="imps">IMPS</option>
                        <option value="neft">NEFT</option>
                        <option value="rtgs">RTGS</option>
                      </select>
                    </div>
                    
                    <Button className="w-full">
                      Trace Transaction
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                2
              </div>
              <div className="absolute top-8 bottom-0 -left-0.5 w-px bg-primary/30 z-0"></div>
              <div className="pl-8">
                <h2 className="heading-secondary mb-4">System Fetches All Subsequent Transfers</h2>
                <p className="paragraph mb-6">
                  Our system connects to secure banking APIs and retrieves all transactions linked to the reference number, following the money through every transfer.
                </p>
                <div className="bg-card shadow-lg border rounded-xl p-6 relative">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Connecting to banking networks</span>
                      <div className="flex items-center">
                        <span className="block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm text-green-500">Secure</span>
                      </div>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div className="animate-pulse h-full w-full bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Database size={16} className="mr-2 text-primary" />
                        <span className="text-sm">Retrieving primary transaction data</span>
                      </div>
                      <div className="flex items-center">
                        <Database size={16} className="mr-2 text-primary" />
                        <span className="text-sm">Tracing linked transactions</span>
                      </div>
                      <div className="flex items-center">
                        <AlertTriangle size={16} className="mr-2 text-amber-500" />
                        <span className="text-sm">Analyzing risk patterns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                3
              </div>
              <div className="absolute top-8 bottom-0 -left-0.5 w-px bg-primary/30 z-0"></div>
              <div className="pl-8">
                <h2 className="heading-secondary mb-4">Display Transaction Tree</h2>
                <p className="paragraph mb-6">
                  View a complete visual map showing where the money went, with all accounts in the transaction chain clearly displayed in an interactive graph.
                </p>
                <div className="bg-card shadow-lg border rounded-xl p-6 relative">
                  <img 
                    src="https://placehold.co/600x300/eeeeee/cccccc?text=Transaction+Graph+Visualization" 
                    alt="Transaction Graph" 
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center">
                      <span className="block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                      <span>Low Risk</span>
                    </div>
                    <div className="flex items-center">
                      <span className="block w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
                      <span>Medium Risk</span>
                    </div>
                    <div className="flex items-center">
                      <span className="block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                      <span>High Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                4
              </div>
              <div className="pl-8">
                <h2 className="heading-secondary mb-4">Highlight Risks & Take Action</h2>
                <p className="paragraph mb-6">
                  Review risk assessments, export comprehensive reports, and initiate freeze requests for suspicious accounts with just a few clicks.
                </p>
                <div className="bg-card shadow-lg border rounded-xl p-6 relative">
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle size={20} className="text-red-600 dark:text-red-400 mt-0.5 mr-2" />
                        <div>
                          <h4 className="font-medium text-red-800 dark:text-red-300">High Risk Accounts Detected</h4>
                          <p className="text-sm text-red-600 dark:text-red-400">2 accounts in this transaction chain have been flagged as high risk</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="flex-1" variant="outline">
                        <FileText size={16} className="mr-2" />
                        Export Report
                      </Button>
                      <Button className="flex-1" variant="destructive">
                        <ShieldCheck size={16} className="mr-2" />
                        Request Freeze
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Technical Integration</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Our system integrates seamlessly with your existing infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure API Integration",
                description: "Our system connects securely with banking networks using enterprise-grade encryption and authentication protocols."
              },
              {
                title: "High Performance",
                description: "Optimized for speed, our platform can handle thousands of transaction traces simultaneously without compromising performance."
              },
              {
                title: "Regulatory Compliance",
                description: "Built with RBI guidelines and data protection regulations in mind, ensuring all operations are fully compliant."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl border p-6 card-hover"
              >
                <h3 className="text-xl font-display font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70">
                  {item.description}
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
              <h2 className="heading-secondary mb-6">Ready to trace fraudulent transactions in minutes?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Request a demo to see how our Transaction Tracking System can transform your fraud investigation process.
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
