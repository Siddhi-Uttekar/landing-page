import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { config } from "@/lib/config";

const Hero = () => {
  const handleBookCall = () => {
    window.open(config.bookCallUrl, "_blank");
  };

  const handleGetDemo = () => {
    window.open(config.storeDemoUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block mb-8 text-sm font-medium text-muted-foreground tracking-wide uppercase">
                E-Commerce Operating System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-8"
            >
              Build. Launch.
              <br />
              <span className="relative inline-block">
                Manage Everything.
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-foreground/10 -z-10" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md"
            >
              Get a fully coded website, mobile app, and dashboard. Change banners, prices, and content instantly — zero developer cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="xl" onClick={handleBookCall}>
                Book a Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="xl" onClick={handleGetDemo}>
                <Play className="mr-2 h-4 w-4" />
                Get Store Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Empty Space for Figma UI */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center min-h-[500px] border border-dashed border-border rounded-lg"
          >
            {/* TODO: Insert your Figma UI here */}
            <p className="text-muted-foreground text-sm">Figma UI Placeholder</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
