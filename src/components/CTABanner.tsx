import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-24 bg-primary relative overflow-hidden" id="contact">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <h2 className="font-display text-3xl lg:text-4xl text-primary-foreground">
            Ready to Transform Your Health?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Schedule your free consultation today and discover how our personalized approach
            can help you achieve the lasting results you deserve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button variant="gold" size="xl">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <a
              href="tel:7049990001"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Or Call (704) 999-0001
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
