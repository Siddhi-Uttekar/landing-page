import { motion } from "framer-motion";
import {
  Store,
  Megaphone,
  Heart,
  Truck,
  BarChart3,
  Link2,
} from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Store & Product Management",
    description: "Manage your entire product catalog effortlessly.",
    items: [
      "Add, edit, and customize products instantly",
      "Manage variants, attributes, and categories",
      "Import products in bulk in seconds",
      "Handle refunds, orders, and subscriptions",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    description: "Run promotions that drive conversions.",
    items: [
      "Create and schedule campaigns",
      "Dynamic banners and promotions",
      "Limited-time offers in minutes",
      "Customer wallets and points",
    ],
  },
  {
    icon: Heart,
    title: "Customer Experience",
    description: "Deliver smooth, personalized experiences.",
    items: [
      "Customer portal with tracking",
      "OTP verification for security",
      "Wishlist and advanced filters",
      "Multi-language & currency",
    ],
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    description: "Complete control of delivery operations.",
    items: [
      "Zone-based shipping options",
      "Location-based configuration",
      "Logistic partner integration",
      "Area-wise cost control",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboard & Insights",
    description: "Bird's-eye view of your business.",
    items: [
      "Powerful admin dashboard",
      "Real-time reports",
      "Role-based staff access",
      "Custom analytics",
    ],
  },
  {
    icon: Link2,
    title: "Integrations & Support",
    description: "Connect everything that powers your business.",
    items: [
      "ERP & CRM integrations",
      "Tax & payment connectivity",
      "Dedicated support team",
      "Continuous updates",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-muted/50 py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block mb-8 text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Everything you need to run your store
          </h2>
          <p className="text-lg text-muted-foreground">
            Outlfy combines website, app, and dashboard — all in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-background border border-border rounded-lg p-8 hover:border-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-5 w-5 text-background" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 bg-foreground rounded-lg p-12 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-background mb-4">
            Your Complete E-Commerce Operating System
          </h3>
          <p className="text-background/70 max-w-2xl mx-auto">
            A single system that powers your website, mobile app, dashboard, and marketing — custom-built, fully coded, and 100% under your control.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
