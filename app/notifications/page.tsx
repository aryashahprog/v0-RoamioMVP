import { ArrowLeft, Bell, BellOff, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import BottomNavigation from "@/components/bottom-navigation"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function NotificationsPage() {
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
        <div className="w-9"></div> {/* Spacer for alignment */}
      </header>

      <main className="flex-1 p-5 space-y-6 pb-20 max-w-lg mx-auto w-full">
        {/* Smart Nudges Settings */}
        <Card className="rounded-xl border-none shadow-sm overflow-hidden">
          <CardContent className="p-5 space-y-4">
            <h3 className="font-bold text-lg">Smart Nudges</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium text-sm">Event Recommendations</div>
                <div className="text-xs text-gray-500">Based on your interests and location</div>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-primary" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium text-sm">Nearby Events</div>
                <div className="text-xs text-gray-500">When you're close to an event</div>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-primary" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium text-sm">Free Food Alerts</div>
                <div className="text-xs text-gray-500">When events offer free food</div>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-primary" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">Recent Notifications</h3>
            <Button variant="ghost" size="sm" className="text-xs text-primary h-8 rounded-lg">
              Clear All
            </Button>
          </div>

          <div className="space-y-3">
            <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Career Mixer starting soon!</p>
                  <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
                  >
                    <Check className="h-4 w-4 text-accent-green" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="bg-accent-green/10 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-accent-green" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Your RSVP is confirmed for Study Group: Linear Algebra</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-none shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="bg-accent-pink/10 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-accent-pink" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New event: Campus Concert Series this Friday</p>
                  <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notification Settings */}
        <Card className="rounded-xl border-none shadow-sm overflow-hidden">
          <CardContent className="p-5 space-y-4">
            <h3 className="font-bold text-lg">Notification Settings</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium text-sm">Push Notifications</div>
                <div className="text-xs text-gray-500">Receive alerts on your device</div>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-primary" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium text-sm">Email Notifications</div>
                <div className="text-xs text-gray-500">Receive alerts via email</div>
              </div>
              <Switch className="data-[state=checked]:bg-primary" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium text-sm">Quiet Hours</div>
                <div className="text-xs text-gray-500">No notifications during these hours</div>
              </div>
              <Button variant="outline" size="sm" className="rounded-lg">
                Configure
              </Button>
            </div>

            <Separator />

            <Button
              variant="outline"
              className="w-full rounded-xl flex items-center justify-center gap-2 text-gray-500 mt-2 hover:bg-gray-50 active:scale-98 transition-all duration-200"
            >
              <BellOff className="h-4 w-4" />
              <span>Pause All Notifications</span>
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
