import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const ShiftSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              The Future of E-Commerce
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            The future of e-commerce isn't just online stores —{" "}
            <span className="text-gradient">
              it's self-managed growth systems.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg text-muted-foreground md:text-xl"
          >
            When your marketing, product, and operations teams can instantly
            make changes, launch offers, or update customer and product data —
            you scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12"
          >
            <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
            <p className="mb-4 text-lg text-muted-foreground">
              That's exactly why we built
            </p>
            <h3 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Outlfy E-Commerce OS
            </h3>
            <p className="text-lg text-foreground">
              A fully coded, enterprise-grade system that gives you{" "}
              <span className="font-semibold text-primary">100% control</span>{" "}
              without any tech dependency.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-accent">
              <span className="font-medium">See how it works</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
