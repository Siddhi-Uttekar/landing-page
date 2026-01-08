import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy Call",
    description:
      "We start with a deep-dive session to understand your business model, operations, and goals.",

  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "Our team designs and codes your website, mobile app, and dashboard — aligned with your brand.",

  },
  {
    number: "03",
    title: "System Integration",
    description:
      "We connect your ERP, CRM, payment gateways, and logistics systems seamlessly.",

  },
  {
    number: "04",
    title: "Delivery & Training",
    description:
      "We hand over your complete system and train your team — no tech background required.",

  },
  {
    number: "05",
    title: "Maintenance & Growth",
    description:
      "We stay with you post-launch to monitor, optimize, and keep your system ready for growth.",

  },
];

const ProcessSection = () => {
  return (
    <section className="bg-background py-32" id="process">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block mb-6 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium tracking-wide uppercase rounded-full">
            The Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            How It Works
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative grid grid-cols-12 gap-6 py-10 border-b border-foreground/10 hover:bg-muted/50 transition-all px-8 -mx-8 rounded-xl"
              >
                {/* Bold number */}
                <div className="col-span-2 lg:col-span-1">
                  <span className={`font-display text-3xl font-bold  group-hover:scale-110 transition-transform inline-block`}>
                    {step.number}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:translate-x-1 transition-transform">
                    {step.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:pl-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                {/* Hover indicator */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0  group-hover:h-12 transition-all rounded-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
