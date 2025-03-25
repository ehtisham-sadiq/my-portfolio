"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize theme based on user preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check local storage or system preference
      const isDark = localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
      
      setDarkMode(isDark)
      
      // Apply theme to document
      document.documentElement.classList.toggle("dark", isDark)
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    // Update document class
    document.documentElement.classList.toggle("dark", newDarkMode)
    
    // Save preference to localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
    </button>
  )
} 