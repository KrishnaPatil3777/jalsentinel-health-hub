import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import logo from "@/assets/logo-placeholder.png";
import NotificationBell from "./NotificationBell";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Session } from "@supabase/supabase-js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="JalSentinel Logo" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">JalSentinel</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group">
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/features" className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group">
              <span>Features</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/dashboard" className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group">
              <span>Dashboard</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/water-testing" className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group">
              <span>Water Testing</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-110 group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact">
              <Button variant="default" className="hover:scale-110 transition-transform duration-300 hover:shadow-xl">Contact Us</Button>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <NotificationBell />
            {session ? (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="hover:scale-105 transition-transform"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="/auth">
                <Button 
                  variant="default" 
                  size="sm"
                  className="hover:scale-105 transition-transform"
                >
                  Login / Sign Up
                </Button>
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/dashboard"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/water-testing"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Water Testing
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full">
                Contact Us
              </Button>
            </Link>
            {session ? (
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full">
                  Login / Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
