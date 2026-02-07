import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Check,
  ArrowRight,
  Phone,
  MapPin,
  Syringe,
  Pill,
  Stethoscope,
  Activity,
  Apple,
  Brain,
  ChevronDown,
} from "lucide-react";

const conditions = [
  { icon: HeartPulse, title: "Type 2 Diabetes", desc: "Blood sugar management, A1C reduction, and medication optimization with a focus on reversing insulin resistance through lifestyle and pharmacotherapy." },
  { icon: Activity, title: "Hypertension", desc: "Comprehensive blood pressure management through medication optimization, dietary strategies (DASH protocol), stress reduction, and weight management." },
  { icon: Pill, title: "High Cholesterol", desc: "Lipid management combining statins when needed with therapeutic lifestyle changes, dietary intervention, and regular cardiovascular risk monitoring." },
  { icon: Brain, title: "Metabolic Syndrome", desc: "Integrated treatment addressing the cluster of conditions — insulin resistance, abdominal obesity, high blood pressure, and abnormal lipid levels." },
  { icon: Syringe, title: "Pre-Diabetes", desc: "Early intervention to prevent progression to Type 2 diabetes through metabolic optimization, GLP-1 therapy when appropriate, and structured lifestyle changes." },
  { icon: Apple, title: "Obesity-Related Conditions", desc: "Treating the downstream effects of obesity including sleep apnea, joint pain, fatty liver disease, and PCOS with a root-cause approach." },
];

const approach = [
  { step: "1", title: "Comprehensive Evaluation", desc: "Full metabolic workup, cardiovascular risk assessment, and thorough review of your medical history and current medications." },
  { step: "2", title: "Root Cause Analysis", desc: "We don't just treat symptoms — we identify the metabolic drivers behind your chronic conditions using advanced lab markers." },
  { step: "3", title: "Integrated Treatment Plan", desc: "Combining evidence-based medication management with nutrition therapy, lifestyle modification, and weight optimization." },
  { step: "4", title: "Medication Optimization", desc: "Regular review and adjustment of medications to maximize effectiveness while minimizing side effects and unnecessary prescriptions." },
  { step: "5", title: "Ongoing Monitoring", desc: "Regular lab work, quarterly reviews, and proactive adjustments to keep your conditions well-managed long-term." },
];

const faqs = [
  { q: "Can chronic diseases actually be reversed?", a: "Many chronic conditions, especially Type 2 diabetes, pre-diabetes, and metabolic syndrome, can be significantly improved or put into remission through proper medical management combined with lifestyle changes. Our approach focuses on addressing root causes like insulin resistance and inflammation, which can lead to dramatic improvements and medication reduction." },
  { q: "Will I be able to reduce my medications?", a: "Many patients are able to reduce or eliminate certain medications over time as their metabolic health improves. However, this is always done gradually under careful physician supervision. We never recommend stopping medications without medical guidance." },
  { q: "How is this different from my regular doctor?", a: "We specialize in the connection between metabolic health and chronic disease. While your primary care doctor manages many conditions, we go deeper into the metabolic root causes, spending more time on nutrition, lifestyle optimization, and advanced testing that most primary care settings can't offer." },
  { q: "Do you coordinate with my other doctors?", a: "Absolutely. We work collaboratively with your primary care physician, cardiologist, endocrinologist, and any other specialists. We provide detailed reports and communicate regularly to ensure coordinated care." },
  { q: "What if I have multiple chronic conditions?", a: "That's actually very common — conditions like diabetes, hypertension, and high cholesterol often occur together as part of metabolic syndrome. Our integrated approach is specifically designed to address these interconnected conditions simultaneously." },
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

export default function ChronicDisease() {
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
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-semibold">Evidence-Based Care</span>
                  <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">Matthews, NC</span>
                </div>
                <h1 className="font-display text-4xl lg:text-5xl text-primary-foreground leading-[1.1]">
                  Chronic Disease Management
                </h1>
                <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                  Integrated, physician-led management of diabetes, hypertension, high cholesterol, 
                  and metabolic syndrome. We treat the root causes — not just the symptoms — for 
                  better outcomes and fewer medications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link to="/contact">
                    <Button variant="gold" size="xl">
                      Book Free Consultation <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Link>
                  <a href="tel:9804303130" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-semibold">
                    <Phone className="w-5 h-5" /> (980) 430-3130
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
                  <h3 className="font-display text-xl text-foreground">Our Approach Includes</h3>
                  <ul className="space-y-3">
                    {["Advanced metabolic lab testing", "Medication review & optimization", "Nutritional therapy", "Weight management support", "Regular progress monitoring", "Care team coordination", "Patient education & coaching"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"><Button variant="default" size="lg" className="w-full">Schedule Appointment</Button></Link>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                    <MapPin className="w-3 h-3" /> 1122 Sam Newell Rd. St. 114, Matthews NC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-20 bg-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Conditions We Manage</h2>
              <p className="text-muted-foreground mt-4">Specialized care for the most common chronic conditions linked to metabolic health.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Our Treatment Approach</h2>
              <p className="text-muted-foreground mt-4">A methodical, patient-centered process for managing and improving chronic conditions.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {approach.map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm">{s.step}</div>
                  <div className="pb-6 border-b border-border flex-1">
                    <h3 className="font-display text-lg text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl text-foreground">Patient Outcomes</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Our integrated approach to chronic disease management delivers measurable improvements 
                  in key health markers, helping patients reduce medications and improve quality of life.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Average A1C reduction of 1.5–2.0 points",
                    "70% of diabetic patients reduce medications",
                    "Average blood pressure improvement of 15/10 mmHg",
                    "Significant cholesterol improvement in 80% of patients",
                    "Average weight loss of 20+ lbs in co-managed patients",
                  ].map((r) => (
                    <li key={r} className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-2xl text-foreground">By the Numbers</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">70%</div>
                    <div className="text-xs text-muted-foreground mt-1">Reduce medications</div>
                  </div>
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">1.8</div>
                    <div className="text-xs text-muted-foreground mt-1">Avg A1C reduction</div>
                  </div>
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">92%</div>
                    <div className="text-xs text-muted-foreground mt-1">Patient satisfaction</div>
                  </div>
                  <div className="bg-accent rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground mt-1">Patients managed</div>
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
