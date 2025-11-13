import React from 'react'
import Spline from '@splinetool/react-spline'
import { Brain, MessageSquare, Image, Mic, Video, Wand2, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 shadow-sm backdrop-blur">
      <Sparkles size={14} className="text-purple-200" /> {children}
    </span>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white/50 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500/15 via-blue-500/15 to-orange-400/15 text-purple-600 ring-1 ring-black/5">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function App() {
  const features = [
    { icon: MessageSquare, title: 'Chat & Reasoning', desc: 'Grounded, tool-using conversations across your data, APIs, and documents.' },
    { icon: Image, title: 'Vision', desc: 'Understand screenshots, mockups, charts, UIs, and complex images with precision.' },
    { icon: Mic, title: 'Real‑time Voice', desc: 'Natural, low-latency voice agents with interruptible speech and emotions.' },
    { icon: Video, title: 'Video', desc: 'Describe scenes, summarize meetings, and generate captions in real time.' },
    { icon: Wand2, title: 'Actions', desc: 'Connect tools and workflows so your agent can browse, search, and execute.' },
    { icon: ShieldCheck, title: 'Safety & Controls', desc: 'Built-in rate limits, audit logs, and configurable policies for production.' },
  ]

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] via-[#0D1226] to-[#0A0D1A] text-white">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow-inner" />
            <span className="font-semibold tracking-tight">Multimodal AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="/test" className="hover:text-white">Health</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-white/80 hover:text-white">Sign in</a>
            <a href="#cta" className="inline-flex items-center gap-1 rounded-lg bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Launch Studio <ChevronRight size={16} />
            </a>
          </div>
          <div className="md:hidden text-white/80 text-sm">Menu</div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient auras behind Spline */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-purple-500/30 via-blue-500/25 to-orange-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4">
                <Badge>Multi‑modal AI Platform</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Build with chat, vision, voice and video — in minutes
              </h1>
              <p className="mt-4 text-white/70 leading-relaxed text-base sm:text-lg max-w-xl">
                A clean, modern canvas for your AI products. Plug in multiple models, orchestrate tools, and launch beautiful experiences fast.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium hover:bg-gray-100 transition">
                  Start free <ChevronRight size={18} className="ml-1" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
                  Explore features
                </a>
              </div>
              <p className="mt-3 text-xs text-white/50">Backend: {backendUrl.replace('https://', '').replace('http://', '')}</p>
            </div>

            <div className="relative h-[480px] w-full rounded-2xl border border-white/10 bg-white/5 shadow-inner overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Soft vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1020]/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
              <Brain size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Everything you need for multimodal AI</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Feature key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-orange-400/20 p-10">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 pointer-events-none">
              <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            </div>
            <div className="relative max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold">Design the future of interfaces</h3>
              <p className="mt-3 text-white/80">Start with a clean foundation that feels fast, modern, and production‑ready. Connect your favorite models and tools.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium hover:bg-gray-100 transition">
                  Create a project
                </a>
                <a href="/test" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
                  Check system health
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-white/80 text-sm">Multimodal AI UI Kit</span>
          </div>
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Crafted for clean UI/UX. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
