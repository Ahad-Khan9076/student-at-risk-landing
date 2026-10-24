import { motion } from 'framer-motion'
import { glossary } from '../data/content'
import { SectionHeading } from './SectionHeading'

const termColors: Record<string, string> = {
  'Missing Student': 'text-amber-400 border-amber-500/30 bg-amber-950/10',
  'Potential In-Process': 'text-blue-400 border-blue-500/30 bg-blue-950/10',
  'Potential Joined': 'text-emerald-400 border-emerald-500/30 bg-emerald-950/10',
  Closed: 'text-slate-400 border-slate-500/30 bg-slate-900/40',
  Dropout: 'text-red-400 border-red-500/30 bg-red-950/10',
  'Not Responding': 'text-orange-400 border-orange-500/30 bg-orange-950/10',
}

export function Glossary() {
  return (
    <section id="definitions" className="px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Vocabulary"
          title="Key definitions & legend"
          description="Shared vocabulary across MIS, UIS, and departmental workflows."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {glossary.map((item, i) => (
            <motion.article
              key={item.term}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border p-6 shadow-lg shadow-black/10 transition-shadow hover:shadow-xl hover:shadow-black/20 ${termColors[item.term] ?? 'border-slate-700 bg-slate-900/40'}`}
            >
              <h3 className="font-display text-lg font-semibold">{item.term}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.definition}</p>
            </motion.article>
          ))}
        </div>

        <div className="glass-panel mt-16 flex flex-wrap justify-center gap-8 rounded-2xl px-6 py-10">
          <LegendSwatch color="bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" label="Safe / Joined" />
          <LegendSwatch color="bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]" label="Warning / Freeze" />
          <LegendSwatch color="bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]" label="Dropout / High Risk" />
          <LegendSwatch color="bg-slate-500" label="Closed / Neutral" />
        </div>
      </div>
    </section>
  )
}

function LegendSwatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
      <span className={`h-3 w-3 rounded-full ${color}`} />
      {label}
    </div>
  )
}
