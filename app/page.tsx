import { Suspense } from "react"
import CampusMap from "@/components/campus-map"
import EventFeed from "@/components/event-feed"
import BottomNavigation from "@/components/bottom-navigation"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Logo } from "@/components/logo"
import { SplashScreen } from "@/components/splash-screen"

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-white overflow-hidden">
      <header className="glass-effect p-3 flex items-center justify-center sticky top-0 z-20">
        <Logo size="md" />
      </header>
      <div className="flex-1 relative overflow-hidden">
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <LoadingSpinner size="lg" />
            </div>
          }
        >
          <CampusMap />
        </Suspense>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Suspense
            fallback={
              <div className="h-[35vh] w-full bg-white rounded-t-3xl flex items-center justify-center">
                <LoadingSpinner />
              </div>
            }
          >
            <EventFeed />
          </Suspense>
        </div>
      </div>
      <BottomNavigation />
      <SplashScreen />
    </main>
  )
}
