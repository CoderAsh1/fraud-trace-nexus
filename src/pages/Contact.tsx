
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">Contact Us</h1>
            <p className="paragraph text-lg">
              Request a demo or get in touch with our team to learn more about our Transaction Tracking System
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <div className="mb-8">
                <h2 className="heading-secondary mb-4">Request a Demo</h2>
                <p className="paragraph">
                  Fill out the form below and our team will get back to you within 24 hours to schedule a personalized demo of our Transaction Tracking System.
                </p>
              </div>
              <ContactForm />
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-card rounded-xl shadow-lg border p-6">
                <h2 className="heading-secondary text-xl mb-4">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Head Office</h3>
                    <p className="text-foreground/70">
                      Transaction Tracking System<br />
                      123 Tech Park, Koramangala<br />
                      Bengaluru, Karnataka 560034<br />
                      India
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Contact Details</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone size={18} className="mr-2 text-primary" />
                        <a href="tel:+919876543210" className="text-foreground/70 hover:text-primary">
                          +91 98765 43210
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail size={18} className="mr-2 text-primary" />
                        <a href="mailto:info@transactiontracking.in" className="text-foreground/70 hover:text-primary break-all">
                          info@transactiontracking.in
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Business Hours</h3>
                    <p className="text-foreground/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-medium mb-2">For Investors</h3>
                    <p className="text-foreground/70 mb-3">
                      Interested in investment opportunities? Download our investor brief or schedule a meeting with our team.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/investors">Investor Information</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Quick answers to common questions about our demonstration process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical demo take?",
                  answer: "Our standard demo takes approximately 45-60 minutes, including time for questions and discussion of your specific requirements."
                },
                {
                  question: "Who should attend the demo from our organization?",
                  answer: "We recommend including representatives from your fraud investigation team, cybersecurity department, and IT team to get the most out of the demo."
                },
                {
                  question: "Is the demo customized for our organization?",
                  answer: "Yes, we tailor each demo to address the specific challenges and requirements of your organization based on the information you provide in the contact form."
                },
                {
                  question: "What happens after the demo?",
                  answer: "After the demo, our team will provide you with a comprehensive proposal including pricing, implementation timeline, and a roadmap for integration with your existing systems."
                },
                {
                  question: "Can we test the system with our own data during the demo?",
                  answer: "For initial demos, we use anonymized sample data. However, we can arrange a proof of concept with your actual data after signing a confidentiality agreement."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-background border rounded-lg p-6">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
