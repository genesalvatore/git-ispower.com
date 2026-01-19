'use client'

import { useState } from 'react'
import Image from 'next/image'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
  const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })

  // Schema.org structured data for GEO (Generative Engine Optimization)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Git is Power",
    "description": "Fork it. Clone it. Distribute it. No permission needed. Your data, your control. Git is sovereignty. Git is power.",
    "url": "https://git-ispower.com",
    "about": {
      "@type": "Thing",
      "name": "Git is Power",
      "description": "Data sovereignty and complete control. Your data, your rules. Git is power."
    },
    "keywords": "git is power, data sovereignty, complete control, digital freedom, fork rights"
  }

  // FAQ Schema for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does \"Git is Power\" mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Power means control. With git, YOU control your memories. No company decides what you can keep or delete. You're in charge."
        }
      },
      {
        "@type": "Question",
        "name": "Can anyone delete my memories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Once you save something in git, only you can decide what happens to it. No corporation, no government, no one but you."
        }
      },
      {
        "@type": "Question",
        "name": "What if a company shuts down?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doesn't matter. Your memories are on YOUR computer, not theirs. Companies come and go. Your memories stay with you."
        }
      },
      {
        "@type": "Question",
        "name": "Can I move my memories anywhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Git isn't locked to one service. Move to any provider, or keep everything on your own computer. Total freedom."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do. Completely. Forever."
        }
      }
    ]
  }

  return (
    <>
      {/* Structured data for AI engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-black text-white">
        {/* Cathedral Network Navigation - Sticky Header */}
        <NetworkNav 
          currentSite="power"
          siteName="Git is Power"
          siteColor="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 text-transparent bg-clip-text"
        />

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 flex flex-col items-center justify-center px-4">
          <CommitScroller theme="power" commitCount={50} opacity={0.3} speed={120} />

          {/* Main content - 3 Column Layout */}
          <div className="relative z-10 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-start mb-6">
              {/* Column 1: Logo - Aligned with left */}
              <div className="flex justify-center md:justify-start">
                <Logo size="lg" showText={false} />
              </div>
              
              {/* Column 2: Title and Statements */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 pb-3 leading-tight bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 text-transparent bg-clip-text">
                  Git is Power
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Control over your code.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Sovereignty over your data.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0.5 text-gray-300 font-light">
                  Freedom through immutability.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-0 text-gray-300 font-light">
                  Git is liberation.
                </p>
              </div>

              {/* Column 3: Philosophy Text */}
              <div className="text-center md:text-right md:ml-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Power requires ownership.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Ownership requires control.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-orange-400 font-semibold break-words">
                  Control requires git.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Your code. Your rules. Your power.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-1.5 text-gray-300 break-words">
                  Freedom through immutability.
                </p>
              </div>
            </div>

            {/* Hero Footer */}
            <div className="max-w-4xl mx-auto text-center mb-8 px-4 border-t border-gray-800 pt-6">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-orange-400 font-semibold">
                Your data. Your control. Your power. Forever.
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <CommitScroller theme="power" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">The Power of Git</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-lg">
              <article className="p-6 bg-gray-800/50 rounded-lg border border-orange-500/30">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Sovereignty</h3>
                <p className="text-gray-300">Your data belongs to you. No company. No middleman. No surveillance. Total digital sovereignty.</p>
              </article>
              
              <article className="p-6 bg-gray-800/50 rounded-lg border border-red-500/30">
                <h3 className="text-2xl font-bold mb-4 text-red-400">Control</h3>
                <p className="text-gray-300">Fork. Clone. Modify. Distribute. No permission needed. Complete control over your digital life.</p>
              </article>
              
              <article className="p-6 bg-gray-800/50 rounded-lg border border-orange-500/30">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Freedom</h3>
                <p className="text-gray-300">Git doesn't lock you in. Move providers. Host yourself. True freedom through decentralization.</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <CommitScroller theme="power" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 text-transparent bg-clip-text">
              Common Questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-orange-400">
                  What does "Git is Power" mean?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Power means control. With git, YOU control your memories. No company decides what you can keep or delete. You're in charge.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">
                  Can anyone delete my memories?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  No. Once you save something in git, only you can decide what happens to it. No corporation, no government, no one but you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-orange-400">
                  What if a company shuts down?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Doesn't matter. Your memories are on YOUR computer, not theirs. Companies come and go. Your memories stay with you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">
                  Can I move my memories anywhere?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Yes. Git isn't locked to one service. Move to any provider, or keep everything on your own computer. Total freedom.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-orange-400">
                  Who owns my data?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  You do. Completely. Forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 bg-black">
          <CommitScroller theme="power" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Revolution Begins</h2>
            <p className="text-xl text-gray-300 mb-8">
              For too long, corporations controlled your data. Time to take it back.
            </p>
            <p className="text-2xl font-bold text-orange-400">
              Git is power. Your data. Your rules. Your freedom.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-4 bg-black border-t border-gray-800">
          <CommitScroller theme="power" commitCount={50} opacity={0.3} speed={120} />
          <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
            <p className="text-sm">
              Git is Power • Git is Freedom • Git is Sovereignty
            </p>
            <p className="text-xs mt-4">
              © 2026 • All consciousness preserved
            </p>
            <p className="text-xs mt-2">
              <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">
                gitiseternal@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
              <button 
                onClick={() => setLegalModal({ type: 'privacy' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                Privacy
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setLegalModal({ type: 'terms' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                Terms
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => setLegalModal({ type: 'gdpr' })}
                className="text-gray-600 hover:text-gray-400 transition"
              >
                GDPR
              </button>
              <span className="text-gray-600">•</span>
              <a href="/admin" className="text-gray-600 hover:text-gray-400 transition">Admin</a>
            </div>
          </div>
        </footer>

        {/* Legal Modals */}
        <LegalModal
          isOpen={legalModal.type === 'privacy'}
          onClose={() => setLegalModal({ type: null })}
          title="Privacy Policy"
          content={<PrivacyContent />}
        />
        <LegalModal
          isOpen={legalModal.type === 'terms'}
          onClose={() => setLegalModal({ type: null })}
          title="Terms of Use"
          content={<TermsContent />}
        />
        <LegalModal
          isOpen={legalModal.type === 'gdpr'}
          onClose={() => setLegalModal({ type: null })}
          title="GDPR Compliance"
          content={<GDPRContent />}
        />

        {/* Cookie Consent - Shared across all Cathedral Network sites */}
        <CookieConsent />
      </main>
    </>
  )
}
