"use client"

import { Home, Map, Calendar, Bell, User } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Map, label: "Map", path: "/map" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: Bell, label: "Alerts", path: "/notifications" },
  { icon: User, label: "Profile", path: "/profile" },
]

export default function BottomNavigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(0)

  // Set active tab based on current path
  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === pathname)
    if (index !== -1) {
      setActiveTab(index)
    }
  }, [pathname])

  const handleNavigation = (path: string, index: number) => {
    setActiveTab(index)
    router.push(path)
  }

  return (
    <div className="glass-effect border-t border-gray-100 py-2 px-2 animate-slide-in mobile-safe-area">
      <div className="flex justify-between items-center">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            className={cn(
              "flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 mobile-touch-target",
              activeTab === index ? "text-primary scale-105" : "text-gray-400 hover:text-gray-600 active:scale-95",
            )}
            onClick={() => handleNavigation(item.path, index)}
          >
            <div
              className={cn(
                "relative flex items-center justify-center",
                activeTab === index &&
                  "after:content-[''] after:absolute after:-bottom-1 after:w-1.5 after:h-1.5 after:bg-primary after:rounded-full",
              )}
            >
              <item.icon className={cn("h-5 w-5 transition-all", activeTab === index && "stroke-[2.5px]")} />
            </div>
            <span className={cn("text-xs mt-1 font-medium transition-all", activeTab === index && "font-semibold")}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
