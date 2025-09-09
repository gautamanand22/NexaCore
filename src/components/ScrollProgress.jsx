import React, { useState, useEffect } from 'react'

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            // Get the current scroll position
            const scrollTop = window.scrollY

            // Get total scrollable height
            const documentHeight = document.documentElement.scrollHeight
            const windowHeight = window.innerHeight
            const totalScrollable = documentHeight - windowHeight

            if (totalScrollable > 0) {
                // Calculate progress percentage
                const progress = (scrollTop / totalScrollable) * 100
                // Ensure progress is between 0 and 100
                setScrollProgress(Math.max(0, Math.min(100, progress)))
            } else {
                setScrollProgress(0)
            }
        }

        // Initial calculation
        updateScrollProgress()

        // Debounced scroll handler for better performance
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateScrollProgress()
                    ticking = false
                })
                ticking = true
            }
        }

        // Add event listeners
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', updateScrollProgress, { passive: true })
        window.addEventListener('load', updateScrollProgress, { passive: true })

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateScrollProgress)
            window.removeEventListener('load', updateScrollProgress)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all duration-150 ease-out shadow-sm"
                style={{
                    width: `${scrollProgress}%`,
                    opacity: scrollProgress > 0 ? 1 : 0
                }}
            />
        </div>
    )
}

export default ScrollProgress
