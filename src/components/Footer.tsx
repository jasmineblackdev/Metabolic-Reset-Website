import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const serviceLinks = [
  { label: "Medical Weight Loss", href: "/medical-weight-loss-matthews-nc" },
  { label: "Metabolic Reset Program", href: "/metabolic-reset-program" },
  { label: "Chronic Disease Management", href: "/chronic-disease-management" },
  { label: "Primary Care", href: "/" },
  { label: "Hormone Optimization", href: "/" },
  { label: "Nutrition Counseling", href: "/" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Providers", href: "/about" },
  { label: "Patient Portal", href: "/" },
  { label: "Insurance & Pricing", href: "/" },
  { label: "Blog", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-display text-lg">M</span>
              </div>
              <div>
                <span className="font-display text-lg leading-tight block">Metabolic Reset</span>
                <span className="text-xs opacity-70 tracking-wide">CLINIC</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Science-backed medical weight loss and metabolic health solutions in Matthews, NC. 
              Your journey to lasting health starts here.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Medical Center Dr,<br />Matthews, NC 28105</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:7049990001" className="hover:opacity-100">(704) 999-0001</a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@metabolicreset.com" className="hover:opacity-100">info@metabolicreset.com</a>
              </li>
              <li className="flex items-start gap-2 opacity-80">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Mon–Fri: 8am–5pm<br />Sat: 9am–1pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Metabolic Reset Clinic. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Terms of Service</a>
            <a href="#" className="hover:opacity-100">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
