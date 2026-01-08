import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Coins } from "lucide-react";
import { config } from "@/lib/config";

const pricingFactors = [
  "Number of SKUs and product variants",
  "Number of stores or franchise locations",
  "Required integrations (ERP, CRM, logistics)",
  "Scope of design and customization",
];

const PricingSection = () => {
  const handleBookCall = () => {
    window.open(config.bookCallUrl, "_blank");
  };

  return (
    <section className="bg-background py-32" id="pricing">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent-amber/10 border border-accent-amber/30 text-accent-amber text-sm font-medium tracking-wide uppercase rounded-full">
            <Coins className="w-4 h-4" />
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Custom-Built <span className="text-accent-amber">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Because every brand is different.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-muted border-2 border-foreground/10 rounded-2xl p-10 md:p-14 mb-12 shadow-xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              No two businesses are the same — and neither should be their systems. Our pricing adapts to your brand's scale, SKU volume, and operational complexity.
            </p>
            <p className="text-xl text-foreground font-bold mb-12">
              We build everything from code — so you get a <span className="text-accent-emerald">one-time investment</span> that gives you <span className="text-accent-violet">lifetime control</span>.
            </p>

            <div className="space-y-5">
              <p className="font-display text-xl font-bold text-foreground mb-8">
                How We Define Your Cost
              </p>
              {pricingFactors.map((factor, index) => (
                <motion.div
                  key={factor}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-violet flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-muted-foreground">{factor}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Button size="xl" className="shadow-bold" onClick={handleBookCall}>
              Get Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
