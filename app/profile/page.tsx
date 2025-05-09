import { ArrowLeft, Edit, Bell, MapPin, BookOpen, Coffee, Music, Code, Settings, LogOut, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import BottomNavigation from "@/components/bottom-navigation"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="glass-effect p-3 flex items-center justify-between sticky top-0 z-10">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200 mobile-touch-target"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <Logo size="sm" />
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200 mobile-touch-target"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1 p-4 space-y-5 pb-20 max-w-lg mx-auto w-full momentum-scroll">
        {/* Profile header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              JS
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white shadow-md hover:bg-gray-50 active:scale-95 transition-all duration-200 mobile-touch-target"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold">Jamie Smith</h2>
            <p className="text-gray-500 text-sm">Computer Science, Junior</p>
            <div className="flex items-center justify-center text-sm text-gray-500 mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>North Campus</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="rounded-full px-4 border-gray-200 flex items-center gap-2 mobile-touch-target"
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="rounded-xl border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-gray-500">Events Attended</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-accent-pink">5</p>
              <p className="text-xs text-gray-500">Upcoming RSVPs</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-accent-green">8</p>
              <p className="text-xs text-gray-500">Interests</p>
            </CardContent>
          </Card>
        </div>

        {/* Interests */}
        <Card className="rounded-xl border-none shadow-sm overflow-hidden">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg">My Interests</h3>
              <Button variant="ghost" size="sm" className="text-xs text-primary h-8 rounded-lg mobile-touch-target">
                Edit
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1"
              >
                <Code className="h-3 w-3 mr-1" />
                Computer Science
              </Badge>
              <Badge
                variant="secondary"
                className="bg-accent-pink/10 text-accent-pink hover:bg-accent-pink/20 rounded-full px-3 py-1"
              >
                <Music className="h-3 w-3 mr-1" />
                Music
              </Badge>
              <Badge
                variant="secondary"
                className="bg-accent-yellow/10 text-accent-yellow hover:bg-accent-yellow/20 rounded-full px-3 py-1"
              >
                <Coffee className="h-3 w-3 mr-1" />
                Coffee
              </Badge>
              <Badge
                variant="secondary"
                className="bg-accent-green/10 text-accent-green hover:bg-accent-green/20 rounded-full px-3 py-1"
              >
                <BookOpen className="h-3 w-3 mr-1" />
                Study Groups
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Classes */}
        <Card className="rounded-xl border-none shadow-sm overflow-hidden">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg">My Classes</h3>
              <Button variant="ghost" size="sm" className="text-xs text-primary h-8 rounded-lg mobile-touch-target">
                Edit
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-sm">CS 301: Data Structures</span>
                <Badge className="bg-primary text-white rounded-full">MWF 10:00 AM</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-sm">MATH 240: Linear Algebra</span>
                <Badge className="bg-accent-pink text-white rounded-full">TR 1:30 PM</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-medium text-sm">PHYS 201: Physics I</span>
                <Badge className="bg-secondary text-white rounded-full">MWF 2:00 PM</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="rounded-xl border-none shadow-sm overflow-hidden">
          <CardContent className="p-4 space-y-3">
            <h3 className="font-bold text-lg">Preferences</h3>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Notification Settings</span>
                <Button variant="ghost" size="sm" className="h-8 gap-1 text-primary rounded-lg mobile-touch-target">
                  <Bell className="h-4 w-4" />
                  <span>Manage</span>
                </Button>
              </div>
              <Separator />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Accessibility Options</span>
                <Button variant="ghost" size="sm" className="h-8 text-primary rounded-lg mobile-touch-target">
                  Customize
                </Button>
              </div>
              <Separator />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Privacy Settings</span>
                <Button variant="ghost" size="sm" className="h-8 text-primary rounded-lg mobile-touch-target">
                  Manage
                </Button>
              </div>
              <Separator />
            </div>

            <Button
              variant="outline"
              className="w-full rounded-xl flex items-center justify-center gap-2 text-gray-500 mt-2 mobile-touch-target"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </CardContent>
        </Card>
      </main>

      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation />
      </div>
    </div>
  )
}
