import { motion } from "framer-motion";
import { ClipboardList, TestTubes, FileText, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Consultation",
    description: "Meet with our team to discuss your goals, health history, and concerns in a no-pressure environment.",
  },
  {
    icon: TestTubes,
    step: "02",
    title: "Comprehensive Assessment",
    description: "Advanced metabolic testing, lab work, and body composition analysis to understand your unique physiology.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Personalized Plan",
    description: "Your physician creates a custom treatment plan including medications, nutrition, and lifestyle protocols.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Support",
    description: "Regular check-ins, plan adjustments, and unlimited access to your care team for lasting success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-2">
            Your Journey to Better Health
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            We make getting started simple. Here's what to expect when you choose Metabolic Reset Clinic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}

              <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5 relative">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
