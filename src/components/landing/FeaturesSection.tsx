import { motion } from "framer-motion";
import {
  Store,
  Megaphone,
  Heart,
  Truck,
  BarChart3,
  Link2,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Store & Product Management",
    description: "Manage your entire product catalog effortlessly.",
    color: "bg-accent-violet",
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
    color: "bg-accent-rose",
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
    color: "bg-accent-amber",
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
    color: "bg-accent-emerald",
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
    color: "bg-accent-cyan",
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
    color: "bg-accent-violet",
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
    <section className="bg-muted py-32" id="features">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block mb-6 px-4 py-2 bg-accent-violet text-white text-sm font-bold tracking-wide uppercase rounded-full">
            Powerful Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Everything you need to run your store
          </h2>
          <p className="text-xl text-muted-foreground">
            Outlfy combines website, app, and dashboard — <span className="text-accent-violet font-medium">all in one place.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background rounded-2xl p-8 shadow-xl hover:shadow-bold transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-foreground/10"
            >
              {/* Bold icon container */}
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className={`w-5 h-5 rounded-full ${feature.color}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-foreground" />
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Subtle corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${feature.color}/5 rounded-tr-2xl rounded-bl-[60px] pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 bg-foreground rounded-3xl p-12 md:p-16 text-center shadow-bold"
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-background mb-6">
            Your Complete <span className="text-accent-amber">E-Commerce</span> Operating System
          </h3>
          <p className="text-background/80 text-lg max-w-3xl mx-auto leading-relaxed">
            A single system that powers your website, mobile app, dashboard, and marketing — custom-built, fully coded, and 100% under your control.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
