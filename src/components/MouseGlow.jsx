import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e) => {
      el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] z-0 hidden md:block transition-transform duration-300 ease-out"
      aria-hidden="true"
    />
  )
}
