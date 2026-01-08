import { motion } from "framer-motion";
import { Clock, Sparkles, Rocket } from "lucide-react";

const ValueSection = () => {
  return (
    <section className="bg-muted py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent-amber text-white text-sm font-bold tracking-wide uppercase rounded-full">
            <Sparkles className="w-4 h-4" />
            Imagine This
          </span>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background border-2 border-foreground/10 rounded-2xl p-10 shadow-xl hover:shadow-bold transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-accent-amber flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Festive Banner Tonight
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your marketing team wants to push a festive banner tonight — and it's{" "}
              <span className="text-accent-emerald font-bold">live in 5 minutes.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background border-2 border-foreground/10 rounded-2xl p-10 shadow-xl hover:shadow-bold transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-accent-amber flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              New Product Variant
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your operations team adds a new product variant —{" "}
              <span className="text-accent-emerald font-bold">without waiting for developers.</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Your brand moves at{" "}
            <span className="relative inline-block">
              your speed.
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent-emerald/30 -z-10" />
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
