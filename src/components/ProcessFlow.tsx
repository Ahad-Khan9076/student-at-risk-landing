import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  departmentWorkflows,
  lanes,
  routingDepartments,
  terminalOutcomes,
  type LaneId,
} from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Tooltip } from './Tooltip'

function FlowConnector({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center py-2 ${className}`} aria-hidden>
      <div className="flow-line h-10 w-0.5 rounded-full" />
    </div>
  )
}

function Lane1Content() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-500/20 bg-blue-950/30 p-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Inputs for Flagging
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Weekly class attendance logs</li>
            <li>Campus turnstile entry data</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-600/40 bg-slate-800/40 p-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            System Action
          </h4>
          <p className="mt-3 text-sm text-slate-300">
            Software / MIS auto-generates flagged cases on the MIS dashboard.
          </p>
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-center text-sm font-semibold text-slate-300">
          Decision Tree
        </h4>
        <div className="flex flex-col items-center">
          <Tooltip content="Regular attendance clears the flag; student returns to normal monitoring cycle.">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md cursor-default rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-6 py-4 text-center"
            >
              <span className="text-emerald-400 font-semibold">Attending regularly</span>
              <p className="mt-1 text-sm text-slate-400">→ Marked SAFE</p>
            </motion.div>
          </Tooltip>
          <FlowConnector />
          <Tooltip content="CCD First-Aid: direct phone/call contact before any UIS referral.">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md cursor-default rounded-xl border border-amber-500/40 bg-amber-950/30 px-6 py-4 text-center"
            >
              <span className="font-semibold text-amber-400">Missing classes</span>
              <p className="mt-1 text-sm text-slate-400">→ CCD First-Aid (phone / call)</p>
            </motion.div>
          </Tooltip>
          <div className="mt-4 grid w-full max-w-2xl gap-4 md:grid-cols-2">
            <Tooltip content="Counts toward CCD KPI: resolved without department referral.">
              <div className="rounded-xl border border-emerald-600/30 bg-slate-900/60 p-4 text-sm">
                <p className="font-medium text-emerald-400">Resolved at first contact</p>
                <p className="text-slate-400">Closed as Potential Joined (CCD KPI)</p>
              </div>
            </Tooltip>
            <Tooltip content="CCD categorizes severity and refers via UIS Portal to the appropriate department.">
              <div className="rounded-xl border border-blue-600/30 bg-slate-900/60 p-4 text-sm">
                <p className="font-medium text-blue-400">Not resolved</p>
                <p className="text-slate-400">Categorize & refer via UIS Portal</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700/60 bg-slate-850 p-6">
        <h4 className="text-sm font-semibold text-violet-300">
          Sub-Lane 1b — Severity Classification (Labeling, Not Routing)
        </h4>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-amber-500/25 p-4">
            <p className="font-medium text-amber-300">Potential Risk</p>
            <p className="mt-2 text-sm text-slate-400">
              Borderline attendance; student-initiated freeze, program change, or
              re-admission requests.
            </p>
          </div>
          <div className="rounded-xl border border-red-500/30 p-4">
            <p className="font-medium text-red-400">Suspected / High Risk</p>
            <p className="mt-2 text-sm text-slate-400">
              Alarming absence + not responding.
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-500">
              <li>
                <strong className="text-slate-400">Turnstile Pattern 1:</strong>{' '}
                Multiple entries — on campus, skipping class
              </li>
              <li>
                <strong className="text-slate-400">Turnstile Pattern 2:</strong>{' '}
                ZERO entries — disengagement / &quot;Ghost case&quot;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function Lane2Content() {
  return (
    <div className="space-y-6">
      <p className="text-center text-sm text-slate-400">
        Via UIS Portal — route by reason type to one of four specialized departments
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {routingDepartments.map((dept) => (
          <Tooltip key={dept.code} content={dept.criteria}>
            <motion.article
              whileHover={{ y: -4 }}
              className="glass-panel h-full cursor-default rounded-2xl p-5 transition-shadow hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-300">
                  {dept.code}
                </span>
                <h4 className="text-sm font-semibold text-white">{dept.name}</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{dept.criteria}</p>
            </motion.article>
          </Tooltip>
        ))}
      </div>
      <Tooltip content="Misrouted or unsolvable cases fire Return to CCD for re-routing — not a dead end.">
        <div className="rounded-xl border border-dashed border-orange-500/50 bg-orange-950/20 px-6 py-4 text-center text-sm">
          <span className="font-semibold text-orange-400">Fallback / Exception:</span>{' '}
          <span className="text-slate-300">
            Irrelevant, wrongly categorized, or root cause not solvable by department →{' '}
            <strong>Return to CCD</strong> for re-routing
          </span>
        </div>
      </Tooltip>
    </div>
  )
}

function Lane3Content() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {departmentWorkflows.map((wf) => (
          <details
            key={wf.code}
            className="group rounded-2xl border border-slate-700/50 bg-slate-900/50 open:border-cyan-500/30 md:hidden"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-cyan-300">
              {wf.code} Process
            </summary>
            <ol className="space-y-2 border-t border-slate-700/50 px-5 py-4 text-sm text-slate-400">
              {wf.steps.map((s, i) => (
                <li key={i}>
                  {i + 1}. {s}
                </li>
              ))}
            </ol>
          </details>
        ))}
        <div className="hidden space-y-4 md:block">
          {departmentWorkflows.map((wf) => (
            <div
              key={wf.code}
              className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-5"
            >
              <h4 className="mb-3 font-semibold text-cyan-300">{wf.code} Process</h4>
              <ol className="space-y-2 text-sm text-slate-400">
                {wf.steps.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-600">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-500/25 bg-cyan-950/20 p-6">
        <h4 className="text-sm font-semibold text-cyan-200">
          Sub-Lane 3b — Universal Follow-Up Loop (All Departments)
        </h4>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
          {[
            'Open case on UIS',
            'Set Status',
            'Set Reason',
            'Write Remarks',
            'Next Follow-Up Date + Reason',
            'System saves',
          ].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-lg bg-slate-800 px-3 py-2 text-slate-200">{step}</span>
              {i < arr.length - 1 && (
                <span className="hidden text-slate-600 md:inline">→</span>
              )}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          On <strong className="text-slate-200">Next Follow-Up Date</strong>, if status is{' '}
          <em>Potential In-Progress</em> or <em>Not Responding</em>, the system auto-alerts
          the department until a terminal status is set.
        </p>
      </div>
    </div>
  )
}

function Lane4Content() {
  const colorMap: Record<string, string> = {
    emerald: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-400',
    amber: 'border-amber-500/50 bg-amber-950/40 text-amber-400',
    slate: 'border-slate-500/50 bg-slate-800/60 text-slate-300',
    red: 'border-red-500/50 bg-red-950/40 text-red-400',
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {terminalOutcomes.map((o) => (
        <motion.div
          key={o.status}
          whileHover={{ scale: 1.02 }}
          className={`rounded-2xl border p-6 ${colorMap[o.color]}`}
        >
          <span className="inline-block rounded-full border border-current/30 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {o.status}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">{o.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

const laneContent: Record<LaneId, () => React.ReactNode> = {
  lane1: Lane1Content,
  lane2: Lane2Content,
  lane3: Lane3Content,
  lane4: Lane4Content,
}

const accentRing: Record<string, string> = {
  blue: 'ring-blue-500/60 border-blue-500/40',
  violet: 'ring-violet-500/60 border-violet-500/40',
  cyan: 'ring-cyan-500/60 border-cyan-500/40',
  emerald: 'ring-emerald-500/60 border-emerald-500/40',
}

export function ProcessFlow() {
  const [active, setActive] = useState<LaneId>('lane1')

  return (
    <section id="lanes" className="border-b border-slate-800/60 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Workflow"
          title="Interactive process flow"
          description="Lane-by-lane breakdown from detection through terminal outcomes — click each lane to explore."
        />

        {/* Desktop stepper */}
        <div className="mt-12 hidden md:block">
          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-slate-800" aria-hidden />
            <div
              className="absolute left-0 top-6 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 transition-all duration-500"
              style={{
                width: `${((lanes.findIndex((l) => l.id === active) + 1) / lanes.length) * 100}%`,
              }}
              aria-hidden
            />
            {lanes.map((lane) => {
              const isActive = active === lane.id
              return (
                <button
                  key={lane.id}
                  type="button"
                  onClick={() => setActive(lane.id)}
                  className="relative z-10 flex flex-1 flex-col items-center px-2"
                >
                  <motion.span
                    layout
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition ${
                      isActive
                        ? `bg-slate-900 text-white ring-2 ring-offset-2 ring-offset-slate-950 ${accentRing[lane.accent]}`
                        : 'border-slate-600 bg-slate-800 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {lane.number}
                  </motion.span>
                  <span
                    className={`mt-3 text-center text-xs font-medium ${isActive ? 'text-white' : 'text-slate-500'}`}
                  >
                    {lane.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="mt-8 flex flex-col gap-2 md:hidden">
          {lanes.map((lane) => (
            <button
              key={lane.id}
              type="button"
              onClick={() => setActive(lane.id)}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                active === lane.id
                  ? 'border-blue-500/50 bg-blue-950/40 text-white'
                  : 'border-slate-700 bg-slate-900/50 text-slate-400'
              }`}
            >
              Lane {lane.number}: {lane.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass-panel-strong mt-10 rounded-3xl p-6 md:p-10"
          >
            {(() => {
              const lane = lanes.find((l) => l.id === active)!
              const Content = laneContent[active]
              return (
                <>
                  <div className="mb-8 border-b border-slate-700/50 pb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                      Lane {lane.number}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-white">{lane.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">Owner: {lane.owner}</p>
                    <p className="mt-3 text-slate-400">{lane.summary}</p>
                  </div>
                  <Content />
                </>
              )
            })()}
          </motion.div>
        </AnimatePresence>

        {/* Visual flow strip */}
        <div className="mt-12 overflow-x-auto">
          <div className="flex min-w-max items-center justify-center gap-2 px-4 text-xs font-medium text-slate-500">
            {lanes.map((lane, i) => (
              <span key={lane.id} className="flex items-center gap-2">
                <span className="rounded-md bg-slate-800 px-2 py-1 text-slate-300">
                  L{lane.number}
                </span>
                {i < lanes.length - 1 && (
                  <svg className="h-4 w-8 text-blue-500/60" viewBox="0 0 32 16">
                    <path
                      d="M0 8h24m0 0l-6-6m6 6l-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
