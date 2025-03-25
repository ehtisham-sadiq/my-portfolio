"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Brain, ArrowRight, ChevronUp } from "lucide-react"

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#featured-projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Background effect
      setScrolled(window.scrollY > 50)
      
      // Show scroll to top button
      setShowScrollTop(window.scrollY > 500)

      // Active section detection
      const sections = navigation.map(item => item.href.substring(1))
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2" 
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center relative">
            {/* Simplified Logo (absolutely positioned) */}
            <Link href="#hero" className="absolute left-0 flex items-center group z-10">
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Simple Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"></div>
                
                {/* Logo Symbol */}
                <div className="relative z-10">
                  <Brain className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Brand Text - Simplified */}
              <div className="ml-2">
                <span className="block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Ehtisham
                </span>
              </div>
            </Link>

            {/* Centered Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center">
              <ul className="flex space-x-0">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 relative group flex items-center ${
                        activeSection === item.href.substring(1)
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                      }`}
                    >
                      {item.name}
                      
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Navigation Toggle (absolutely positioned) */}
            <div className="lg:hidden absolute right-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg lg:hidden"
          >
            <div className="container mx-auto p-4">
              <ul className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.href.substring(1)
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span className="mr-3 text-indigo-500 dark:text-indigo-400">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg z-50"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

