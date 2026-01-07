import { motion } from "framer-motion";
import { Quote, TrendingUp } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl gradient-hero p-8 md:p-12"
          >
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <Quote className="mb-6 h-12 w-12 text-white/30" />
              <blockquote className="mb-8 font-display text-2xl font-semibold leading-relaxed text-white md:text-3xl">
                "After implementing Outlfy E-Commerce OS, a leading D2C fashion
                brand reduced tech dependency by{" "}
                <span className="relative inline-block">
                  92%
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 50 6"
                    fill="none"
                  >
                    <path
                      d="M2 4C10 2 20 2 48 4"
                      stroke="hsl(16 100% 60%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                and launched 5 new campaigns — all managed in-house."
              </blockquote>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
                  <TrendingUp className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium text-white">
                    92% less tech dependency
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
                  <TrendingUp className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-medium text-white">
                    5 campaigns launched in-house
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client logos placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="mb-6 text-sm text-muted-foreground">
              Trusted by growing D2C brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 rounded bg-muted"
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
