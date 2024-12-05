"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Code, Cpu } from 'lucide-react'
import { AnimatedText } from '@/components/ui/animated-text'

export function HeroSection() {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text="Innovating the Web"
            className="text-4xl md:text-6xl font-bold mb-2 font-raleway"
            gradient
          />
          <AnimatedText
            text="Empowering with AI"
            className="text-4xl md:text-6xl font-bold mb-6 font-raleway"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          We transform ideas into powerful digital solutions, combining cutting-edge web development 
          with advanced AI technology to drive your business forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="group">
            View Our Work
            <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-20 left-20">
            <Code className="h-8 w-8 text-primary/20 animate-pulse" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Cpu className="h-8 w-8 text-primary/20 animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-glyph-purple-light/10 via-transparent to-glyph-purple-dark/10" />
        </motion.div>
      </div>
    </section>
  )
}