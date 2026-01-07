import { motion } from "framer-motion";

const painPoints = [
  "Lost timing on festive sales",
  "Broken consistency across web & app",
  "Unnecessary recurring dev bills",
  "Weeks wasted in minor changes",
];

const PainSection = () => {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              You've built a great brand.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But every time you need a banner update, product change, or new campaign — you wait on a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-xl font-medium text-foreground mb-8">
              That wait costs you:
            </p>
            
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-12 border-t border-border"
          >
            <p className="text-xl text-foreground mb-2">
              <span className="font-semibold">Most D2C brands lose 10–15 hours a week</span>
            </p>
            <p className="text-muted-foreground">
              just coordinating design and dev teams. It's not your fault — most systems were never designed for brands that move fast.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
