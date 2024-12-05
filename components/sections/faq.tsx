"use client"

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, and various AI/ML frameworks. Our team stays up-to-date with the latest developments to ensure we deliver cutting-edge solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various maintenance and support packages to ensure your digital solutions continue to perform optimally after launch. This includes regular updates, monitoring, and technical support.",
  },
  {
    question: "What makes Glyph Technologies different?",
    answer: "We combine technical expertise with creative innovation, focusing on delivering solutions that not only meet current needs but are also scalable for future growth. Our integrated approach to web development and AI sets us apart.",
  },
]

export function FaqSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const contentRef = useRef(null)

  useEffect(() => {
    if (inView) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      })
    }
  }, [inView])

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div ref={ref} className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-raleway mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>
        <div ref={contentRef}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}