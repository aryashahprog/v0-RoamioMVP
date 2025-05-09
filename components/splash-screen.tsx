"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500",
        show ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="animate-pulse-scale">
        <Logo size="lg" />
      </div>
      <p className="mt-4 text-sm text-gray-500">Your campus companion</p>
    </div>
  )
}
