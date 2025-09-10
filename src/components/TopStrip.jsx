import React from 'react'
import { X, Phone, Mail, Clock } from 'lucide-react'
import { useTopStrip } from '../context/TopStripContext'

const TopStrip = () => {
    const { isTopStripVisible, setIsTopStripVisible } = useTopStrip()

    if (!isTopStripVisible) return null

    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2 relative z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Left side - Contact info */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>+91 7979 831 185</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>support@nexacoreconsultancy.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Mon-Fri 9AM-6PM</span>
                        </div>
                    </div>

                    {/* Center - Announcement */}
                    <div className="flex-1 text-center md:flex-none">
                        <span className="font-medium">
                            🚀 New AI Solutions Available - Get 30% Off Your First Project!
                        </span>
                    </div>

                    {/* Right side - Close button */}
                    <button
                        onClick={() => setIsTopStripVisible(false)}
                        className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                        aria-label="Close announcement"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopStrip
