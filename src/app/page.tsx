export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <Problem />

      {/* Services Section */}
      <Services />

      {/* Workflows Section */}
      <Workflows />

      {/* Results Section */}
      <Results />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-black font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-lg">
            Ralph <span className="text-amber-400">AI</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#problem" className="hover:text-white transition-colors">
            The Problem
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#workflows" className="hover:text-white transition-colors">
            Workflows
          </a>
          <a href="#results" className="hover:text-white transition-colors">
            Results
          </a>
        </div>
        <a
          href="#book"
          className="bg-amber-500 hover:bg-amber-400 text-black font-medium px-5 py-2 rounded-lg text-sm transition-colors"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden grid-bg">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-dot" />
          <span className="text-amber-400 text-sm font-medium">
            Not another SaaS — a tailored AI deployment
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl mx-auto">
          The AI workforce for{" "}
          <span className="gradient-text">marketing agencies</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Deploy autonomous AI agents that monitor campaigns 24/7, automate
          reporting, and scale your agency — without hiring a single person.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-amber-500/20"
          >
            Book a Free Discovery Call
          </a>
          <a
            href="#services"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-8 py-3.5 rounded-xl text-base transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: "24/7", label: "Campaign monitoring" },
            { value: "40hrs", label: "Saved per week" },
            { value: "2-3×", label: "More clients, same team" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROBLEM SECTION
   ───────────────────────────────────────────── */
function Problem() {
  const painPoints = [
    {
      icon: "🔥",
      title: "Campaign fires go unnoticed",
      description:
        "Nobody's watching every campaign 24/7. Performance drops bleed ad spend for hours — or days — before anyone catches it.",
    },
    {
      icon: "📊",
      title: "Reporting eats your week",
      description:
        "Your team spends 10-15 hours per week pulling data from Meta, Google, and Shopify just to build client reports.",
    },
    {
      icon: "🧱",
      title: "You've hit a capacity ceiling",
      description:
        "You can't take on more clients without hiring. But hiring is slow, expensive, and risky in the current market.",
    },
    {
      icon: "🤖",
      title: "AI tools are generic garbage",
      description:
        "You've tried the off-the-shelf tools. They don't understand your workflows, can't connect your stack, and create more work than they save.",
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Your agency is buried in{" "}
            <span className="gradient-text">manual work</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Growing an agency shouldn&apos;t mean drowning in spreadsheets. But
            here you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 card-hover"
            >
              <div className="text-2xl mb-3">{point.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICES SECTION
   ───────────────────────────────────────────── */
function Services() {
  const tiers = [
    {
      name: "Discovery Call",
      price: "Free",
      duration: "30 minutes",
      description:
        "Understand your agency's workflow, identify the biggest automation opportunities, and estimate your ROI. No commitment.",
      features: [
        "Current state workflow analysis",
        "Top 3 automation opportunities",
        "Time & money savings estimate",
        "Custom implementation roadmap",
        "Zero commitment required",
      ],
      cta: "Book Discovery",
      highlight: false,
    },
    {
      name: "AI Pilot Sprint",
      price: "$5-10K",
      duration: "1-2 weeks",
      description:
        "Go from idea to production-ready AI workflows. We deploy 2-3 high-value automations, prove ROI, then you decide.",
      features: [
        "2-3 high-value automations deployed",
        "Integration with Meta, Google, Shopify",
        "Staff training on AI workflows",
        "30-day support period",
        "Performance metrics & ROI tracking",
      ],
      cta: "Start a Pilot",
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Operations Partner",
      price: "$3-5K/mo",
      duration: "Ongoing",
      description:
        "Continuous AI operations. We monitor, optimise, and build new workflows every month. Your AI team — without the headcount.",
      features: [
        "24/7 campaign monitoring",
        "Monthly strategy sessions",
        "New workflow development",
        "Priority support",
        "Quarterly optimisation reviews",
      ],
      cta: "Discuss Partnership",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            From discovery to{" "}
            <span className="gradient-text">full deployment</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Start with a free call. Prove ROI with a pilot. Scale with an
            ongoing partnership. Every step is risk-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 card-hover ${
                tier.highlight
                  ? "bg-gradient-to-b from-amber-500/10 to-amber-500/5 border-2 border-amber-500/30"
                  : "bg-zinc-900/50 border border-zinc-800"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-amber-400">
                    {tier.price}
                  </span>
                  <span className="text-zinc-500 text-sm">
                    / {tier.duration}
                  </span>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <svg
                      className="w-4 h-4 text-amber-400 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block text-center font-medium py-3 rounded-xl transition-colors ${
                  tier.highlight
                    ? "bg-amber-500 hover:bg-amber-400 text-black"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WORKFLOWS SECTION
   ───────────────────────────────────────────── */
function Workflows() {
  const workflows = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
      title: "24/7 Campaign Monitor",
      description:
        "Monitors ROAS, CPA, CTR, and spend every 15 minutes. Alerts you via Slack, email, or SMS when thresholds are breached. Auto-pauses bleeding campaigns.",
      savings: "10+ hrs/week",
      status: "Live",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Automated Client Reporting",
      description:
        "Pulls Meta and Google data automatically. Generates branded, client-ready weekly and monthly performance reports. Zero manual effort.",
      savings: "8-15 hrs/week",
      status: "Live",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.44c0-3.515.956-6.346 2.207-8.25a23.186 23.186 0 00-9.262 1.933A23.186 23.186 0 002.738.517c1.251 1.904 2.207 4.735 2.207 8.25a23.91 23.91 0 01-1.152 6.44A24.344 24.344 0 0112 12.75z"
          />
        </svg>
      ),
      title: "Bot & Fake Traffic Detection",
      description:
        "Identifies suspicious traffic patterns, flags fake clicks, and estimates wasted ad spend. Stop paying for bot traffic.",
      savings: "2-5 hrs/week + saved spend",
      status: "Live",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Competitor Intelligence",
      description:
        "Tracks competitor ad creative, landing pages, and offers in real-time. Surface opportunities before your competitors see them.",
      savings: "Strategic advantage",
      status: "Live",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
          />
        </svg>
      ),
      title: "Creative Fatigue Detection",
      description:
        "Monitors CTR decay across all ads. Alerts you when creative is tiring out and recommends refresh timing to prevent ROAS decline.",
      savings: "Prevent revenue decline",
      status: "Live",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Cross-Platform Data Sync",
      description:
        "Unified view across Meta, Google, TikTok, and Shopify. One dashboard, all clients. No more tab-switching between platforms.",
      savings: "5+ hrs/week",
      status: "Live",
    },
  ];

  return (
    <section id="workflows" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-4">
            Workflows
          </p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
            What your AI workforce{" "}
            <span className="gradient-text">actually does</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Production-ready autonomous agents, not fancy demos. Each workflow
            plugs into your existing tools and runs 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {workflows.map((wf) => (
            <div
              key={wf.title}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 card-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                {wf.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{wf.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {wf.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-amber-400 text-xs font-semibold bg-amber-400/10 px-3 py-1 rounded-full">
                  {wf.savings}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {wf.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RESULTS / VALUE SECTION
   ───────────────────────────────────────────── */
function Results() {
  return (
    <section id="results" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-4">
            The Math
          </p>
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            The ROI is{" "}
            <span className="gradient-text">undeniable</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            We don&apos;t ask you to take our word for it. The numbers speak for
            themselves.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Driver 1: Capacity */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 glow-amber">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Immediate Value — Capacity
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-400">Manual hours saved</span>
                <span className="font-semibold text-white">40 hrs/week</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-400">At agency rate of</span>
                <span className="font-semibold text-white">$50/hr</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-400">Weekly value</span>
                <span className="font-semibold text-white">$2,000</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-zinc-300 font-medium">
                  Monthly value to your agency
                </span>
                <span className="text-2xl font-bold text-amber-400">
                  $8,000
                </span>
              </div>
            </div>
            <div className="mt-6 text-sm text-zinc-500">
              You pay $3-5K/month → clear positive ROI from day one
            </div>
          </div>

          {/* Driver 2: Performance */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Long-Term Value — Performance
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-400">Client monthly ad spend</span>
                <span className="font-semibold text-white">$50K</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-400">ROAS improvement</span>
                <span className="font-semibold text-white">10-20%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                <span className="text-zinc-400">
                  Incremental revenue per client
                </span>
                <span className="font-semibold text-white">$5-10K/mo</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-zinc-300 font-medium">
                  Across 40 clients
                </span>
                <span className="text-2xl font-bold text-amber-400">
                  $30-80K/mo
                </span>
              </div>
            </div>
            <div className="mt-6 text-sm text-zinc-500">
              Better results per client = higher retention + premium pricing
            </div>
          </div>
        </div>

        {/* Comparison row */}
        <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-center mb-8">
            Ralph AI vs. the alternatives
          </h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            {/* Header */}
            <div className="text-zinc-500" />
            <div className="text-center font-semibold text-amber-400">
              Ralph AI
            </div>
            <div className="text-center font-semibold text-zinc-400">
              Hire Analyst
            </div>
            <div className="text-center font-semibold text-zinc-400">
              SaaS Tools
            </div>

            {/* Rows */}
            {[
              ["Annual cost", "$36-60K", "$80-120K", "$20-50K"],
              ["Works 24/7", "✓", "✗", "Partial"],
              ["Custom to you", "✓", "Partial", "✗"],
              ["Scales across clients", "✓", "✗", "Partial"],
              ["Integrates full stack", "✓", "✗", "✗"],
            ].map(([label, ralph, hire, saas]) => (
              <div key={label} className="contents">
                <div className="text-zinc-400 py-3 border-t border-zinc-800">
                  {label}
                </div>
                <div className="text-center py-3 border-t border-zinc-800 text-white font-medium">
                  {ralph}
                </div>
                <div className="text-center py-3 border-t border-zinc-800 text-zinc-500">
                  {hire}
                </div>
                <div className="text-center py-3 border-t border-zinc-800 text-zinc-500">
                  {saas}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA SECTION
   ───────────────────────────────────────────── */
function CTA() {
  return (
    <section id="book" className="py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-12 md:p-16 glow-amber">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to scale your agency?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
            Book a free 30-minute discovery call. We&apos;ll map your workflows,
            identify automation opportunities, and show you exactly what Ralph
            can save you. No pitch, no pressure.
          </p>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/25"
          >
            Book a Free Discovery Call
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>

          <p className="text-zinc-600 text-sm mt-4">
            No commitment · 30 minutes · 100% free
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-black font-bold text-xs">R</span>
            </div>
            <span className="font-semibold">
              Ralph <span className="text-amber-400">AI</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <a href="#problem" className="hover:text-zinc-300 transition-colors">
              The Problem
            </a>
            <a href="#services" className="hover:text-zinc-300 transition-colors">
              Services
            </a>
            <a href="#workflows" className="hover:text-zinc-300 transition-colors">
              Workflows
            </a>
            <a href="#results" className="hover:text-zinc-300 transition-colors">
              Results
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Ralph AI. All rights reserved.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-zinc-700 text-xs">
            AI workforce solutions for marketing agencies. Sydney, Australia.
          </p>
        </div>
      </div>
    </footer>
  );
}
