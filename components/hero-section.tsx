"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticlesBackground } from "@/components/particles-background";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="relative min-h-screen flex items-center py-24 pt-32 overflow-hidden" 
      id="hero"
    >
      <ParticlesBackground />
      <Container className="relative z-10">
        <div ref={containerRef} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Introducing NexusFlow 2.0</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block">Unleash</span>{" "}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              creative
            </span>{" "}
            <span className="inline-block">potential with AI</span>
          </motion.h1>

          <motion.p 
            className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            NexusFlow supercharges your workflow with AI-powered tools that adapt to your creative process. Design, write, and build faster than ever before.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="group">
              Get started free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Watch demo
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-md opacity-50" />
            <div className="relative w-full h-[400px] md:h-[500px] bg-card rounded-xl overflow-hidden border border-border shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-futuristic-interface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}