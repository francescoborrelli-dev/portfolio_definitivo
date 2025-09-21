'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getConsent } from '@/lib/consent'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    clarity?: (...args: any[]) => void
  }
}

export default function AnalyticsManager() {
  const pathname = usePathname()

  useEffect(() => {
    const consent = getConsent()
    
    // Load Google Analytics if consent given
    if (consent.analytics && consent.decided) {
      const GA_ID = process.env.NEXT_PUBLIC_GA_ID
      if (GA_ID && !window.gtag) {
        // Load gtag script
        const script = document.createElement('script')
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
        script.async = true
        document.head.appendChild(script)

        // Initialize gtag
        window.dataLayer = window.dataLayer || []
        window.gtag = function gtag(...args: any[]) {
          window.dataLayer!.push(args)
        }
        window.gtag('js', new Date())
        window.gtag('config', GA_ID)
      }
    }

    // Load Microsoft Clarity if consent given
    if (consent.heatmap && consent.decided) {
      const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID
      if (CLARITY_ID && !window.clarity) {
        const script = document.createElement('script')
        script.innerHTML = `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `
        document.head.appendChild(script)
      }
    }
  }, [])

  // Track page views
  useEffect(() => {
    const consent = getConsent()
    if (consent.analytics && consent.decided && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}