import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Activity,
  HeartPulse,
  Stethoscope,
  Leaf,
  ClipboardCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Scale,
    title: "Weight Loss Programs",
    short: "Medically guided plans combining nutrition, behavior, and lifestyle changes for safe, sustainable weight loss.",
    long: "Healthy weight loss is about transformation, not restriction. Our medically supervised programs use evidence-based approaches including FDA-approved medications, personalized nutrition plans, and behavioral coaching. We address obesity as the root cause of many chronic health conditions, helping you achieve lasting results.",
    href: "/medical-weight-loss-matthews-nc",
  },
  {
    icon: Activity,
    title: "Metabolic Reset",
    short: "Reboot your metabolism with our science-based reset protocol rooted in functional medicine.",
    long: "Our Metabolic Reset Program targets the root causes of metabolic dysfunction. Through advanced lab work, personalized nutrition plans, natural supplements, and targeted interventions, we help your body regain its natural ability to burn fuel efficiently and maintain energy throughout the day.",
    href: "/metabolic-reset-program",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    short: "Personalized care focused on controlling symptoms, improving health, and preventing complications.",
    long: "Managing chronic conditions requires more than medication — it calls for personalized, compassionate care. We take a holistic approach to managing diabetes, hypertension, thyroid disorders, metabolic syndrome, and high cholesterol, addressing underlying root causes through integrative functional medicine.",
    href: "/chronic-disease-management",
  },
  {
    icon: Stethoscope,
    title: "Primary Care Services",
    short: "Comprehensive healthcare focused on prevention, diagnosis, and treatment, supporting lifelong wellness.",
    long: "Primary care serves as the cornerstone of lifelong health management. Our clinic provides annual physicals, preventive screenings, acute illness management, wellness visits, and referral coordination — all with the compassionate, whole-person approach that defines our practice.",
    href: "/#services",
  },
  {
    icon: Leaf,
    title: "Integrative Functional Medicine",
    short: "Healing begins with understanding the whole person through a holistic, science-based approach.",
    long: "We address root causes of chronic conditions through integrative functional medicine that restores balance and promotes long-term health. By combining clinical knowledge with natural supplements, clean eating habits, and lifestyle modifications, we help patients achieve true healing of body, mind, and spirit.",
    href: "/#services",
  },
  {
    icon: ClipboardCheck,
    title: "Physical Exams & Wellness",
    short: "Routine physical exams and wellness visits forming the foundation of preventive healthcare.",
    long: "Wellness visits are designed to keep patients healthy, not just treat illness. Our comprehensive physical exams include full health assessments, lab work, and personalized prevention strategies. We also offer convenient telemedicine appointments through our secure platform for follow-ups and consultations.",
    href: "/#services",
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
