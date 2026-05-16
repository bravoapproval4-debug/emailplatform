'use client'

import { useEffect } from 'react'

export default function CardAnimations() {
  useEffect(() => {
    const cards = document.querySelectorAll('.animate-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            entry.target.classList.remove('will-animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )

    cards.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (alreadyVisible) {
        // Already visible on first load — show immediately, no animation needed
        el.classList.add('in-view')
      } else {
        // Off-screen — hide and animate when scrolled into view
        el.classList.add('will-animate')
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
