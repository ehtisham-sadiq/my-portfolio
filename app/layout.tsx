import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Calendar } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ehtisham Sadiq - Senior AI/ML Engineer",
  description:
    "Portfolio of Ehtisham Sadiq, a Senior AI/ML Engineer specializing in machine learning applications and data engineering.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
            <a
              href="https://calendly.com/your-calendly-username/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-indigo-400 dark:border-indigo-700 animate-pulse hover:animate-none"
              aria-label="Schedule a meeting"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-base font-bold">Schedule a 1:1 Meeting</span>
            </a>
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'