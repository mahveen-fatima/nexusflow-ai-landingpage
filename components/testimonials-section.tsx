"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "NexusFlow completely transformed how our design team works. We've cut our production time in half while improving quality.",
    author: "Alex Morgan",
    role: "Design Director, Envision Studios",
    avatar: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=256"
  },
  {
    quote: "The AI-powered tools understand exactly what I need, often before I even know I need it. It's like having a creative partner that never sleeps.",
    author: "Sophia Chen",
    role: "Independent Artist & Illustrator",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=256"
  },
  {
    quote: "Our agency has scaled our content production by 4x since implementing NexusFlow. The ROI has been absolutely incredible.",
    author: "Marcus Johnson",
    role: "CEO, Pulse Digital Agency",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=256"
  }
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrev = () => {
    setDirection(-1);
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, 8000);
    };

    startTimer();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-muted/30" id="testimonials">
      <Container>
        <div className="relative">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          
          <div className="text-center mb-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of creative professionals who have transformed their workflow with NexusFlow.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-4xl mx-auto px-8">
            <div className="absolute top-10 left-0 -translate-x-1/2">
              <Quote className="h-16 w-16 text-primary/10 rotate-180" />
            </div>
            
            <div className="min-h-[300px] flex items-center justify-center">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl italic mb-8 relative z-10">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 mb-4 border-2 border-primary/20">
                      <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                      <AvatarFallback>{testimonials[current].author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonials[current].author}</h4>
                      <p className="text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="absolute right-0 top-10 translate-x-1/2">
              <Quote className="h-16 w-16 text-primary/10" />
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="ghost" 
                size="icon"
                onClick={goToPrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current ? "w-8 bg-primary" : "w-2 bg-primary/30"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost" 
                size="icon"
                onClick={goToNext}
                className="rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}