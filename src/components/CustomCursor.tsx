import React, { useEffect, useState } from 'react'

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('[role="button"]') ||
        target?.closest('.hover-trigger')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', handleElementHover)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleElementHover)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: isHovered ? '#FF6B00' : '#00D2FF',
          boxShadow: isHovered
            ? '0 0 12px #FF6B00'
            : '0 0 10px #00D2FF',
        }}
      />
      {/* Outer Follower Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.8 : isHovered ? 1.6 : 1
          })`,
          width: '36px',
          height: '36px',
          border: isHovered
            ? '1.5px solid rgba(255, 107, 0, 0.65)'
            : '1.5px solid rgba(0, 210, 255, 0.45)',
          backgroundColor: isHovered
            ? 'rgba(255, 107, 0, 0.08)'
            : 'rgba(0, 210, 255, 0.03)',
          boxShadow: isHovered
            ? '0 0 20px rgba(255, 107, 0, 0.25)'
            : '0 0 15px rgba(0, 210, 255, 0.15)',
        }}
      />
    </>
  )
}
