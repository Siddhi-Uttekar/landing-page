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
      "No — it's 100% coded (Next.js, Node.js, Flutter). You get enterprise-grade speed with the simplicity of self-management. This means better performance, security, and customization compared to no-code solutions.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We provide ongoing support, maintenance, and optional upgrades as you scale. Our team monitors your system's performance and security, so you can focus on growing your business.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Outlfy E-Commerce OS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 shadow-soft"
              >
                <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
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
