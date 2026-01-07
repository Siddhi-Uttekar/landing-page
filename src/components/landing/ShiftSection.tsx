import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ShiftSection = () => {
  return (
    <section className="bg-muted/50 py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-8 text-sm font-medium text-muted-foreground tracking-wide uppercase">
              The Shift
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            The future of e-commerce isn't just online stores — it's self-managed growth systems.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-16"
          >
            When your marketing, product, and operations teams can instantly make changes, launch offers, or update data — you scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background border border-border rounded-lg p-12"
          >
            <p className="text-muted-foreground mb-4">
              That's exactly why we built
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Outlfy E-Commerce OS
            </h3>
            <p className="text-muted-foreground mb-8">
              A fully coded, enterprise-grade system that gives you{" "}
              <span className="text-foreground font-medium">100% control</span>{" "}
              without any tech dependency.
            </p>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
            >
              See how it works
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
