import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-background">
              Outlfy
            </h3>
            <p className="mt-1 text-sm text-background/60">
              E-Commerce OS for D2C Brands
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="#" className="transition-colors hover:text-background">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-background">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-background">
              Contact
            </a>
          </div>

          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Outlfy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
