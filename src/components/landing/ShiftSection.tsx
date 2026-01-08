import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const ShiftSection = () => {
  return (
    <section className="bg-muted py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-sm font-medium tracking-wide uppercase rounded-full">
              <Zap className="w-4 h-4" />
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
            The future of e-commerce isn't just online stores — it's{" "}
            <span className="relative inline-block">
              self-managed growth systems.
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-accent-emerald/30 -z-10" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed mb-16 max-w-2xl mx-auto"
          >
            When your marketing, product, and operations teams can instantly make changes, launch offers, or update data — <span className="text-accent-emerald font-medium">you scale faster.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background border-2 border-foreground/10 rounded-2xl p-12 shadow-xl"
          >
            <p className="text-muted-foreground mb-4 text-lg">
              That's exactly why we built
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Outlfy <span className="text-accent-violet">E-Commerce OS</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              A fully coded, enterprise-grade system that gives you{" "}
              <span className="text-foreground font-bold">100% control</span>{" "}
              without any tech dependency.
            </p>
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:gap-3 transition-all hover:shadow-lg"
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
