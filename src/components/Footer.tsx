import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">JalSentinel</h3>
            <p className="text-sm text-secondary-foreground/80">
              AI-powered Smart Water & Health Monitoring System
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm">
          <p>&copy; 2025 JalSentinel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
