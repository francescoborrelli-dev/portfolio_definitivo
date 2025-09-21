import { Badge } from '@/components/ui/badge'
import Kpi from '@/components/kpi'

// Simple wrapper for MDX content - no custom component mapping needed for now
// Add custom component mappings here when needed
export default function MdxWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-gray max-w-none">
      {children}
    </div>
  )
}

// Export components that can be used in MDX
export { Badge, Kpi }