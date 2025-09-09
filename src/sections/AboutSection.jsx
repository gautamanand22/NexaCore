import React, { useEffect, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, Target, Lightbulb, Shield } from 'lucide-react'
import CountUp from 'react-countup'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null)
    const statsRef = useRef(null)

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

        // Content stagger animation
        gsap.fromTo(contentRef.current.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                }
            }
        )

        // Stats animation
        gsap.fromTo(statsRef.current.children,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: 'top 80%',
                }
            }
        )
    }, [])

    return (
        <section id="about" ref={sectionRef} className="about-bg py-16 relative overflow-hidden min-h-screen flex items-center">
            {/* Enhanced Background Elements */}
            <Parallax speed={-10} className="absolute inset-0 z-0">
                <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-pink-500/10 rounded-full blur-3xl"></div>
            </Parallax>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Centered Header Section */}
                <div className="text-center mb-36">
                    <div ref={titleRef}>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            About{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                            Innovating IT for Tomorrow's Success
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div ref={contentRef} className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                With over <span className="font-semibold text-blue-600">30 years of expertise</span> in the IT industry, NexaCore has been at the forefront
                                of technological innovation, helping businesses transform their operations and achieve
                                unprecedented growth through cutting-edge solutions.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                Our mission is to empower organizations with <span className="font-semibold text-orange-500">reliable, scalable, and secure</span> technology
                                solutions that drive efficiency, reduce costs, and unlock new opportunities for success
                                in the digital age.
                            </p>

                            {/* Values */}
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <Lightbulb className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Innovation</h3>
                                        <p className="text-gray-600 text-sm">Pioneering tomorrow's technology today with creative solutions.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <Shield className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Reliability</h3>
                                        <p className="text-gray-600 text-sm">Trusted solutions with 99.9% uptime guarantee.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <Target className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Excellence</h3>
                                        <p className="text-gray-600 text-sm">Exceeding expectations with every project delivery.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Quality</h3>
                                        <p className="text-gray-600 text-sm">Rigorous testing ensures flawless performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image and Stats */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                                alt="Modern office team collaboration"
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
                            <div ref={statsRef} className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">
                                        <CountUp end={30} duration={2.5} />+
                                    </div>
                                    <p className="text-gray-600 text-sm">Years</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-500">
                                        <CountUp end={500} duration={2.5} />+
                                    </div>
                                    <p className="text-gray-600 text-sm">Projects</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-500">
                                        <CountUp end={98} duration={2.5} />%
                                    </div>
                                    <p className="text-gray-600 text-sm">Satisfaction</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-500">
                                        <CountUp end={150} duration={2.5} />+
                                    </div>
                                    <p className="text-gray-600 text-sm">Team Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
