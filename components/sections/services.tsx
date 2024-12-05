"use client"

import { motion } from 'framer-motion'
import { 
  Globe, 
  Palette, 
  Bot, 
  Cog, 
  ArrowRight,
  Zap,
  Shield,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/ui/animated-icon'

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "SEO Optimization", "Performance First"],
  },
  {
    icon: Palette,
    title: "Website Design",
    description: "Beautiful, responsive designs that engage users and drive conversions.",
    features: ["UI/UX Design", "Brand Identity", "Prototyping"],
  },
  {
    icon: Bot,
    title: "AI/ML Projects",
    description: "Intelligent solutions powered by cutting-edge machine learning algorithms.",
    features: ["Data Analysis", "Predictive Models", "Automation"],
  },
  {
    icon: Cog,
    title: "Web Automation",
    description: "Streamline your workflows with intelligent automation solutions.",
    features: ["Process Automation", "Integration", "Monitoring"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-raleway mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help your business thrive in the modern age.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AnimatedIcon icon={service.icon} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6">
            <Shield className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-muted-foreground">Built with security best practices</p>
          </div>
          <div className="p-6">
            <Users className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-muted-foreground">Dedicated professionals</p>
          </div>
          <div className="p-6">
            <Zap className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">Quick turnaround time</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}