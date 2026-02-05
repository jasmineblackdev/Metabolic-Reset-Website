import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Activity,
  Check,
  ArrowRight,
  Phone,
  MapPin,
  Flame,
  BrainCircuit,
  Droplets,
  Dumbbell,
  Leaf,
  TestTubes,
  ChevronDown,
} from "lucide-react";

const benefits = [
  { icon: TestTubes, title: "Advanced Lab Testing", desc: "Comprehensive metabolic panel, insulin resistance markers, thyroid function, and inflammatory markers." },
  { icon: Flame, title: "Resting Metabolic Rate", desc: "Precise measurement of how many calories your body burns at rest to calibrate your nutrition plan." },
  { icon: BrainCircuit, title: "Hormonal Assessment", desc: "Full hormone panel including cortisol, testosterone, estrogen, and thyroid optimization." },
  { icon: Droplets, title: "Body Composition", desc: "DEXA-level body composition analysis tracking fat, muscle, and visceral fat changes." },
  { icon: Dumbbell, title: "Movement Programming", desc: "Customized exercise plans designed to boost metabolism without burnout." },
  { icon: Leaf, title: "Anti-Inflammatory Nutrition", desc: "Personalized meal plans targeting metabolic inflammation and gut health restoration." },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Assessment & Reset (Weeks 1–4)",
    desc: "Comprehensive lab work, metabolic testing, and body composition analysis. We identify your specific metabolic blockers and start targeted interventions to reset your body's fat-burning capacity.",
    items: ["Full metabolic blood panel", "Resting metabolic rate test", "Body composition scan", "Gut health assessment", "Custom supplement protocol"],
  },
  {
    phase: "Phase 2",
    title: "Optimization (Weeks 5–12)",
    desc: "With your baseline data, we create and refine your personalized nutrition, movement, and supplement plan. This phase focuses on restoring insulin sensitivity and reigniting your metabolism.",
    items: ["Personalized macro targets", "Anti-inflammatory meal plan", "Progressive movement program", "Stress management protocols", "Bi-weekly lab monitoring"],
  },
  {
    phase: "Phase 3",
    title: "Maintenance & Thrive (Week 13+)",
    desc: "Transition to a sustainable lifestyle plan that maintains your metabolic gains long-term. Regular monitoring ensures your metabolism stays optimized and your results stick.",
    items: ["Monthly check-ins", "Quarterly lab reviews", "Maintenance nutrition plan", "Lifestyle coaching", "Community support access"],
  },
];

const faqs = [
  { q: "What is a Metabolic Reset?", a: "A Metabolic Reset is a medically-supervised program designed to identify and correct metabolic dysfunction — the root cause of stubborn weight gain, fatigue, and chronic disease. Unlike crash diets, we fix the underlying biology so your body burns fuel efficiently again." },
  { q: "How do I know if my metabolism needs a reset?", a: "Common signs include: inability to lose weight despite diet/exercise, constant fatigue, brain fog, sugar cravings, difficulty sleeping, and carrying excess belly fat. If you've tried multiple diets without lasting results, metabolic dysfunction is likely a factor." },
  { q: "How long does the program take?", a: "The core program runs 12 weeks, with most patients seeing significant improvements in energy and body composition within the first 4 weeks. After the initial program, we transition to a maintenance phase with monthly monitoring." },
  { q: "Is this just another diet program?", a: "No. We use advanced lab work and metabolic testing to identify the specific biological factors slowing your metabolism — including insulin resistance, hormonal imbalances, chronic inflammation, and gut dysfunction. Treatment is personalized medicine, not a one-size-fits-all diet." },
  { q: "Will I need to take medications?", a: "Not necessarily. Many patients achieve excellent results through targeted nutrition, supplementation, and lifestyle changes alone. If medications would benefit your specific situation, your physician will discuss all options with you." },
  { q: "Does insurance cover the Metabolic Reset?", a: "Many of the lab tests and physician consultations are covered by insurance. We'll verify your benefits before you start and offer transparent pricing for any out-of-pocket components." },
];

function FAQ({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors">
        <span className="font-semibold text-foreground pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>}
    </div>
  );
}

export default function MetabolicReset() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-primary relative overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-semibold">12-Week Program</span>
                  <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">Matthews, NC</span>
                </div>
                <h1 className="font-display text-4xl lg:text-5xl text-primary-foreground leading-[1.1]">
                  Metabolic Reset Program
                </h1>
                <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                  Stop fighting your biology. Our science-based Metabolic Reset Program identifies and 
                  corrects the root causes of metabolic dysfunction — so your body starts working 
                  <em> with</em> you, not against you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button variant="gold" size="xl">
                    Book Free Consultation <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                  <a href="tel:9804303130" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-semibold">
                    <Phone className="w-5 h-5" /> (980) 430-3130
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
                  <h3 className="font-display text-xl text-foreground">Program Includes</h3>
                  <ul className="space-y-3">
                    {["Comprehensive metabolic lab panel", "Resting metabolic rate testing", "Body composition analysis", "Personalized nutrition plan", "Supplement protocol", "12 weeks physician oversight", "Bi-weekly progress reviews"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" size="lg" className="w-full">
                    Schedule Appointment
                  </Button>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                    <MapPin className="w-3 h-3" />
                    1122 Sam Newell Rd. St. 114, Matthews NC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">What We Test & Treat</h2>
              <p className="text-muted-foreground mt-4">A deep dive into your metabolism to uncover what's really holding you back.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Phases */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">The 3-Phase Protocol</h2>
              <p className="text-muted-foreground mt-4">A structured approach that takes you from metabolic dysfunction to optimized health.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {phases.map((p, i) => (
                <motion.div key={p.phase} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card rounded-2xl border border-border p-6 lg:p-8 grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">{p.phase}</span>
                    <h3 className="font-display text-xl text-foreground mt-1 mb-3">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => <FAQ key={i} faq={faq} />)}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
