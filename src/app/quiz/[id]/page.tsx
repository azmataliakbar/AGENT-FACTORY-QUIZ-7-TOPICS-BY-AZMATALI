"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { quizParts, type Question } from "@/data/quizData";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function shuffleQuestion(q: Question): Question {
  const indexed = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correctIndex }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return {
    ...q,
    options: indexed.map((x) => x.opt),
    correctIndex: indexed.findIndex((x) => x.isCorrect),
  };
}

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const partId = Number(params.id);
  const part = quizParts.find((p) => p.id === partId);

  const shuffledQuestions = useMemo(
    () => part?.questions.map(shuffleQuestion) ?? [],
    [part]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(shuffledQuestions.length).fill(null)
  );
  const startTimeRef = useRef(0);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 250);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      if (showFeedback) return;
      setSelectedAnswer(optionIndex);
      setShowFeedback(true);

      const newAnswers = [...answers];
      newAnswers[currentIndex] = optionIndex;
      setAnswers(newAnswers);
    },
    [showFeedback, answers, currentIndex]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= shuffledQuestions.length) {
      const correct = answers.filter(
        (a, i) => a === shuffledQuestions[i].correctIndex
      ).length;
      const totalTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
      router.push(
        `/quiz/${partId}/results?correct=${correct}&total=${shuffledQuestions.length}&time=${totalTime}`
      );
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  }, [currentIndex, shuffledQuestions, answers, partId, router]);

  if (!part) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <p className="text-slate-400 text-lg">Quiz part not found.</p>
      </main>
    );
  }

  const question = shuffledQuestions[currentIndex];
  const isLast = currentIndex + 1 === shuffledQuestions.length;
  const correctCount = answers.filter(
    (a, i) => a === shuffledQuestions[i].correctIndex
  ).length;
  const incorrectCount = answers.filter(
    (a, i) => a !== null && a !== shuffledQuestions[i].correctIndex
  ).length;
  const answeredCount = correctCount + incorrectCount;
  const scorePercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <main className="flex-1 flex flex-col px-4 py-6 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => router.push("/")}
          className="text-sm text-slate-500 hover:text-indigo-400 transition-colors mb-3 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to parts
        </button>
        <h1 className="text-xl font-bold text-white">{part.title}</h1>
        <p className="text-sm text-slate-400 mt-1">
          Question {currentIndex + 1} of {shuffledQuestions.length}
        </p>
      </div>

      {/* 3 Progress Bars */}
      <div className="flex gap-1.5 h-2 rounded-full overflow-hidden mb-6 bg-slate-800">
        <div
          className="h-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${(correctCount / shuffledQuestions.length) * 100}%` }}
        />
        <div
          className="h-full bg-rose-500 transition-all duration-500"
          style={{ width: `${(incorrectCount / shuffledQuestions.length) * 100}%` }}
        />
        <div
          className="h-full bg-slate-700 transition-all duration-500 flex-1"
        />
      </div>

      {/* Running Scorecard */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono text-lg text-indigo-400 font-semibold">
              {formatTime(elapsed)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            CORRECT: {correctCount}
          </span>
          <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">
            WRONG: {incorrectCount}
          </span>
          <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
            {correctCount}/{answeredCount}
          </span>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${scorePercent >= 70 ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : scorePercent >= 40 ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-rose-400 bg-rose-500/10 border-rose-500/20"}`}>
            {answeredCount > 0 ? `${scorePercent}%` : "—%"}
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-4 animate-slide-up">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
          Concept {
            (() => {
              const spread = part.conceptSpread ?? 3;
              const qPerConcept = Math.ceil(shuffledQuestions.length / spread);
              return (part.conceptStart ?? 1) + Math.floor(currentIndex / qPerConcept);
            })()
          }
        </span>
        <h2 className="text-lg font-medium text-white leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="grid gap-3 mb-6">
        {question.options.map((option, oi) => {
          let borderColor = "border-slate-500/60 hover:border-indigo-400/70 hover:shadow-lg hover:shadow-indigo-500/15";
          let bgColor = "bg-slate-700/60 hover:bg-slate-600/60";
          let textColor = "text-slate-100";
          let labelBg = "bg-slate-600/70 text-slate-200";
          let indicator: React.ReactNode = null;

          if (showFeedback) {
            if (oi === question.correctIndex) {
              borderColor = "border-emerald-400/80";
              bgColor = "bg-emerald-500/20";
              textColor = "text-emerald-200";
              labelBg = "bg-emerald-500/30 text-emerald-200";
              indicator = (
                <svg className="w-5 h-5 text-emerald-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              );
            } else if (oi === selectedAnswer) {
              borderColor = "border-rose-400/80";
              bgColor = "bg-rose-500/20";
              textColor = "text-rose-200";
              labelBg = "bg-rose-500/30 text-rose-200";
              indicator = (
                <svg className="w-5 h-5 text-rose-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              );
            } else {
              textColor = "text-slate-400";
              bgColor = "bg-slate-800/20";
              labelBg = "bg-slate-700/40 text-slate-500";
            }
          }

          const label = String.fromCharCode(65 + oi);

          return (
            <button
              key={oi}
              onClick={() => handleSelect(oi)}
              disabled={showFeedback}
              className={`flex items-center gap-3 w-full text-left p-4 rounded-xl border ${borderColor} ${bgColor} transition-all duration-200 ${!showFeedback ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-semibold shrink-0 ${labelBg}`}>
                {label}
              </span>
              <span className={`flex-1 ${textColor}`}>{option}</span>
              {indicator}
            </button>
          );
        })}
      </div>

      {/* Feedback text + Next button */}
      {showFeedback && (
        <div className="animate-fade-in">
          <p className={`text-sm mb-4 ${selectedAnswer === question.correctIndex ? "text-emerald-400" : "text-rose-400"}`}>
            {selectedAnswer === question.correctIndex
              ? "✓ Correct! Well done."
              : "✗ Incorrect. The correct answer is highlighted in green."}
          </p>
          <button
            onClick={handleNext}
            className="w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
          >
            {isLast ? "View Results" : "Next Question"}
          </button>
        </div>
      )}
    </main>
  );
}
