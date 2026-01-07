import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Play, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-24">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Rocket className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-white">
                Ready to Scale?
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Ready to take full control of your store?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg text-white/80 md:text-xl"
          >
            Let's build your system once — and give you lifetime freedom to
            manage it your way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:p-8"
          >
            <p className="font-display text-lg font-semibold text-white md:text-xl">
              🚀 Book your free 45-minute strategy session today.
            </p>
            <p className="mt-2 text-white/80">
              Let's plan your growth system, show you the live demo, and map
              your automation journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="hero" size="xl">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Strategy Session
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Get Store Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
