import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    text: "I lost 47 pounds in 6 months with their medical weight loss program. The doctors truly listened and created a plan that worked for my lifestyle. For the first time, I feel like I have control over my health.",
    detail: "Lost 47 lbs in 6 months",
  },
  {
    name: "James R.",
    initials: "JR",
    rating: 5,
    text: "After struggling with my weight for 20 years, the Metabolic Reset program changed everything. My blood sugar is normal, I'm off two medications, and I have energy I haven't felt in decades.",
    detail: "Off 2 medications",
  },
  {
    name: "Patricia K.",
    initials: "PK",
    rating: 5,
    text: "The team here is exceptional. Dr. Chen took the time to explain every aspect of my treatment plan and the nutritionist helped me find foods I actually enjoy. Best medical experience I've ever had.",
    detail: "Lost 35 lbs",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Patient Stories
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-2">
            Real Results from Real Patients
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Don't just take our word for it — hear from patients who have transformed their health with our programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card rounded-2xl border border-border p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.detail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
