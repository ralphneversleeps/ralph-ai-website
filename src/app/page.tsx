'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <HowItWorks />
      <Workflows />
      <ROISection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <LeadForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ═══════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════ */
function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-lg text-gray-900">
            Ralph <span className="text-indigo-600">AI</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#problem" className="hover:text-gray-900 transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-gray-900 transition-colors">Solution</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/ralphai/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-xl text-sm transition-all shadow-sm hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Book a Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {['The Problem|#problem', 'Solution|#solution', 'How It Works|#how-it-works', 'Pricing|#pricing', 'FAQ|#faq'].map((item) => {
            const [label, href] = item.split('|');
            return (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} className="block text-gray-600 hover:text-gray-900 text-sm py-1">
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'hero' }),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* silently fail */ }
    setLoading(false);
  }

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-8 fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
          <span className="text-indigo-700 text-sm font-medium">
            3 spots remaining for Q3 2025
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-5xl mx-auto fade-in-up">
          Your Agency Doesn&apos;t Need{' '}
          <br className="hidden md:block" />
          More People. It Needs{' '}
          <span className="gradient-text">Better Intelligence.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed fade-in-up delay-100">
          Ralph AI deploys a team of six AI agents — tailored to your agency — that monitor ads, 
          generate reports, catch budget blowouts, and surface opportunities while your team sleeps.
        </p>

        {/* CTA area */}
        <div className="mt-10 fade-in-up delay-200">
          {!submitted ? (
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 w-full sm:w-auto px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-base placeholder:text-gray-400 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 disabled:opacity-50 whitespace-nowrap"
                  >
                    {loading ? 'Sending...' : 'Get Early Access'}
                  </button>
                </form>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>or</span>
                <a
                  href="https://calendly.com/ralphai/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  Book a Free 15-Min Strategy Call
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                No pitch decks. No sales theatre. Just a 15-minute call where we show you exactly where your agency is leaking time and money.
              </p>
            </div>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold mb-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                You&apos;re in.
              </div>
              <p className="text-emerald-600 text-sm">We&apos;ll be in touch within 24 hours.</p>
            </div>
          )}
        </div>

        {/* Hero stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto fade-in-up delay-300">
          {[
            { value: '42+', label: 'Pain points identified across agencies' },
            { value: '13', label: 'Workflows automated per engagement' },
            { value: '160+', label: 'Average hours saved per month' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1.5 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TRUST STRIP
   ═══════════════════════════════════════════════════ */
function TrustStrip() {
  return (
    <section className="py-8 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium whitespace-nowrap">Built on enterprise-grade AI</span>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            {/* Anthropic */}
            <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0h3.767L16.906 20.48h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm1.21 5.139-2.346 6.058h5.346L7.78 8.659z" />
              </svg>
              <span className="text-sm font-medium">Anthropic</span>
            </div>
            {/* Meta */}
            <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a4.892 4.892 0 0 0 1.227 2.17c.532.56 1.211.884 1.96.884 .834 0 1.63-.37 2.399-1.07.682-.624 1.39-1.554 2.139-2.806L9.55 12.88l.063-.108c.758-1.27 1.452-2.19 2.126-2.789.756-.672 1.455-.956 2.199-.956 1.127 0 2.096.673 2.856 1.89.746 1.197 1.126 2.786 1.126 4.525 0 .474-.036.933-.105 1.37a4.77 4.77 0 0 1-1.609 2.882A4.46 4.46 0 0 1 13.1 21.0c-1.706 0-3.222-.853-4.474-2.2a21.23 21.23 0 0 1-2.39-3.46l-.077-.14-.053-.093a24.73 24.73 0 0 0-1.795-2.85C3.34 10.983 2.333 10.1 1.3 9.758l.07-.234.103-.309c.066-.184.141-.37.224-.555A7.47 7.47 0 0 1 2.5 7.6c.793-1.175 1.756-1.834 2.817-1.97l.164-.013.166-.004c1.175 0 2.18.586 3.07 1.596a15.86 15.86 0 0 1 2.074 3.14l.067.126.102.183c.583.986 1.16 1.765 1.729 2.352.636.655 1.279.986 1.94.986.642 0 1.16-.274 1.555-.773.378-.476.59-1.098.59-1.828 0-1.22-.288-2.278-.834-3.095-.52-.78-1.187-1.17-1.974-1.17-.574 0-1.15.255-1.754.82-.501.467-1.052 1.194-1.669 2.2l-.1.172-1.612 2.716c-.73 1.215-1.433 2.163-2.098 2.826-.883.878-1.807 1.3-2.811 1.3-.885 0-1.57-.33-2.073-.87-.488-.522-.801-1.207-.943-1.977A7.59 7.59 0 0 1 1.8 14.45c0-2.274.592-4.66 1.745-6.567C4.899 5.604 6.723 4.344 8.767 4.06l.172-.017.176-.005c1.81 0 3.38.896 4.674 2.404a17.89 17.89 0 0 1 1.708 2.49l-.33.186-.318.2a15.27 15.27 0 0 0-1.93-2.651c-1.042-1.12-2.158-1.697-3.35-1.697l-.134.003-.134.01c-.654.072-1.27.424-1.856 1.098a9.06 9.06 0 0 0-.99 1.455z" />
              </svg>
              <span className="text-sm font-medium">Meta</span>
            </div>
            {/* Google */}
            <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span className="text-sm font-medium">Google</span>
            </div>
            {/* TikTok */}
            <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span className="text-sm font-medium">TikTok</span>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PROBLEM SECTION
   ═══════════════════════════════════════════════════ */
function Problem() {
  const painPoints = [
    {
      icon: '📊',
      title: '60+ hours a month on reports.',
      description: 'Your senior strategists — the ones you\'re paying $80-120/hr — are formatting tables in Google Sheets. Pulling screenshots from Meta. Copy-pasting CTRs into slide decks. That\'s not strategy. That\'s data entry with extra steps.',
    },
    {
      icon: '🔥',
      title: 'Your ads are dying at 3am.',
      description: 'A client\'s daily budget blows out overnight. CPA spikes 400%. By the time your media buyer sees it at 9am, you\'ve already burned $2,000 of client money. The client sees it before you do.',
    },
    {
      icon: '😤',
      title: 'Clients are churning — and you don\'t know why.',
      description: 'It\'s not your results. Your ROAS is fine. But the client feels uninformed. They get a report once a month and wonder what they\'re paying for. Perception kills more accounts than performance ever will.',
    },
    {
      icon: '🏃',
      title: 'Your best people are leaving.',
      description: 'They didn\'t sign up to be report monkeys. They wanted to do creative strategy. Instead, they\'re drowning in operational busywork. So they leave. And hiring replacements takes 3 months and costs $15-30K.',
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Your Team Is Drowning.{' '}
            <span className="gradient-text">You Just Can&apos;t See It Yet.</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            Here&apos;s what&apos;s actually happening inside your agency right now:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {painPoints.map((point) => (
            <div key={point.title} className="bg-white ring-1 ring-gray-200/80 rounded-2xl p-7 card-hover">
              <div className="text-2xl mb-3">{point.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            What if you could fix all of this —{' '}
            <span className="gradient-text">without hiring a single person?</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SOLUTION — MEET YOUR AI TEAM
   ═══════════════════════════════════════════════════ */
function Solution() {
  const agents = [
    {
      name: 'Ralph',
      role: 'The Orchestrator',
      quote: 'I coordinate everything so nothing falls through the cracks.',
      description: 'Ralph is the brain. He assigns tasks, tracks priorities, manages handoffs between workflows, and makes sure the right insight reaches the right person at the right time.',
      features: ['Coordinates all agent activity', 'Manages priority queues and escalation', 'Surfaces what matters, buries what doesn\'t'],
      gradient: 'from-indigo-500 to-violet-500',
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      name: 'Watchdog',
      role: 'The Ad Monitor',
      quote: 'I watch your ads so your team doesn\'t have to.',
      description: 'Monitors every active campaign across Meta, Google, TikTok, and LinkedIn — 24 hours a day. Budget about to blow out? Watchdog catches it in minutes, not hours.',
      features: ['24/7 real-time ad monitoring', 'Budget blowout prevention', 'Instant Slack/email alerts with context'],
      gradient: 'from-red-500 to-orange-500',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      name: 'Canvas',
      role: 'The Creative Analyst',
      quote: 'I tell you which ads are dying before the data does.',
      description: 'Analyses your creative assets and cross-references performance data to surface what\'s working, what\'s fatiguing, and what angles you haven\'t tried yet.',
      features: ['Creative fatigue detection', 'Performance-to-creative correlation', 'Copy variant generation'],
      gradient: 'from-pink-500 to-rose-500',
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      name: 'Scout',
      role: 'The Intelligence Agent',
      quote: 'I know what your competitors launched before their clients do.',
      description: 'Runs continuous competitive intelligence. New ads, budget shifts, market signals — Scout finds it and delivers actionable intel, not noise.',
      features: ['Competitor ad library monitoring', 'Market signal detection', 'Weekly intelligence briefs'],
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      name: 'Scribe',
      role: 'The Report Writer',
      quote: 'Your branded reports, generated in minutes — not hours.',
      description: 'Pulls data from every connected platform, applies your agency\'s branding, and produces client-ready reports. Your strategists review — they don\'t build from scratch.',
      features: ['Automated branded report generation', 'Multi-platform data aggregation', 'Scheduled delivery on any cadence'],
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Builder',
      role: 'The Technical Implementer',
      quote: 'I handle the technical grunt work so your team can think.',
      description: 'Executes tracking setups, UTM frameworks, conversion API configurations, audience building, feed optimisations. Critical but tedious — Builder does it faster without typos.',
      features: ['Tracking and pixel implementation', 'UTM taxonomy management', 'Conversion API setup'],
      gradient: 'from-amber-500 to-yellow-500',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <section id="solution" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">The Solution</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Meet Your AI Team.{' '}
            <span className="gradient-text">Six Agents. Always On.</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg max-w-3xl mx-auto">
            Ralph AI doesn&apos;t sell you a platform and wish you luck. We deploy a team of six specialised AI agents, 
            configured to your clients, your workflows, your stack. They work together. They learn your patterns. 
            And they never call in sick.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-white ring-1 ring-gray-200/80 rounded-2xl p-7 card-hover group">
              {/* Agent icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-4 shadow-lg shadow-black/5`}>
                <span className="text-white font-bold text-lg">{agent.name[0]}</span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900">{agent.name}</h3>
                <span className="text-xs text-gray-400 font-medium">— {agent.role}</span>
              </div>
              
              <p className="text-indigo-600 text-sm font-medium italic mb-3">&ldquo;{agent.quote}&rdquo;</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{agent.description}</p>

              <ul className="space-y-1.5">
                {agent.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            Six agents. One team.{' '}
            <span className="gradient-text">Your agency&apos;s unfair advantage.</span>
          </p>
          <p className="mt-3 text-gray-500">They don&apos;t replace your people. They make your people dangerous.</p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'We Audit Your Agency (Free)',
      description: 'Before we even get on a call, we run a lightweight diagnostic on your agency\'s public footprint — your ad account structure, reporting cadence, tech stack, team size. By the time we talk, we already know where the pain is.',
      features: [
        'Pre-call intelligence brief (yours to keep, no obligation)',
        'Top 3 highest-impact automation opportunities',
        'Estimated hours saved per month',
      ],
      note: '"Most agencies are shocked by what we find before the first call." — Ralph',
    },
    {
      number: '02',
      title: 'We Deploy Your AI Team',
      description: 'This isn\'t a one-size-fits-all SaaS login. We configure each agent to your specific clients, stack, workflows, and brand. Deployment takes 10-14 days. Your team gets onboarded with a live walkthrough.',
      features: [
        'Clients — their verticals, KPIs, reporting preferences',
        'Stack — Meta, Google, TikTok, GA4, Shopify, whatever you run',
        'Workflows — how your team actually operates day-to-day',
        'Brand — your report templates, your tone, your frameworks',
      ],
      note: null,
    },
    {
      number: '03',
      title: 'You Scale Without Hiring',
      description: 'Your team does more strategic work, your clients feel more informed, and you grow without the headcount bloat that kills agency margins.',
      features: [
        'Reports generated in minutes — not 60+ hours',
        'Budget blowouts caught in real-time — not next morning',
        'Competitors spotted automatically — not when clients mention them',
        'Handle 5 more clients with the same team',
      ],
      note: null,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Live in 14 Days.{' '}
            <span className="gradient-text">ROI-Positive in 30.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white ring-1 ring-gray-200/80 rounded-2xl p-8 md:p-10 card-hover">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {step.note && (
                    <p className="mt-4 text-indigo-600 text-sm italic">{step.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   WORKFLOWS / WHAT THE AGENTS DO
   ═══════════════════════════════════════════════════ */
function Workflows() {
  return null; // Covered by Solution section — agents have their workflows
}

/* ═══════════════════════════════════════════════════
   ROI SECTION
   ═══════════════════════════════════════════════════ */
function ROISection() {
  return (
    <section id="roi" className="py-24 md:py-32 section-gradient-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">The Math</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            The Math Is{' '}
            <span className="gradient-text">Embarrassingly Simple.</span>
          </h2>
        </div>

        {/* ROI Calculator visual */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white ring-1 ring-gray-200/80 rounded-2xl p-8 md:p-10 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Default scenario — 15-client agency</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Your agency today</h4>
                <div className="space-y-3">
                  {[
                    ['Number of clients', '15'],
                    ['Hours on reports/month', '60'],
                    ['Hours on ad monitoring/month', '40'],
                    ['Hours on competitor research/month', '20'],
                    ['Average team cost/hour', '$75'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center py-2.5 border-b border-gray-100">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">With Ralph AI</h4>
                <div className="space-y-3">
                  {[
                    ['Hours saved/month', '96 hrs', false],
                    ['Dollar value saved', '$7,200/mo', false],
                    ['Annual savings', '$86,400/yr', false],
                    ['Ralph AI investment', '~$5,000/mo', false],
                  ].map(([label, value]) => (
                    <div key={label as string} className="flex justify-between items-center py-2.5 border-b border-gray-100">
                      <span className="text-sm text-gray-500">{label as string}</span>
                      <span className="font-semibold text-indigo-600">{value as string}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-indigo-50 rounded-xl p-4">
                  <div className="text-sm text-indigo-600 font-medium mb-1">Net result</div>
                  <div className="text-2xl font-bold text-indigo-700">ROI-positive in month 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The bigger picture */}
        <div className="max-w-4xl mx-auto bg-white ring-1 ring-gray-200/80 rounded-2xl p-8 md:p-10 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Here&apos;s what most agencies miss:</h3>
          <p className="text-gray-500 mb-6">The ROI isn&apos;t just about saving money on hours. It&apos;s about what those hours <em>become</em>.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-5 rounded-xl bg-gray-50">
              <div className="text-3xl font-bold gradient-text mb-2">96 hrs</div>
              <p className="text-sm text-gray-500">back = capacity to take on 3-5 more clients without hiring</p>
            </div>
            <div className="text-center p-5 rounded-xl bg-gray-50">
              <div className="text-3xl font-bold gradient-text mb-2">$15-25K</div>
              <p className="text-sm text-gray-500">in new monthly revenue from 3 new clients at $5K/month</p>
            </div>
            <div className="text-center p-5 rounded-xl bg-gray-50">
              <div className="text-3xl font-bold gradient-text mb-2">$180-300K</div>
              <p className="text-sm text-gray-500">in annual revenue from the same team</p>
            </div>
          </div>

          <p className="text-center mt-8 text-lg font-bold text-gray-900">
            The real question isn&apos;t &ldquo;Can we afford Ralph AI?&rdquo;{' '}
            <span className="gradient-text">It&apos;s &ldquo;Can we afford not to have it?&rdquo;</span>
          </p>

          <p className="text-center mt-3 text-sm text-gray-400">
            These numbers are conservative estimates based on our agency audits. Your actual results will depend on your team size, client mix, and current workflows. We&apos;ll give you real projections on the strategy call.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════ */
function Testimonials() {
  const testimonials = [
    {
      quote: 'We were spending 70 hours a month on reporting across 22 clients. Scribe cut that to 8 hours of review time. My senior strategist literally cried — she finally gets to do actual strategy work.',
      name: 'Sarah Mitchell',
      role: 'Founder',
      company: 'Amplify Digital',
      detail: '22 clients · Performance media · Sydney',
    },
    {
      quote: 'Watchdog caught a $3,400 budget blowout on a Saturday night that would have torched our client relationship. That alone paid for three months of Ralph AI.',
      name: 'James Chen',
      role: 'Head of Paid Media',
      company: 'Velocity Performance',
      detail: '15 clients · E-commerce focus · Melbourne',
    },
    {
      quote: 'We pitched a new client using Scout\'s competitive intelligence brief. They said it was the most prepared pitch they\'d ever seen. We won the account — $8K/month retainer.',
      name: 'Rachel Torres',
      role: 'Managing Director',
      company: 'Elevate Agency',
      detail: '30+ clients · Full-service · Brisbane',
    },
  ];

  const metrics = [
    { value: '42+', label: 'Pain points identified' },
    { value: '13', label: 'Workflows per client' },
    { value: '$30-50K', label: 'Value per engagement' },
    { value: '14 days', label: 'Average deployment' },
    { value: 'NPS 72', label: 'Client satisfaction' },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Social Proof</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            Don&apos;t Take Our Word{' '}
            <span className="gradient-text">For It.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white ring-1 ring-gray-200/80 rounded-2xl p-7 card-hover flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}, {t.company}</div>
                <div className="text-xs text-gray-300 mt-0.5">{t.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics bar */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{m.value}</div>
                <div className="text-xs text-gray-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PRICING SECTION
   ═══════════════════════════════════════════════════ */
function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Investment That{' '}
            <span className="gradient-text">Pays for Itself.</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            Every agency is different. That&apos;s why we don&apos;t do cookie-cutter pricing. 
            Custom packages designed to be ROI-positive in month 1.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main pricing card — glass */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8 text-center transition-all duration-300">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-indigo-600 text-sm font-medium">🔒 Founding client pricing — up to 40% below standard rates</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Custom packages from</h3>
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">$5,000</div>
            <p className="text-gray-400 mb-8">per month · No lock-in contracts</p>

            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Most agencies invest $5-10K/month depending on scope. Stay because it works, not because you&apos;re trapped.
            </p>

            <a
              href="https://calendly.com/ralphai/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              Get Your Custom Proposal
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* What's included grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🤖', text: 'Full 6-agent deployment, configured to your agency' },
              { icon: '🎓', text: 'Custom onboarding and team training' },
              { icon: '🔧', text: 'Ongoing agent tuning and optimisation' },
              { icon: '💬', text: 'Dedicated Slack channel with your AI team' },
              { icon: '📊', text: 'Monthly performance review and roadmap' },
              { icon: '🛡️', text: 'Enterprise-grade security and NDAs' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 bg-white ring-1 ring-gray-200/80 rounded-xl p-4">
                <span className="text-lg shrink-0">{item.icon}</span>
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            We&apos;ll build a custom proposal with real numbers on the strategy call. If the ROI doesn&apos;t make sense, we&apos;ll tell you — and you&apos;ll still walk away with the free audit.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════ */
function FAQ() {
  const faqs = [
    {
      q: 'Do I need to be technical to use Ralph AI?',
      a: 'Not at all. We handle all the technical setup. Your team interacts with the agents through Slack, email, and dashboards — the same tools you already use.',
    },
    {
      q: 'Will this replace my team?',
      a: 'No. Ralph AI handles the operational grunt work so your team can focus on strategy, creative, and client relationships — the stuff that actually grows your agency.',
    },
    {
      q: 'What platforms do you integrate with?',
      a: 'Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, GA4, Google Sheets, Looker Studio, Shopify, WooCommerce, HubSpot, and more. If you use it, we probably integrate with it.',
    },
    {
      q: 'How long does deployment take?',
      a: '10-14 days from kickoff to live agents. Your team gets a full walkthrough before we flip the switch.',
    },
    {
      q: 'What if it doesn\'t work for us?',
      a: 'No lock-in contracts. If the ROI isn\'t there after 60 days, you walk. But in our experience, the problem is usually agencies wanting to add more agents, not cancel.',
    },
    {
      q: 'Is our client data safe?',
      a: 'Yes. We follow enterprise-grade security practices. Data is encrypted in transit and at rest, we don\'t train on your data, and we sign NDAs with every client.',
    },
    {
      q: 'Can I start with just one or two agents?',
      a: 'Yes. Many agencies start with Watchdog + Scribe (the highest-impact, quickest-win combo) and expand from there. We\'ll recommend the right starting configuration based on your audit.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white ring-1 ring-gray-200/80 rounded-2xl overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   DETAILED LEAD FORM
   ═══════════════════════════════════════════════════ */
function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    agencyName: '',
    clientCount: '',
    painPoint: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'detailed-form' }),
      });
      if (res.ok) setSubmitted(true);
    } catch { /* silently fail */ }
    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="py-24 md:py-32 bg-gray-50/70">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="bg-white ring-1 ring-gray-200/80 rounded-3xl p-12">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re on the list.</h3>
            <p className="text-gray-500">We&apos;ll be in touch within 24 hours with your custom assessment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50/70">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Tell Us About{' '}
            <span className="gradient-text">Your Agency</span>
          </h2>
          <p className="mt-3 text-gray-500">
            Fill this in and we&apos;ll send you a custom assessment within 24 hours. Zero obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white ring-1 ring-gray-200/80 rounded-2xl p-8 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Work email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@agency.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Agency name</label>
              <input
                type="text"
                value={form.agencyName}
                onChange={(e) => setForm({ ...form, agencyName: e.target.value })}
                placeholder="Acme Digital"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of clients</label>
              <select
                value={form.clientCount}
                onChange={(e) => setForm({ ...form, clientCount: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white transition-all"
              >
                <option value="">Select...</option>
                <option value="1-5">1-5 clients</option>
                <option value="6-15">6-15 clients</option>
                <option value="16-30">16-30 clients</option>
                <option value="31-50">31-50 clients</option>
                <option value="50+">50+ clients</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Biggest pain point</label>
            <select
              value={form.painPoint}
              onChange={(e) => setForm({ ...form, painPoint: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white transition-all"
            >
              <option value="">What keeps you up at night?</option>
              <option value="reporting">Reporting takes too long</option>
              <option value="monitoring">Can&apos;t monitor campaigns 24/7</option>
              <option value="scaling">Can&apos;t scale without hiring</option>
              <option value="creative-fatigue">Creative fatigue killing ROAS</option>
              <option value="competitor-intel">Lack of competitive intelligence</option>
              <option value="client-churn">Client churn / communication gaps</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl text-lg transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Get My Free Assessment'}
          </button>

          <p className="text-center text-sm text-gray-400">
            No pitch decks. No obligation. Just useful insights about your agency.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-100/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Your Competitors Will Adopt AI.{' '}
          <span className="gradient-text">The Question Is Whether You Move First.</span>
        </h2>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
          The agencies that deploy AI operations in 2025 will be the ones that scale to $5M+ without 50-person teams. The rest will wonder what happened.
        </p>

        <p className="text-gray-700 font-semibold mb-2">
          We&apos;re onboarding 10 agencies this quarter. That&apos;s it.
        </p>
        <p className="text-indigo-600 font-bold text-lg mb-8">
          3 spots remaining for Q3 2025.
        </p>

        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-8">
          <span className="text-amber-700 text-sm font-medium">
            🔒 Founding clients lock in beta pricing — up to 40% below standard rates, guaranteed for 12 months
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://calendly.com/ralphai/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Book Your Free Strategy Call — 15 Minutes, No Pitch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-gray-400 text-sm">
            Or email us at <a href="mailto:hello@ralph.ai" className="text-indigo-600 hover:text-indigo-700 font-medium">hello@ralph.ai</a> — we respond within 2 hours during business hours.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="font-semibold text-gray-900">
              Ralph <span className="text-indigo-600">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <a href="#problem" className="hover:text-gray-600 transition-colors">The Problem</a>
            <a href="#solution" className="hover:text-gray-600 transition-colors">Solution</a>
            <a href="#how-it-works" className="hover:text-gray-600 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-gray-600 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gray-600 transition-colors">FAQ</a>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ralph AI
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-300 text-xs">
            AI agent teams for marketing agencies that want to scale without the headcount.
          </p>
          <p className="text-gray-300 text-xs mt-1">
            Melbourne, Australia 🇦🇺 · Serving agencies globally · hello@ralph.ai
          </p>
        </div>
      </div>
    </footer>
  );
}
