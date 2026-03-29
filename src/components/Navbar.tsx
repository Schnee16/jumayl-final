import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "glass shadow-card" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl font-bold text-gradient">
          Jumayl El Arsy Modi
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[#204030] dark:text-[#d0e0c0] hover:text-gradient transition-colors">
              {item}
            </a>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass py-4 flex flex-col gap-4 px-4">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[#204030] dark:text-[#d0e0c0] hover:text-gradient">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}