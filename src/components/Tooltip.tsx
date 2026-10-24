import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type TooltipProps = {
  content: string
  children: React.ReactNode
  className?: string
}

export function Tooltip({ content, children, className = '' }: TooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-xl border border-slate-600/40 bg-slate-900/95 px-3.5 py-2.5 text-left text-xs leading-relaxed text-slate-200 shadow-2xl backdrop-blur-md ring-1 ring-white/5"
          >
            {content}
            <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
