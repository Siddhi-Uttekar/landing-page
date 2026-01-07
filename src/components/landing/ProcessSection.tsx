import { motion } from "framer-motion";
import {
  MessageSquare,
  Palette,
  Link2,
  Rocket,
  Shield,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Strategy Call",
    description:
      "We start with a deep-dive session to understand your business model, operations, and goals — mapping out the perfect e-commerce architecture for your brand.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Development",
    description:
      "Our team designs and codes your website, mobile app, and dashboard — fully aligned with your brand identity and future scalability.",
  },
  {
    icon: Link2,
    number: "03",
    title: "System Integration",
    description:
      "We connect your ERP, CRM, payment gateways, and logistics systems — ensuring every part of your business talks to each other seamlessly.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Delivery & Team Training",
    description:
      "Once ready, we hand over your complete system and train your team to manage everything easily — no tech background required.",
  },
  {
    icon: Shield,
    number: "05",
    title: "Maintenance & Growth Monitoring",
    description:
      "We stay with you post-launch to monitor performance, optimize operations, and keep your system secure, fast, and ready for growth.",
  },
];

const ProcessSection = () => {
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
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From Idea to a Fully Operational E-Commerce System
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent md:left-1/2 md:-ml-px md:block" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 md:block ${
                    index === steps.length - 1 ? "bg-accent" : ""
                  }`}
                />

                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-strong">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-display text-3xl font-bold text-primary/30">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
