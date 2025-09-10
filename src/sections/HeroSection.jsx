import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Zap, Shield, Cpu, Brain, Users, TrendingUp } from 'lucide-react'

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const heroRef = useRef(null)
    const botRef = useRef(null)

    const scrollToContact = () => {
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect()
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                })
            }
        }

        const heroElement = heroRef.current
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove)
            heroElement.addEventListener('mouseenter', () => setIsHovering(true))
            heroElement.addEventListener('mouseleave', () => setIsHovering(false))
        }

        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove)
                heroElement.removeEventListener('mouseenter', () => setIsHovering(true))
                heroElement.removeEventListener('mouseleave', () => setIsHovering(false))
            }
        }
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        >
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0">
                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-yellow-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>

                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Grid Pattern with better opacity */}
            <div className="absolute inset-0 opacity-[0.15]">
                <div
                    className="absolute inset-0 bg-repeat"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Main Content - Redesigned to be Fuller */}
            <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 min-h-screen flex flex-col">

                {/* Top Section - Hero Content */}
                <div className="flex-1 grid lg:grid-cols-12 gap-12 items-center mb-16">

                    {/* Left Content - Enhanced */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-8">
                        <div className="space-y-6">
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-cyan-300">
                                    <Zap className="w-4 h-4 mr-2" />
                                    AI-Powered Solutions
                                </span>
                                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-purple-300">
                                    <Shield className="w-4 h-4 mr-2" />
                                    Enterprise Security
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-8xl font-bold leading-none mb-8">
                                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                                    Transform
                                </span>
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                                    Your Business
                                </span>
                                <span className="block text-2xl lg:text-4xl bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mt-4">
                                    with Next-Gen Technology
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
                                Experience revolutionary <span className="text-blue-400 font-medium">AI solutions</span> that transform
                                ideas into reality. We craft cutting-edge technology that powers the
                                <span className="text-purple-400 font-medium"> digital future</span>.
                            </p>
                        </div>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
                            <button
                                onClick={scrollToContact}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-2xl font-bold text-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transform"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>

                            <button className="group px-8 py-4 border-2 border-white/30 rounded-2xl font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                                <span className="flex items-center justify-center gap-3">
                                    Watch Demo
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Interactive AI Bot */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            {/* AI Bot Container */}
                            <div
                                ref={botRef}
                                className="relative group cursor-pointer"
                                style={{
                                    transform: isHovering ?
                                        `translate(${(mousePosition.x - 400) * 0.02}px, ${(mousePosition.y - 400) * 0.02}px) rotate(${(mousePosition.x - 400) * 0.01}deg)`
                                        : 'translate(0px, 0px) rotate(0deg)',
                                    transition: isHovering ? 'none' : 'transform 0.8s ease-out'
                                }}
                            >
                                {/* Main Bot Body */}
                                <div className="relative w-80 h-[420px] bg-gradient-to-br from-white/10 via-blue-500/20 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">

                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>

                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                        {/* Bot Head */}
                                        <div className="text-center mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-3 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                                <Brain className="w-8 h-8 text-white animate-pulse" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">NexaCore AI</h3>
                                            <p className="text-blue-300 text-sm">Your Intelligent Assistant</p>
                                        </div>

                                        {/* Bot Features */}
                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center space-x-3 text-white/90">
                                                <div className="w-8 h-8 bg-green-500/80 rounded-full flex items-center justify-center">
                                                    <Cpu className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm">Real-time Processing</span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-white/90">
                                                <div className="w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center">
                                                    <Users className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm">24/7 Support</span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-white/90">
                                                <div className="w-8 h-8 bg-purple-500/80 rounded-full flex items-center justify-center">
                                                    <TrendingUp className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm">Performance Analytics</span>
                                            </div>
                                        </div>

                                        {/* Interactive Elements */}
                                        <div className="mt-auto">
                                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                                <span>AI Efficiency</span>
                                                <span>98%</span>
                                            </div>
                                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:from-cyan-400 group-hover:to-blue-500"
                                                    style={{ width: '98%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements around Bot */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-80"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full animate-ping opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Enhanced Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                            500+
                        </div>
                        <div className="text-gray-400 text-sm lg:text-base font-medium">Projects Delivered</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                            98%
                        </div>
                        <div className="text-gray-400 text-sm lg:text-base font-medium">Client Satisfaction</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                            24/7
                        </div>
                        <div className="text-gray-400 text-sm lg:text-base font-medium">Expert Support</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                            15+
                        </div>
                        <div className="text-gray-400 text-sm lg:text-base font-medium">Years Experience</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="flex flex-col items-center text-white/60 animate-bounce group cursor-pointer">
                    <span className="text-sm mb-2 group-hover:text-white/80 transition-colors">Explore More</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;