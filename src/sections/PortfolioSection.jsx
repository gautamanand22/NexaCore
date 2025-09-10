import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Calendar, TrendingUp, Users, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PortfolioSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef(null)
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'Healthcare Management System',
            client: 'MedTech Solutions',
            category: 'Healthcare',
            description: 'Comprehensive patient management system that improved efficiency by 40%',
            fullDescription: 'A comprehensive healthcare management system that streamlines patient care, improves operational efficiency, and ensures HIPAA compliance. The solution includes patient portals, appointment scheduling, electronic health records, and real-time analytics.',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
            metrics: { efficiency: '40%', satisfaction: '95%', cost: '25%' },
            duration: '8 months',
            year: '2024'
        },
        {
            id: 2,
            title: 'E-commerce Platform Modernization',
            client: 'RetailCorp Inc.',
            category: 'E-commerce',
            description: 'Complete platform overhaul resulting in 60% increase in conversion rates',
            fullDescription: 'Modern e-commerce platform with microservices architecture, real-time inventory management, AI-powered recommendations, and seamless mobile experience. Integrated payment gateways and advanced analytics dashboard.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            technologies: ['Next.js', 'Express', 'PostgreSQL', 'Redis'],
            metrics: { conversion: '60%', performance: '85%', revenue: '45%' },
            duration: '6 months',
            year: '2024'
        },
        {
            id: 3,
            title: 'Financial Analytics Dashboard',
            client: 'FinanceFirst Bank',
            category: 'Fintech',
            description: 'Real-time analytics platform with predictive modeling capabilities',
            fullDescription: 'Advanced financial analytics platform featuring real-time data processing, predictive modeling, risk assessment tools, and regulatory compliance reporting. Includes interactive dashboards and automated alerts.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            technologies: ['Python', 'React', 'TensorFlow', 'Apache Kafka'],
            metrics: { accuracy: '92%', processing: '70%', insights: '50%' },
            duration: '10 months',
            year: '2023'
        },
        {
            id: 4,
            title: 'Smart Manufacturing IoT',
            client: 'IndustrialTech LLC',
            category: 'Manufacturing',
            description: 'IoT-enabled monitoring system reducing downtime by 35%',
            fullDescription: 'Comprehensive IoT solution for smart manufacturing with sensor integration, predictive maintenance, real-time monitoring, and automated quality control systems. Includes mobile apps for technicians.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            technologies: ['Azure IoT', 'React Native', 'Python', 'Machine Learning'],
            metrics: { downtime: '35%', quality: '28%', efficiency: '42%' },
            duration: '12 months',
            year: '2023'
        },
        {
            id: 5,
            title: 'Educational Learning Platform',
            client: 'EduTech Academy',
            category: 'Education',
            description: 'Interactive learning platform serving 50,000+ students globally',
            fullDescription: 'Scalable online learning platform with video streaming, interactive assessments, progress tracking, and AI-powered personalized learning paths. Supports multiple languages and accessibility features.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
            metrics: { engagement: '75%', completion: '68%', satisfaction: '94%' },
            duration: '9 months',
            year: '2023'
        },
        {
            id: 6,
            title: 'Supply Chain Optimization',
            client: 'LogiFlow Systems',
            category: 'Logistics',
            description: 'AI-powered supply chain management reducing costs by 30%',
            fullDescription: 'Intelligent supply chain management system with route optimization, inventory forecasting, supplier management, and real-time tracking. Features predictive analytics and automated decision-making.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            technologies: ['Angular', 'Spring Boot', 'Apache Spark', 'Kubernetes'],
            metrics: { costs: '30%', delivery: '25%', accuracy: '88%' },
            duration: '11 months',
            year: '2022'
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
            { opacity: 0, y: 50, rotationY: 15 },
            {
                opacity: 1,
                y: 0,
                rotationY: 0,
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

    const openModal = (project) => {
        setSelectedProject(project)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedProject(null)
        document.body.style.overflow = 'unset'
    }

    return (
        <section id="portfolio" ref={sectionRef} className="portfolio-bg py-32 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-purple-400/15 to-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-24">
                    <span className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full mb-8 border border-blue-200">
                        💼 Our Portfolio
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
                        Success Stories That{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Speak for Themselves</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Discover how we've helped businesses across industries achieve <span className="font-semibold text-blue-600">remarkable results</span>
                        through innovative technology solutions and strategic digital transformation.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="portfolio-card group cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-blue-600 font-medium">{project.client}</span>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {project.year}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs text-gray-400">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Metrics Preview */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center text-green-600">
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            <span className="text-sm font-semibold">
                                                {Object.values(project.metrics)[0]} improvement
                                            </span>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Create Your Success Story?
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        Join hundreds of satisfied clients who have transformed their business with our expertise.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                        Start Your Project
                    </button>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="relative">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-64 object-cover"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="absolute bottom-4 left-6">
                                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                                    {selectedProject.category}
                                </span>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        {selectedProject.title}
                                    </h2>
                                    <div className="flex items-center text-gray-600">
                                        <Users className="w-4 h-4 mr-2" />
                                        Client: {selectedProject.client}
                                        <span className="mx-3">•</span>
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {selectedProject.duration} • {selectedProject.year}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                {selectedProject.fullDescription}
                            </p>

                            {/* Technologies */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Metrics */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Results</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                                        <div key={index} className="text-center bg-gray-50 rounded-lg p-6">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                                {value}
                                            </div>
                                            <div className="text-gray-600 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Improvement
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                    Interested in Similar Results?
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Let's discuss how we can help transform your business.
                                </p>
                                <button
                                    onClick={closeModal}
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default PortfolioSection
