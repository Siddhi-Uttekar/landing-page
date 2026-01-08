import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign, Zap } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    text: "Lost timing on festive sales",
    highlight: "Lost timing",
  },
  {
    icon: Zap,
    text: "Broken consistency across web & app",
    highlight: "Broken consistency",
  },
  {
    icon: DollarSign,
    text: "Unnecessary recurring dev bills",
    highlight: "Recurring dev bills",
  },
  {
    icon: AlertTriangle,
    text: "Weeks wasted in minor changes",
    highlight: "Weeks wasted",
  },
];

const PainSection = () => {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
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
            <p className="text-xl text-muted-foreground leading-relaxed">
              But every time you need a banner update, product change, or new campaign — <span className="text-foreground font-medium">you wait on a developer.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-2xl font-bold text-foreground mb-10">
              That wait costs you:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="group relative bg-foreground text-background p-6 rounded-xl shadow-bold hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg mb-1">
                        {point.highlight}
                      </p>
                      <p className="text-background/70 text-sm">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-muted border-2 border-foreground/10 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-2xl text-background">15h</span>
              </div>
              <div>
                <p className="text-2xl md:text-3xl text-foreground font-bold mb-3">
                  Most D2C brands lose 10–15 hours a week
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  just coordinating design and dev teams. It's not your fault — most systems were never designed for brands that move fast.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
