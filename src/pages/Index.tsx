import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainSection from "@/components/landing/PainSection";
import ShiftSection from "@/components/landing/ShiftSection";
import ProcessSection from "@/components/landing/ProcessSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import ValueSection from "@/components/landing/ValueSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Outlfy E-Commerce OS – Fully Coded Web + App + Dashboard System for D2C Brands</title>
        <meta
          name="description"
          content="Build your fully coded e-commerce website, app, and dashboard — then manage every element without developers. Free strategy session + unlimited demo trials."
        />
        <meta
          name="keywords"
          content="D2C ecommerce automation, self managed online store, custom ecommerce app development, ecommerce OS India, Outlfy"
        />
      </Helmet>

      <Navbar />
      <Hero />
      <PainSection />
      <ShiftSection />
      <ProcessSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <TestimonialSection />
      <ValueSection />
      <section id="pricing">
        <PricingSection />
      </section>
      <CTASection />
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </>
  );
};

export default Index;
