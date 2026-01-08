import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Rocket } from "lucide-react";
import { config } from "@/lib/config";

const CTASection = () => {
  const handleBookCall = () => {
    window.open(config.bookCallUrl, "_blank");
  };

  const handleGetDemo = () => {
    window.open(config.storeDemoUrl, "_blank");
  };

  return (
    <section className="bg-foreground py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-background leading-tight mb-8">
              Ready to take full control of your store?
            </h2>
            <p className="text-background/80 text-xl mb-16 max-w-2xl mx-auto">
              Let's build your system once — and give you lifetime freedom to manage it your way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background/10 backdrop-blur border border-background/20 rounded-2xl p-10 mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-background" />
              <p className="text-background font-bold text-xl">
                Book your free 45-minute strategy session today.
              </p>
            </div>
            <p className="text-background/70 text-lg">
              Let's plan your growth system, show you the live demo, and map your automation journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90 shadow-bold"
              onClick={handleBookCall}
            >
              Book Free Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-2 border-background/40 text-background hover:bg-background/10"
              onClick={handleGetDemo}
            >
              <Play className="mr-2 h-4 w-4" />
              Get Store Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
