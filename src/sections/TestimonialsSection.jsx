import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TestimonialsSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const carouselRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: 'John Martinez',
            role: 'CEO',
            company: 'TechFlow Industries',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            rating: 5,
            content: 'NexaCore transformed our entire IT infrastructure with zero downtime. Their cloud migration strategy saved us 40% on operational costs while improving our system performance dramatically. The team\'s expertise and professionalism exceeded all our expectations.',
            project: 'Cloud Infrastructure Modernization',
            results: ['40% Cost Reduction', '99.9% Uptime', '60% Performance Boost']
        },
        {
            id: 2,
            name: 'Sarah Chen',
            role: 'CTO',
            company: 'Healthcare Plus',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            rating: 5,
            content: 'The custom healthcare management system developed by NexaCore revolutionized our patient care process. We\'ve seen a 50% improvement in efficiency and our patients love the new digital experience. Outstanding work!',
            project: 'Healthcare Management System',
            results: ['50% Efficiency Gain', '95% Patient Satisfaction', 'HIPAA Compliant']
        },
        {
            id: 3,
            name: 'Michael Thompson',
            role: 'Managing Director',
            company: 'RetailMax Group',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            rating: 5,
            content: 'NexaCore\'s e-commerce platform transformation exceeded our wildest expectations. Online sales increased by 75% within the first quarter, and the customer experience is now best-in-class. Incredible ROI!',
            project: 'E-commerce Platform Overhaul',
            results: ['75% Sales Increase', '65% Better UX', '3x Faster Loading']
        },
        {
            id: 4,
            name: 'Lisa Rodriguez',
            role: 'VP of Operations',
            company: 'FinanceFirst Bank',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            rating: 5,
            content: 'The AI-powered analytics platform delivered by NexaCore has transformed how we make business decisions. Real-time insights and predictive analytics have improved our operational efficiency by 45%. Game-changing solution!',
            project: 'Financial Analytics Platform',
            results: ['45% Efficiency Boost', 'Real-time Insights', '92% Accuracy']
        },
        {
            id: 5,
            name: 'David Park',
            role: 'Chief Information Officer',
            company: 'Manufacturing Pro',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            rating: 5,
            content: 'NexaCore\'s IoT solution for our manufacturing processes has been phenomenal. Predictive maintenance reduced our downtime by 60%, and the quality control improvements are remarkable. Exceptional partnership!',
            project: 'Smart Manufacturing IoT',
            results: ['60% Less Downtime', 'Predictive Maintenance', '30% Quality Boost']
        },
        {
            id: 6,
            name: 'Amanda Wilson',
            role: 'Founder & CEO',
            company: 'EduTech Solutions',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
            rating: 5,
            content: 'The learning management platform created by NexaCore supports over 100,000 students globally. The scalability, performance, and user experience are outstanding. They truly understood our vision and delivered beyond expectations.',
            project: 'Global Learning Platform',
            results: ['100K+ Students', 'Global Scalability', '95% User Satisfaction']
        }
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

        // Auto-rotate testimonials
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [testimonials.length])

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToTestimonial = (index) => {
        setCurrentIndex(index)
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ))
    }

    return (
        <section id="testimonials" ref={sectionRef} className="testimonials-bg py-32 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-tl from-orange-400/15 to-pink-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom px-6 relative z-10">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-24">
                    <span className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full mb-8 border border-blue-200">
                        ⭐ Client Success Stories
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
                        What Our Clients{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Say About Us</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Don't just take our word for it. Hear from the <span className="font-semibold text-blue-600">businesses we've helped transform</span>
                        with our innovative technology solutions.
                    </p>
                </div>

                {/* Main Testimonial Carousel */}
                <div className="relative mb-16">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto">
                        {/* Quote Icon */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                                <Quote className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="text-center mb-8">
                            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                                "{testimonials[currentIndex].content}"
                            </blockquote>

                            {/* Rating */}
                            <div className="flex justify-center mb-6">
                                {renderStars(testimonials[currentIndex].rating)}
                            </div>
                        </div>

                        {/* Client Info */}
                        <div className="flex items-center justify-center space-x-6">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                            />
                            <div className="text-center">
                                <div className="font-bold text-gray-900 text-lg">
                                    {testimonials[currentIndex].name}
                                </div>
                                <div className="text-blue-600 font-medium">
                                    {testimonials[currentIndex].role}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <Building2 className="w-4 h-4 mr-1" />
                                    {testimonials[currentIndex].company}
                                </div>
                            </div>
                        </div>

                        {/* Project Results */}
                        <div className="mt-10 grid md:grid-cols-3 gap-6">
                            {testimonials[currentIndex].results.map((result, index) => (
                                <div key={index} className="text-center bg-gray-50 rounded-lg p-6">
                                    <div className="text-blue-600 font-semibold">{result}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Testimonial Dots */}
                <div className="flex justify-center space-x-2 mb-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-blue-600 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Client Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${index === currentIndex ? 'ring-2 ring-blue-500' : ''
                                }`}
                            onClick={() => goToTestimonial(index)}
                        >
                            <div className="text-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-gray-100"
                                />
                                <div className="font-semibold text-gray-900 text-sm mb-1">
                                    {testimonial.name}
                                </div>
                                <div className="text-blue-600 text-xs font-medium mb-2">
                                    {testimonial.company}
                                </div>
                                <div className="flex justify-center">
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Join Our Success Stories?
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business and create your own success story.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                            Get Your Free Consultation
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                            View More Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
