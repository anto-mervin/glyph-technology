"use client"

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Glyph Technologies transformed our digital presence. Their expertise in both design and development is unmatched.",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "The AI solutions provided by Glyph have significantly improved our operational efficiency.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLabs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "Working with Glyph has been a game-changer for our business. Their attention to detail is remarkable.",
  },
]

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const contentRef = useRef(null)

  useEffect(() => {
    if (inView) {
      gsap.from(contentRef.current?.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
    }
  }, [inView])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div ref={ref} className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-raleway mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}