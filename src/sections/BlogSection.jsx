import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const BlogSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef(null)

    const blogPosts = [
        {
            id: 1,
            title: 'Top IT Trends Shaping Business in 2025',
            excerpt: 'Explore the revolutionary technologies that are transforming how businesses operate, from AI integration to quantum computing breakthroughs.',
            author: 'Sarah Johnson',
            date: 'December 15, 2024',
            readTime: '8 min read',
            category: 'Technology Trends',
            image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            featured: true
        },
        {
            id: 2,
            title: 'The Complete Guide to Cloud Migration Strategy',
            excerpt: 'A comprehensive roadmap for successful cloud adoption, including best practices, common pitfalls to avoid, and cost optimization strategies.',
            author: 'Michael Chen',
            date: 'December 10, 2024',
            readTime: '12 min read',
            category: 'Cloud Computing',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: 'Cybersecurity Best Practices for Remote Teams',
            excerpt: 'Essential security measures and tools to protect your organization in the era of distributed workforces and hybrid work models.',
            author: 'Amanda Rodriguez',
            date: 'December 5, 2024',
            readTime: '6 min read',
            category: 'Cybersecurity',
            image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            title: 'AI and Machine Learning: Practical Applications',
            excerpt: 'Real-world examples of how AI is revolutionizing industries, from healthcare diagnostics to financial fraud detection.',
            author: 'David Park',
            date: 'November 28, 2024',
            readTime: '10 min read',
            category: 'Artificial Intelligence',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            title: 'Digital Transformation Success Stories',
            excerpt: 'Case studies of companies that successfully transformed their operations through strategic technology adoption and cultural change.',
            author: 'Lisa Thompson',
            date: 'November 20, 2024',
            readTime: '7 min read',
            category: 'Digital Transformation',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            title: 'The Future of Software Development',
            excerpt: 'Emerging trends in software engineering, including low-code platforms, DevOps evolution, and the rise of serverless architectures.',
            author: 'James Wilson',
            date: 'November 15, 2024',
            readTime: '9 min read',
            category: 'Software Development',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 70%',
                }
            }
        )
    }, [])

    return (
        <section id="blog" ref={sectionRef} className="blog-bg py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-24">
                    <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold text-sm rounded-full mb-8 border border-blue-200">
                        📚 Latest Insights
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
                        Stay Ahead with{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">Tech Knowledge</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Discover the <span className="font-semibold text-blue-600">latest trends</span>, insights, and best practices in technology.
                        Our experts share valuable knowledge to help you make <span className="font-semibold text-indigo-600">informed decisions</span>.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="mb-16">
                    {blogPosts.filter(post => post.featured).map(post => (
                        <div key={post.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0">
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Featured
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center space-x-4 mb-4">
                                    <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                                        <Tag className="w-4 h-4 mr-1" />
                                        {post.category}
                                    </span>
                                    <span className="text-gray-500 text-sm">•</span>
                                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{post.author}</div>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {post.date}
                                            </div>
                                        </div>
                                    </div>

                                    <button className="group flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                                        <span>Read More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog Grid */}
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.filter(post => !post.featured).map((post) => (
                        <article key={post.id} className="blog-card group">
                            {/* Post Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="p-6">
                                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {post.readTime}
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {post.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Author and Read More */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                                    </div>

                                    <button className="group/btn flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-300">
                                        <span className="text-sm font-medium">Read More</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4">
                        Stay Updated with Tech Insights
                    </h3>
                    <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                        Subscribe to our newsletter and get the latest technology trends,
                        expert insights, and industry news delivered to your inbox.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </div>

                    <p className="text-blue-200 text-sm mt-4">
                        No spam, unsubscribe at any time. We respect your privacy.
                    </p>
                </div>

                {/* View All Posts Button */}
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
