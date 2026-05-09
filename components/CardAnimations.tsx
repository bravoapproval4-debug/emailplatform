'use client'

import { useEffect } from 'react'

export default function CardAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.animate-card').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
