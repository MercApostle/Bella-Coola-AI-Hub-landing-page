import dynamic from 'next/dynamic'
import Hero from '../components/Hero'
import { lawsData } from '../lib/lawsData'
import { UserProvider } from '../lib/UserContext'

// Standard sections - keep static for SEO and initial paint
import AlignmentStatement from '../components/AlignmentStatement'

// Dynamic sections - lazy load as user scrolls or after initial load
const WhoIsThisFor = dynamic(() => import('../components/WhoIsThisFor'), { ssr: true })
const WhatYouReceive = dynamic(() => import('../components/WhatYouReceive'), { ssr: true })
const HowToUse = dynamic(() => import('../components/HowToUse'), { ssr: true })
const HowThisWorks = dynamic(() => import('../components/HowThisWorks'), { ssr: true })
const EmailConsentGate = dynamic(() => import('../components/EmailConsentGate'), { ssr: true })
const LawSection = dynamic(() => import('../components/LawSection'), { ssr: true })
const OptionalDeepening = dynamic(() => import('../components/OptionalDeepening'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })

export default function Home() {
  return (
    <UserProvider>
      {/* Hero Section - includes STOP animation */}
      <Hero />

      {/* Alignment Statement */}
      <AlignmentStatement />

      {/* Who Is This For */}
      <WhoIsThisFor />

      {/* What You'll Receive */}
      <WhatYouReceive />

      {/* How to Use This */}
      <HowToUse />

      {/* How This Works */}
      <HowThisWorks />

      {/* Email/Consent Gate - Required before law sections */}
      <EmailConsentGate />

      {/* Law Sections - Mentalism, Correspondence, Rhythm, Cause & Effect, Gender */}
      {lawsData.map((law) => (
        <LawSection key={law.id} law={law} />
      ))}

      {/* Optional Deepening */}
      <OptionalDeepening />

      {/* Footer */}
      <Footer />
    </UserProvider>
  )
}
