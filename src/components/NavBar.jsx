import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ]

    useEffect(() => {
        // GSAP fade-in animation on load
        gsap.fromTo('.navbar',
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
        )

        // Scroll event listener
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    return (
        <nav className={`navbar fixed ${isScrolled ? 'top-0' : 'top-10'} left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-lg backdrop-blur-md'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className={`transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-white'
                                }`}>
                                <div className="text-2xl md:text-3xl font-bold">
                                    NexaCore
                                </div>
                                <div className={`text-xs md:text-sm font-medium opacity-80 -mt-1 ${isScrolled ? 'text-gray-600' : 'text-gray-300'
                                    }`}>
                                    Consultancy Services
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${isScrolled
                                        ? 'text-gray-700 hover:text-blue-600'
                                        : 'text-white hover:text-blue-200'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md w-full text-left transition-colors duration-300"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('#contact')}
                        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar