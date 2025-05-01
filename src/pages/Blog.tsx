
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">Fraud Detection Insights</h1>
            <p className="paragraph text-lg">
              Stay updated with the latest trends, case studies, and best practices in financial fraud detection
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8">
        <div className="section-container">
          <div className="bg-card rounded-xl border overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img 
                  src="https://placehold.co/800x600/eeeeee/cccccc?text=Featured+Article+Image" 
                  alt="Featured article" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 lg:p-8">
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Featured
                </div>
                <h2 className="heading-secondary mb-3">The Changing Landscape of UPI Fraud in 2025</h2>
                <div className="flex items-center text-sm text-foreground/70 mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>May 1, 2025</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <p className="paragraph mb-6">
                  With UPI transactions reaching unprecedented volumes, fraudsters are employing increasingly sophisticated techniques. This article explores the latest fraud patterns and how advanced transaction tracking is becoming essential for financial security.
                </p>
                <Button asChild>
                  <a href="#" className="flex items-center">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="heading-secondary mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How AI is Transforming Fraud Detection in Banking",
                category: "Technology",
                date: "April 25, 2025",
                readTime: "6 min read",
                excerpt: "Artificial intelligence is revolutionizing how banks detect and prevent fraudulent transactions in real-time."
              },
              {
                title: "Case Study: Recovering ₹2.5 Crore in a Multi-State Fraud Operation",
                category: "Case Study",
                date: "April 18, 2025",
                readTime: "10 min read",
                excerpt: "How a major bank used transaction tracking to recover funds from a sophisticated fraud ring operating across five states."
              },
              {
                title: "RBI's New Fraud Prevention Guidelines: What You Need to Know",
                category: "Regulation",
                date: "April 10, 2025",
                readTime: "7 min read",
                excerpt: "Breaking down the Reserve Bank of India's latest guidelines for fraud prevention and their implications for financial institutions."
              },
              {
                title: "The Psychology of Digital Fraud: Understanding the Scammer's Mindset",
                category: "Security",
                date: "April 5, 2025",
                readTime: "9 min read",
                excerpt: "Insights into how scammers think and operate, and how this knowledge can help strengthen fraud prevention efforts."
              },
              {
                title: "5 Key Metrics Every Fraud Investigation Team Should Track",
                category: "Best Practices",
                date: "March 28, 2025",
                readTime: "5 min read",
                excerpt: "Essential performance indicators that help measure and improve the effectiveness of fraud investigation processes."
              },
              {
                title: "The Future of Financial Crime Prevention: Trends for 2026 and Beyond",
                category: "Trends",
                date: "March 20, 2025",
                readTime: "8 min read",
                excerpt: "Exploring emerging technologies and methodologies that will shape the future of financial crime prevention."
              }
            ].map((article, index) => (
              <div key={index} className="bg-card rounded-xl border overflow-hidden card-hover">
                <img 
                  src={`https://placehold.co/600x400/eeeeee/cccccc?text=Article+${index+1}`} 
                  alt={`Article ${index+1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center px-2 py-1 bg-muted text-foreground/70 rounded text-xs font-medium mb-3">
                    {article.category}
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-sm text-foreground/70 mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <h2 className="heading-secondary mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Case Studies",
              "Technology",
              "Regulation",
              "Best Practices",
              "Industry Trends",
              "Security",
              "Cybercrime",
              "Banking",
              "Fintech",
              "UPI Fraud",
              "Identity Theft",
              "Customer Stories"
            ].map((category, index) => (
              <a 
                key={index} 
                href="#"
                className="bg-background rounded-lg border p-4 text-center hover:border-primary/50 transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="section-container">
          <div className="bg-card rounded-xl border p-8 text-center max-w-3xl mx-auto">
            <h2 className="heading-secondary mb-4">Subscribe to Our Newsletter</h2>
            <p className="paragraph mb-6 max-w-xl mx-auto">
              Get the latest fraud prevention insights and updates delivered directly to your inbox. We respect your privacy and will never share your information.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <Button className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
