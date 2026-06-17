import Link from "next/link";
import { quizParts } from "@/data/quizData";

const icons = [
  /* Part 1 — sparkle/magic */
  <svg key="1" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
  /* Part 2 — chat/conversation */
  <svg key="2" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>,
  /* Part 3 — chart/beyond-text */
  <svg key="3" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 012.56-.281l2.266 1.418a2.25 2.25 0 002.56-.281L20.25 6m0 0V3.75m0 2.25H22.5M12 15.75v.008M12 20.25c-5.522 0-10-3.36-10-7.5s4.478-7.5 10-7.5 10 3.36 10 7.5a5.91 5.91 0 01-1.122 3.46" />
  </svg>,
  /* Part 4 — shield/safety */
  <svg key="4" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  /* Thesis Part 1 — factory/gear */
  <svg key="5" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.567l.375-1.5m5.874-12.144l.375-1.5" />
  </svg>,
  /* Thesis Part 2 — blueprint/layers */
  <svg key="6" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>,
  /* Thesis Part 3 — hierarchy/org */
  <svg key="7" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-3.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125V21m-6.75 0H3v-3m3.75 3H6.75m0 0v-7.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m-4.5 0h4.5m0 0h3.75m-3.75 0v-4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m-4.5 0h4.5M21 21V10.125c0-.621-.504-1.125-1.125-1.125H18c-.621 0-1.125.504-1.125 1.125V21M21 21h-3m3 0h1.5" />
  </svg>,
  /* Thesis Part 4 — network/nervous-system */
  <svg key="8" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>,
  /* Quick Start Part 1 — compass/direction */
  <svg key="9" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 0l-3.75 11.25L12 16.5l3.75-3L12 2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 13.5L12 16.5l3.75-3" />
  </svg>,
  /* Quick Start Part 2 — book/curriculum */
  <svg key="10" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>,
  /* Orientation Part 1 — user/coworker */
  <svg key="11" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>,
  /* Orientation Part 2 — cube/layers/building */
  <svg key="12" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>,
  /* AOL Part 1 — cloud/server */
  <svg key="13" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>,
  /* AOL Part 2 — cpu/processor */
  <svg key="14" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
  </svg>,
  /* MD/HTML Part 1 — pencil/edit */
  <svg key="15" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>,
  /* MD/HTML Part 2 — browser/window */
  <svg key="16" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
  /* Skills & Connectors — plug/link */
  <svg key="17" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>,
  /* Skills Part 2 — puzzle/component */
  <svg key="18" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
  </svg>,
];

export default function Home() {
  const orientationParts = quizParts.slice(10, 12);
  const thesisParts = quizParts.slice(4, 8);
  const operatingLayerParts = quizParts.slice(12, 14);
  const quickStartParts = quizParts.slice(8, 10);
  const aiPromptingParts = quizParts.slice(0, 4);
  const markdownHtmlParts = quizParts.slice(14, 16);
  const skillsConnectorsParts = quizParts.slice(16);

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-5">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          515 MCQs • 47 Concepts • 18 Parts
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          The AI Agent Factory — Complete Quiz
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Test your knowledge. Pick a part to begin.
        </p>
      </div>

      {/* ── Section 1: START WITH THE ORIENTATION ── */}
      <div className="w-full max-w-2xl mb-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/70 mb-4 text-center">
          START WITH THE ORIENTATION
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {orientationParts.map((part, i) => (
            <Link
              key={part.id}
              href={`/quiz/${part.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${part.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-slate-300 mb-4 group-hover:text-white transition-colors">
                  {icons[i + 10]}
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {part.concepts}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {part.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {part.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500">{part.questions.length} questions</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">
                    Start quiz →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 2: The Agent Factory Thesis ── */}
      <div className="w-full max-w-2xl mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/70 mb-4 text-center">
          The Agent Factory Thesis
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {thesisParts.map((part, i) => (
            <Link
              key={part.id}
              href={`/quiz/${part.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${part.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-slate-300 mb-4 group-hover:text-white transition-colors">
                  {icons[i + 4]}
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {part.concepts}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                  {part.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {part.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500">{part.questions.length} questions</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-amber-400 group-hover:text-amber-300 transition-colors font-medium">
                    Start quiz →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 3: The AI Operating Layer ── */}
      <div className="w-full max-w-2xl mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400/70 mb-4 text-center">
          The AI Operating Layer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {operatingLayerParts.map((part, i) => (
            <Link
              key={part.id}
              href={`/quiz/${part.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/10 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${part.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-slate-300 mb-4 group-hover:text-white transition-colors">
                  {icons[i + 12]}
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {part.concepts}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-fuchsia-300 transition-colors">
                  {part.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {part.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500">{part.questions.length} questions</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors font-medium">
                    Start quiz →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 4: Quick Start — Crash Courses ── */}
      <div className="w-full max-w-2xl mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-400/70 mb-4 text-center">
          Quick Start: Crash Courses
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {quickStartParts.map((part, i) => (
            <Link
              key={part.id}
              href={`/quiz/${part.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${part.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-slate-300 mb-4 group-hover:text-white transition-colors">
                  {icons[i + 8]}
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {part.concepts}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-green-300 transition-colors">
                  {part.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {part.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500">{part.questions.length} questions</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-green-400 group-hover:text-green-300 transition-colors font-medium">
                    Start quiz →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 5: AI Prompting in 2026 ── */}
      <div className="w-full max-w-2xl mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 text-center">
          AI Prompting in 2026
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {aiPromptingParts.map((part, i) => (
            <Link
              key={part.id}
              href={`/quiz/${part.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${part.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-slate-300 mb-4 group-hover:text-white transition-colors">
                  {icons[i]}
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {part.concepts}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                  {part.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {part.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500">{part.questions.length} questions</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors font-medium">
                    Start quiz →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 6: Markdown In, HTML Out ── */}
      <div className="w-full max-w-2xl mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-400/70 mb-4 text-center">
          Markdown In, HTML Out
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {markdownHtmlParts.map((part, i) => (
            <Link
              key={part.id}
              href={`/quiz/${part.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${part.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-slate-300 mb-4 group-hover:text-white transition-colors">
                  {icons[i + 14]}
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {part.concepts}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-orange-300 transition-colors">
                  {part.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {part.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500">{part.questions.length} questions</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-orange-400 group-hover:text-orange-300 transition-colors font-medium">
                    Start quiz →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Section 7: Skills & Connectors Crash Course ── */}
      <div className="w-full max-w-2xl mt-8 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400/70 mb-4 text-center">
          Skills &amp; Connectors Crash Course
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillsConnectorsParts.map((part, i) => (
            <Link
              key={part.id}
              href={`/quiz/${part.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${part.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-slate-300 mb-4 group-hover:text-white transition-colors">
                  {icons[i + 16]}
                </div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {part.concepts}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  {part.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {part.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/30">
                  <span className="text-xs text-slate-500">{part.questions.length} questions</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-sky-400 group-hover:text-sky-300 transition-colors font-medium">
                    Start quiz →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
