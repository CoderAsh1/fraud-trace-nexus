
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Faq() {
  const faqGroups = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is Transaction Tracking System?",
          answer: "Transaction Tracking System is a specialized platform that helps banks and cybercrime teams trace fraudulent transactions across multiple accounts and payment systems. Our system visualizes transaction flows, identifies high-risk accounts, and streamlines the process of recovering stolen funds."
        },
        {
          question: "How does your system work?",
          answer: "Our system connects to secure banking APIs to trace the flow of money from one transaction ID. When you input a UPI ID or transaction reference, the system fetches all related transactions and visualizes them in an interactive graph, highlighting suspicious patterns and high-risk accounts."
        },
        {
          question: "Is the system compatible with all Indian banks?",
          answer: "Yes, our Transaction Tracking System is designed to work with all banks operating in India, including public, private, and foreign banks. We support all major payment systems including UPI, IMPS, NEFT, and RTGS."
        },
        {
          question: "How quickly can your system trace transactions?",
          answer: "Most transaction traces are completed within minutes, even for complex cases involving multiple hops and splitting of funds. What traditionally takes days of manual investigation can be completed in a fraction of the time with our system."
        }
      ]
    },
    {
      title: "Technical & Security",
      questions: [
        {
          question: "Is the system secure? How do you protect sensitive financial data?",
          answer: "Security is our top priority. We implement bank-grade security measures including end-to-end encryption, secure API integrations, and comprehensive access controls. All data is encrypted both in transit and at rest, and we maintain detailed audit logs of all system activities."
        },
        {
          question: "Does your system comply with RBI regulations?",
          answer: "Yes, our Transaction Tracking System is fully compliant with all relevant RBI regulations, including the guidelines for digital payment security controls. We also adhere to the IT Act provisions and implement GDPR-compliant data protection measures."
        },
        {
          question: "What kind of infrastructure is required to implement your system?",
          answer: "Our system is cloud-based and requires minimal infrastructure on the client side. It can be accessed through any modern web browser, and we provide secure API endpoints for integration with your existing systems if needed."
        },
        {
          question: "Can the system be integrated with our existing fraud management tools?",
          answer: "Yes, our Transaction Tracking System is designed with open APIs that allow seamless integration with your existing fraud management systems, case management tools, and banking infrastructure."
        }
      ]
    },
    {
      title: "Implementation & Support",
      questions: [
        {
          question: "How long does it take to implement your system?",
          answer: "Our typical implementation timeline is 2-4 weeks, depending on the complexity of your existing infrastructure and integration requirements. We provide comprehensive support throughout the implementation process to ensure a smooth deployment."
        },
        {
          question: "What kind of training do you provide for our team?",
          answer: "We provide comprehensive training for all users, including hands-on sessions, detailed documentation, and video tutorials. Our training is tailored to different user roles, from investigators to administrators. We also offer refresher training and advanced workshops as needed."
        },
        {
          question: "What kind of ongoing support do you provide?",
          answer: "We offer 24/7 technical support via phone, email, and chat. Our support team includes both technical experts and domain specialists who can assist with both system-related issues and fraud investigation techniques."
        },
        {
          question: "Is there a limit on the number of users who can access the system?",
          answer: "Our licensing model allows for flexible user management. Enterprise plans typically include unlimited users, while standard plans may have user limits based on your specific agreement. You can easily add or remove users as your requirements change."
        }
      ]
    },
    {
      title: "Features & Capabilities",
      questions: [
        {
          question: "Can your system detect mule accounts and money laundering patterns?",
          answer: "Yes, our system uses advanced analytics to identify potential mule accounts and money laundering patterns. It flags suspicious transaction behaviors like rapid transfers, structured transactions, and known high-risk entities."
        },
        {
          question: "How does the risk scoring feature work?",
          answer: "Our risk scoring system evaluates each account in the transaction chain based on multiple factors including transaction history, account age, transaction patterns, and known risk indicators. Accounts are assigned risk levels of low, medium, or high to help investigators prioritize their focus."
        },
        {
          question: "Can we export the transaction data and visualizations for reporting?",
          answer: "Yes, you can export all transaction data, visualizations, and reports in multiple formats including PDF, CSV, and PNG. These exports are designed to be court-admissible and compliant with legal evidence requirements."
        },
        {
          question: "How does the freeze request feature work?",
          answer: "The freeze request feature generates standardized documentation for account freezing requests that can be submitted to respective banks or law enforcement agencies. The system pre-fills all necessary information based on the investigation data to streamline the process."
        }
      ]
    },
    {
      title: "Pricing & Licensing",
      questions: [
        {
          question: "How is your system priced?",
          answer: "Our pricing is based on a subscription model with different tiers designed for various organization sizes and needs. We offer flexible plans for banks, law enforcement agencies, and financial institutions. Contact our sales team for a customized quote based on your specific requirements."
        },
        {
          question: "Do you offer special pricing for government agencies and police departments?",
          answer: "Yes, we offer special pricing and licensing terms for government agencies, cybercrime units, and police departments. We understand the budgetary constraints of public institutions and offer tailored solutions to meet their needs."
        },
        {
          question: "Is there a trial period available?",
          answer: "Yes, we offer a 30-day pilot program that allows you to evaluate the system with your actual data and use cases. During this period, our team works closely with you to ensure the system meets your specific requirements."
        },
        {
          question: "What is included in the implementation fee?",
          answer: "The implementation fee covers system configuration, integration with your existing infrastructure, data migration if needed, comprehensive training for all users, and dedicated support during the initial deployment phase."
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary mb-6">Frequently Asked Questions</h1>
            <p className="paragraph text-lg">
              Find answers to common questions about Transaction Tracking System
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {faqGroups.map((group, index) => (
              <a 
                key={index} 
                href={`#${group.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-background rounded-full border hover:border-primary/50 transition-colors text-sm font-medium"
              >
                {group.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {faqGroups.map((group, groupIndex) => (
              <div 
                key={groupIndex} 
                id={group.title.toLowerCase().replace(/\s+/g, '-')} 
                className="mb-12"
              >
                <h2 className="heading-secondary mb-6">{group.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {group.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${groupIndex}-${faqIndex}`} className="border-b border-border">
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
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-secondary mb-4">Still Have Questions?</h2>
            <p className="paragraph mb-8">
              If you couldn't find the answer to your question, please feel free to contact our support team directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:support@transactiontracking.in">Email Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
