import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const serviceLinks = [
  { label: "Weight Loss Programs", href: "/medical-weight-loss-matthews-nc" },
  { label: "Metabolic Reset Program", href: "/metabolic-reset-program" },
  { label: "Chronic Disease Management", href: "/chronic-disease-management" },
  { label: "Primary Care Services", href: "/#services" },
  { label: "Integrative Functional Medicine", href: "/#services" },
  { label: "Wellness & Sick Visits", href: "/#services" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Providers", href: "/about" },
  { label: "Dispensary", href: "https://metabolicresetclinic.com/dispensary" },
  { label: "Telemedicine", href: "https://doxy.me/glawson" },
  { label: "Blog", href: "https://metabolicresetclinic.com/blog" },
  { label: "Contact", href: "/contact" },
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
                <span className="text-xs opacity-70 tracking-wide">CLINIC, LLC</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Compassionate, whole-person healthcare designed to restore balance and vitality. 
              Faith-based care with over 30 years of medical experience in Matthews, NC.
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
                  {l.href.startsWith("http") ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {l.label}
                    </Link>
                  )}
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
                <span>1122 Sam Newell Rd. St. 114,<br />Matthews, NC 28105</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:9804303130" className="hover:opacity-100">(980) 430-3130</a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:contact@metabolicresetclinic.com" className="hover:opacity-100">contact@metabolicresetclinic.com</a>
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
          <span>© {new Date().getFullYear()} Metabolic Reset Clinic, LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="https://metabolicresetclinic.com/merchant-policies" className="hover:opacity-100">Merchant Policies</a>
            <a href="https://metabolicresetclinic.com/legal-notice" className="hover:opacity-100">Legal Notice</a>
            <a href="#" className="hover:opacity-100">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
