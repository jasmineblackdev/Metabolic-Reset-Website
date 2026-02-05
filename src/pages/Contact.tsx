import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20, "Phone number is too long").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const services = [
  "Weight Loss Programs",
  "Metabolic Reset Program",
  "Chronic Disease Management",
  "Primary Care Services",
  "Integrative Functional Medicine",
  "Physical Exams",
  "Wellness Visits",
  "Sick Visits",
  "Telemedicine Consultation",
  "Other / Not Sure",
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl lg:text-5xl text-primary-foreground"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80 mt-4 leading-relaxed"
            >
              Ready to start your health transformation? Contact us to schedule a free
              consultation or ask any questions about our programs.
            </motion.p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-accent rounded-2xl p-10 text-center space-y-4"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                    <h2 className="font-display text-2xl text-foreground">Message Sent!</h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                      For urgent matters, please call us directly.
                    </p>
                    <Button variant="default" size="lg" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <div>
                    <h2 className="font-display text-2xl text-foreground mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            className={`w-full h-11 rounded-lg border px-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${errors.name ? "border-destructive" : "border-border"}`}
                            placeholder="Your full name"
                            maxLength={100}
                          />
                          {errors.name && (
                            <p className="flex items-center gap-1 mt-1 text-xs text-destructive">
                              <AlertCircle className="w-3 h-3" /> {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className={`w-full h-11 rounded-lg border px-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${errors.email ? "border-destructive" : "border-border"}`}
                            placeholder="your@email.com"
                            maxLength={255}
                          />
                          {errors.email && (
                            <p className="flex items-center gap-1 mt-1 text-xs text-destructive">
                              <AlertCircle className="w-3 h-3" /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full h-11 rounded-lg border border-border px-4 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                            placeholder="(704) 555-0000"
                            maxLength={20}
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
                            Service Interest
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full h-11 rounded-lg border border-border px-4 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                          >
                            <option value="">Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full rounded-lg border px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                          placeholder="Tell us about your health goals or ask any questions..."
                          maxLength={2000}
                        />
                        {errors.message && (
                          <p className="flex items-center gap-1 mt-1 text-xs text-destructive">
                            <AlertCircle className="w-3 h-3" /> {errors.message}
                          </p>
                        )}
                      </div>

                      <Button variant="default" size="lg" type="submit" disabled={submitting} className="w-full sm:w-auto">
                        {submitting ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4 ml-1" />
                      </Button>
                    </form>
                  </div>
                )}
              </div>

              {/* Sidebar info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
                  <h3 className="font-display text-xl text-foreground">Clinic Information</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground">Address</div>
                        <div className="text-muted-foreground">1122 Sam Newell Rd. St. 114<br />Matthews, NC 28105</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground">Phone</div>
                        <a href="tel:9804303130" className="text-primary hover:underline">(980) 430-3130</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground">Email</div>
                        <a href="mailto:contact@metabolicresetclinic.com" className="text-primary hover:underline">contact@metabolicresetclinic.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground">Office Hours</div>
                        <div className="text-muted-foreground">
                          Mon – Fri: 8:00 AM – 5:00 PM<br />
                          Saturday: 9:00 AM – 1:00 PM<br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <iframe
                    title="Metabolic Reset Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5!2d-80.7188435!3d35.1297265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzQ3LjAiTiA4MMKwNDMnMDcuOCJX!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>

                {/* Quick booking card */}
                <div className="bg-primary rounded-2xl p-6 text-center space-y-3">
                  <h3 className="font-display text-xl text-primary-foreground">
                    Prefer to Book Directly?
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Schedule your appointment online via telemedicine or give us a call.
                  </p>
                  <a
                    href="https://doxy.me/glawson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full h-12 rounded-xl bg-gold text-gold-foreground font-bold hover:bg-gold/90 transition-colors"
                  >
                    Join Telemedicine Appointment
                  </a>
                  <a
                    href="tel:9804303130"
                    className="block text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
                  >
                    or call (980) 430-3130
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
