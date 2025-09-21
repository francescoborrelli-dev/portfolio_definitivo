import { cn } from '@/lib/utils'

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

// Compatible with shadcn/ui Separator component
// Replace with: npx shadcn-ui@latest add separator
export function Separator({ 
  orientation = 'horizontal', 
  className 
}: SeparatorProps) {
  return (
    <div
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
    />
  )
}