import { motion } from "framer-motion";
import { Quote, TrendingUp } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-emerald text-white text-sm font-bold tracking-wide uppercase rounded-full">
              <TrendingUp className="w-4 h-4" />
              Results
            </span>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-muted border-2 border-foreground/10 rounded-3xl p-12 md:p-16 shadow-xl"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent-violet/30" />
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed text-center relative z-10">
              "After implementing Outlfy E-Commerce OS, a leading D2C fashion brand reduced tech dependency by{" "}
              <span className="relative inline-block text-accent-emerald">
                92%
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-accent-emerald/30" />
              </span>{" "}
              and launched{" "}
              <span className="relative inline-block text-accent-violet">
                5 new campaigns
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-accent-violet/30" />
              </span>{" "}
              — all managed in-house."
            </p>
          </motion.blockquote>

          {/* Client logos placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20"
          >
            <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-wide">
              Trusted by growing D2C brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {/* TODO: Replace with actual client logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-10 w-28 rounded-lg bg-foreground/5 border border-foreground/10"
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
