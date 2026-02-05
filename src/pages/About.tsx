import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Award, Users, Heart, BookOpen } from "lucide-react";

const providers = [
  {
    name: "Dr. Michael Chen, MD",
    role: "Medical Director",
    initials: "MC",
    specialties: ["Internal Medicine", "Obesity Medicine", "Metabolic Health"],
    years: "15+ years experience",
    bio: "Dr. Chen is board-certified in both Internal Medicine and Obesity Medicine. He founded Metabolic Reset Clinic with a vision of providing personalized, science-based weight loss solutions. With over 15 years of clinical experience, he has helped hundreds of patients achieve lasting health transformations. Dr. Chen stays at the forefront of metabolic medicine, incorporating the latest FDA-approved treatments into his practice.",
  },
  {
    name: "Dr. Sarah Martinez, DO",
    role: "Lead Physician",
    initials: "SM",
    specialties: ["Family Medicine", "Preventive Medicine", "Weight Management"],
    years: "12+ years experience",
    bio: "Dr. Martinez brings a holistic approach to weight loss and metabolic health. Board-certified in Family Medicine with additional training in preventive medicine, she specializes in creating comprehensive treatment plans that address both physical and emotional aspects of weight management. Her patients appreciate her warm, supportive approach and her commitment to helping them achieve sustainable results.",
  },
  {
    name: "Jennifer Williams, RD, LDN",
    role: "Clinical Nutritionist",
    initials: "JW",
    specialties: ["Medical Nutrition Therapy", "Metabolic Nutrition", "Behavioral Counseling"],
    years: "10+ years experience",
    bio: "Jennifer is a registered dietitian with a passion for making nutrition accessible and sustainable. She creates personalized meal plans based on each patient's metabolic data, food preferences, and lifestyle. With specialized training in medical nutrition therapy, she helps patients understand the science behind their dietary choices and develop habits that support long-term health.",
  },
  {
    name: "Mark Thompson, LCSW",
    role: "Behavioral Health Specialist",
    initials: "MT",
    specialties: ["Cognitive Behavioral Therapy", "Health Psychology", "Mindful Eating"],
    years: "8+ years experience",
    bio: "Mark specializes in the psychological aspects of weight management and metabolic health. As a licensed clinical social worker, he helps patients overcome emotional eating, develop healthy coping strategies, and build the mindset needed for lasting change. His evidence-based approach combines cognitive behavioral therapy with motivational interviewing to support each patient's unique journey.",
  },
];

const values = [
  { icon: Heart, title: "Patient-Centered Care", desc: "Every treatment plan is tailored to your unique biology, lifestyle, and goals." },
  { icon: BookOpen, title: "Evidence-Based Medicine", desc: "We use only proven, FDA-approved treatments backed by clinical research." },
  { icon: Users, title: "Collaborative Approach", desc: "Our multidisciplinary team works together to provide comprehensive care." },
  { icon: Award, title: "Commitment to Excellence", desc: "Continuous education and the highest standards of medical practice." },
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
              Meet Your Care Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80 mt-4 leading-relaxed"
            >
              Our board-certified physicians and healthcare professionals combine 
              45+ years of clinical experience to deliver personalized metabolic health solutions.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <div className="relative -mt-8 z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-card rounded-2xl shadow-soft border border-border p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">45+</div>
                <div className="text-sm text-muted-foreground">Years Combined</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Patients Treated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Patient Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Board Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Providers */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-10">
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

        {/* Values */}
        <section className="py-20 bg-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Our Mission & Values</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                We believe everyone deserves access to effective, compassionate, and scientifically-grounded 
                metabolic healthcare. Our mission is to transform lives through personalized medicine.
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
