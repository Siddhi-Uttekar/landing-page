import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long will it take to develop my store?",
    answer:
      "Usually 3–6 weeks, depending on your modules and design complexity. We'll give you a detailed timeline during the strategy call.",
  },
  {
    question: "Do I need technical knowledge to manage the dashboard?",
    answer:
      "Not at all. It's fully form-based and designed for non-tech founders. Your team can manage everything from banners to products without writing a single line of code.",
  },
  {
    question: "Can this integrate with my existing ERP or inventory system?",
    answer:
      "Yes, we support all major integrations — including custom ones. During the discovery phase, we'll map out all the integrations your business needs.",
  },
  {
    question: "Is it a no-code builder?",
    answer:
      "No — it's 100% coded (Next.js, Node.js, Flutter). You get enterprise-grade speed with the simplicity of self-management.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We provide ongoing support, maintenance, and optional upgrades as you scale. Our team monitors your system's performance and security.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-muted/50 py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block mb-8 text-sm font-medium text-muted-foreground tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="py-6 text-left font-display text-lg font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
