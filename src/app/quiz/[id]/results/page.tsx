"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { quizParts } from "@/data/quizData";
import { useMemo } from "react";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

export default function ResultsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const partId = Number(params.id);
  const part = quizParts.find((p) => p.id === partId);

  const correct = Number(searchParams.get("correct")) || 0;
  const total = Number(searchParams.get("total")) || 50;
  const time = Number(searchParams.get("time")) || 0;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  const grade = useMemo(() => {
    if (percentage >= 90) return { label: "Excellent", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" };
    if (percentage >= 75) return { label: "Great", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" };
    if (percentage >= 60) return { label: "Good", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" };
    if (percentage >= 40) return { label: "Keep Learning", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" };
    return { label: "Needs Review", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30" };
  }, [percentage]);

  if (!part) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <p className="text-slate-400 text-lg">Results not available.</p>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Grade Badge */}
        <div className="text-center mb-8 animate-fade-in">
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${grade.bg} ${grade.border} border mb-4`}>
            <span className={`font-semibold text-sm ${grade.color}`}>{grade.label}</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Quiz Complete!</h1>
          <p className="text-slate-400 text-sm">{part.title}</p>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="relative w-40 h-40">
            <svg className="w-40 h-40 -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80" cy="80" r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                className="text-slate-800"
              />
              <circle
                cx="80" cy="80" r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                className={percentage >= 75 ? "text-emerald-500" : percentage >= 50 ? "text-amber-500" : "text-rose-500"}
                strokeDasharray={`${(percentage / 100) * 440} 440`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-white">{percentage}%</span>
              <span className="text-xs text-slate-400 mt-0.5">Score</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-8 animate-slide-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-indigo-400">{correct}</p>
            <p className="text-xs text-slate-400 mt-1">Correct</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-rose-400">{total - correct}</p>
            <p className="text-xs text-slate-400 mt-1">Wrong</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-amber-400">{formatTime(time)}</p>
            <p className="text-xs text-slate-400 mt-1">Time</p>
          </div>
        </div>

        {/* 3-Color Progress Bar Summary */}
        <div className="mb-2 flex justify-between text-xs text-slate-500">
          <span>Correct: {correct}</span>
          <span>Wrong: {total - correct}</span>
          <span>Total: {total}</span>
        </div>
        <div className="flex gap-1 h-3 rounded-full overflow-hidden mb-8 bg-slate-800">
          <div
            className="h-full bg-emerald-500 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
          <div
            className="h-full bg-rose-500 transition-all duration-700"
            style={{ width: `${total > 0 ? ((total - correct) / total) * 100 : 0}%` }}
          />
          <div className="h-full bg-slate-700 flex-1" />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 animate-slide-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
          <button
            onClick={() => router.push(`/quiz/${partId}`)}
            className="w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
          >
            Retake This Quiz
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full py-3 px-6 rounded-xl border border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white font-medium transition-all duration-200 hover:bg-slate-800/50"
          >
            Back to All Parts
          </button>
        </div>
      </div>
    </main>
  );
}
