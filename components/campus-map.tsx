"use client"

import { useState, useEffect } from "react"
import { MapPin, Navigation, ShipWheelIcon as Wheelchair, Search, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function CampusMap() {
  const [showAccessibleRoutes, setShowAccessibleRoutes] = useState(false)
  const [mapStyle, setMapStyle] = useState("standard")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-full w-full bg-neutral-100 overflow-hidden">
      {/* Map loading state */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-sm font-medium text-gray-600">Loading campus map...</p>
          </div>
        </div>
      )}

      {/* Map placeholder */}
      <div className="h-full w-full bg-[url('/placeholder.svg?height=800&width=600')] bg-cover bg-center transition-all duration-500">
        {/* Map pins with animations */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-scale">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary opacity-20 animate-ping"></div>
            <MapPin className="h-8 w-8 text-primary drop-shadow-md" />
          </div>
        </div>
        <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-secondary opacity-20"></div>
            <MapPin className="h-8 w-8 text-secondary drop-shadow-md" />
          </div>
        </div>

        {/* Accessible route indicator (shown when toggle is on) */}
        {showAccessibleRoutes && (
          <div className="absolute top-1/2 left-[40%] right-[40%] h-1 bg-accent-green rounded-full shadow-md animate-fade-in" />
        )}
      </div>

      {/* Map controls */}
      <div className="absolute top-24 right-3 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 active:scale-95 mobile-touch-target"
        >
          <Navigation className="h-4 w-4 text-gray-700" />
        </Button>

        <Toggle
          pressed={showAccessibleRoutes}
          onPressedChange={setShowAccessibleRoutes}
          className="rounded-full bg-white shadow-lg data-[state=on]:bg-accent-green/10 data-[state=on]:text-accent-green transition-all duration-200 hover:bg-gray-50 active:scale-95 mobile-touch-target"
          aria-label="Show accessible routes"
        >
          <Wheelchair className="h-4 w-4" />
        </Toggle>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 active:scale-95 mobile-touch-target"
            >
              <Layers className="h-4 w-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40 rounded-xl">
            <DropdownMenuItem
              className={cn("rounded-lg cursor-pointer", mapStyle === "standard" && "bg-gray-100")}
              onClick={() => setMapStyle("standard")}
            >
              Standard
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn("rounded-lg cursor-pointer", mapStyle === "satellite" && "bg-gray-100")}
              onClick={() => setMapStyle("satellite")}
            >
              Satellite
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn("rounded-lg cursor-pointer", mapStyle === "transit" && "bg-gray-100")}
              onClick={() => setMapStyle("transit")}
            >
              Transit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search bar */}
      <div className="absolute top-4 left-3 right-16 z-10">
        <div className={cn("relative transition-all duration-300", isSearchFocused ? "scale-105" : "scale-100")}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search buildings, events..."
            className="w-full h-10 pl-10 pr-4 py-2 bg-white rounded-full shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </div>
    </div>
  )
}
