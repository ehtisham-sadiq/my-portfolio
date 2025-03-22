"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import ChatInterface from "./ChatInterface"

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setIsChatOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Chat with Me
        <MessageSquare className="w-4 h-4" />
      </motion.button>

      {isChatOpen && (
        <ChatInterface 
          onClose={() => setIsChatOpen(false)} 
        />
      )}
    </>
  )
} 