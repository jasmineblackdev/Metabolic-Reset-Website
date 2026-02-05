import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  Apple,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Scale,
    title: "Medical Weight Loss",
    short: "FDA-approved medications and physician-supervised programs tailored to your body.",
    long: "Our comprehensive medical weight loss program combines prescription medications, metabolic testing, nutritional guidance, and ongoing physician support to help you achieve sustainable weight loss. We use GLP-1 agonists, appetite suppressants, and custom protocols based on your unique metabolic profile.",
    href: "/medical-weight-loss-matthews-nc",
  },
  {
    icon: Activity,
    title: "Metabolic Reset",
    short: "Reboot your metabolism with our science-based reset protocol.",
    long: "Our Metabolic Reset Program targets the root causes of metabolic dysfunction. Through advanced lab work, personalized nutrition plans, and targeted supplementation, we help your body regain its natural ability to burn fat and maintain energy throughout the day.",
    href: "/metabolic-reset-program",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    short: "Integrated care for diabetes, hypertension, and metabolic syndrome.",
    long: "We take a holistic approach to managing chronic conditions like Type 2 diabetes, hypertension, and high cholesterol. Our team creates personalized treatment plans that address underlying metabolic issues, not just symptoms, helping you reduce medications over time.",
    href: "/chronic-disease-management",
  },
  {
    icon: Stethoscope,
    title: "Primary Care",
    short: "Comprehensive primary care with a focus on preventive wellness.",
    long: "Receive thorough primary care from physicians who understand the connection between metabolic health and overall wellness. Annual physicals, preventive screenings, acute illness management, and referral coordination — all under one roof.",
    href: "/",
  },
  {
    icon: Zap,
    title: "Hormone Optimization",
    short: "Restore hormonal balance for better energy, mood, and weight management.",
    long: "Hormonal imbalances can sabotage your weight loss and wellness goals. Our hormone optimization program includes comprehensive hormone panels, bioidentical hormone therapy, thyroid optimization, and ongoing monitoring to help you feel your best.",
    href: "/",
  },
  {
    icon: Apple,
    title: "Nutrition Counseling",
    short: "Evidence-based nutrition plans designed for your lifestyle and goals.",
    long: "Work one-on-one with our registered dietitians to build sustainable eating habits. We create personalized meal plans using metabolic data, address food sensitivities, and provide accountability coaching to ensure long-term success.",
    href: "/",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group bg-card rounded-2xl border border-border p-6 hover:shadow-soft transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
        <service.icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.short}</p>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border">
              {service.long}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors"
        >
          {open ? "Show Less" : "Read More"}
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        <Link to={service.href}>
          <Button variant="ghost" size="sm" className="text-primary">
            Learn More <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-2">
            Comprehensive Care for Lasting Results
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            From medical weight loss to metabolic health optimization, we offer a full spectrum
            of evidence-based treatments tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
