import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Scale,
  Check,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  Users,
  Pill,
  Utensils,
  Activity,
  HeartPulse,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: ShieldCheck, title: "Board-Certified Physicians", desc: "Expert medical oversight for safe, effective results" },
  { icon: Pill, title: "FDA-Approved Medications", desc: "Including GLP-1 agonists like Semaglutide and Tirzepatide" },
  { icon: Activity, title: "Metabolic Testing", desc: "Advanced lab work to understand your unique metabolism" },
  { icon: Utensils, title: "Nutrition Planning", desc: "Custom meal plans from registered dietitians" },
  { icon: Users, title: "Dedicated Care Team", desc: "Physician, nutritionist, and health coach support" },
  { icon: HeartPulse, title: "Health Monitoring", desc: "Regular check-ins and plan adjustments" },
];

const journey = [
  { step: "1", title: "Initial Consultation", desc: "Free 30-minute meeting to discuss your goals and medical history." },
  { step: "2", title: "Comprehensive Labs", desc: "Metabolic panel, thyroid function, hormone levels, and body composition." },
  { step: "3", title: "Custom Treatment Plan", desc: "Your physician designs a personalized medication and nutrition protocol." },
  { step: "4", title: "Weekly Check-ins", desc: "Regular appointments to track progress and adjust your plan." },
  { step: "5", title: "Long-term Maintenance", desc: "Transition to a sustainable plan that keeps the weight off for good." },
];

const medications = [
  "Semaglutide (Wegovy/Ozempic)",
  "Tirzepatide (Mounjaro/Zepbound)",
  "Phentermine",
  "Metformin",
  "Topiramate",
  "Custom compounded formulations",
];

const faqs = [
  {
    q: "How much weight can I expect to lose?",
    a: "Most patients lose 15-20% of their body weight within 6-12 months. Results vary based on starting weight, medication response, and adherence to the program. Our average patient loses 25-50 pounds.",
  },
  {
    q: "Is medical weight loss safe?",
    a: "Yes. All treatments are FDA-approved and prescribed by board-certified physicians after thorough medical evaluation. We monitor your health throughout the entire program with regular lab work and check-ins.",
  },
  {
    q: "Does insurance cover medical weight loss?",
    a: "Many insurance plans cover medical weight loss consultations and some medications. Our team helps verify your benefits and offers affordable self-pay options. We also offer financing plans.",
  },
  {
    q: "How is this different from dieting on my own?",
    a: "Medical weight loss addresses the biological factors that make weight loss difficult — hormones, metabolism, and appetite regulation. With physician guidance and FDA-approved medications, you're working with your body instead of against it.",
  },
  {
    q: "Do I need to exercise?",
    a: "While exercise is beneficial, our program doesn't require intense workouts. We focus on sustainable movement that fits your lifestyle and gradually increase activity as you progress.",
  },
  {
    q: "What happens after I reach my goal weight?",
    a: "We create a maintenance plan to help you keep the weight off long-term. This includes ongoing monitoring, nutritional guidance, and medication adjustments as needed.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most patients notice changes within the first 2-4 weeks. Significant weight loss typically begins within the first month, with steady progress over the following months.",
  },
];

function FAQ({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function MedicalWeightLoss() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-primary relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-semibold">87% Success Rate</span>
                  <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">Matthews, NC</span>
                </div>
                <h1 className="font-display text-4xl lg:text-5xl text-primary-foreground leading-[1.1]">
                  Medical Weight Loss in Matthews, NC
                </h1>
                <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                  Physician-supervised weight loss programs using FDA-approved medications. 
                  Our patients lose an average of 25–50 pounds with personalized treatment plans 
                  tailored to their unique metabolism.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button variant="gold" size="xl">
                    Book Free Consultation <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                  <a href="tel:7049990001" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-semibold">
                    <Phone className="w-5 h-5" /> (704) 999-0001
                  </a>
                </div>
              </div>

              {/* Sidebar CTA card */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
                  <h3 className="font-display text-xl text-foreground">What's Included</h3>
                  <ul className="space-y-3">
                    {["Free initial consultation", "Comprehensive metabolic testing", "FDA-approved medications", "Nutrition plan from RD", "Weekly physician check-ins", "Body composition tracking"].map((item) => (
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
                    123 Medical Center Dr, Matthews NC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">
                What Makes Our Program Different
              </h2>
              <p className="text-muted-foreground mt-4">
                A comprehensive, medically-supervised approach that addresses the root causes of weight gain.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Journey */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">What to Expect</h2>
              <p className="text-muted-foreground mt-4">Your step-by-step path to lasting weight loss.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {journey.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.step}
                  </div>
                  <div className="pb-6 border-b border-border flex-1">
                    <h3 className="font-display text-lg text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Medications */}
        <section className="py-20 bg-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl text-foreground">
                  FDA-Approved Medications We Offer
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We prescribe the latest evidence-based medications for weight loss, including the 
                  newest GLP-1 receptor agonists that have shown remarkable results in clinical trials.
                </p>
                <ul className="mt-6 space-y-3">
                  {medications.map((m) => (
                    <li key={m} className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-2xl text-foreground">Expected Results</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">25–50</div>
                    <div className="text-xs text-muted-foreground mt-1">Average lbs lost</div>
                  </div>
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">87%</div>
                    <div className="text-xs text-muted-foreground mt-1">Success rate</div>
                  </div>
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">2–4</div>
                    <div className="text-xs text-muted-foreground mt-1">Weeks to first results</div>
                  </div>
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">6–12</div>
                    <div className="text-xs text-muted-foreground mt-1">Months full program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4">
                Get answers to common questions about our medical weight loss program.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <FAQ key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
