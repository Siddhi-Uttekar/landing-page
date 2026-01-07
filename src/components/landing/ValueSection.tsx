import { motion } from "framer-motion";
import { Sparkles, Clock, Zap } from "lucide-react";

const ValueSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Imagine This
            </span>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/20 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                Festive Banner Tonight
              </h3>
              <p className="text-muted-foreground">
                Your marketing team wants to push a festive banner tonight —
                and it's{" "}
                <span className="font-semibold text-primary">
                  live in 5 minutes.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/20 p-3">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                New Product Variant
              </h3>
              <p className="text-muted-foreground">
                Your operations team adds a new product variant —{" "}
                <span className="font-semibold text-accent">
                  without waiting for developers.
                </span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 rounded-2xl border border-border bg-card p-8 text-center shadow-soft"
          >
            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Your brand moves at{" "}
              <span className="text-gradient">your speed.</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
