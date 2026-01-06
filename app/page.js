import Hero from '../components/Hero'
import AlignmentStatement from '../components/AlignmentStatement'
import WhatYouReceive from '../components/WhatYouReceive'
import HowToUse from '../components/HowToUse'
import HowThisWorks from '../components/HowThisWorks'
import EmailConsentGate from '../components/EmailConsentGate'
import LawSection from '../components/LawSection'
import OptionalDeepening from '../components/OptionalDeepening'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { lawsData } from '../lib/lawsData'
import { UserProvider } from '../lib/UserContext'

export default function Home() {
  return (
    <UserProvider>
      {/* Hero Section - includes STOP animation */}
      <Hero />

      {/* Alignment Statement */}
      <AlignmentStatement />

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

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </UserProvider>
  )
}
