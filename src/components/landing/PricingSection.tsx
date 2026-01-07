import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";

const pricingFactors = [
  "Number of SKUs and product variants",
  "Number of stores or franchise locations",
  "Required integrations (ERP, CRM, logistics, etc.)",
  "Scope of design, customization, and modules",
];

const PricingSection = () => {
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
            Custom-Built Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Because Every Brand is Different
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 rounded-2xl border border-border bg-card p-8 shadow-soft md:p-12"
          >
            <p className="mb-6 text-lg text-muted-foreground">
              No two businesses are the same — and neither should be their
              systems. Our pricing adapts to your brand's scale, SKU volume,
              and operational complexity.
            </p>
            <p className="mb-8 text-lg font-semibold text-foreground">
              We build everything from code — so you get a{" "}
              <span className="text-primary">one-time investment</span> that
              gives you{" "}
              <span className="text-primary">lifetime control.</span>
            </p>

            <div className="rounded-xl bg-muted/50 p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-foreground">
                How We Define Your Cost
              </h3>
              <ul className="space-y-3">
                {pricingFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Button variant="hero" size="xl">
              <Calendar className="mr-2 h-5 w-5" />
              Get Custom Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
