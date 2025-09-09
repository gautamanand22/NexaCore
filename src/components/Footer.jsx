import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowUp,
    Globe,
    Linkedin,
    Twitter,
    Github,
    Instagram,
    Youtube,
    Send
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const footerRef = useRef(null)
    const [email, setEmail] = useState('')
    const [newsletterMessage, setNewsletterMessage] = useState('')
    const [showBackToTop, setShowBackToTop] = useState(false)

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
    ]

    const services = [
        { name: 'IT Consultancy', href: '#it-consultancy' },
        { name: 'Web Development', href: '#web-development' },
        { name: 'Mobile Apps', href: '#mobile-development' },
        { name: 'Cloud Solutions', href: '#cloud-solutions' },
        { name: 'Cybersecurity', href: '#cybersecurity' },
        { name: 'Digital Marketing', href: '#digital-marketing' },
        { name: 'Data Analytics', href: '#data-analytics' },
        { name: 'AI Solutions', href: '#ai-solutions' }
    ]

    const socialLinks = [
        { icon: Linkedin, href: '#', color: 'hover:bg-blue-600', label: 'LinkedIn' },
        { icon: Twitter, href: '#', color: 'hover:bg-blue-400', label: 'Twitter' },
        { icon: Github, href: '#', color: 'hover:bg-gray-700', label: 'GitHub' },
        { icon: Instagram, href: '#', color: 'hover:bg-pink-600', label: 'Instagram' },
        { icon: Youtube, href: '#', color: 'hover:bg-red-600', label: 'YouTube' }
    ]

    const certifications = [
        { name: 'AWS', label: 'Certified Partner', color: 'bg-orange-500' },
        { name: 'Google', label: 'Cloud Partner', color: 'bg-blue-500' },
        { name: 'Microsoft', label: 'Gold Partner', color: 'bg-blue-600' },
        { name: 'ISO', label: '27001 Certified', color: 'bg-gray-600' }
    ]

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '50+', label: 'Happy Clients' },
        { number: '24/7', label: 'Support' }
    ]

    useEffect(() => {
        // Back to top button visibility
        const handleScroll = () => {
            setShowBackToTop(window.pageYOffset > 300)
        }

        window.addEventListener('scroll', handleScroll)

        // Footer animation
        const footerElements = footerRef.current?.querySelectorAll('.footer-section')
        if (footerElements) {
            footerElements.forEach((element, index) => {
                gsap.fromTo(element,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: 'top 80%'
                        }
                    }
                )
            })
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault()
        if (!isValidEmail(email)) {
            setNewsletterMessage('Please enter a valid email address')
            return
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))
            setNewsletterMessage('Successfully subscribed! Welcome aboard!')
            setEmail('')

            setTimeout(() => setNewsletterMessage(''), 5000)
        } catch (error) {
            setNewsletterMessage('Failed to subscribe. Please try again.')
        }
    }

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSmoothScroll = (e, href) => {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <footer ref={footerRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Footer Content */}
                <div className="pt-20 pb-12 border-b border-gray-700/50">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">

                        {/* Company Info */}
                        <div className="footer-section lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                                </div>
                                <h3 className="text-2xl font-bold">NexaCore</h3>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Transforming businesses through innovative technology solutions.
                                We deliver cutting-edge IT services that drive growth and efficiency.
                            </p>

                            {/* Company Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                        <div className="text-lg font-bold text-white">{stat.number}</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Newsletter */}
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                                <h4 className="font-semibold mb-2">Subscribe to Our Newsletter</h4>
                                <p className="text-sm text-gray-300 mb-4">Get the latest tech insights and updates.</p>
                                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-lg hover:from-blue-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                    {newsletterMessage && (
                                        <div className={`text-sm ${newsletterMessage.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                                            {newsletterMessage}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4 className="text-lg font-semibold mb-6 relative">
                                Quick Links
                                <div className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500"></div>
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                            className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block py-1"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-section">
                            <h4 className="text-lg font-semibold mb-6 relative">
                                Our Services
                                <div className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500"></div>
                            </h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block py-1"
                                        >
                                            {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>

                {/* Social Links & Certifications */}
                <div className="py-8 border-b border-gray-700/50">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Social Links */}
                        <div className="footer-section">
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:text-white`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="footer-section">
                            <h4 className="text-lg font-semibold mb-4">Certifications & Awards</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                                        <div className={`w-8 h-8 ${cert.color} rounded flex items-center justify-center text-xs font-bold text-white`}>
                                            {cert.name.substring(0, 2)}
                                        </div>
                                        <div>
                                            <div className="text-white text-xs font-medium">{cert.name}</div>
                                            <div className="text-gray-400 text-xs">{cert.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                © 2024 NexaCore. All rights reserved.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
                                <a href="#privacy" className="text-gray-500 hover:text-white text-xs transition-colors duration-300">
                                    Privacy Policy
                                </a>
                                <a href="#terms" className="text-gray-500 hover:text-white text-xs transition-colors duration-300">
                                    Terms of Service
                                </a>
                                <a href="#cookies" className="text-gray-500 hover:text-white text-xs transition-colors duration-300">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Language Selector */}
                            <div className="relative group">
                                <button className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-300">
                                    <Globe className="w-4 h-4" />
                                    <span className="text-sm">English</span>
                                </button>
                            </div>

                            {/* Back to Top */}
                            {showBackToTop && (
                                <button
                                    onClick={scrollToTop}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    <ArrowUp className="w-4 h-4" />
                                    <span className="text-sm">Top</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300"
                    style={{
                        width: `${Math.min((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
                    }}
                />
            </div>
        </footer>
    )
}

export default Footer
