
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="section-container pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/5e513728-25ce-429e-a69a-b49de5593ee2.png" 
                alt="Transaction Tracking System" 
                className="h-12 mb-4" 
              />
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              Making India's digital economy safer with cutting-edge transaction tracing technology.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-foreground/70 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-foreground/70 hover:text-primary transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-foreground/70 hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-foreground/70 hover:text-primary transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-foreground/70">
                  Transaction Tracking System<br />
                  123 Tech Park, Bengaluru<br />
                  Karnataka, India 560001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+919876543210" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:info@transactiontracking.in" className="text-foreground/70 hover:text-primary transition-colors break-all">
                  info@transactiontracking.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Transaction Tracking System. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            Backed by <span className="text-primary">Startup India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
