
import { ArrowRight, Bell, CreditCard, FileText, Map, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TransactionGraph from '@/components/TransactionGraph';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex flex-col justify-center security-pattern">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-2">
                <span className="animate-pulse-gold bg-secondary rounded-full w-2 h-2 mr-2"></span>
                Backed by Startup India
              </div>
              <h1 className="heading-primary text-gradient">
                Trace the Money. <br className="hidden sm:block" />
                Stop the Fraud.
              </h1>
              <p className="paragraph max-w-xl mx-auto lg:mx-0">
                Track full transaction journeys across bank accounts and payment systems in minutes. Identify fraudulent patterns before they become costly losses.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="button-primary">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group">
                  <Link to="/features" className="flex items-center">
                    Learn More 
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <TransactionGraph />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="currentColor" fillOpacity="0.1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,213.3C672,235,768,245,864,224C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 sm:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-primary mb-4">Powerful Fraud Detection Features</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Our comprehensive suite of tools gives you everything you need to detect, trace, and prevent financial fraud
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Map size={28} />,
                title: "Interactive Transaction Map",
                description: "Visualize complete money flow with intuitive graph-based mapping of all transaction hops"
              },
              {
                icon: <Zap size={28} />,
                title: "Multi-Hop Tracing",
                description: "Trace funds through unlimited transaction hops across multiple banks and payment systems"
              },
              {
                icon: <CreditCard size={28} />,
                title: "Risk Scoring",
                description: "Automatic risk assessment for all accounts in the transaction chain"
              },
              {
                icon: <FileText size={28} />,
                title: "Detailed Reports",
                description: "Generate comprehensive PDF reports with all transaction details for legal proceedings"
              },
              {
                icon: <Bell size={28} />,
                title: "Real-time Fraud Alerts",
                description: "Get instant notifications when suspicious transaction patterns are detected"
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "Quick Freeze Requests",
                description: "Initiate account freeze requests directly from the platform to prevent fund movement"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="card-gradient border rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
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
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Brief Overview */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-primary mb-4">How It Works</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Trace fraudulent transactions in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Enter Transaction ID",
                description: "Start with any UPI, IMPS, or NEFT transaction reference number"
              },
              {
                step: "02",
                title: "System Fetches Data",
                description: "Our secure API connects to banking networks and retrieves all linked transfers"
              },
              {
                step: "03",
                title: "Visualize Money Flow",
                description: "View comprehensive transaction chain showing where the money went"
              },
              {
                step: "04",
                title: "Take Action",
                description: "Generate reports, highlight risks, and request account freezes"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-xl shadow-sm p-6 relative z-10">
                  <div className="text-4xl font-display font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 -mr-4 z-0">
                    <ArrowRight size={24} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-primary mb-4">Who Benefits</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Our Transaction Tracking System helps organizations across the financial ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Banks & Financial Institutions",
                description: "Reduce fraud losses and investigation time by quickly tracing UPI and IMPS fraud cases"
              },
              {
                title: "Cybercrime Units",
                description: "Speed up investigation and fund recovery with comprehensive transaction mapping"
              },
              {
                title: "Government & PSUs",
                description: "Monitor and protect digital transactions involving public funds and services"
              },
              {
                title: "Fintech Companies",
                description: "Strengthen compliance and fraud prevention capabilities within your digital payment platform"
              }
            ].map((useCase, index) => (
              <div 
                key={index}
                className="border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-display font-semibold mb-3">
                  {useCase.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {useCase.description}
                </p>
                <Link 
                  to="/use-cases" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-primary mb-6">Ready to protect your digital transactions?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join leading banks and cybercrime units across India in the fight against digital fraud. Schedule your personalized demo today.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
