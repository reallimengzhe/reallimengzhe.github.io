import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, duration = 1000 }) {
  const [displayValue, setDisplayValue] = useState(0)
  const startTime = useRef(null)
  const startValue = useRef(displayValue)

  useEffect(() => {
    startTime.current = performance.now()
    startValue.current = displayValue

    const animate = currentTime => {
      if (!startTime.current) return

      const elapsed = currentTime - startTime.current
      const progress = Math.min(elapsed / duration, 1)

      setDisplayValue(Math.floor(startValue.current + (value - startValue.current) * progress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration])

  return <span>{displayValue.toLocaleString()}</span>
}
