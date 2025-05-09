"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  ChevronUp,
  ChevronDown,
  Clock,
  MapPin,
  Pizza,
  Briefcase,
  Users,
  Music,
  Coffee,
  Heart,
  Share2,
  Calendar,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SuccessAnimation } from "@/components/ui/success-animation"
import { cn } from "@/lib/utils"

// Sample event data with images
const events = [
  {
    id: 1,
    title: "Career Mixer",
    location: "Student Union",
    time: "Starting in 15 min",
    distance: "Next door",
    perks: ["Free Pizza"],
    category: "Career",
    icon: Briefcase,
    color: "bg-primary text-white",
    attendees: 42,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Network with top companies and enjoy free refreshments. Perfect opportunity to explore internship and job opportunities.",
  },
  {
    id: 2,
    title: "Jazz Night",
    location: "Arts Building",
    time: "Today, 7:00 PM",
    distance: "5 min walk",
    perks: ["Live Music"],
    category: "Music",
    icon: Music,
    color: "bg-secondary text-white",
    attendees: 78,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Enjoy a night of smooth jazz performed by the university's jazz ensemble. Open to all students and faculty.",
  },
  {
    id: 3,
    title: "Study Group: Computer Science",
    location: "Library, Room 204",
    time: "Today, 4:00 PM",
    distance: "10 min walk",
    perks: ["Free Coffee"],
    category: "Academic",
    icon: Coffee,
    color: "bg-accent-blue text-white",
    attendees: 15,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Join fellow CS students to prepare for upcoming exams. Topics include data structures, algorithms, and system design.",
  },
]

export default function EventFeed() {
  const [expanded, setExpanded] = useState(false)
  const [rsvpStatus, setRsvpStatus] = useState<Record<number, boolean>>({})
  const [showRsvpSuccess, setShowRsvpSuccess] = useState<Record<number, boolean>>({})
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)

  const toggleRSVP = (eventId: number) => {
    if (!rsvpStatus[eventId]) {
      setShowRsvpSuccess({ ...showRsvpSuccess, [eventId]: true })

      // Hide success animation after 2 seconds
      setTimeout(() => {
        setShowRsvpSuccess({ ...showRsvpSuccess, [eventId]: false })
      }, 2000)
    }

    setRsvpStatus((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return
    setCurrentX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isSwiping) return

    const diff = startX - currentX
    const threshold = 50 // minimum distance to trigger a swipe

    if (diff > threshold && activeCardIndex < events.length - 1) {
      // Swiped left, go to next card
      setActiveCardIndex(activeCardIndex + 1)
    } else if (diff < -threshold && activeCardIndex > 0) {
      // Swiped right, go to previous card
      setActiveCardIndex(activeCardIndex - 1)
    }

    setIsSwiping(false)
  }

  // Reset position when active card changes
  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.style.transform = `translateX(-${activeCardIndex * 100}%)`
    }
  }, [activeCardIndex])

  return (
    <div
      className={cn(
        "bg-white rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out momentum-scroll",
        expanded ? "h-[80vh]" : "h-[40vh]",
      )}
    >
      {/* Handle to expand/collapse */}
      <div className="flex justify-center py-3 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="w-12 h-1 bg-gray-200 rounded-full" />
      </div>

      <div className="flex justify-between items-center px-4 mb-3">
        <h2 className="text-xl font-bold">Upcoming Events</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="text-gray-500 mobile-touch-target"
        >
          {expanded ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
        </Button>
      </div>

      <div className="px-3 pb-4 overflow-y-auto max-h-[calc(80vh-80px)] momentum-scroll">
        {/* Smart nudge for the first event */}
        <div className="mb-5 bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-2xl border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Pizza className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">
                Free pizza + career mixer next door in 15 min — want to go?
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button
                  size="sm"
                  className={cn(
                    "bg-primary hover:bg-primary/90 text-white rounded-full px-4 transition-all duration-200 mobile-touch-target",
                    rsvpStatus[1] ? "bg-accent-green hover:bg-accent-green/90" : "",
                  )}
                  onClick={() => toggleRSVP(1)}
                >
                  {showRsvpSuccess[1] ? (
                    <SuccessAnimation size="sm" className="mr-1" />
                  ) : rsvpStatus[1] ? (
                    "Going ✓"
                  ) : (
                    "I'll go!"
                  )}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full px-4 border-gray-200 mobile-touch-target">
                  Maybe later
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Swipeable event cards */}
        <div className="relative overflow-hidden">
          <div
            ref={cardsRef}
            className="flex transition-transform duration-300 ease-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {events.map((event) => (
              <Card
                key={event.id}
                className="flex-shrink-0 w-full overflow-hidden rounded-2xl border-none shadow-md mr-4 transition-all duration-200 hover:shadow-lg"
              >
                <CardContent className="p-0">
                  {/* Event image */}
                  <div className="relative h-36 w-full">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className={cn("absolute top-3 left-3 px-3 py-1 rounded-full", event.color)}>
                      <event.icon className="h-3 w-3 mr-1" />
                      {event.category}
                    </Badge>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-bold text-white text-lg">{event.title}</h3>
                      <div className="flex items-center text-xs text-white/90 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>
                          {event.location} • {event.distance}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Event details */}
                  <div className="p-3">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{event.time}</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-1">
                        {event.perks.map((perk) => (
                          <Badge
                            key={perk}
                            variant="secondary"
                            className="text-xs rounded-full px-2 py-0.5 bg-gray-100"
                          >
                            {perk}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{event.attendees} going</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0 mobile-touch-target">
                          <Heart className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0 mobile-touch-target">
                          <Share2 className="h-4 w-4 text-gray-500" />
                        </Button>
                      </div>

                      <Button
                        variant={rsvpStatus[event.id] ? "default" : "outline"}
                        size="sm"
                        className={cn(
                          "rounded-full px-3 transition-all duration-200 mobile-touch-target",
                          rsvpStatus[event.id] ? "bg-accent-green hover:bg-accent-green/90" : "",
                        )}
                        onClick={() => toggleRSVP(event.id)}
                      >
                        {showRsvpSuccess[event.id] ? (
                          <SuccessAnimation size="sm" className="mr-1" />
                        ) : rsvpStatus[event.id] ? (
                          "Going ✓"
                        ) : (
                          "RSVP"
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-3">
            {events.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full mx-1 transition-all duration-200",
                  activeCardIndex === index ? "bg-primary w-4" : "bg-gray-300",
                )}
                onClick={() => setActiveCardIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Upcoming events section (visible when expanded) */}
        {expanded && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">This Week</h3>
            <div className="space-y-3">
              {events.map((event) => (
                <div
                  key={`list-${event.id}`}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className={cn("p-2 rounded-xl", event.color)}>
                    <event.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Button
                    variant={rsvpStatus[event.id] ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "rounded-full h-8 min-w-[70px] mobile-touch-target",
                      rsvpStatus[event.id] ? "bg-accent-green hover:bg-accent-green/90" : "",
                    )}
                    onClick={() => toggleRSVP(event.id)}
                  >
                    {rsvpStatus[event.id] ? "Going" : "RSVP"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
