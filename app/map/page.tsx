import { Suspense } from "react"
import CampusMap from "@/components/campus-map"
import BottomNavigation from "@/components/bottom-navigation"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Button } from "@/components/ui/button"
import { ArrowLeft, List } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function MapPage() {
  return (
    <main className="flex flex-col h-screen bg-white overflow-hidden">
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
          <List className="h-5 w-5" />
        </Button>
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
      </div>

      <BottomNavigation />
    </main>
  )
}
