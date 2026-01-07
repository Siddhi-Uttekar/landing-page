import { motion } from "framer-motion";
import { Clock, AlertTriangle, CreditCard, Calendar } from "lucide-react";

const painPoints = [
  {
    icon: Calendar,
    title: "Lost timing on festive sales",
  },
  {
    icon: AlertTriangle,
    title: "Broken consistency across web & app",
  },
  {
    icon: CreditCard,
    title: "Unnecessary recurring dev bills",
  },
  {
    icon: Clock,
    title: "Weeks wasted in minor changes",
  },
];

const PainSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              You've built a{" "}
              <span className="text-gradient">great brand.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              But every time you need a banner update, product change, or new
              campaign — you wait on a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 text-center"
          >
            <p className="mb-8 text-xl font-semibold text-foreground">
              That wait costs you:
            </p>
          </motion.div>

          <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-destructive/20 bg-destructive/5 p-6 transition-all duration-300 hover:border-destructive/40 hover:bg-destructive/10"
              >
                <div className="mb-4 inline-flex rounded-lg bg-destructive/10 p-3">
                  <point.icon className="h-6 w-6 text-destructive" />
                </div>
                <p className="font-medium text-foreground">{point.title}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft"
          >
            <p className="mb-4 text-2xl font-bold text-foreground">
              Most D2C brands lose{" "}
              <span className="text-destructive">10–15 hours a week</span>
            </p>
            <p className="text-muted-foreground">
              just coordinating design and dev teams. It's not your fault —
              most systems were never designed for brands that move fast.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
