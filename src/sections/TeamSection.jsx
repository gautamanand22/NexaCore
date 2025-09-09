import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Linkedin, Twitter, Mail, MapPin, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TeamSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef(null)

    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Chief Executive Officer',
            department: 'Leadership',
            bio: 'Visionary leader with 20+ years in technology innovation and strategic business development.',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['Strategic Planning', 'Innovation', 'Team Leadership'],
            location: 'New York, NY',
            awards: 'Tech Innovator of the Year 2023',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'sarah@nexacore.com'
            }
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Chief Technology Officer',
            department: 'Technology',
            bio: 'Expert in cloud architecture and AI systems with extensive experience in enterprise solutions.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['Cloud Architecture', 'AI/ML', 'System Design'],
            location: 'San Francisco, CA',
            awards: 'AWS Community Hero',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'michael@nexacore.com'
            }
        },
        {
            id: 3,
            name: 'Amanda Rodriguez',
            role: 'Head of Cybersecurity',
            department: 'Security',
            bio: 'Cybersecurity expert specializing in threat detection and enterprise security frameworks.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['Threat Analysis', 'Security Architecture', 'Compliance'],
            location: 'Austin, TX',
            awards: 'CISSP Certified',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'amanda@nexacore.com'
            }
        },
        {
            id: 4,
            name: 'David Park',
            role: 'Lead Data Scientist',
            department: 'Analytics',
            bio: 'Data science leader with expertise in machine learning and predictive analytics solutions.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['Machine Learning', 'Data Analytics', 'Python/R'],
            location: 'Seattle, WA',
            awards: 'Kaggle Grandmaster',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'david@nexacore.com'
            }
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            role: 'VP of Operations',
            department: 'Operations',
            bio: 'Operations expert focused on process optimization and digital transformation strategies.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['Process Optimization', 'Project Management', 'Digital Transformation'],
            location: 'Chicago, IL',
            awards: 'PMP Certified',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'lisa@nexacore.com'
            }
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'Senior Software Architect',
            department: 'Development',
            bio: 'Full-stack architect with deep expertise in scalable systems and modern development practices.',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['System Architecture', 'Full-Stack Development', 'DevOps'],
            location: 'Boston, MA',
            awards: 'Microsoft MVP',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'james@nexacore.com'
            }
        },
        {
            id: 7,
            name: 'Emily Davis',
            role: 'Head of UX Design',
            department: 'Design',
            bio: 'Creative UX leader passionate about user-centered design and digital experience innovation.',
            image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['UX/UI Design', 'User Research', 'Design Systems'],
            location: 'Los Angeles, CA',
            awards: 'Design Excellence Award',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'emily@nexacore.com'
            }
        },
        {
            id: 8,
            name: 'Robert Kim',
            role: 'Head of Cloud Solutions',
            department: 'Infrastructure',
            bio: 'Cloud infrastructure specialist with extensive experience in multi-cloud environments.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            expertise: ['Cloud Infrastructure', 'DevOps', 'Kubernetes'],
            location: 'Denver, CO',
            awards: 'Google Cloud Architect',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'robert@nexacore.com'
            }
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

    return (
        <section id="team" ref={sectionRef} className="team-bg py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div ref={titleRef} className="text-center mb-16">
                    <span className="text-orange-400 font-semibold text-lg mb-4 block">Meet Our Team</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        The Minds Behind{' '}
                        <span className="text-orange-400">Innovation</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our diverse team of experts brings together decades of experience in technology,
                        innovation, and business transformation to deliver exceptional results.
                    </p>
                </div>

                {/* Team Grid */}
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="team-card group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
                        >
                            {/* Member Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Social Links */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                                        <a
                                            href={member.social.linkedin}
                                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={member.social.twitter}
                                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors duration-300"
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={`mailto:${member.social.email}`}
                                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300"
                                        >
                                            <Mail className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Member Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-orange-400 font-medium text-sm mb-1">{member.role}</p>
                                    <div className="flex items-center text-gray-400 text-xs">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {member.location}
                                    </div>
                                </div>

                                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {member.bio}
                                </p>

                                {/* Expertise Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {member.expertise.slice(0, 2).map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {member.expertise.length > 2 && (
                                        <span className="text-xs text-gray-400">
                                            +{member.expertise.length - 2} more
                                        </span>
                                    )}
                                </div>

                                {/* Awards */}
                                <div className="flex items-center text-orange-400 text-xs">
                                    <Award className="w-3 h-3 mr-1 flex-shrink-0" />
                                    <span className="truncate">{member.awards}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Company Culture */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Join Our Growing Team
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
                            We're always looking for talented individuals who share our passion for innovation
                            and excellence. Join us in shaping the future of technology.
                        </p>

                        {/* Stats */}
                        <div className="grid md:grid-cols-4 gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-400 mb-2">150+</div>
                                <div className="text-gray-300">Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
                                <div className="text-gray-300">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                                <div className="text-gray-300">Employee Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                                <div className="text-gray-300">Remote Friendly</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                                View Open Positions
                            </button>
                            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                                Learn About Culture
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection
