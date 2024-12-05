"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
}

export function AnimatedIcon({ icon: Icon, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Icon className="h-6 w-6" />
    </motion.div>
  )
}