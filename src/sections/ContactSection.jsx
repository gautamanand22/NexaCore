import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle,
    Linkedin,
    Twitter,
    Facebook,
    Youtube
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const formRef = useRef(null)
    const infoRef = useRef(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const services = [
        'Cloud Migration',
        'Cybersecurity',
        'Custom Software Development',
        'Mobile App Development',
        'Data Analytics',
        'AI & Machine Learning',
        'Digital Transformation',
        'IT Consulting'
    ]

    useEffect(() => {
        const section = sectionRef.current

        // Title animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        )

        // Form animation
        gsap.fromTo(formRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                }
            }
        )

        // Info animation
        gsap.fromTo(infoRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                }
            }
        )

        // Form field animations
        const formFields = formRef.current?.querySelectorAll('.form-field')
        if (formFields) {
            formFields.forEach((field) => {
                const input = field.querySelector('input, textarea, select')
                const label = field.querySelector('label')

                input?.addEventListener('focus', () => {
                    gsap.to(field, { scale: 1.02, duration: 0.2 })
                    gsap.to(label, { color: '#2563eb', duration: 0.2 })
                })

                input?.addEventListener('blur', () => {
                    gsap.to(field, { scale: 1, duration: 0.2 })
                    if (!input.value) {
                        gsap.to(label, { color: '#6b7280', duration: 0.2 })
                    }
                })
            })
        }
    }, [])

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)

            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false)
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    service: '',
                    message: ''
                })
            }, 3000)
        }, 2000)
    }

    return (
        <section id="contact" ref={sectionRef} className="contact-bg py-32 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-orange-500/20 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-indigo-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom px-6 relative z-10">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-24">
                    <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 font-semibold text-sm rounded-full mb-8 border border-orange-500/30 backdrop-blur-sm">
                        💬 Get In Touch
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">
                        Let's Transform Your{' '}
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">Business Together</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to take your business to the next level? Our experts are here to help you
                        navigate your digital transformation journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 mb-20">
                    {/* Contact Form */}
                    <div ref={formRef} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
                        <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>

                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
                                <p className="text-gray-300">
                                    Your message has been sent successfully. We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="form-field">
                                        <label className="block text-gray-300 text-sm font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label className="block text-gray-300 text-sm font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="form-field">
                                        <label className="block text-gray-300 text-sm font-medium mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your company name"
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label className="block text-gray-300 text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Service of Interest
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="" className="bg-gray-800">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service} className="bg-gray-800">
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-field">
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project or requirements"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div ref={infoRef} className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Call Us</h4>
                                        <p className="text-gray-300">+91 7979 831 185</p>
                                        <p className="text-gray-400 text-sm">24/7 Support Available</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email Us</h4>
                                        <p className="text-gray-300">gautamanand@nexacoreconsultancy.com</p>
                                        <p className="text-gray-400 text-sm">Response within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                                        <p className="text-gray-300">2nd Floor, Building 270</p>
                                        <p className="text-gray-300">opposite Shivam Public School</p>
                                        <p className="text-gray-300">Patliputra Colony, Patna, Bihar 800013, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-400 hover:text-white transition-all duration-300">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-800 hover:text-white transition-all duration-300">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300">
                                        <Youtube className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Find Us</h3>
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
                        {/* Google Maps direct business search */}
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=NexaCore%20Consultancy%20Services%20Patna%20Bihar+(NexaCore%20Consultancy%20Services)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="NexaCore Consultancy Services - Google My Business"
                        />

                        {/* Custom Business Marker with Company Name */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none z-10">
                            <div className="relative flex flex-col items-center">
                                {/* Company Name Highlight - Above Marker */}
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl shadow-2xl mb-2 border-2 border-white">
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-yellow-300">🏢 NexaCore Consultancy Services</p>
                                        <p className="text-xs text-gray-200 mt-1">2nd Floor, Building 270</p>
                                        <p className="text-xs text-orange-300">📍 Exact Location</p>
                                    </div>
                                    {/* Arrow pointing down to marker */}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-blue-600"></div>
                                </div>
                                {/* Blue Marker Pin for Exact Location */}
                                <div className="relative animate-bounce">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    {/* Pin shadow with glow */}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-6 h-3 bg-blue-600/30 rounded-full blur-md"></div>
                                </div>
                            </div>
                        </div>

                        {/* Verification Badge */}
                        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-lg border border-white">
                            ✅ Verified Location
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3 text-gray-300">
                            <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-white">NexaCore Consultancy Services</p>
                                <p className="text-sm">2nd Floor, Building 270, opposite Shivam Public School</p>
                                <p className="text-sm">Patliputra Colony, Patna, Bihar 800013, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
