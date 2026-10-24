import { motion } from 'framer-motion'
import { heroMetrics } from '../data/content'

const icons: Record<string, React.ReactNode> = {
  lanes: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  ),
  departments: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  automation: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
}

const metricValues: Record<string, string> = {
  lanes: '4',
  departments: '4',
  automation: '24/7',
}

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-grid relative overflow-hidden border-b border-slate-800/60 px-4 pb-24 pt-12 md:px-8 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-eyebrow mx-auto w-fit"
        >
          Retention Architecture
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-balance mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.08]"
        >
          <span className="text-gradient-hero">Student At-Risk & Dropout</span>
          <br />
          <span className="text-white">Tracking System</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
        >
          An end-to-end early intervention and retention architecture — from MIS
          detection through departmental follow-up to terminal outcomes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button type="button" onClick={() => scrollTo('lanes')} className="btn-primary w-full sm:w-auto">
            Explore end-to-end workflow
          </button>
          <button
            type="button"
            onClick={() => scrollTo('kpis')}
            className="btn-secondary w-full sm:w-auto"
          >
            View department KPIs
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-3"
      >
        {heroMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="glass-panel metric-card flex items-center gap-4 rounded-2xl p-5 text-left"
          >
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 text-blue-400 ring-1 ring-blue-500/20">
              <span className="font-display text-lg font-bold leading-none text-blue-300">
                {metricValues[m.icon]}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold leading-snug text-slate-100">{m.label}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                Active in workflow
              </p>
            </div>
            <div className="ml-auto hidden text-blue-400/80 sm:block">{icons[m.icon]}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
