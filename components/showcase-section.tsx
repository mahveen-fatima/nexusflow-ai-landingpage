"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface ShowcaseItemProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

function ShowcaseItem({ title, description, image, reverse = false }: ShowcaseItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  return (
    <div 
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center",
        reverse && "md:flex-row-reverse"
      )}
    >
      <div className={cn(reverse ? "md:order-2" : "")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground text-lg">{description}</p>
        </motion.div>
      </div>
      
      <motion.div 
        style={{ y }}
        className={cn(
          "relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-border shadow-2xl",
          reverse ? "md:order-1" : ""
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-transparent z-10" />
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export function ShowcaseSection() {
  return (
    <section className="py-24 relative" id="showcase">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See NexusFlow in Action</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how our AI-powered platform transforms creative workflows across industries.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          <ShowcaseItem 
            title="Design Reimagined"
            description="Transform rough sketches into polished designs with our AI-powered design tools. NexusFlow understands design principles and helps you create stunning visuals in record time."
            image="https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <ShowcaseItem 
            title="Collaborative Workspaces"
            description="Work seamlessly with your team in real-time. NexusFlow's collaborative features ensure everyone stays in sync, with smart version control and instant feedback loops."
            image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            reverse
          />
          
          <ShowcaseItem 
            title="Adaptive AI Assistant"
            description="Our AI learns your preferences and adapts to your workflow. The more you use NexusFlow, the more personalized and powerful it becomes, anticipating your needs before you do."
            image="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </Container>
    </section>
  );
}