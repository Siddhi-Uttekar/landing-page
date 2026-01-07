import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight mb-6">
              Ready to take full control of your store?
            </h2>
            <p className="text-background/70 text-lg mb-12">
              Let's build your system once — and give you lifetime freedom to manage it your way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background/10 border border-background/20 rounded-lg p-8 mb-12"
          >
            <p className="text-background font-medium mb-2">
              🚀 Book your free 45-minute strategy session today.
            </p>
            <p className="text-background/70 text-sm">
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
              className="bg-background text-foreground hover:bg-background/90"
              onClick={handleBookCall}
            >
              Book Free Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-background/30 text-background hover:bg-background/10"
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
