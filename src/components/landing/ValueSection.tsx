import { motion } from "framer-motion";

const ValueSection = () => {
  return (
    <section className="bg-muted/50 py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block mb-8 text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Imagine This
          </span>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background border border-border rounded-lg p-8"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Festive Banner Tonight
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your marketing team wants to push a festive banner tonight — and it's{" "}
              <span className="text-foreground font-medium">live in 5 minutes.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background border border-border rounded-lg p-8"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              New Product Variant
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your operations team adds a new product variant —{" "}
              <span className="text-foreground font-medium">without waiting for developers.</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Your brand moves at your speed.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
