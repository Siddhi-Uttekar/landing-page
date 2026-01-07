import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
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
    <section className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block mb-8 text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Custom-Built Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Because every brand is different.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-muted/50 border border-border rounded-lg p-8 md:p-12 mb-12"
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              No two businesses are the same — and neither should be their systems. Our pricing adapts to your brand's scale, SKU volume, and operational complexity.
            </p>
            <p className="text-foreground font-medium mb-12">
              We build everything from code — so you get a one-time investment that gives you lifetime control.
            </p>

            <div className="space-y-4">
              <p className="font-display text-lg font-semibold text-foreground mb-6">
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
                  <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-background" />
                  </div>
                  <span className="text-muted-foreground">{factor}</span>
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
            <Button size="xl" onClick={handleBookCall}>
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
