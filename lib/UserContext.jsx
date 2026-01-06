'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [email, setEmail] = useState('')
  const [hasConsented, setHasConsented] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEmail = sessionStorage.getItem('userEmail')
      const savedConsent = sessionStorage.getItem('userConsent')
      
      if (savedEmail) setEmail(savedEmail)
      if (savedConsent === 'true') setHasConsented(true)
      
      setIsInitialized(true)
    }
  }, [])

  // Save to sessionStorage when values change
  useEffect(() => {
    if (typeof window !== 'undefined' && isInitialized) {
      if (email) {
        sessionStorage.setItem('userEmail', email)
      } else {
        sessionStorage.removeItem('userEmail')
      }
      
      sessionStorage.setItem('userConsent', hasConsented.toString())
    }
  }, [email, hasConsented, isInitialized])

  const updateEmail = (newEmail) => {
    setEmail(newEmail)
  }

  const updateConsent = (consent) => {
    setHasConsented(consent)
  }

  const clearUserData = () => {
    setEmail('')
    setHasConsented(false)
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('userEmail')
      sessionStorage.removeItem('userConsent')
    }
  }

  const isGatePassed = email && hasConsented

  return (
    <UserContext.Provider 
      value={{ 
        email, 
        hasConsented, 
        isGatePassed,
        updateEmail, 
        updateConsent,
        clearUserData
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
