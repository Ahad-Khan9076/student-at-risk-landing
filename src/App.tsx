import { Glossary } from './components/Glossary'
import { Hero } from './components/Hero'
import { KPIDashboard } from './components/KPIDashboard'
import { ProcessFlow } from './components/ProcessFlow'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

function App() {
  return (
    <>
      <div className="page-ambient" aria-hidden />
      <div className="page-content min-h-svh bg-slate-950/80 text-slate-200">
        <SiteHeader />
        <main>
          <Hero />
          <ProcessFlow />
          <KPIDashboard />
          <Glossary />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}

export default App
