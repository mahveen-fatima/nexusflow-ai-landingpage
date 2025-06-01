"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Paintbrush, MessageSquare, Code, Lightbulb, Zap, Shapes } from "lucide-react";

const features = [
  {
    title: "AI-Powered Design",
    description: "Generate stunning visuals and layouts in seconds with our advanced AI design engine.",
    icon: Paintbrush,
  },
  {
    title: "Smart Text Completion",
    description: "Write faster with context-aware suggestions that adapt to your unique style.",
    icon: MessageSquare,
  },
  {
    title: "Code Generation",
    description: "Transform designs into production-ready code with a single click.",
    icon: Code,
  },
  {
    title: "Idea Generation",
    description: "Overcome creative blocks with AI-powered brainstorming and concept development.",
    icon: Lightbulb,
  },
  {
    title: "Real-time Collaboration",
    description: "Work seamlessly with your team in a synchronized environment that updates instantly.",
    icon: Zap,
  },
  {
    title: "Component Library",
    description: "Access thousands of ready-to-use components to accelerate your workflow.",
    icon: Shapes,
  },
];

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-background relative" id="features">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supercharge Your Workflow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              NexusFlow combines cutting-edge AI with intuitive design tools to help you create faster than ever before.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-4 rounded-lg p-3 inline-flex bg-primary/10 dark:bg-primary/5">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}