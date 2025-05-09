export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-neutral-50">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500"></div>
    </div>
  )
}
