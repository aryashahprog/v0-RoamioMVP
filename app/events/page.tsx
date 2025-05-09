import { ArrowLeft, Filter, Search, Calendar, Clock, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import BottomNavigation from "@/components/bottom-navigation"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="glass-effect p-4 flex items-center justify-between sticky top-0 z-10">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <Logo size="sm" showIcon={false} />
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
        >
          <Filter className="h-5 w-5" />
        </Button>
      </header>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full h-12 pl-12 pr-4 py-2 bg-white rounded-full shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      <Tabs defaultValue="for-you" className="flex-1">
        <div className="px-4">
          <TabsList className="grid w-full grid-cols-3 rounded-full p-1 bg-gray-100">
            <TabsTrigger
              value="for-you"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              For You
            </TabsTrigger>
            <TabsTrigger
              value="today"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              Today
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              Upcoming
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="for-you" className="p-4 space-y-4 pb-20 animate-slide-up">
          <h2 className="text-xl font-bold px-1">Recommended For You</h2>

          {/* Event cards */}
          <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
            <CardContent className="p-0">
              <div className="relative h-40 w-full">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="CS Department Mixer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent-green text-white">
                  Academic
                </Badge>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg">CS Department Mixer</h3>
                  <div className="flex items-center text-xs text-white/90 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Computer Science Building, Room 105</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Tomorrow, May 5th</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>4:00 PM - 6:00 PM</span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  Meet professors and fellow students from the CS department. Refreshments will be provided.
                </p>

                <div className="flex justify-between items-center mt-4">
                  <Badge variant="outline" className="rounded-full">
                    42 attending
                  </Badge>
                  <Button
                    size="sm"
                    className="rounded-full px-4 bg-primary hover:bg-primary/90 transition-all duration-200"
                  >
                    RSVP
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
            <CardContent className="p-0">
              <div className="relative h-40 w-full">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Campus Concert Series"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent-pink text-white">Music</Badge>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg">Campus Concert Series</h3>
                  <div className="flex items-center text-xs text-white/90 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Student Union Amphitheater</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Friday, May 7th</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>7:00 PM - 10:00 PM</span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  Live performances from student bands and special guest artists. Free admission with student ID.
                </p>

                <div className="flex justify-between items-center mt-4">
                  <Badge variant="outline" className="rounded-full">
                    128 attending
                  </Badge>
                  <Button
                    size="sm"
                    className="rounded-full px-4 bg-primary hover:bg-primary/90 transition-all duration-200"
                  >
                    RSVP
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
            <CardContent className="p-0">
              <div className="relative h-40 w-full">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Study Group: Linear Algebra"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent-blue text-white">Study</Badge>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg">Study Group: Linear Algebra</h3>
                  <div className="flex items-center text-xs text-white/90 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Library, Study Room 204</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Today</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>6:00 PM - 8:00 PM</span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  Preparing for the upcoming exam. Bring your questions and notes. Coffee provided!
                </p>

                <div className="flex justify-between items-center mt-4">
                  <Badge variant="outline" className="rounded-full">
                    15 attending
                  </Badge>
                  <Button
                    size="sm"
                    className="rounded-full px-4 bg-primary hover:bg-primary/90 transition-all duration-200"
                  >
                    RSVP
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="rounded-full px-6 border-gray-200 flex items-center gap-2">
              <span>View More</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="today" className="p-4 space-y-4 pb-20 animate-slide-up">
          <h2 className="text-xl font-bold px-1">Today's Events</h2>
          {/* Today's events would go here */}
          <Card className="rounded-xl border-none shadow-sm overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="rounded-full bg-gray-100 p-6">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium">No events scheduled for today</p>
                  <p className="text-sm text-gray-400 mt-1">Check back later or browse upcoming events</p>
                </div>
                <Button className="mt-2 rounded-full px-6 bg-primary hover:bg-primary/90 transition-all duration-200">
                  Browse All Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="p-4 space-y-4 pb-20 animate-slide-up">
          <h2 className="text-xl font-bold px-1">Upcoming Events</h2>
          {/* Upcoming events would go here */}
          <div className="space-y-3">
            <div className="px-2 py-1 text-sm font-semibold text-gray-500">Tomorrow</div>

            <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-accent-green/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">CS Department Mixer</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>4:00 PM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Computer Science Building</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="self-center rounded-full px-4 bg-primary hover:bg-primary/90 transition-all duration-200"
                  >
                    RSVP
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="px-2 py-1 text-sm font-semibold text-gray-500">Friday, May 7th</div>

            <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-accent-pink/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-accent-pink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Campus Concert Series</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>7:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Student Union Amphitheater</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="self-center rounded-full px-4 bg-primary hover:bg-primary/90 transition-all duration-200"
                  >
                    RSVP
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="px-2 py-1 text-sm font-semibold text-gray-500">Next Week</div>

            <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Career Fair</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>Main Gymnasium</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="self-center rounded-full px-4 bg-primary hover:bg-primary/90 transition-all duration-200"
                  >
                    RSVP
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation />
      </div>
    </div>
  )
}
