import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Cloud,
    Shield,
    Code,
    Smartphone,
    Database,
    Cpu,
    ArrowRight,
    CheckCircle
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef(null)

    const services = [
        {
            icon: <Cloud className="w-12 h-12" />,
            title: 'Cloud Migration',
            description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
            benefits: ['50% Cost Reduction', '99.9% Uptime', 'Scalable Solutions'],
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: 'Cybersecurity',
            description: 'Advanced threat protection and security audits to safeguard your digital assets.',
            benefits: ['24/7 Monitoring', 'Zero-Trust Security', 'Compliance Ready'],
            image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            icon: <Code className="w-12 h-12" />,
            title: 'Custom Software Development',
            description: 'Bespoke software solutions tailored to your unique business requirements.',
            benefits: ['Faster Development', 'Scalable Architecture', 'Modern Tech Stack'],
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            icon: <Smartphone className="w-12 h-12" />,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that engage and convert users.',
            benefits: ['iOS & Android', 'Cross-Platform', 'App Store Ready'],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            icon: <Database className="w-12 h-12" />,
            title: 'Data Analytics',
            description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
            benefits: ['Real-time Insights', 'Predictive Analytics', 'Custom Dashboards'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            icon: <Cpu className="w-12 h-12" />,
            title: 'AI & Machine Learning',
            description: 'Harness the power of AI to automate processes and enhance decision-making.',
            benefits: ['Process Automation', 'Smart Predictions', 'Efficiency Boost'],
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
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

        // Cards stagger animation
        gsap.fromTo(cardsRef.current.children,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 70%',
                }
            }
        )
    }, [])

    return (
        <section id="services" ref={sectionRef} className="services-bg py-32 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-orange-500/20 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-24">
                    <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 font-semibold text-sm rounded-full mb-16 border border-orange-500/20 backdrop-blur-sm">
                        🚀 Our Services
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Comprehensive IT Solutions{' '}
                        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">That Drive Results</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                        From cloud infrastructure to AI-powered solutions, we deliver cutting-edge technology
                        services that transform your business operations and accelerate growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                        >
                            {/* Service Icon */}
                            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:from-orange-500 group-hover:to-pink-600 transition-all duration-300">
                                <div className="text-white">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Service Content */}
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Benefits */}
                            <div className="space-y-2 mb-6">
                                {service.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Learn More Button */}
                            <button className="group/btn flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300">
                                <span className="font-semibold">Learn More</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </button>

                            {/* Hover Effect Gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                        Let our experts analyze your current infrastructure and recommend the perfect
                        solution to accelerate your digital transformation journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            Get Free Consultation
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
