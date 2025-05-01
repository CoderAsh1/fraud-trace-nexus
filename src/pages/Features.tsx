
import { ArrowRight, BarChart2, FileText, Map, Shield, ShieldAlert, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TransactionGraph from '@/components/TransactionGraph';

export default function Features() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">Powerful Features for Advanced Fraud Detection</h1>
            <p className="paragraph text-lg">
              Our comprehensive suite of tools gives you everything you need to detect, trace, and prevent digital financial fraud
            </p>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="max-w-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <Map className="h-6 w-6 text-primary" />
                  <h2 className="heading-secondary">Interactive Transaction Map</h2>
                </div>
                <p className="paragraph mb-4">
                  Visualize the complete flow of money with our intuitive graph-based visualization. Trace transactions across multiple accounts and identify suspicious patterns at a glance.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full text-primary mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>Intuitive node-based visualization of all transaction hops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full text-primary mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>Interactive map with detailed information for each transaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full text-primary mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>Color-coded risk indicators for quick identification</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <TransactionGraph />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="bg-card shadow-lg rounded-xl p-6 border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="font-medium text-red-600">HL</span>
                      </div>
                      <div>
                        <p className="font-medium">Account: HDFC-****5678</p>
                        <p className="text-sm text-foreground/70">Last Activity: 2 hours ago</p>
                      </div>
                    </div>
                    <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded font-medium">
                      High Risk
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="font-medium text-amber-600">SB</span>
                      </div>
                      <div>
                        <p className="font-medium">Account: SBI-****1234</p>
                        <p className="text-sm text-foreground/70">Last Activity: 4 days ago</p>
                      </div>
                    </div>
                    <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-medium">
                      Medium Risk
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="font-medium text-green-600">AX</span>
                      </div>
                      <div>
                        <p className="font-medium">Account: AXIS-****9012</p>
                        <p className="text-sm text-foreground/70">Last Activity: 1 month ago</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">
                      Low Risk
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                  <h2 className="heading-secondary">Risk Scoring for Accounts</h2>
                </div>
                <p className="paragraph mb-4">
                  Our advanced risk scoring system evaluates each account in the transaction chain and assigns a risk level based on multiple factors.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full text-primary mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>Automatic identification of high-risk merchant and personal accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full text-primary mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>Risk evaluation based on transaction patterns, history, and behavior</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full text-primary mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span>AI-powered risk scoring that adapts and learns from new fraud patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Features */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">More Powerful Features</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Comprehensive tools to enhance your fraud investigation capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database />,
                title: "Multi-Hop Tracing",
                description: "Trace transactions through unlimited hops across multiple banks and payment systems to reveal the complete money trail."
              },
              {
                icon: <BarChart2 />,
                title: "Graph Visualization",
                description: "Intuitive visual representation of transaction flows makes it easy to identify patterns and suspicious activities."
              },
              {
                icon: <FileText />,
                title: "PDF Reports & Freeze Requests",
                description: "Generate detailed reports for legal proceedings and initiate freeze requests with a single click."
              },
              {
                icon: <Shield />,
                title: "Real-time Fraud Alerts",
                description: "Get instant notifications when suspicious transaction patterns match known fraud signatures."
              },
              {
                icon: <Map />,
                title: "Cross-Bank Integration",
                description: "Seamless integration with multiple banking systems for comprehensive transaction tracking."
              },
              {
                icon: <ShieldAlert />,
                title: "Secure Access Controls",
                description: "Role-based permissions ensure sensitive financial data is only accessible to authorized personnel."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl border p-6 card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
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
              <h2 className="heading-secondary mb-6">Ready to see these features in action?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Schedule a personalized demo to see how our Transaction Tracking System can enhance your fraud detection capabilities.
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
