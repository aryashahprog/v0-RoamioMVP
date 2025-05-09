import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SuccessAnimationProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function SuccessAnimation({ size = "md", className }: SuccessAnimationProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className={cn("absolute animate-ping rounded-full bg-accent-green/50", sizeClasses[size])} />
      <div
        className={cn("flex items-center justify-center rounded-full bg-accent-green text-white", sizeClasses[size])}
      >
        <Check className={size === "sm" ? "h-3 w-3" : size === "md" ? "h-5 w-5" : "h-8 w-8"} />
      </div>
    </div>
  )
}
