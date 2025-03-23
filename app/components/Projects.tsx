"use client"

import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="Projects" />
        {/* Add your projects content here */}
      </div>
    </section>
  )
}
