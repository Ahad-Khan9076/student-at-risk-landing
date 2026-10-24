export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 px-4 py-14 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-bold text-slate-200">
            Student At-Risk & Dropout Tracking System
          </p>
          <p className="mt-1 text-sm text-slate-500">Architecture overview for institutional retention</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {['CCD', 'UIS Portal', 'SDC', 'CSM', 'SFC', 'Treasurer'].map((dept) => (
            <span
              key={dept}
              className="rounded-lg bg-slate-800/60 px-3 py-1.5 text-xs font-semibold text-slate-400 ring-1 ring-slate-700/50"
            >
              {dept}
            </span>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Retention workflow documentation
      </p>
    </footer>
  )
}
