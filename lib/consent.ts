const CONSENT_KEY = 'consent.v1'

export interface Consent {
  analytics: boolean
  heatmap: boolean
  decided: boolean
}

export function getConsent(): Consent {
  if (typeof window === 'undefined') {
    return { analytics: false, heatmap: false, decided: false }
  }
  
  const stored = localStorage.getItem(CONSENT_KEY)
  if (!stored) {
    return { analytics: false, heatmap: false, decided: false }
  }
  
  try {
    return JSON.parse(stored)
  } catch {
    return { analytics: false, heatmap: false, decided: false }
  }
}

export function setConsent(consent: Consent): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}