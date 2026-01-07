import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-8 text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Results
            </span>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-12">
              "After implementing Outlfy E-Commerce OS, a leading D2C fashion brand reduced tech dependency by{" "}
              <span className="font-bold">92%</span> and launched{" "}
              <span className="font-bold">5 new campaigns</span> — all managed in-house."
            </p>
          </motion.blockquote>

          {/* Client logos placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-16 border-t border-border"
          >
            <p className="text-center text-sm text-muted-foreground mb-8">
              Trusted by growing D2C brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {/* TODO: Replace with actual client logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-6 w-20 rounded bg-muted"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
