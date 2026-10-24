import { motion } from 'framer-motion'
import { useState } from 'react'
import { kpiTabs } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function KPIDashboard() {
  const [activeId, setActiveId] = useState(kpiTabs[0].id)
  const active = kpiTabs.find((t) => t.id === activeId) ?? kpiTabs[0]

  return (
    <section id="kpis" className="border-b border-slate-800/60 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Performance"
          title="Department KPI dashboard"
          description="Performance indicators aligned to each stage of the retention workflow."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {kpiTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeId === tab.id
                  ? 'kpi-tab-active scale-105 text-white'
                  : 'bg-slate-800/80 text-slate-400 ring-1 ring-slate-700/50 hover:bg-slate-700/80 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="glass-panel-strong mt-8 overflow-hidden rounded-3xl"
        >
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-2 border-b border-slate-700/50 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-eyebrow w-fit text-[0.65rem] before:w-4 after:w-4">
                  {active.label} KPIs
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold text-white md:text-3xl">
                  {active.fullName}
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-1.5 text-sm text-slate-400 ring-1 ring-slate-700/60">
                <span className="font-display text-lg font-bold text-emerald-400">
                  {active.metrics.length}
                </span>
                tracked metric{active.metrics.length !== 1 ? 's' : ''}
              </span>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {active.metrics.map((metric, i) => (
                <motion.li
                  key={metric}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex gap-4 rounded-xl border border-slate-700/40 bg-slate-900/40 p-5 transition hover:border-blue-500/25 hover:bg-slate-900/70"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-sm font-bold text-emerald-400 ring-1 ring-emerald-500/20 transition group-hover:scale-105">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-300">{metric}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {kpiTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={`hidden rounded-2xl border p-4 text-left transition-all duration-200 md:block ${
                activeId === tab.id
                  ? 'border-blue-500/40 bg-blue-950/30 shadow-lg shadow-blue-900/20'
                  : 'border-slate-800/80 bg-slate-900/30 opacity-70 hover:opacity-100'
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{tab.label}</p>
              <p className="font-display mt-2 text-3xl font-bold text-white">{tab.metrics.length}</p>
              <p className="text-xs text-slate-500">KPIs tracked</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
