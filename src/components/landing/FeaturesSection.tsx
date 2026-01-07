import { motion } from "framer-motion";
import {
  Store,
  Megaphone,
  Heart,
  Truck,
  BarChart3,
  Link2,
  Image,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Store & Product Management",
    description:
      "Manage your entire product catalog and store operations effortlessly — no developer required.",
    items: [
      "Add, edit, and customize products instantly",
      "Manage variants, attributes, and categories",
      "Import products in bulk in seconds",
      "Handle refunds, orders, and subscriptions",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth Automation",
    description:
      "Run promotions and campaigns that actually drive conversions.",
    items: [
      "Create and schedule product campaigns",
      "Display dynamic banners and promotions",
      "Launch limited-time offers in minutes",
      "Reward customers with wallets and points",
    ],
  },
  {
    icon: Heart,
    title: "Customer Experience & Engagement",
    description:
      "Deliver a smooth, personalized experience for every shopper.",
    items: [
      "Dedicated customer portal with tracking",
      "Login & order OTP verification",
      "Wishlist, search, and product filters",
      "Multi-language & multi-currency support",
    ],
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    description: "Take complete control of your delivery and logistics.",
    items: [
      "Advanced zone-based shipping options",
      "Country, state, and city configuration",
      "Logistic partner integration",
      "Area-wise delivery and cost control",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboard, Insights & Team Control",
    description: "Get a complete bird's-eye view of your business performance.",
    items: [
      "Powerful admin dashboard (Light & Dark)",
      "Real-time summary and advanced reports",
      "Role-based staff management",
      "Custom analytics and insights",
    ],
  },
  {
    icon: Link2,
    title: "Integrations & Support",
    description: "Connect everything that powers your business.",
    items: [
      "Seamless ERP & CRM integrations",
      "Tax, payment, inventory connectivity",
      "Dedicated customer support team",
      "Continuous updates and security",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Powerful Features for{" "}
            <span className="text-gradient">Full Control</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Outlfy E-Commerce OS combines everything you need to build, run, and
            scale your online business — across website, app, and admin
            dashboard — all in one place.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-strong"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center"
        >
          <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
            In Short — Your Complete E-Commerce Operating System
          </h3>
          <p className="text-muted-foreground">
            A single system that powers your website, mobile app, dashboard, and
            marketing — custom-built, fully coded, and{" "}
            <span className="font-semibold text-primary">
              100% under your control.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
