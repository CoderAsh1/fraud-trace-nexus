
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "How does the Transaction Tracking System work?",
    answer: "Our system traces financial transactions across multiple bank accounts and payment channels in real-time. When you input a UPI ID or transaction reference, the system fetches all related transactions and visualizes them in an interactive graph, highlighting suspicious patterns and high-risk accounts."
  },
  {
    question: "Can this integrate with our existing bank systems?",
    answer: "Yes, we offer secure API integration with all major banking systems and UPI platforms in India. Our team will work with your technical department to establish a secure connection that meets all regulatory requirements and bank-grade security standards."
  },
  {
    question: "How much time does it take to trace a complex fraud chain?",
    answer: "What traditionally takes days of manual investigation can be completed in minutes with our system. For most cases, complete transaction mapping happens in under 5 minutes, even for complex chains involving multiple hops and splitting of funds."
  },
  {
    question: "Does the system comply with RBI regulations and data protection laws?",
    answer: "Absolutely. Our system is fully compliant with RBI guidelines, IT Act provisions, and GDPR. We implement end-to-end encryption, secure access controls, and maintain comprehensive audit logs to ensure regulatory compliance and data protection."
  },
  {
    question: "Can we request account freezing directly through your platform?",
    answer: "Yes, our platform includes an integrated freeze request system that can generate the necessary documentation for banks and law enforcement. This streamlines the process for quick action to prevent further movement of fraudulent funds."
  },
  {
    question: "What kind of support do you provide during implementation?",
    answer: "We provide comprehensive support including dedicated implementation managers, technical integration assistance, staff training, and 24/7 technical support. Our team will ensure smooth deployment and operation of the system within your organization."
  },
];

export default function FaqSection() {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-primary mb-4">Frequently Asked Questions</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Get answers to common questions about our Transaction Tracking System
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
