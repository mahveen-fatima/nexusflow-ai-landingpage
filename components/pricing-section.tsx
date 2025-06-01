"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: annual ? 15 : 19,
      features: [
        "Basic AI design assistance",
        "5 projects",
        "1,000 AI generations per month",
        "Standard templates",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      description: "Ideal for professionals and growing teams",
      price: annual ? 39 : 49,
      features: [
        "Advanced AI design tools",
        "Unlimited projects",
        "10,000 AI generations per month",
        "Premium templates",
        "Custom exports",
        "Priority support",
        "Team collaboration"
      ],
      cta: "Get Pro",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For organizations needing maximum power",
      price: annual ? 99 : 129,
      features: [
        "All Pro features",
        "Unlimited AI generations",
        "API access",
        "Custom AI training",
        "Dedicated account manager",
        "SSO & advanced security",
        "24/7 premium support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 relative" id="pricing">
      <div className="absolute inset-0 bg-grid-pattern bg-card z-0 opacity-5"></div>
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees, no surprises.
            </p>
            
            <div className="flex items-center justify-center mt-8">
              <span className={`mr-2 text-sm ${!annual ? "font-semibold" : "text-muted-foreground"}`}>Monthly</span>
              <Switch
                checked={annual}
                onCheckedChange={setAnnual}
              />
              <span className={`ml-2 text-sm ${annual ? "font-semibold" : "text-muted-foreground"}`}>
                Annual <span className="text-xs text-green-500 font-medium">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden border ${
                plan.popular 
                  ? "border-primary/30 shadow-lg shadow-primary/5" 
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium py-1 text-center">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? "pt-8" : ""}`}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-1">{plan.description}</p>
                
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </Container>
    </section>
  );
}