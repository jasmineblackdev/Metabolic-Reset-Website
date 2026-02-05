import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Award, Users, Heart, BookOpen, Leaf, Shield } from "lucide-react";

const providers = [
  {
    name: "Gretchen Lawson, AGNP-C",
    role: "Nurse Practitioner / Provider",
    initials: "GL",
    specialties: ["Adult-Gerontology Primary Care", "Obesity Medicine", "Integrative Functional Medicine", "Chronic Disease Management"],
    years: "30+ years experience",
    bio: "Gretchen Lawson is a seasoned and dedicated board-certified Adult-Gerontology Primary Care Nurse Practitioner with over 30 years in the healthcare industry. She has consistently demonstrated a commitment to enhancing the health and well-being of individuals through comprehensive and compassionate care. Throughout her professional journey, she has developed a passion for helping underprivileged people in our communities build healthier lifestyles. Gretchen's focus includes identifying the root cause of chronic health conditions — understanding that obesity and silent inflammation are at the core of conditions like diabetes, metabolic syndrome, hypertension, and high cholesterol. She integrates evidence-based practices with natural supplements, providing personalized strategies for weight loss and sustainable healthy living. She is also the author of \"Healing by Nature,\" a faith-based functional medicine guide.",
  },
  {
    name: "Ronald Lawson, RN",
    role: "Registered Nurse",
    initials: "RL",
    specialties: ["Patient Care", "Leadership", "Clinical Support", "Veteran Healthcare"],
    years: "27+ years of service",
    bio: "Ronald Lawson is a retired Army Major with 27 years of honorable military service, now continuing a lifelong mission to help others through nursing. He brings exceptional leadership, discipline, and compassion to patient care, ensuring every individual receives attentive, respectful, and effective support in their journey to better health. His military background instills a unique dedication to service and precision in clinical care.",
  },
];

const values = [
  { icon: Heart, title: "Faith-Based, Whole-Person Care", desc: "Blending faith-centered values with modern medical science to nurture body, mind, and spirit — inspiring healing that goes beyond physical symptoms." },
  { icon: Leaf, title: "Integrative Functional Medicine", desc: "Addressing root causes of chronic conditions through a holistic, science-based approach that restores balance and promotes long-term health and vitality." },
  { icon: BookOpen, title: "Education & Empowerment", desc: "We believe in empowering patients to take active roles in their healing through education, evidence-based guidance, and personalized treatment strategies." },
  { icon: Shield, title: "Compassion & Integrity", desc: "Built on over three decades of experience, our practice is guided by compassion, integrity, and a deep commitment to purposeful, whole-person care." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl lg:text-5xl text-primary-foreground"
            >
              Healing With Purpose Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80 mt-4 leading-relaxed"
            >
              A faith-driven approach built on compassion, integrity, and over three decades 
              of care. Led by experienced healthcare professionals dedicated to guiding patients 
              toward better health through education, empathy, and evidence-based treatment.
            </motion.p>
          </div>
        </section>

        {/* About description */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-foreground mb-4">Holistic Healthcare in Matthews</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Metabolic Reset Clinic in Matthews, NC, we provide comprehensive primary care and medically 
                  managed weight loss services designed to restore balance and vitality. Patients receive attentive 
                  support for diabetes, thyroid disorders, obesity, and more. Our practice was founded on the 
                  belief that true healing requires addressing the whole person — body, mind, and spirit.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl text-foreground mb-4">A Journey Built on Experience and Purpose</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Led by a primary care nurse practitioner with over 30 years of experience, this practice 
                  was founded on compassion, integrity, and faith-driven care. The mission reflects a lifelong 
                  dedication to guiding patients toward better health through education, empathy, and evidence-based 
                  treatment.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl text-foreground mb-4">Empowering Whole-Person Wellness</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our philosophy centers on viewing health as a balance of body, mind, and spirit. By combining 
                  integrative functional medicine with personalized guidance, patients are encouraged to take active 
                  roles in their healing. Each success story reflects the transformative power of individualized, 
                  purpose-filled care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-warm py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-card rounded-2xl shadow-soft border border-border p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">AGNP-C</div>
                <div className="text-sm text-muted-foreground">Board Certified</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5.0★</div>
                <div className="text-sm text-muted-foreground">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Faith</div>
                <div className="text-sm text-muted-foreground">Driven Care</div>
              </div>
            </div>
          </div>
        </div>

        {/* Providers */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Guided by Compassionate Experts</h2>
              <p className="text-muted-foreground mt-4">Meet the dedicated healthcare professionals behind Metabolic Reset Clinic.</p>
            </div>
            <div className="space-y-10 max-w-4xl mx-auto">
              {providers.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 lg:p-8 grid lg:grid-cols-4 gap-6"
                >
                  <div className="flex flex-col items-center lg:items-start gap-3">
                    <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground text-2xl font-display">
                      {p.initials}
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="font-display text-lg text-foreground">{p.name}</h3>
                      <div className="text-sm text-primary font-semibold">{p.role}</div>
                      <div className="text-xs text-muted-foreground mt-1">{p.years}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.specialties.map((s) => (
                        <span key={s} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Book callout */}
        <section className="py-16 bg-warm">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">By Gretchen Lawson, AGNP-C</span>
                <h3 className="font-display text-2xl text-foreground mt-2 mb-3">
                  Healing by Nature: Natural Remedies for Chronic Medical Conditions
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A faith-based functional medicine guide that empowers readers to restore health naturally 
                  through biblical wisdom, herbal remedies, nutrition, and lifestyle balance — offering 
                  practical tools to address chronic conditions like diabetes, hypertension, and thyroid 
                  disorders while nurturing body, mind, and spirit.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="https://tinyurl.com/HealingByNature"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get the Book
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Our Mission & Values</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Rooted in faith, compassion, and clinical wisdom, our approach unites science and spirituality 
                to uncover root causes, restore balance, and inspire lasting wellness in every individual.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
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
