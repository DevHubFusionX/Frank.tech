import InteractiveCV from '../components/InteractiveCV'
import ThreeBackground from '../components/ThreeBackground'

export default function CVPage() {
  return (
    <div className="min-h-screen relative">
      <ThreeBackground />
      <div className="relative z-20 pt-20">
        <InteractiveCV />
      </div>
    </div>
  )
}