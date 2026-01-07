import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              🚀 Custom E-Commerce Systems for D2C Brands
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            We Build Custom-Coded E-Commerce Systems That Help Brands{" "}
            <span className="relative">
              Launch, Scale, and Manage
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                  stroke="hsl(16 100% 60%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Everything in One Dashboard.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-lg text-white/85 md:text-xl"
          >
            You get a fully coded website + mobile app + dashboard — so you can
            change banners, prices, offers, and content instantly, with zero
            developer cost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="hero" size="xl">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Strategy Session
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Get Store Demo
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="relative rounded-2xl bg-white/5 p-2 backdrop-blur-xl">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/30 via-white/10 to-orange-500/30 blur-lg" />
            <div className="relative overflow-hidden rounded-xl bg-card shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-accent/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-background px-4 py-1.5 text-xs text-muted-foreground">
                  dashboard.outlfy.com
                </div>
              </div>
              {/* Dashboard content */}
              <div className="grid gap-4 p-6 md:grid-cols-3">
                {/* Sidebar */}
                <div className="space-y-3 rounded-lg bg-muted/30 p-4">
                  <div className="h-8 w-24 rounded bg-primary/20" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-8 rounded ${
                          i === 2 ? "bg-primary/30" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {/* Main content */}
                <div className="space-y-4 md:col-span-2">
                  <div className="grid gap-3 md:grid-cols-3">
                    {["Orders", "Revenue", "Visitors"].map((label, i) => (
                      <div key={label} className="rounded-lg bg-muted/50 p-4">
                        <div className="text-xs text-muted-foreground">
                          {label}
                        </div>
                        <div className="mt-1 font-display text-2xl font-bold text-foreground">
                          {i === 0 ? "1,234" : i === 1 ? "₹4.5L" : "8.2K"}
                        </div>
                        <div className="mt-1 text-xs text-primary">
                          +{12 + i * 5}% this week
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-muted/30 p-4">
                    <div className="mb-3 text-sm font-medium text-foreground">
                      Live Banner Editor
                    </div>
                    <div className="flex gap-4">
                      <div className="h-20 flex-1 rounded-lg bg-gradient-to-r from-accent/40 to-primary/40" />
                      <div className="w-32 space-y-2">
                        <div className="h-8 rounded bg-muted" />
                        <div className="h-8 rounded bg-accent/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
