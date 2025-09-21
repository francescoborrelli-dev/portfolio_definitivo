'use client'

import { useState, useEffect } from 'react'
import { getConsent, setConsent, type Consent } from '@/lib/consent'
import { Button } from '@/components/ui/button'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [heatmap, setHeatmap] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (!consent.decided) {
      setShowBanner(true)
    }
  }, [])

  const handleSave = () => {
    const consent: Consent = { analytics, heatmap, decided: true }
    setConsent(consent)
    setShowBanner(false)
  }

  const handleReject = () => {
    const consent: Consent = { analytics: false, heatmap: false, decided: true }
    setConsent(consent)
    setShowBanner(false)
  }

  const handleAcceptAll = () => {
    const consent: Consent = { analytics: true, heatmap: true, decided: true }
    setConsent(consent)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-3">
              Utilizziamo cookie per migliorare l&apos;esperienza sul sito. Per esigenze GDPR avanzate, 
              considera l&apos;utilizzo di una CMP completa.
            </p>
            <div className="flex gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="rounded"
                />
                Analytics
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={heatmap}
                  onChange={(e) => setHeatmap(e.target.checked)}
                  className="rounded"
                />
                Heatmap
              </label>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" size="sm" onClick={handleReject}>
              Rifiuta
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              Salva
            </Button>
            <Button size="sm" onClick={handleAcceptAll}>
              Accetta tutto
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}