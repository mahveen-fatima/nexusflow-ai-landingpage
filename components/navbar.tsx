"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Layers } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > (previous ?? 0) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navVariants = {
    visible: {
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hidden: {
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Showcase", href: "#showcase" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ];

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <motion.header
        variants={navVariants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40"
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Layers className="w-6 h-6" />
              <span>NexusFlow</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button>Get Started</Button>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </Container>
      </motion.header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Layers className="w-6 h-6" />
              <span>NexusFlow</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground text-lg py-2 transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-4">Get Started</Button>
          </nav>
        </div>
      )}
    </>
  );
}