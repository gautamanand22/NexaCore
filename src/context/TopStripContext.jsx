import React, { createContext, useContext, useState } from 'react'

const TopStripContext = createContext()

export const useTopStrip = () => {
    const context = useContext(TopStripContext)
    if (!context) {
        throw new Error('useTopStrip must be used within a TopStripProvider')
    }
    return context
}

export const TopStripProvider = ({ children }) => {
    const [isTopStripVisible, setIsTopStripVisible] = useState(true)

    return (
        <TopStripContext.Provider value={{ isTopStripVisible, setIsTopStripVisible }}>
            {children}
        </TopStripContext.Provider>
    )
}
