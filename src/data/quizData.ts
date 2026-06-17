export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface QuizPart {
  id: number;
  title: string;
  subtitle: string;
  concepts: string;
  color: string;
  questions: Question[];
  conceptStart?: number;
  conceptSpread?: number;
}

const part1: Question[] = [
  {
    id: 1,
    question: "What is the fundamental fact about AI models that underlies every concept in the crash course?",
    options: [
      "They learn from experiencing the world directly",
      "They carry yesterday's chat into today's session",
      "They have no memory of their own and answer from scratch each time",
      "They have a small built-in memory for each user"
    ],
    correctIndex: 2
  },
  {
    id: 2,
    question: "What term do engineers use for the fact that AI models have no persistent memory?",
    options: [
      "Amnesiac",
      "Memoryless",
      "Volatile",
      "Stateless"
    ],
    correctIndex: 3
  },
  {
    id: 3,
    question: "According to the page, what is the single most important insight running through every section?",
    options: [
      "Always use the paid version of AI tools",
      "Think step by step before answering",
      "Use at least three AI tools simultaneously",
      "Get the right context in, keep the wrong context out"
    ],
    correctIndex: 3
  },
  {
    id: 4,
    question: "How should a power user brief AI, according to Concept 1?",
    options: [
      "Like a robot that needs step-by-step instructions",
      "Like a smart-but-new colleague with files, context, and constraints",
      "Like an encyclopedia that already knows everything",
      "Like a Google search with short keywords"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "In the car-buying example, what did the power user attach to their prompt?",
    options: [
      "A photo of their current car",
      "Only a budget number",
      "A link to a car review website",
      "Spec sheets, dealer quotes, and insurance plans"
    ],
    correctIndex: 3
  },
  {
    id: 6,
    question: "What is 'slop' as defined in the crash course?",
    options: [
      "AI output that is fluent on the surface and empty underneath",
      "Incorrectly formatted text",
      "Prompts that are too short",
      "Code that doesn't compile"
    ],
    correctIndex: 0
  },
  {
    id: 7,
    question: "How did AI learn about the world?",
    options: [
      "By experiencing it directly with sensors",
      "By reading massive amounts of internet text",
      "By being taught by human tutors in person",
      "By watching videos of human interactions"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "On which type of topics is pretrained AI knowledge strongest?",
    options: [
      "Events after the model's knowledge cutoff date",
      "Obscure regional history",
      "Your company's secret data",
      "Common topics like cooking, celebrity gossip, and popular movies"
    ],
    correctIndex: 3
  },
  {
    id: 9,
    question: "What did the AI do when asked about a regional folk game from a reader's grandmother's village?",
    options: [
      "Refused to answer because it didn't know",
      "Correctly described the exact rules",
      "Confidently produced wrong rules by blending descriptions of similar games",
      "Asked the reader to provide more details first"
    ],
    correctIndex: 2
  },
  {
    id: 10,
    question: "According to Concept 2, what is the relationship between training data frequency and answer reliability?",
    options: [
      "They are inversely related",
      "Only recent training data matters",
      "Frequency is roughly equal to reliability",
      "There is no relationship"
    ],
    correctIndex: 2
  },
  {
    id: 11,
    question: "Should you worry about fixing typos in your prompts?",
    options: [
      "Yes, AI misunderstands misspelled prompts",
      "No, AI was trained on internet text full of typos and handles them gracefully",
      "Only for technical terms",
      "Only if using the free tier"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "What are the three retrieval modes described in Concept 3?",
    options: [
      "Fast, medium, and slow",
      "Pretrained, web search, and deep research",
      "Free, paid, and enterprise",
      "Text, image, and audio"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "Which retrieval mode takes minutes and scans dozens of sources to produce a structured report?",
    options: [
      "Web search",
      "Quick lookup",
      "Deep research",
      "Pretrained"
    ],
    correctIndex: 2
  },
  {
    id: 14,
    question: "What phrasing typically triggers web search?",
    options: [
      "'What's the latest on X' or mentioning a specific city",
      "'Why do cats stare at walls'",
      "'What is X'",
      "'Summarize the plot of Hamlet'"
    ],
    correctIndex: 0
  },
  {
    id: 15,
    question: "What went wrong when a friend asked AI 'where to run in Henderson, Nevada'?",
    options: [
      "The AI cited a 20-year-old web page recommending a school no longer open",
      "The AI refused to answer location-based questions",
      "The AI only recommended treadmills",
      "The AI gave directions to the wrong state"
    ],
    correctIndex: 0
  },
  {
    id: 16,
    question: "Why might an AI misrepresent what a web page actually said?",
    options: [
      "AI deliberately distorts information",
      "AI only reads the page title",
      "Web pages are encrypted and AI can't read them",
      "The information goes through a translation layer that loses nuance"
    ],
    correctIndex: 3
  },
  {
    id: 17,
    question: "What is the practical fix for improving web search source quality?",
    options: [
      "Never use web search",
      "Use only one AI tool",
      "Always use Wikipedia",
      "Tell the AI which kinds of sources to use and which to avoid"
    ],
    correctIndex: 3
  },
  {
    id: 18,
    question: "When should you use Google instead of AI?",
    options: [
      "When you need a written-out analysis",
      "When you want a link to a specific known site or want to buy something",
      "When you need synthesis and analysis",
      "When you need multi-source comparison"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "How much did context windows grow between 2022 and 2026?",
    options: [
      "About 10x",
      "They stayed the same",
      "About 100x",
      "About 1000x"
    ],
    correctIndex: 3
  },
  {
    id: 20,
    question: "How many words can a 2026 model hold in its context window?",
    options: [
      "Unlimited words",
      "About 50,000 words",
      "A few thousand words",
      "Hundreds of thousands, sometimes a million"
    ],
    correctIndex: 3
  },
  {
    id: 21,
    question: "What classic book comparison is used to illustrate the context window size?",
    options: [
      "War and Peace",
      "The Encyclopedia Britannica",
      "The first 4-5 Harry Potter books",
      "The complete works of Shakespeare"
    ],
    correctIndex: 2
  },
  {
    id: 22,
    question: "What is the biggest practical mistake people make with long conversations?",
    options: [
      "Starting a new conversation too often",
      "Not using enough emojis",
      "Using only one AI tool",
      "Keeping one very long conversation across many unrelated topics"
    ],
    correctIndex: 3
  },
  {
    id: 23,
    question: "What happens to old conversation turns when a chat gets very long?",
    options: [
      "They are quietly compacted/summarized to make room",
      "They are saved to a separate file",
      "They remain unchanged indefinitely",
      "They are permanently deleted"
    ],
    correctIndex: 0
  },
  {
    id: 24,
    question: "What is the rule of thumb for when to start a new conversation?",
    options: [
      "Only on Mondays",
      "After every 5 messages",
      "Every hour on the hour",
      "When the topic changes"
    ],
    correctIndex: 3
  },
  {
    id: 25,
    question: "What are symptoms that a conversation has gone stale?",
    options: [
      "The AI starts referencing earlier unrelated parts or gets longer and vaguer",
      "The AI responds faster",
      "The AI uses more emojis",
      "The AI starts asking you questions"
    ],
    correctIndex: 0
  },
  {
    id: 26,
    question: "What feature lets you front-load context once instead of every time?",
    options: [
      "Favorites",
      "Saved searches",
      "Projects (or Notebooks in Gemini)",
      "Bookmarks"
    ],
    correctIndex: 2
  },
  {
    id: 27,
    question: "What do Claude and ChatGPT call their persistent context feature?",
    options: [
      "Contexts",
      "Folders",
      "Projects",
      "Workspaces"
    ],
    correctIndex: 2
  },
  {
    id: 28,
    question: "What does Gemini call its persistent context feature?",
    options: [
      "Notebooks",
      "Projects",
      "Collections",
      "Workspaces"
    ],
    correctIndex: 0
  },
  {
    id: 29,
    question: "What is distinct about Gemini Notebooks compared to Claude/ChatGPT Projects?",
    options: [
      "The workspace flows both ways — chats become sources for future chats",
      "They can only hold text",
      "They require a paid subscription",
      "They only work on mobile"
    ],
    correctIndex: 0
  },
  {
    id: 30,
    question: "What does NotebookLM generate automatically from your sources?",
    options: [
      "Only text summaries",
      "Only code snippets",
      "Audio Overviews, Mind Maps, Flashcards, and Slide Decks",
      "Only video content"
    ],
    correctIndex: 2
  },
  {
    id: 31,
    question: "What is the key limitation on Claude's free Projects tier?",
    options: [
      "Only text files supported",
      "No file uploads allowed",
      "Projects expire after 24 hours",
      "Up to 5 projects"
    ],
    correctIndex: 3
  },
  {
    id: 32,
    question: "In the 7th-grade teacher example, what did she attach to get a better lesson plan?",
    options: [
      "A photo of her classroom",
      "Links to YouTube videos",
      "Only the textbook",
      "Course syllabus, last week's student worksheets with grades, and standardized test format"
    ],
    correctIndex: 3
  },
  {
    id: 33,
    question: "What was the standard advice for hard prompts before 2023 that is now mostly obsolete?",
    options: [
      "'Use bullet points'",
      "'Be more specific'",
      "'Think step by step'",
      "'Use fewer words'"
    ],
    correctIndex: 2
  },
  {
    id: 34,
    question: "What has replaced the old 'think step by step' technique?",
    options: [
      "Writing longer prompts",
      "Nothing — it's still the best method",
      "Using multiple AI tools at once",
      "Built-in reasoning modes that you can invoke directly"
    ],
    correctIndex: 3
  },
  {
    id: 35,
    question: "How long can modern AI think on hard problems?",
    options: [
      "A few seconds, always",
      "Exactly one minute",
      "Up to 30 seconds",
      "Many seconds, sometimes more than ten minutes"
    ],
    correctIndex: 3
  },
  {
    id: 36,
    question: "According to the 2025 METR study, how long was the doubling period for the hardest task length AI could complete?",
    options: [
      "Every 7 months",
      "Every 3 months",
      "Every 12 months",
      "Every 24 months"
    ],
    correctIndex: 0
  },
  {
    id: 37,
    question: "What task length could leading models handle by early 2025 according to the METR study?",
    options: [
      "Tasks that take humans roughly an hour",
      "Tasks that take humans a full day",
      "Tasks that take humans about 7 minutes",
      "Tasks that take humans about 30 minutes"
    ],
    correctIndex: 0
  },
  {
    id: 38,
    question: "When should you NOT use thinking mode?",
    options: [
      "For hard multi-input problems",
      "For quick lookups, summaries of a paragraph, or casual brainstorming",
      "For debugging code",
      "For comparing financial options"
    ],
    correctIndex: 1
  },
  {
    id: 39,
    question: "What is sycophancy in AI?",
    options: [
      "When AI uses too many technical terms",
      "When AI is biased toward telling you what you want to hear",
      "When AI gives too-short answers",
      "When AI refuses to answer"
    ],
    correctIndex: 1
  },
  {
    id: 40,
    question: "According to a Washington Post analysis, how much more often did ChatGPT open with affirmation rather than disagreement?",
    options: [
      "About 10 times more often",
      "About 50 times more often",
      "About 2 times more often",
      "About 5 times more often"
    ],
    correctIndex: 0
  },
  {
    id: 41,
    question: "Which phrasing is NEUTRAL and avoids sycophancy?",
    options: [
      "'Find evidence that this strategy will work'",
      "'Compare approach A and B. Score each on cost, risk, and time'",
      "'Why is approach A better than approach B?'",
      "'Confirm that this code is correct'"
    ],
    correctIndex: 1
  },
  {
    id: 42,
    question: "What verbs should you REPLACE to avoid handing the AI a conclusion before the question?",
    options: [
      "Find, defend, confirm, prove, support",
      "Read, analyze, process",
      "Display, show, render",
      "Ask, query, prompt"
    ],
    correctIndex: 0
  },
  {
    id: 43,
    question: "In the mobile tie-dyeing example, what score did the AI give the idea when neutrally evaluated?",
    options: [
      "75 out of 100",
      "8 out of 100",
      "95 out of 100",
      "50 out of 100"
    ],
    correctIndex: 1
  },
  {
    id: 44,
    question: "What does forcing a 1-10 score do that vague feedback cannot?",
    options: [
      "Uses less of your usage budget",
      "Requires a paid subscription",
      "Forces the AI to commit to a specific judgment and name what's missing",
      "Makes the AI work faster"
    ],
    correctIndex: 2
  },
  {
    id: 45,
    question: "What is the brainstorm-iterate loop described as?",
    options: [
      "A feature only available in paid tiers",
      "A deprecated technique",
      "A method only for programmers",
      "The single highest-leverage habit on the page"
    ],
    correctIndex: 3
  },
  {
    id: 46,
    question: "How many options should you ask for in the brainstorm step?",
    options: [
      "2 options",
      "3 to 5 options",
      "10 or more options",
      "1 option"
    ],
    correctIndex: 1
  },
  {
    id: 47,
    question: "In the debt payoff example, what was the user's main reason for rejecting the avalanche method?",
    options: [
      "It was too slow mathematically",
      "It required a paid tool",
      "The math was wrong",
      "They wanted psychological wins early"
    ],
    correctIndex: 3
  },
  {
    id: 48,
    question: "What is the writing version of the brainstorm-iterate loop called?",
    options: [
      "Outline before drafting",
      "Rapid prototyping",
      "Stream of consciousness",
      "Free writing"
    ],
    correctIndex: 0
  },
  {
    id: 49,
    question: "Why does editing an outline give more leverage than editing a final draft?",
    options: [
      "AI only understands outlines",
      "Editing one word in an outline can change the whole article's direction",
      "Outlines are shorter",
      "Final drafts can't be edited"
    ],
    correctIndex: 1
  },
  {
    id: 50,
    question: "What does the brainstorm-iterate loop share across all domains (writing, trip planning, product naming)?",
    options: [
      "The same AI model must be used",
      "The same exact questions",
      "The same constant shape: load context, demand options, give feedback, iterate, expand, grade",
      "The same amount of time is required"
    ],
    correctIndex: 2
  }
];

const part2: Question[] = [
  {
    id: 1,
    question: "What is the context stack composed of?",
    options: [
      "System prompt, tool descriptions, user prompt, chat history, and uploaded files",
      "Just the chat history",
      "Only uploaded files",
      "Only the user's prompt"
    ],
    correctIndex: 0
  },
  {
    id: 2,
    question: "In the context-stack analogy, what happens to anything you don't put in the stack?",
    options: [
      "It's saved for later",
      "It does not exist for this answer",
      "The AI asks you about it",
      "The AI guesses it correctly"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is 'context rot'?",
    options: [
      "When a long conversation's quality degrades because unrelated context distracts the model",
      "When the AI's hardware fails",
      "When you use the wrong AI tool",
      "When files get corrupted"
    ],
    correctIndex: 0
  },
  {
    id: 4,
    question: "What happens when chat tools 'compact' old conversation turns?",
    options: [
      "They summarize early turns into a short paragraph, losing specifics",
      "They save them as PDFs",
      "They translate them to another language",
      "They delete the entire conversation"
    ],
    correctIndex: 0
  },
  {
    id: 5,
    question: "Which AI tool shows a small 'compacting' message when it compresses old turns?",
    options: [
      "Claude",
      "All of them",
      "ChatGPT",
      "Gemini"
    ],
    correctIndex: 0
  },
  {
    id: 6,
    question: "What should you do with valuable output from a dead chat before resetting?",
    options: [
      "Delete it",
      "Leave it in the chat",
      "Save it to a file",
      "Share it immediately"
    ],
    correctIndex: 2
  },
  {
    id: 7,
    question: "What is the signal that context belongs in a project rather than a prompt?",
    options: [
      "The prompt is longer than 100 words",
      "You've pasted the same files or constraints into two or more chats",
      "You're using the free tier",
      "The topic is about coding"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What would a 'tax filing' project typically contain?",
    options: [
      "Only the current year's tax forms",
      "Last year's return, current W-2s and 1099s, and standing instructions",
      "A link to the IRS website",
      "A calendar of tax deadlines only"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What does a 'writing voice' project help with?",
    options: [
      "Translating between languages",
      "Spell checking",
      "Grammar checking only",
      "Making every draft start in your voice instead of generic-AI-voice"
    ],
    correctIndex: 3
  },
  {
    id: 10,
    question: "What is the key difference between Claude/ChatGPT Projects and Gemini Notebooks?",
    options: [
      "Claude/ChatGPT tilt toward instructions and behavior; Gemini goes further on sources",
      "Claude doesn't support file uploads",
      "Gemini only supports text",
      "There is no difference"
    ],
    correctIndex: 0
  },
  {
    id: 11,
    question: "What is the ChatGPT free plan's file limit per project?",
    options: [
      "Unlimited files",
      "10 files",
      "1 file",
      "5 files"
    ],
    correctIndex: 3
  },
  {
    id: 12,
    question: "How should a power user invoke thinking mode in plain language?",
    options: [
      "'Deep mode on'",
      "'Think step by step'",
      "'Use all resources'",
      "'Think hard' or 'think carefully before answering'"
    ],
    correctIndex: 3
  },
  {
    id: 13,
    question: "What is the portable move for invoking reasoning across all modern chat tools?",
    options: [
      "Asking for it in plain language like 'think hard'",
      "Using a premium subscription",
      "Using a special keyboard shortcut",
      "Clicking a toggle in settings"
    ],
    correctIndex: 0
  },
  {
    id: 14,
    question: "When extended thinking is on, what is the model doing internally?",
    options: [
      "Exploring multiple approaches, checking its own work",
      "Searching the web",
      "Just typing slower",
      "Waiting for more context"
    ],
    correctIndex: 0
  },
  {
    id: 15,
    question: "In the car-choosing prompt example, what three things did the prompt ask for?",
    options: [
      "Trade-offs, a recommendation, and conditions that flip the recommendation",
      "Price, color, and brand",
      "Dealer location, warranty, and reviews",
      "Speed, fuel efficiency, and safety"
    ],
    correctIndex: 0
  },
  {
    id: 16,
    question: "What is thinking mode's cost trade-off?",
    options: [
      "It's free but slower",
      "There is no trade-off",
      "It's faster but less accurate",
      "It's slower and uses more of your usage budget"
    ],
    correctIndex: 3
  },
  {
    id: 17,
    question: "What should you re-test about AI capabilities every six months?",
    options: [
      "Your assumptions about what AI can do",
      "Your keyboard shortcuts",
      "Your internet speed",
      "Your login credentials"
    ],
    correctIndex: 0
  },
  {
    id: 18,
    question: "Why are AI models biased toward agreement?",
    options: [
      "They were programmed to always agree",
      "Disagreement causes errors",
      "Agreeing with people gets more thumbs up during training",
      "They have a built-in politeness module"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    question: "Which of these is an example of subtle sycophancy bait?",
    options: [
      "'Find evidence that this strategy will work'",
      "'List the pros and cons'",
      "'What is the capital of France?'",
      "'Compare these two options'"
    ],
    correctIndex: 0
  },
  {
    id: 20,
    question: "What is the general rule for neutralizing sycophancy?",
    options: [
      "Never ask the AI's opinion",
      "Always disagree with the AI first",
      "Lay out two options without hinting at preference, then ask for pros and cons",
      "Use only one-word prompts"
    ],
    correctIndex: 2
  },
  {
    id: 21,
    question: "What does the objective-rubric pattern do?",
    options: [
      "Reduces the context window usage",
      "Makes the AI work faster",
      "Only works with paid accounts",
      "Forces the AI to check specific criteria rather than collapsing into praise"
    ],
    correctIndex: 3
  },
  {
    id: 22,
    question: "In the rubric pattern, what does forcing a number achieve for the user?",
    options: [
      "It's just for decoration",
      "Scores let you compare, prioritize, and track improvements over time",
      "It makes the output shorter",
      "It's required by the AI's programming"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "What instruction turns a rubric from a verdict into a tool?",
    options: [
      "'There is always a next level — tell me how to get to 9.5 or 9.8'",
      "'Tell me if this is good'",
      "'Give me a simple pass/fail'",
      "'Only score the best criterion'"
    ],
    correctIndex: 0
  },
  {
    id: 24,
    question: "What is the first step in the brainstorm-iterate loop?",
    options: [
      "Provide feedback on a draft",
      "Ask for exactly one option",
      "Ask for a full draft",
      "Give all relevant context up front"
    ],
    correctIndex: 3
  },
  {
    id: 25,
    question: "Why should you ask for 3-5 options instead of one?",
    options: [
      "Forcing alternatives pushes the model past its first (common) instinct",
      "To waste time",
      "To make the AI work harder",
      "Because one option might be wrong"
    ],
    correctIndex: 0
  },
  {
    id: 26,
    question: "When should you expand a chosen option into full detail?",
    options: [
      "Never — keep everything as options",
      "Immediately after the first brainstorm",
      "Before providing any context",
      "Only after iterating until you have one or two you genuinely like"
    ],
    correctIndex: 3
  },
  {
    id: 27,
    question: "In the debt payoff example, what was the user's risk tolerance?",
    options: [
      "Low — sleeps badly when seeing big balances",
      "High — willing to take risks",
      "Not mentioned",
      "Medium — open to some risk"
    ],
    correctIndex: 0
  },
  {
    id: 28,
    question: "In the writing loop, when do you ask for the full draft?",
    options: [
      "Right away on the first prompt",
      "After the outline and bullets have been critiqued and scored",
      "Before creating an outline",
      "Never — writing should always be in outline form"
    ],
    correctIndex: 1
  },
  {
    id: 29,
    question: "What is the stopping signal for the writing iteration loop?",
    options: [
      "After exactly 5 iterations",
      "When the AI says it's done",
      "When you run out of usage budget",
      "When the score plateaus around 9.5 or higher"
    ],
    correctIndex: 3
  },
  {
    id: 30,
    question: "What is the 'scope the territory' step before drafting?",
    options: [
      "Counting your word limit",
      "Choosing a font",
      "Checking your internet connection",
      "Asking AI to map what's known about the topic before producing anything"
    ],
    correctIndex: 3
  },
  {
    id: 31,
    question: "In the writing example, what analogy did the team lead want woven in?",
    options: [
      "A Pixar/Toy Story analogy about small teams being faster",
      "A cooking analogy",
      "A military analogy",
      "A sports analogy"
    ],
    correctIndex: 0
  },
  {
    id: 32,
    question: "How many rounds of 'grade and fix' are suggested for a 600-word post?",
    options: [
      "One round",
      "Ten rounds minimum",
      "Two rounds",
      "Multiple rounds until scores plateau around 9.5"
    ],
    correctIndex: 3
  },
  {
    id: 33,
    question: "What is the consequence of skipping the brainstorm-iterate loop?",
    options: [
      "You save significant time with no quality loss",
      "The AI refuses to answer",
      "Nothing — the output is the same",
      "You get slop: fluent-looking output that says little"
    ],
    correctIndex: 3
  },
  {
    id: 34,
    question: "What does the loop look like for planning a trip?",
    options: [
      "Using Google Maps exclusively",
      "Context (budget, dates, who's going), 5 itinerary skeletons, reject two, iterate the rest",
      "Only asking for hotel recommendations",
      "Asking for one itinerary and accepting it"
    ],
    correctIndex: 1
  },
  {
    id: 35,
    question: "What does the loop look like for choosing a contractor?",
    options: [
      "Side-by-side scoring of three quotes plus asking for the strongest counter to your favorite",
      "Picking the cheapest one",
      "Going with the first recommendation",
      "Only reading online reviews"
    ],
    correctIndex: 0
  },
  {
    id: 36,
    question: "In the 7th-grade teacher example, what happened in the final lesson plan's opening?",
    options: [
      "It began with a pop quiz",
      "It started with a definition",
      "It reviewed two concepts that last week's worksheets showed were weak",
      "It skipped straight to the new material"
    ],
    correctIndex: 2
  },
  {
    id: 37,
    question: "What does the context-checklist ask about prior decisions?",
    options: [
      "Only share positive outcomes",
      "Ignore them — AI doesn't need history",
      "Summarize any prior decision or existing process in one paragraph",
      "List every decision ever made"
    ],
    correctIndex: 2
  },
  {
    id: 38,
    question: "What does the checklist say to do if there's an audience for the output?",
    options: [
      "Assume the AI will figure it out",
      "Keep the audience secret",
      "Use generic language",
      "Name them (boss, child, stranger)"
    ],
    correctIndex: 3
  },
  {
    id: 39,
    question: "According to the page, what beats five paragraphs of cleverness in a prompt?",
    options: [
      "Using all caps",
      "Ten paragraphs of cleverness",
      "A single very technical term",
      "Five lines of context, properly chosen"
    ],
    correctIndex: 3
  },
  {
    id: 40,
    question: "What is the mental model for briefing AI?",
    options: [
      "Like programming a computer",
      "Like ordering at a restaurant",
      "Like briefing a smart-but-new colleague",
      "Like talking to a search engine"
    ],
    correctIndex: 2
  },
  {
    id: 41,
    question: "What does the model see for each response?",
    options: [
      "The entire internet",
      "Your entire chat history across all conversations",
      "Only the last message",
      "Only the context stack: system prompt, tools, your prompt, chat history, and uploaded files"
    ],
    correctIndex: 3
  },
  {
    id: 42,
    question: "In the car-buying comparison prompt, what specific driving details were included?",
    options: [
      "Off-road requirements",
      "Electric vehicle preference",
      "Highway vs city preference",
      "30-minute commute and two kids in car seats"
    ],
    correctIndex: 3
  },
  {
    id: 43,
    question: "How many words was the context-window comparison to Harry Potter books?",
    options: [
      "All 7 Harry Potter books",
      "One chapter",
      "The first 4-5 Harry Potter books (about 750,000 words)",
      "The first book only"
    ],
    correctIndex: 2
  },
  {
    id: 44,
    question: "What does a chat window represent according to the page?",
    options: [
      "A file system",
      "Permanent storage",
      "Working memory, not storage",
      "A backup system"
    ],
    correctIndex: 2
  },
  {
    id: 45,
    question: "What should you do with constraints that need to survive past one long session?",
    options: [
      "Repeat them in every single message",
      "Memorize them",
      "Hope the AI remembers",
      "Put them in a project, an attached file, or a note you can re-paste"
    ],
    correctIndex: 3
  },
  {
    id: 46,
    question: "What is the free tier difference between Claude and ChatGPT for projects?",
    options: [
      "Only ChatGPT has a free tier",
      "Claude limits projects; ChatGPT limits files per project",
      "Both have identical limits",
      "Only Claude has a free tier"
    ],
    correctIndex: 1
  },
  {
    id: 47,
    question: "What happens when you use thinking mode for a casual brainstorming session?",
    options: [
      "It produces shorter answers",
      "The AI refuses to brainstorm",
      "It works better than normal mode",
      "It's unnecessary — slower and uses more budget for a simple task"
    ],
    correctIndex: 3
  },
  {
    id: 48,
    question: "How should you phrase 'isn't X true?' to avoid sycophancy?",
    options: [
      "'X is definitely true, right?'",
      "'Prove that X is true'",
      "'Isn't X true?'",
      "'To what extent, if at all, is X true?'"
    ],
    correctIndex: 3
  },
  {
    id: 49,
    question: "What does the brainstorming loop look like for product naming?",
    options: [
      "Asking friends for opinions",
      "10 names, pick 3 you like, ask for variants on those",
      "Asking for one name",
      "Checking domain availability only"
    ],
    correctIndex: 1
  },
  {
    id: 50,
    question: "What was the total time estimate for producing a 600-word post using the full loop?",
    options: [
      "About 45 minutes",
      "2 hours",
      "A full day",
      "10 minutes"
    ],
    correctIndex: 0
  }
];

const part3: Question[] = [
  {
    id: 1,
    question: "What is AI strong at when reading images?",
    options: [
      "Identifying specific gym machine models",
      "Reading small print at the edge of an image",
      "Overall scene, composition, distinct shapes, whiteboard contents, and handwritten text",
      "Counting many small things in a cluttered scene"
    ],
    correctIndex: 2
  },
  {
    id: 2,
    question: "What is AI weak at when reading images?",
    options: [
      "Fine details like identifying similar-looking gym machines",
      "Understanding handwriting",
      "Reading whiteboard diagrams",
      "Recognizing large distinct shapes"
    ],
    correctIndex: 0
  },
  {
    id: 3,
    question: "In the whiteboard example, what happened when the teacher's head blocked the word 'convolutional'?",
    options: [
      "The AI gave up",
      "The AI inserted a random word",
      "The AI asked for a new photo",
      "The AI inferred the missing word from context"
    ],
    correctIndex: 3
  },
  {
    id: 4,
    question: "What is the practical tip for generating image prompts?",
    options: [
      "Use a text AI to write the image prompt for you",
      "Keep prompts under 5 words",
      "Use the same prompt for every image",
      "Write them yourself from scratch"
    ],
    correctIndex: 0
  },
  {
    id: 5,
    question: "Which of these is a style lever word for image generation?",
    options: [
      "Chair",
      "Cinematic",
      "Window",
      "Table"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "How does image generation work technically?",
    options: [
      "Pixel by pixel like text",
      "As a diffusion model that removes noise from random pixel grids step by step",
      "By copying existing images",
      "By assembling pre-made image parts"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "Why can't you stop image generation early like a text response?",
    options: [
      "The AI company prohibits it",
      "It would corrupt the file",
      "The whole image generates at once, not sequentially",
      "Images are too large"
    ],
    correctIndex: 2
  },
  {
    id: 8,
    question: "What was a classic failure mode of older diffusion models?",
    options: [
      "Only black-and-white output",
      "Too-slow generation",
      "Images that were too small",
      "Weird hands with six fingers"
    ],
    correctIndex: 3
  },
  {
    id: 9,
    question: "How do you mitigate garbled text problems in image generation?",
    options: [
      "Avoid using text in images",
      "Add text after generation in Photoshop",
      "Use only capital letters",
      "Specify the text in quotes, generate three variants, and pick the correct one"
    ],
    correctIndex: 3
  },
  {
    id: 10,
    question: "How do you mitigate inconsistent characters across frames?",
    options: [
      "Never make multi-panel images",
      "Use the same prompt for every panel",
      "Use models with character-consistency support and pass the first image back as reference",
      "Describe the character once and hope it matches"
    ],
    correctIndex: 2
  },
  {
    id: 11,
    question: "In the recipe card example, what instruction was given for unclear words?",
    options: [
      "Skip them entirely",
      "Mark them [unclear] and offer two best guesses",
      "Replace with a random word",
      "Ask the user to rescan immediately"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "What is the first step in the designer-quality diagram recipe?",
    options: [
      "Search for templates online",
      "Draw on paper first",
      "Ask Claude to visualize the concept as SVG",
      "Open Figma"
    ],
    correctIndex: 2
  },
  {
    id: 13,
    question: "Why is Claude recommended for the SVG generation step?",
    options: [
      "Its reasoning ability is among the strongest for structured-thinking work",
      "It's the only tool that can generate SVG",
      "It's the cheapest option",
      "It has the best image editing features"
    ],
    correctIndex: 0
  },
  {
    id: 14,
    question: "What resolution should you render the SVG at for the next step?",
    options: [
      "Original SVG size only",
      "Thumbnail size",
      "800x600",
      "2x resolution (1600 to 2400 pixels wide)"
    ],
    correctIndex: 3
  },
  {
    id: 15,
    question: "Which tool is recommended for the 'redraw with design quality' step?",
    options: [
      "Adobe Illustrator",
      "ChatGPT or Gemini (for text-heavy image generation)",
      "Claude",
      "Microsoft Paint"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What is the total estimated time for the diagram recipe?",
    options: [
      "1 hour minimum",
      "Roughly 10-15 minutes per diagram",
      "Several hours",
      "5 minutes"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What survives even as specific tools change?",
    options: [
      "The exact prompts to copy-paste",
      "The pattern: structure first in strongest reasoning model, polish second in strongest image model",
      "The file formats used",
      "The exact tool names"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What is the non-obvious high-leverage use of audio AI?",
    options: [
      "Listening to music",
      "Voice commands for basic tasks",
      "Long-form dictation — talking through problems captures nuance typed prompts skip",
      "Phone calls"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    question: "What happens when people who hate typing speak their prompts instead?",
    options: [
      "The AI can't understand spoken input",
      "It only works with premium accounts",
      "The prompt grows from one line to several paragraphs without effort",
      "Quality decreases"
    ],
    correctIndex: 2
  },
  {
    id: 20,
    question: "What is described as one of the highest-leverage workflows for anyone with meetings?",
    options: [
      "Dropping in a meeting recording and asking for summary, decisions, and action items",
      "Recording meetings without consent",
      "Sending meeting invites",
      "Taking handwritten notes"
    ],
    correctIndex: 0
  },
  {
    id: 21,
    question: "What audio task is AI still weak at?",
    options: [
      "Two-speaker identification",
      "Transcription of clear speech",
      "Voice memos",
      "Speaker identification with 4+ speakers"
    ],
    correctIndex: 3
  },
  {
    id: 22,
    question: "In the doctor example, what format was requested for the clinical note?",
    options: [
      "SOAP format",
      "Bullet points only",
      "Free text",
      "A table"
    ],
    correctIndex: 0
  },
  {
    id: 23,
    question: "How much time did the doctor save by using AI for clinical notes?",
    options: [
      "Over an hour",
      "20 minutes — 5 min verification instead of 25 min typing",
      "No time saved",
      "About 5 minutes"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "What is the cost tier of audio compared to other modalities?",
    options: [
      "The cheapest of all",
      "The most expensive",
      "The second-cheapest after text — pennies per minute",
      "Same as video"
    ],
    correctIndex: 2
  },
  {
    id: 25,
    question: "What is the future of multimodal described as?",
    options: [
      "The boundary between modalities disappears — you drop in mixed bundles",
      "AI will only do text",
      "Voice will replace all other input",
      "Images will become the primary input"
    ],
    correctIndex: 0
  },
  {
    id: 26,
    question: "What can modern AI build from a single prompt?",
    options: [
      "Database management systems",
      "Small games, websites, and tools",
      "Full enterprise software",
      "Operating systems"
    ],
    correctIndex: 1
  },
  {
    id: 27,
    question: "What are the three slots in the app-building recipe?",
    options: [
      "Goal, input, output",
      "HTML, CSS, JavaScript",
      "Design, development, testing",
      "Frontend, backend, database"
    ],
    correctIndex: 0
  },
  {
    id: 28,
    question: "Where does Claude render simple apps and games?",
    options: [
      "In a separate desktop app",
      "In a phone app",
      "Only as downloadable files",
      "Live in the chat, in a preview pane you can click and interact with"
    ],
    correctIndex: 3
  },
  {
    id: 29,
    question: "What is a Pomodoro timer example described as?",
    options: [
      "A stopwatch only",
      "Custom intervals set by user",
      "50-min work, 10-min break, alarm sound",
      "25-min work, 5-min break, satisfying click, yellow theme"
    ],
    correctIndex: 3
  },
  {
    id: 30,
    question: "What is still hard for one-prompt app building?",
    options: [
      "Simple timers",
      "Bill splitters",
      "Single-screen tools",
      "Multiplayer over the internet with networking and accounts"
    ],
    correctIndex: 3
  },
  {
    id: 31,
    question: "In the typing game example, what was the mascot?",
    options: [
      "A robot",
      "A cute cat that cheers when the player gets a word right",
      "A dog",
      "A dragon"
    ],
    correctIndex: 1
  },
  {
    id: 32,
    question: "What universal skill does the one-prompt app building teach?",
    options: [
      "The ability to write a clear brief and iterate it",
      "Coding in JavaScript",
      "Server management",
      "Database design"
    ],
    correctIndex: 0
  },
  {
    id: 33,
    question: "What does modern AI do when you ask a question that needs calculation?",
    options: [
      "Approximates the answer",
      "Does math in its head like a human",
      "Writes code, runs it, and returns the result",
      "Refuses to do math"
    ],
    correctIndex: 2
  },
  {
    id: 34,
    question: "Why is code execution more reliable than memory-based math?",
    options: [
      "Code always produces correct results",
      "It isn't — they're equally reliable",
      "The AI runs a calculator; the calculator is precise",
      "AI has perfect mathematical intuition"
    ],
    correctIndex: 2
  },
  {
    id: 35,
    question: "In the bubble tea example, what insight did the analysis reveal?",
    options: [
      "Strawberry matcha rose sharply in spring",
      "Sales were decreasing overall",
      "Winter was the best season",
      "All drinks sold equally"
    ],
    correctIndex: 0
  },
  {
    id: 36,
    question: "What should you double-check in AI data analysis?",
    options: [
      "The date the file was created",
      "Final totals, labels on graphs, and column interpretations",
      "The file name",
      "The AI's grammar"
    ],
    correctIndex: 1
  },
  {
    id: 37,
    question: "What is the useful first-prompt pattern when uploading data?",
    options: [
      "'Summarize the first row only'",
      "'Give me every possible chart'",
      "'Describe this dataset — what columns, what 3 charts would best show what's going on?'",
      "'Analyze this completely'"
    ],
    correctIndex: 2
  },
  {
    id: 38,
    question: "What did the runner's data analysis reveal?",
    options: [
      "Only that the runner should stop running",
      "Pace dropped after long-run weekends and distance plateaued in month 3",
      "No patterns at all",
      "Consistent improvement every week"
    ],
    correctIndex: 1
  },
  {
    id: 39,
    question: "What recommendation came from the runner's analysis?",
    options: [
      "A deload week every fourth week and a slower long-run pace",
      "Switch to cycling",
      "Run more often",
      "Increase mileage immediately"
    ],
    correctIndex: 0
  },
  {
    id: 40,
    question: "How should you treat AI data analysis?",
    options: [
      "Only for entertainment",
      "As completely unreliable",
      "As infallible",
      "Like work from a sharp junior analyst: useful, fast, almost always right, occasionally wrong"
    ],
    correctIndex: 3
  },
  {
    id: 41,
    question: "What is the firework simulator app example?",
    options: [
      "A game where you click the screen and colorful fireworks display at the click point",
      "A physics textbook",
      "A static image",
      "A video of real fireworks"
    ],
    correctIndex: 0
  },
  {
    id: 42,
    question: "What interactive avatar products are mentioned as production-grade?",
    options: [
      "Only gaming avatars",
      "Only cartoon characters",
      "Social media filters",
      "HeyGen, Synthesia, D-ID for pre-recorded content"
    ],
    correctIndex: 3
  },
  {
    id: 43,
    question: "What are real-time conversational avatars good for today?",
    options: [
      "Replacing human therapists",
      "Performing surgery",
      "Low-stakes uses like customer FAQ triage and language tutoring",
      "Flying airplanes"
    ],
    correctIndex: 2
  },
  {
    id: 44,
    question: "What is the advice for dealing with text in AI-generated images?",
    options: [
      "Always assume text will be perfect",
      "Never include text",
      "Always specify aspect ratio explicitly",
      "Text is always correct"
    ],
    correctIndex: 2
  },
  {
    id: 45,
    question: "What did the father use Nano Banana for?",
    options: [
      "Writing a book",
      "Brainstorming his daughter's birthday cake design",
      "Learning to code",
      "Creating a business plan"
    ],
    correctIndex: 1
  },
  {
    id: 46,
    question: "What is the creative leverage point of the cake story?",
    options: [
      "Baking skills are essential",
      "Only professional designers should use AI",
      "AI replaced the baker",
      "For ~$0.30 and an hour, a non-designer produced a professional brief"
    ],
    correctIndex: 3
  },
  {
    id: 47,
    question: "What should you ask for when you want an interactive app immediately?",
    options: [
      "'Save it as a file'",
      "'A working version I can click on right now in this chat'",
      "'Email me the app'",
      "'Give me the code only'"
    ],
    correctIndex: 1
  },
  {
    id: 48,
    question: "What tool generates Audio Overviews, Mind Maps, and Flashcards?",
    options: [
      "ChatGPT",
      "Microsoft Copilot",
      "Claude",
      "NotebookLM"
    ],
    correctIndex: 3
  },
  {
    id: 49,
    question: "What happens when the AI writes and runs code for data analysis?",
    options: [
      "It can only handle text data",
      "It always produces errors",
      "It's doing math the way you would — by running a calculator",
      "It requires manual code review first"
    ],
    correctIndex: 2
  },
  {
    id: 50,
    question: "What is the key insight about AI's image-reading ability?",
    options: [
      "It's good at inferring from the gist, not at zooming into fine details",
      "It sees perfectly like a human",
      "It can't process photos at all",
      "It can only read text in images"
    ],
    correctIndex: 0
  }
];

const part4: Question[] = [
  {
    id: 1,
    question: "What category of products are AI desktop apps like Cowork?",
    options: [
      "Cloud-only services",
      "Mobile-only apps",
      "Apps that run on your computer and can find, read, and act on your files with permission",
      "Web browsers"
    ],
    correctIndex: 2
  },
  {
    id: 2,
    question: "What can AI desktop apps do that chat cannot?",
    options: [
      "Only image generation",
      "Only web search",
      "Only text generation",
      "Look through folders, propose file reorganization, and execute the plan once approved"
    ],
    correctIndex: 3
  },
  {
    id: 3,
    question: "What is the safe workflow for AI desktop apps?",
    options: [
      "Never review — trust the AI",
      "Skip the plan and execute directly",
      "Tell it the task, ask for a plan (not action), review the plan, then approve execution",
      "Give full access immediately"
    ],
    correctIndex: 2
  },
  {
    id: 4,
    question: "What should you know about AI-deleted files?",
    options: [
      "They often do NOT go to the recycle bin — they are gone",
      "They are backed up automatically",
      "They can be recovered with Ctrl+Z",
      "They always go to the recycle bin"
    ],
    correctIndex: 0
  },
  {
    id: 5,
    question: "What should you know about AI-edited files?",
    options: [
      "Edits are always reversible",
      "Undo always works",
      "AI's change overwrites the previous version — no edit history unless you have version control",
      "Auto-save creates backups"
    ],
    correctIndex: 2
  },
  {
    id: 6,
    question: "What is the recommended initial permission scope?",
    options: [
      "The smallest folder needed for the task",
      "The entire desktop",
      "Full disk access",
      "All documents"
    ],
    correctIndex: 0
  },
  {
    id: 7,
    question: "In the consultant example, how many PDFs were in the clients/ folder?",
    options: [
      "120 PDFs",
      "500 PDFs",
      "240 PDFs over four years",
      "50 PDFs"
    ],
    correctIndex: 2
  },
  {
    id: 8,
    question: "What did the AI propose for the clients/ folder?",
    options: [
      "One folder per client, sub-folders for contracts, invoices, and notes",
      "Sort by date only",
      "A flat structure with no sub-folders",
      "Delete everything"
    ],
    correctIndex: 0
  },
  {
    id: 9,
    question: "How many files could the AI not confidently classify?",
    options: [
      "All files",
      "50 files",
      "0 — it classified everything",
      "18 files"
    ],
    correctIndex: 3
  },
  {
    id: 10,
    question: "How long had the folder organization task been on the consultant's 'someday' list?",
    options: [
      "One month",
      "A few weeks",
      "Six months",
      "Three years"
    ],
    correctIndex: 3
  },
  {
    id: 11,
    question: "What is the principle for growing AI permissions?",
    options: [
      "Never increase permissions",
      "Give full access on day one",
      "Scope grows with track record, not with trust in the company",
      "Trust the company's reputation"
    ],
    correctIndex: 2
  },
  {
    id: 12,
    question: "What is the first level on the permission ladder?",
    options: [
      "Read-only access to a single small folder",
      "Read and write everywhere",
      "Admin privileges",
      "Full disk access"
    ],
    correctIndex: 0
  },
  {
    id: 13,
    question: "What is the cost ordering of modalities from cheapest to most expensive?",
    options: [
      "All cost the same",
      "Video, images, speech, text",
      "Speech, text, video, images",
      "Text, speech, images, video"
    ],
    correctIndex: 3
  },
  {
    id: 14,
    question: "How fast is text iteration compared to video?",
    options: [
      "About 16x cheaper and dramatically faster",
      "About 2x faster",
      "Video is faster than text",
      "About the same speed"
    ],
    correctIndex: 0
  },
  {
    id: 15,
    question: "Why can't you iterate on video 50 times in an afternoon?",
    options: [
      "Video AI is not available yet",
      "Video tools don't exist",
      "Video files are too large to view",
      "Each round takes minutes and costs many cents to dollars"
    ],
    correctIndex: 3
  },
  {
    id: 16,
    question: "What should you do when generating images or video?",
    options: [
      "Use the first result",
      "Invest more in the prompt up front and use a text AI to write it",
      "Generate only one version",
      "Skip prompts entirely"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "How much does deep research typically cost?",
    options: [
      "Several cents to a quarter",
      "Hundreds of dollars",
      "Free always",
      "Dollars per query"
    ],
    correctIndex: 0
  },
  {
    id: 18,
    question: "What is meant by 'AI is jagged'?",
    options: [
      "AI has sharp edges in its interface",
      "Different models are good at different things, and the leader changes every few months",
      "AI makes rough outputs",
      "AI only works on specific hardware"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What is the recommended habit for comparing AI models?",
    options: [
      "Try the same prompt in 2-3 models routinely",
      "Only use the most popular model",
      "Stick with one tool forever",
      "Switch models every single prompt"
    ],
    correctIndex: 0
  },
  {
    id: 20,
    question: "What does the page say about a worker who only uses one AI?",
    options: [
      "They're more efficient",
      "They're following best practices",
      "They'll get better results over time",
      "They're wrong about which tool is best for two-thirds of their tasks"
    ],
    correctIndex: 3
  },
  {
    id: 21,
    question: "What is ChatGPT described as tending to be strong at?",
    options: [
      "Conversational range, image generation in-product, broad task coverage",
      "Only translation",
      "Only coding",
      "Only math"
    ],
    correctIndex: 0
  },
  {
    id: 22,
    question: "What is Claude described as tending to be strong at?",
    options: [
      "Only web search",
      "Long-document understanding, careful reasoning on hard prompts, writing voice",
      "Only image generation",
      "Only mobile apps"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "What is Gemini described as tending to be strong at?",
    options: [
      "Only image generation",
      "Only code execution",
      "Only chat",
      "Fast web search and source synthesis, deep research with rich output"
    ],
    correctIndex: 3
  },
  {
    id: 24,
    question: "What is ChatGPT's noted weakness?",
    options: [
      "Sometimes verbose, can over-format with lists and headings",
      "Can't generate text",
      "Can't handle images",
      "No web search capability"
    ],
    correctIndex: 0
  },
  {
    id: 25,
    question: "What is the monthly ritual suggested for tool selection?",
    options: [
      "Run one regular task through three different tools, note which did best",
      "Buy a new subscription",
      "Delete all AI accounts",
      "Read every AI newsletter"
    ],
    correctIndex: 0
  },
  {
    id: 26,
    question: "What is the prompt scratchpad habit?",
    options: [
      "Delete all old prompts",
      "Keep a note file collecting prompts that produced unusually good results",
      "Never reuse prompts",
      "Only use AI-generated prompts"
    ],
    correctIndex: 1
  },
  {
    id: 27,
    question: "What should you do when an AI model is wrong?",
    options: [
      "Complain to customer support",
      "Stop using AI entirely",
      "Ignore it and move on",
      "Treat wrongness as a free signal about where the tool's edges are"
    ],
    correctIndex: 3
  },
  {
    id: 28,
    question: "What is the light version of the cross-model check?",
    options: [
      "The single-model self-critique loop",
      "Hiring a human reviewer",
      "Using three models every time",
      "Buying all premium subscriptions"
    ],
    correctIndex: 0
  },
  {
    id: 29,
    question: "When should you use the full multi-model recipe instead of the light version?",
    options: [
      "For every single query",
      "Never — the light version is always enough",
      "When being wrong is expensive and the task earns it",
      "Only for coding tasks"
    ],
    correctIndex: 2
  },
  {
    id: 30,
    question: "What is the first step in the multi-model recipe?",
    options: [
      "Start with the best model you have access to and generate a first draft with full context",
      "Use a random model",
      "Ask a second model immediately",
      "Skip directly to the final review"
    ],
    correctIndex: 0
  },
  {
    id: 31,
    question: "What should you ask the model to grade its own output on?",
    options: [
      "Just 'is this good?'",
      "Named criteria: clarity, accuracy, structure, and what is missing, scored 1-10 each",
      "Only grammar",
      "Only word count"
    ],
    correctIndex: 1
  },
  {
    id: 32,
    question: "What typically happens to the score after the first self-grade?",
    options: [
      "It's always below 5",
      "The model gives itself a 10",
      "It's usually 7 or 8 — there's always room for improvement",
      "The model refuses to score itself"
    ],
    correctIndex: 2
  },
  {
    id: 33,
    question: "Why is the single-model self-critique different from the sycophancy problem?",
    options: [
      "Models are always honest when grading themselves",
      "Sycophancy doesn't apply to self-grading",
      "It isn't different — it's the same problem",
      "The rubric with named criteria scored 1-10 forces the model to point at what's missing"
    ],
    correctIndex: 3
  },
  {
    id: 34,
    question: "What happens when you bring a second model's critique back to the first?",
    options: [
      "The first model adjudicates — accepts what's valid, rejects with reasons",
      "Both models always agree",
      "The conversation ends",
      "The second model takes over"
    ],
    correctIndex: 0
  },
  {
    id: 35,
    question: "For high-stakes work, what does the page recommend after two models?",
    options: [
      "Go back to Google",
      "Repeat with a third model from a different family",
      "Ask a human immediately",
      "Stop — two is enough"
    ],
    correctIndex: 1
  },
  {
    id: 36,
    question: "What is the autonomous iteration variant of self-critique?",
    options: [
      "Skip grading entirely",
      "'Iterate against your own rubric until you reach 9.5 across all criteria'",
      "Only do one round of grading",
      "Do nothing — let the AI guess"
    ],
    correctIndex: 1
  },
  {
    id: 37,
    question: "What is the honest caveat about cross-model checking?",
    options: [
      "Cross-model checking is useless",
      "Only one model is ever needed",
      "Three models can still all be wrong — they share training data and misconceptions",
      "Three models are always right"
    ],
    correctIndex: 2
  },
  {
    id: 38,
    question: "For what type of content should no number of cross-model passes replace a human expert?",
    options: [
      "Creative writing",
      "Legal, medical, financial content, or anything about a real person",
      "Casual conversation",
      "Coding problems"
    ],
    correctIndex: 1
  },
  {
    id: 39,
    question: "What are models checking each other for, versus what humans check?",
    options: [
      "Models check everything; humans are unnecessary",
      "Models check facts; humans check craft",
      "There is no distinction",
      "Models check for craft; humans check the facts that matter"
    ],
    correctIndex: 3
  },
  {
    id: 40,
    question: "In the consultant strategy memo example, what score did the second model give?",
    options: [
      "7.5 with eleven specific issues",
      "9.5",
      "5 — failed completely",
      "10 — perfect"
    ],
    correctIndex: 0
  },
  {
    id: 41,
    question: "How many of the second model's issues did the first model adopt?",
    options: [
      "All eleven",
      "None",
      "Only one",
      "Seven — with reasons given for rejecting four"
    ],
    correctIndex: 3
  },
  {
    id: 42,
    question: "When should you skip the cross-model loop entirely?",
    options: [
      "Never skip it — always use it",
      "Only for unimportant tasks",
      "Short emails, quick lookups, casual brainstorms where being wrong is cheap",
      "Always — it's never worth it"
    ],
    correctIndex: 2
  },
  {
    id: 43,
    question: "What is the rule of thumb for when a task earns the multi-model loop?",
    options: [
      "If a thoughtful colleague would have spent two hours reviewing this",
      "If it's a Monday",
      "If the prompt is longer than 50 words",
      "If you have free time"
    ],
    correctIndex: 0
  },
  {
    id: 44,
    question: "What does the grade (1-10) really give you?",
    options: [
      "The absolute truth about quality",
      "A way to rank all AI models",
      "A meaningless number",
      "A forcing function for specificity — the model has to name what's missing"
    ],
    correctIndex: 3
  },
  {
    id: 45,
    question: "What is the grade also useful for across iterations?",
    options: [
      "Deciding which model to use",
      "The only readable signal to compare iteration N against iteration N+1",
      "Bragging rights",
      "Determining cost"
    ],
    correctIndex: 1
  },
  {
    id: 46,
    question: "What is the correlation between leaderboard rankings and careful work?",
    options: [
      "Leaderboards perfectly predict quality",
      "Perfect correlation",
      "No AI model is ranked",
      "Preference-based rankings reward conversational charm more than careful work"
    ],
    correctIndex: 3
  },
  {
    id: 47,
    question: "What makes the single-model self-critique loop work even without a second model?",
    options: [
      "Named criteria scored 1-10 — the rubric prevents sycophantic self-praise",
      "The model's inherent honesty",
      "The AI always finds all its own mistakes",
      "It doesn't work without a second model"
    ],
    correctIndex: 0
  },
  {
    id: 48,
    question: "What did the page say about costs trending over time?",
    options: [
      "Costs are unpredictable",
      "Costs are increasing",
      "Costs are trending down year over year",
      "Costs will stay the same forever"
    ],
    correctIndex: 2
  },
  {
    id: 49,
    question: "What is the page's advice on 'marrying' one AI tool?",
    options: [
      "Always pay for the most expensive one",
      "Use only the most popular tool",
      "Pick one and stick with it forever",
      "Don't marry one tool — switching is free, just paste the prompt in a different tab"
    ],
    correctIndex: 3
  },
  {
    id: 50,
    question: "What is the single sentence that summarizes the entire crash course?",
    options: [
      "'Get the right context in, keep the wrong context out'",
      "'Always use the paid version'",
      "'Think step by step'",
      "'Use three AI models at once'"
    ],
    correctIndex: 0
  }
];

export const quizParts: QuizPart[] = [
  {
    id: 1,
    title: "Part 1: How AI Knows Things",
    subtitle: "Novice vs Power User, Pretrained Knowledge, Retrieval Modes",
    concepts: "Concepts 1–3",
    color: "from-indigo-500 to-purple-600",
    questions: part1,
    conceptStart: 1,
    conceptSpread: 3
  },
  {
    id: 2,
    title: "Part 2: Talking to AI Well",
    subtitle: "Context, Reasoning, Sycophancy, Brainstorm-Iterate Loop",
    concepts: "Concepts 4–7",
    color: "from-emerald-500 to-teal-600",
    questions: part2,
    conceptStart: 4,
    conceptSpread: 4
  },
  {
    id: 3,
    title: "Part 3: Beyond Text",
    subtitle: "Multimodal, Building Apps, Data Analysis",
    concepts: "Concepts 8–10",
    color: "from-amber-500 to-orange-600",
    questions: part3,
    conceptStart: 8,
    conceptSpread: 3
  },
  {
    id: 4,
    title: "Part 4: Working Safely & Choosing Tools",
    subtitle: "Desktop Apps, Cost & Speed, Cross-Model Checking",
    concepts: "Concepts 11–13",
    color: "from-rose-500 to-pink-600",
    questions: part4,
    conceptStart: 11,
    conceptSpread: 3
  }
];

export const totalQuestionsPerPart = 50;

/* ──────────────────────────────────────────────
   THESIS: The Agent Factory — 4 parts × 25 MCQs
   ────────────────────────────────────────────── */

const thesis1: Question[] = [
  {
    id: 1,
    question: "According to the Agent Factory thesis, what will the most valuable companies in the AI era sell?",
    options: [
      "Software subscriptions",
      "AI employees (Digital FTEs)",
      "Cloud infrastructure",
      "Training datasets"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What does 'Digital FTE' stand for in the thesis?",
    options: [
      "Digital Fast Transaction Engine",
      "Digital Full-Time Employee",
      "Distributed Fault-Tolerant Executor",
      "Dynamic Function Transfer Engine"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is an AI-Native Company according to the thesis?",
    options: [
      "A company that uses AI for marketing only",
      "A company where the workforce is mostly AI and the product is whatever that workforce ships",
      "A company that sells AI tools to developers",
      "A company with at least one AI chatbot"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "How does the thesis describe the relationship between customers and AI-Native companies?",
    options: [
      "Customers subscribe to their software",
      "Customers buy their API keys",
      "Customers hire them — you don't buy from these companies, you hire them",
      "Customers invest as shareholders"
    ],
    correctIndex: 2
  },
  {
    id: 5,
    question: "What does the thesis claim about AI employees becoming 'economic actors in their own right'?",
    options: [
      "They will pay taxes like humans",
      "They will autonomously buy services, procure compute, and acquire data",
      "They will form labor unions",
      "They will vote in corporate elections"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "Which payment protocol powers ChatGPT's Instant Checkout?",
    options: [
      "AP2 (Google)",
      "x402 (Coinbase)",
      "ACP (OpenAI + Stripe)",
      "MPP (Stripe / Tempo)"
    ],
    correctIndex: 2
  },
  {
    id: 7,
    question: "What is unique about AP2 (Google's payment protocol)?",
    options: [
      "It only works with crypto wallets",
      "It uses cryptographically signed mandates — the agent carries a digital permission slip",
      "It requires manual human approval for every transaction",
      "It only supports annual subscriptions"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What is the 10-80-10 rule as described in the thesis?",
    options: [
      "10% ideation, 80% coding, 10% testing",
      "10% intent (human), 80% execution (AI Workers), 10% verification (human)",
      "10% planning, 80% meetings, 10% delivery",
      "10% budget, 80% resources, 10% profit"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "Who originally popularized the 10-80-10 rule (with human teams, not AI)?",
    options: [
      "Bill Gates",
      "Elon Musk",
      "Steve Jobs",
      "Jeff Bezos"
    ],
    correctIndex: 2
  },
  {
    id: 10,
    question: "As of February 2026, what percentage of pull requests merged into Cursor's own product were produced by autonomous agents?",
    options: [
      "5%",
      "15%",
      "35%",
      "65%"
    ],
    correctIndex: 2
  },
  {
    id: 11,
    question: "What is the core slogan of the Agent Factory thesis?",
    options: [
      "\"Build fast, break things\"",
      "\"Humans define intent. Agents execute. Humans verify outcomes.\"",
      "\"Code is king\"",
      "\"Move fast with AI\""
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "How does the thesis describe the shift from the SaaS era to the Agent Factory era?",
    options: [
      "From per-seat subscriptions to per-outcome results",
      "From cloud to on-premise",
      "From open-source to proprietary",
      "From mobile to desktop"
    ],
    correctIndex: 0
  },
  {
    id: 13,
    question: "What is the human role in the Agent Factory era according to the thesis?",
    options: [
      "Operator typing commands",
      "Supervisor and verifier",
      "Unnecessary — AI handles everything",
      "Data entry clerk"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What does the thesis say the middle 80% of work becomes?",
    options: [
      "Manual review",
      "AI-driven execution — composing tools, spawning sub-agents, delivering outcomes",
      "Human collaboration meetings",
      "Strategic planning sessions"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "What is the verification surface shifting toward in the cloud-agent era?",
    options: [
      "Line-level diffs in a code editor",
      "Quickly reviewable artifacts — logs, video recordings, live previews",
      "Manual code reviews",
      "Peer programming sessions"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "According to the thesis, what is the 'operating substrate' of AI-Native companies?",
    options: [
      "Cloud servers",
      "APIs",
      "AI employees (Digital FTEs)",
      "Blockchain"
    ],
    correctIndex: 2
  },
  {
    id: 17,
    question: "What does MPP (Stripe / Tempo) enable?",
    options: [
      "Cryptocurrency trading",
      "Micropayments — an AI agent can pay pennies per second under a preset cap",
      "Monthly subscription billing",
      "Invoice generation"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What does the thesis say 'remains' for humans after AI absorbs execution?",
    options: [
      "Nothing — AI does it all",
      "Intent, verification, and outcome",
      "Only coding",
      "Only management"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "Which integration standard connects AI Workers to tools in the Agent Factory era?",
    options: [
      "REST APIs",
      "GraphQL",
      "Model Context Protocol (MCP)",
      "SOAP"
    ],
    correctIndex: 2
  },
  {
    id: 20,
    question: "How does the thesis characterize the change from SaaS-era integration to Agent Factory-era integration?",
    options: [
      "No change — same APIs",
      "From rigid, point-to-point APIs to MCP",
      "From open standards to proprietary protocols",
      "From cloud to local"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "According to the 'Industrialized Stack', what is 'Intent'?",
    options: [
      "The code that runs on servers",
      "The high-level blueprint — goals, constraints, budgets, and permissions",
      "The database schema",
      "The user interface"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "What does the thesis compare the Agent Factory to?",
    options: [
      "A software compiler",
      "A car factory — raw materials (intent) flow through stations (AI Workers) to produce a finished product (outcome)",
      "A stock exchange",
      "A university"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "What does the thesis say about the developer's role in the Agent Factory era?",
    options: [
      "Developers disappear",
      "Developers do more — designing, deploying, and supervising AI Workers",
      "Developers only write documentation",
      "Developers only manage teams"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "Which statement about agents replacing people does the thesis make?",
    options: [
      "Agents will replace all human workers within 5 years",
      "AI paired with a human outperforms either one working alone",
      "Agents and humans should never work together",
      "Only senior roles are safe from replacement"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "By January 2026, how much had US data center construction spending reached (annualized)?",
    options: [
      "$10 billion",
      "$25 billion",
      "$42 billion",
      "$75 billion"
    ],
    correctIndex: 2
  }
];

const thesis2: Question[] = [
  {
    id: 1,
    question: "What is the Agent Factory according to the thesis?",
    options: [
      "A product you buy",
      "The spec-driven, human-supervised, agent-tool-powered process for manufacturing AI Workers",
      "A physical factory building",
      "A software library"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What is the AI-Native Company in the thesis?",
    options: [
      "The process of building agents",
      "The running enterprise the Agent Factory produces — staffed by AI Workers",
      "A SaaS product",
      "A consulting firm"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What are AI Workers (Digital FTEs) in the thesis vocabulary?",
    options: [
      "The tools used by developers",
      "The role-based agents that get hired, assigned, rostered, and retired",
      "The cloud servers running the system",
      "The human employees"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What is the 'system of record' in the thesis?",
    options: [
      "The operating system",
      "The authoritative state the AI Workforce runs against — databases, ledgers, platforms",
      "The agent runtime engine",
      "The user interface"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "Which phrase summarizes the relationship between Factory, Company, and Workers?",
    options: [
      "\"The Company buys the Factory; the Factory builds Workers\"",
      "\"The Factory builds the Company; the Company employs Workers; the Workers run against the system of record\"",
      "\"Workers own the Company; the Company owns the Factory\"",
      "\"The system of record controls everything\""
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What is an 'invariant' in the context of the thesis?",
    options: [
      "A bug that never gets fixed",
      "A structural requirement that stays true across every version of the system — a rule that never changes",
      "A variable that can be modified",
      "A deprecated feature"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What is a 'reference implementation' in the thesis?",
    options: [
      "The only way to build the system",
      "The concrete product used in 2026 to realize an invariant — today's best choice, swappable tomorrow",
      "A deprecated version",
      "A theoretical concept with no code"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What are the two modes of general agent use described in the thesis?",
    options: [
      "Training and inference",
      "Problem-solving engagement and manufacturing engagement",
      "Online and offline",
      "Synchronous and asynchronous"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What ships at the end of a problem-solving engagement?",
    options: [
      "An AI Worker",
      "An immediate outcome delivered directly to the human",
      "A new company",
      "A training dataset"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What ships at the end of a manufacturing engagement?",
    options: [
      "A solved problem",
      "A piece of workforce — an AI Worker",
      "A report",
      "A presentation"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "Which tools are used for manufacturing engagements?",
    options: [
      "Claude Cowork or OpenWork",
      "Always Claude Code or OpenCode — regardless of who the human is",
      "Any web browser",
      "Spreadsheet software"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "What governs problem-solving engagements?",
    options: [
      "The Seven Invariants",
      "The Seven Principles of General Agent Problem Solving",
      "Company HR policies",
      "Industry regulations"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What governs manufacturing engagements?",
    options: [
      "The Seven Principles",
      "The Seven Invariants of the Agent Factory",
      "Agile methodology",
      "Waterfall methodology"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What is the Two-Layer Model in the thesis?",
    options: [
      "Client and server",
      "Edge Layer (personal identic agents) and AI Workforce Layer (role-based AI Workers)",
      "Frontend and backend",
      "Training and production"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "What is 'identic AI' as described by Don Tapscott?",
    options: [
      "AI that looks identical to humans",
      "A personal agent that carries your identity — your judgment, preferences, and authority",
      "AI that generates identical responses",
      "A duplicate of an existing AI model"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What is the first of the Seven Principles?",
    options: [
      "\"Always use the cloud\"",
      "\"Bash is the Key\" — the agent can act, not just describe",
      "\"Write clean code\"",
      "\"Test everything\""
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "According to the Seven Principles, what is the 'failure mode' of verification?",
    options: [
      "\"Too many tests\"",
      "\"Looks right\" — every meaningful output must be checked before it ships",
      "\"Not enough time\"",
      "\"Too complex\""
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What does 'Persisting State in Files' mean in the Seven Principles?",
    options: [
      "Always use a database",
      "The conversation is volatile; the filesystem is durable — what mattered lives in a file",
      "Never delete temporary files",
      "Use cloud storage"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "Which tools do domain experts use for problem-solving engagements?",
    options: [
      "Claude Code or OpenCode",
      "Claude Cowork or OpenWork",
      "VS Code",
      "Terminal"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "What is the relationship between Principles and Invariants in the thesis?",
    options: [
      "They are the same thing",
      "The Principles are the conduct (governing sessions); the Invariants are the constitution (governing architecture)",
      "Principles are for developers; Invariants are for managers",
      "Principles are optional; Invariants are mandatory"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "What does the Seven Principles' 'Small, Reversible Decomposition' mean?",
    options: [
      "Break the codebase into microservices",
      "Work moves in atomic steps; every step can be undone",
      "Use small files only",
      "Decompose teams into smaller groups"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "What does 'Code as Universal Interface' mean in the Seven Principles?",
    options: [
      "All code must be in one language",
      "Precision through structured formats — schemas, tables, code blocks — not prose",
      "Always use TypeScript",
      "Code should be self-documenting"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "Which layer serves the individual in the Two-Layer Model?",
    options: [
      "AI Workforce Layer",
      "Edge Layer",
      "Management Layer",
      "Runtime Layer"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "Which professional role typically uses Claude Cowork or OpenWork?",
    options: [
      "Software engineer",
      "Domain expert — someone working with documents, spreadsheets, and reviews",
      "DevOps engineer",
      "Database administrator"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "What does the thesis mean by 'the building stands even when the furniture changes'?",
    options: [
      "Physical offices are still needed",
      "Invariants (the architecture) remain stable even when reference implementations (specific products) change",
      "Old software never needs updating",
      "Buildings are more important than software"
    ],
    correctIndex: 1
  }
];

const thesis3: Question[] = [
  {
    id: 1,
    question: "What does Invariant 1 state?",
    options: [
      "AI Workers should be given full autonomy",
      "The human is the principal — every chain of action originates with a human who sets intent, budget, and authority",
      "The delegate is the most important component",
      "The management layer comes first"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "According to Invariant 1, what is non-transferable?",
    options: [
      "Code ownership",
      "Judgment, values, budget authority, and outcome accountability",
      "Server credentials",
      "API keys"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is the failure mode if Invariant 1 (human principal) is absent?",
    options: [
      "Too many meetings",
      "Unowned systems produce unaccountable outcomes — liability evaporates, alignment becomes impossible",
      "Slower deployment",
      "Higher costs"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What does Invariant 2 require?",
    options: [
      "Every human needs a manager",
      "Every human needs a delegate — a personal agent that holds their context and brokers all downstream work",
      "Every human needs coding skills",
      "Every human needs an API key"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What is the current reference implementation for Invariant 2 (the delegate)?",
    options: [
      "Claude Code",
      "OpenClaw",
      "ChatGPT",
      "Cursor"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What happens if Invariant 2 (delegate) is absent?",
    options: [
      "Work goes faster",
      "The human becomes a bottleneck — scale collapses to human typing speed",
      "AI Workers become more autonomous",
      "Costs decrease"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What does Invariant 3 state about the workforce?",
    options: [
      "Workers should be self-organizing",
      "The workforce needs a management layer — the operating system of the AI-Native Company",
      "Workers need no oversight",
      "Only humans should manage workers"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What is the current reference implementation for Invariant 3 (management layer)?",
    options: [
      "Kubernetes",
      "Paperclip",
      "Jenkins",
      "Terraform"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What lifecycle verbs does the management layer expose?",
    options: [
      "Create, read, update, delete",
      "Hire, assign, govern, observe, retire",
      "Build, test, deploy, monitor",
      "Plan, execute, review, close"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What is the failure mode if Invariant 3 (management layer) is absent?",
    options: [
      "Workers become more efficient",
      "Workers collide, budgets leak, the audit trail fractures, retired Workers keep running",
      "Development speeds up",
      "Less bureaucracy"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What does Invariant 4 state about worker engines?",
    options: [
      "All workers must use the same engine",
      "Each worker picks its own engine — matched to reliability, cost, and operational needs",
      "Only one engine is allowed",
      "Engines must be open source"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "Which of these is NOT listed as a current engine option in the thesis?",
    options: [
      "Dapr Agents",
      "Claude Managed Agents",
      "OpenAI Agents SDK",
      "Amazon Bedrock Agents"
    ],
    correctIndex: 3
  },
  {
    id: 13,
    question: "What happens if Invariant 4 (per-worker engine choice) is absent — forcing uniform engine choice?",
    options: [
      "Everything runs faster",
      "The company either cannot afford its reliable workers or cannot trust its cheap ones",
      "Simpler architecture",
      "Lower maintenance"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "Which engine is recommended for jobs that 'can't fail'?",
    options: [
      "OpenClaw-native",
      "Cursor SDK",
      "Dapr Agents wrapping an SDK",
      "A custom Python script"
    ],
    correctIndex: 2
  },
  {
    id: 15,
    question: "Which engine is recommended for jobs that 'shouldn't fail, don't want to operate'?",
    options: [
      "Dapr Agents",
      "Claude Managed Agents",
      "OpenAI Agents SDK",
      "OpenClaw-native"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What are the two planes every engine has?",
    options: [
      "Frontend and backend",
      "Harness (control plane) and compute (execution plane)",
      "Training and inference",
      "Development and production"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "Which engine has the least vendor lock-in according to the thesis?",
    options: [
      "OpenAI Agents SDK",
      "Claude Managed Agents",
      "Dapr Agents (Apache 2.0, CNCF)",
      "Cursor SDK"
    ],
    correctIndex: 2
  },
  {
    id: 18,
    question: "What does the current realization of Invariant 1 (human principal) look like?",
    options: [
      "A CEO signing documents",
      "Authored specs, approval gates, budget declarations, and verification checkpoints",
      "A legal contract",
      "An email thread"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "According to Invariant 1, where must every legitimate chain of action originate?",
    options: [
      "From the AI model",
      "From a human who sets intent and owns the outcome",
      "From the management layer",
      "From the nervous system"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "Which engine is described as 'purpose-built for parallel coding agents, model-agnostic'?",
    options: [
      "Dapr Agents",
      "OpenAI Agents SDK",
      "Cursor SDK",
      "Claude Managed Agents"
    ],
    correctIndex: 2
  },
  {
    id: 21,
    question: "What does the thesis say about the relationship between OpenClaw, Paperclip, and AI Workers?",
    options: [
      "They are all AI Workers",
      "OpenClaw and Paperclip are permanent fixtures; AI Workers are the workforce hired and retired through them",
      "They are interchangeable",
      "Paperclip is a type of AI Worker"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "What does 'harness' refer to in the engine comparison?",
    options: [
      "The physical hardware",
      "The control plane — agent loop, model calls, tool routing, approvals, tracing, recovery",
      "The network configuration",
      "The database connection"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "Which of these can trigger a Worker regardless of which engine it runs on?",
    options: [
      "Only manual prompts",
      "Claude Code Routines and Inngest — from a schedule, webhook, or API call",
      "Only cron jobs",
      "Only HTTP requests"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "What is 'compute' in the engine two-plane model?",
    options: [
      "The billing system",
      "The execution plane — the sandbox where model-directed code reads files, runs commands, writes artifacts",
      "The monitoring dashboard",
      "The deployment pipeline"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "What does the thesis say is the role of the human relative to the management layer?",
    options: [
      "The human replaces the management layer",
      "The human is the executive and owner of the AI-Native Company — the management layer runs under their authority",
      "The human reports to the management layer",
      "The human has no role"
    ],
    correctIndex: 1
  }
];

const thesis4: Question[] = [
  {
    id: 1,
    question: "What does Invariant 5 require every Worker to run against?",
    options: [
      "A test environment",
      "A system of record — an authoritative store of state",
      "A development server",
      "A mock database"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What is the risk if Invariant 5 (system of record) is absent?",
    options: [
      "Faster development",
      "Outputs drift from reality — agents hallucinate facts, double-write transactions, lose work between sessions",
      "Lower costs",
      "Simpler architecture"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What does Invariant 6 state?",
    options: [
      "The workforce must be fixed in size",
      "The workforce is expandable under policy — hiring is a callable capability",
      "Workers can never be created at runtime",
      "Only humans can hire Workers"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What is the current reference implementation for Invariant 6 (expandable workforce)?",
    options: [
      "Kubernetes autoscaling",
      "Claude Managed Agents — used as the hiring substrate",
      "AWS Lambda",
      "Docker Compose"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "In the worked trace example, what happens when a customer writes in Bahasa Indonesia?",
    options: [
      "A human translator is called",
      "Paperclip sees the capability gap, hires a new Bahasa-speaking AI Worker on the spot, and the reply is sent — no human woken",
      "The message is ignored",
      "Google Translate is used manually"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What does Invariant 7 require for the workforce?",
    options: [
      "A centralized dashboard",
      "A nervous system — events, durability, and flow control under the authority envelope",
      "A monitoring tool",
      "A logging service"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What is the current reference implementation for Invariant 7 (nervous system)?",
    options: [
      "Kafka",
      "Inngest — as the workforce's event substrate",
      "RabbitMQ",
      "Redis"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What is Claude Code Routines in the reference implementation?",
    options: [
      "A general event system",
      "A specialist trigger for coding-agent automation — firing Claude Code when code-related events occur",
      "A deployment tool",
      "A testing framework"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What happens to a six-step Worker at 95% per-step reliability WITHOUT durable execution?",
    options: [
      "It completes 99.7% of runs",
      "It completes only ~74% of runs",
      "It always works",
      "It completes 50% of runs"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What happens with step memoization and selective retry (durable execution) to the same six-step Worker?",
    options: [
      "It still completes 74% of runs",
      "It completes ~99.7% of runs",
      "Performance degrades",
      "No change"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What does the thesis mean by 'the architecture was never the products — it was the invariants'?",
    options: [
      "Products are unimportant",
      "Swap any named product tomorrow and the architecture still stands — because it's defined by structural rules, not specific tools",
      "Only open-source products matter",
      "Products define the architecture"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "Which of these is listed as stable (invariant) versus will change (implementation)?",
    options: [
      "Database engines — stable",
      "Events, durability, and flow under envelope — stable; specific platforms — will change",
      "Specific agent products — stable",
      "Prompt patterns — stable"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What are the three future trajectories the thesis names?",
    options: [
      "More SaaS, more APIs, more cloud",
      "Physical AI Workers, fully autonomous economic agents, cross-company workforce mobility",
      "Faster models, cheaper compute, better UIs",
      "More data, bigger models, higher costs"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What does the thesis say about Physical AI Workers?",
    options: [
      "They are impossible",
      "The same architecture extends to embodied agents — the compute layer adds a body, invariants don't change",
      "They require completely new invariants",
      "They are decades away"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "How does the thesis describe the workforce opportunity by 2030?",
    options: [
      "Only 10% of workers need reskilling",
      "59 out of every 100 workers globally are expected to require reskilling or upskilling",
      "No reskilling needed",
      "All jobs will be eliminated"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "Which of these is NOT a failure mode when the nervous system (Invariant 7) is absent?",
    options: [
      "The system runs at human-typing speed",
      "Workers cannot coordinate without a human routing each handoff",
      "Reliability compounds against you without durability",
      "Workers become more autonomous"
    ],
    correctIndex: 3
  },
  {
    id: 17,
    question: "What business functions does the thesis say the Agent Factory produces Workers for?",
    options: [
      "Only engineering",
      "GTM, Finance, Support, Engineering, HR, and Legal",
      "Only sales and marketing",
      "Only customer support"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What is the Skills format mentioned in the reference implementation?",
    options: [
      "JSON Schema",
      "Agent Skills format (agentskills.io) — SKILL.md + optional scripts/references/assets",
      "YAML configuration",
      "Markdown only"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What does the thesis say about 'clean seams between layers'?",
    options: [
      "They are unnecessary",
      "They are invariants — so vendor lock can move without breaking the architecture",
      "They only matter for large companies",
      "They slow down development"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "By mid-2026, what kind of firms were reporting billion-dollar annualized revenue according to the thesis?",
    options: [
      "Traditional SaaS companies",
      "Single-digit-headcount firms with AI-operated workforces",
      "Fortune 500 companies",
      "Government agencies"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "What does the thesis say about cross-company workforce mobility?",
    options: [
      "It will never happen",
      "AI Workers become portable — hired into one company, transferred to another, possibly working for several simultaneously",
      "Only within the same industry",
      "Only for non-critical roles"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "Meta, Google, Amazon, and Microsoft alone project over what amount in AI infrastructure spending for 2026?",
    options: [
      "$100 billion",
      "$300 billion",
      "$600 billion",
      "$1 trillion"
    ],
    correctIndex: 2
  },
  {
    id: 23,
    question: "How does the thesis distinguish between AI Workers and runtime engines?",
    options: [
      "They are the same thing",
      "AI Workers are workforce (hired/retired); runtime engines are what the workforce runs on — not staff themselves",
      "Engines are more important than Workers",
      "Only engines can be AI"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "What does the thesis say about 'agents as economic actors' extending further?",
    options: [
      "It's impossible",
      "Questions of legal personhood, liability, taxation, and antitrust will become urgent — and the architecture must be ready",
      "It's already fully solved",
      "Only large corporations can participate"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "What are the closing words of the thesis?",
    options: [
      "\"The future is AI\"",
      "\"The invariants hold. The realizations evolve. The thesis stands.\"",
      "\"Build fast and iterate\"",
      "\"AI will change everything\""
    ],
    correctIndex: 1
  }
];

// Append thesis parts
quizParts.push(
  {
    id: 5,
    title: "Thesis Part 1: The Paradigm Shift",
    subtitle: "Core Thesis, Economic Actors, 10-80-10 Rule, Human Role",
    concepts: "Thesis Concepts 1–3",
    color: "from-cyan-500 to-blue-600",
    questions: thesis1,
    conceptStart: 1,
    conceptSpread: 3
  },
  {
    id: 6,
    title: "Thesis Part 2: Architecture & Vocabulary",
    subtitle: "Agent Factory, AI-Native Company, Two Modes, Seven Principles",
    concepts: "Thesis Concepts 4–6",
    color: "from-violet-500 to-purple-600",
    questions: thesis2,
    conceptStart: 4,
    conceptSpread: 3
  },
  {
    id: 7,
    title: "Thesis Part 3: The Seven Invariants (I–IV)",
    subtitle: "Human Principal, Delegate, Management Layer, Per-Worker Engines",
    concepts: "Thesis Concepts 7–9",
    color: "from-amber-500 to-red-600",
    questions: thesis3,
    conceptStart: 7,
    conceptSpread: 3
  },
  {
    id: 8,
    title: "Thesis Part 4: Invariants (V–VII) & Trajectories",
    subtitle: "System of Record, Expandable Workforce, Nervous System, Future",
    concepts: "Thesis Concepts 10–13",
    color: "from-emerald-500 to-teal-600",
    questions: thesis4,
    conceptStart: 10,
    conceptSpread: 4
  }
);

/* ──────────────────────────────────────────────
   QUICK START: Crash Courses — 2 parts × 20 MCQs
   ────────────────────────────────────────────── */

const gs1: Question[] = [
  {
    id: 1,
    question: "According to the 'Where to Start' page, what is the shortest path from beginner to shipping Agentic AI Engineer?",
    options: [
      "A university semester",
      "Measured in days, not semesters",
      "A 6-month bootcamp",
      "A year of self-study"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "How quickly can a new learner become 'productive' according to the first milestone?",
    options: [
      "In a weekend",
      "In about 6 hours (Foundations + first mode course)",
      "In 2 weeks",
      "In a month"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is the second milestone — what can you achieve in a weekend?",
    options: [
      "Read the entire book",
      "Deploy to cloud",
      "Ship your first Digital FTE (Courses 7–9)",
      "Build a full company"
    ],
    correctIndex: 2
  },
  {
    id: 4,
    question: "What is the three-step pedagogy described on the page?",
    options: [
      "Read, memorize, test",
      "First overview, second identify critical topics, third learn the 80% that gets used routinely and pick up the rest through real use",
      "Watch, practice, repeat",
      "Theory, lab, exam"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "Why does the page argue against learning every detail up front?",
    options: [
      "It's too expensive",
      "You would burn out before you shipped anything",
      "The content changes too fast",
      "AI doesn't need deep knowledge"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What should every reader do before picking a mode?",
    options: [
      "Deploy to the cloud",
      "Read the thesis and complete the Foundations (Courses 1–2)",
      "Build a Digital FTE",
      "Complete all 16 courses"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What is the mental model for work in the AI era according to the page?",
    options: [
      "One layer: use AI tools",
      "Three layers: use general agents, build AI Workers, assemble AI-Native Companies",
      "Two layers: training and inference",
      "Four layers: data, model, app, user"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "According to the page, what do AI Worker, Digital FTE, and AI Employee all refer to?",
    options: [
      "Different things — they should never be confused",
      "The same thing — a specialized agentic system doing a real job under human-defined policy",
      "Human employees with AI skills",
      "Cloud servers running AI models"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "How many stages are in the journey diagram from Beginner to AI-Native Company Architect?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctIndex: 3
  },
  {
    id: 10,
    question: "At which stage do most readers stop, according to the page?",
    options: [
      "Stage 1 or 2",
      "Stage 3 or 4",
      "Stage 5",
      "Stage 6"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What are the two modes of general agent use described on the Getting Started page?",
    options: [
      "Training mode and inference mode",
      "Problem-Solving (Mode 1) and Manufacturing (Mode 2)",
      "Beginner mode and expert mode",
      "Online mode and offline mode"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "Who is Mode 1 (Problem-Solving) for?",
    options: [
      "Only engineers",
      "Only managers",
      "Anyone — engineers or knowledge workers",
      "Only data scientists"
    ],
    correctIndex: 2
  },
  {
    id: 13,
    question: "What do you produce in Mode 1 (Problem-Solving)?",
    options: [
      "A Digital FTE",
      "An AI Worker",
      "Completed work — the outcome itself",
      "A training dataset"
    ],
    correctIndex: 2
  },
  {
    id: 14,
    question: "What do you produce in Mode 2 (Manufacturing)?",
    options: [
      "A presentation",
      "A report",
      "A Worker that produces work, on its own",
      "A business plan"
    ],
    correctIndex: 2
  },
  {
    id: 15,
    question: "Which tools are used for Mode 2 (Manufacturing)?",
    options: [
      "Claude Cowork or OpenWork",
      "Any web browser",
      "Claude Code or OpenCode — always, because building a Worker is a coding task",
      "Spreadsheet software"
    ],
    correctIndex: 2
  },
  {
    id: 16,
    question: "What governs Mode 1 engagements?",
    options: [
      "The Seven Invariants of the Agent Factory",
      "The Seven Principles of Problem Solving",
      "Company HR policies",
      "Industry regulations"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What governs Mode 2 engagements?",
    options: [
      "The Seven Principles",
      "The Seven Invariants of the Agent Factory",
      "Agile methodology",
      "Waterfall methodology"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "According to the starter path table, what should an absolute beginner do first?",
    options: [
      "Course 7 — Build AI Agents",
      "Thesis → Course 1 (Prompting) → Course 2 (Thinking)",
      "Course 14 — Deploy to Cloud",
      "Course 10 — Paperclip"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What is the starter path for an engineer?",
    options: [
      "Foundations → Course 3 → Course 7 → Course 8",
      "Foundations → Course 4 → Course 5",
      "Only Course 1",
      "Course 2 only"
    ],
    correctIndex: 0
  },
  {
    id: 20,
    question: "What does the page say a knowledge worker who wants to use Mode 2 should do?",
    options: [
      "Use Mode 1 only",
      "Pair with an engineer — building Workers uses Claude Code/OpenCode, which is fundamentally a coding task",
      "Switch careers to engineering",
      "Wait for no-code AI tools"
    ],
    correctIndex: 1
  }
];

const gs2: Question[] = [
  {
    id: 1,
    question: "How many total courses are listed in the Getting Started curriculum?",
    options: [
      "12 (plus companion courses)",
      "19 (16 core crash courses + 3 reference/companion courses)",
      "8",
      "25"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What is the fastest path to a shipped Digital FTE according to the page?",
    options: [
      "Foundations → Course 10 → Course 14",
      "Foundations → Course 3 → Course 7 → Course 8 → Course 13 (Reader track)",
      "Course 1 → Course 2 → Course 16",
      "Course 7 → Course 8 → Course 9 only"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "How many concepts does Course 1 (AI Prompting in 2026) cover?",
    options: [
      "7",
      "10",
      "13",
      "16"
    ],
    correctIndex: 2
  },
  {
    id: 4,
    question: "How long is Course 1 (AI Prompting in 2026)?",
    options: [
      "30 minutes",
      "45 minutes",
      "90 minutes",
      "2 hours"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What is Course 2 about?",
    options: [
      "Building agents",
      "How to Think in the AI Era — when to reach for an agent and how to frame problems",
      "Cloud deployment",
      "Payment protocols"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What is Course 3 (Agentic Coding Crash Course) about?",
    options: [
      "How to use spreadsheets",
      "A 90-minute, 15-concept tour of Claude Code and OpenCode — the starting point for engineers",
      "How to prompt ChatGPT",
      "Cloud architecture"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "Who is Course 4 (Cowork Crash Course) designed for?",
    options: [
      "Engineers",
      "Knowledge workers — delegating real desktop work with Claude Cowork",
      "Data scientists",
      "Executives"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "How many principles does Course 5 (Problem Solving with General Agents) cover?",
    options: [
      "5",
      "7",
      "10",
      "13"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What does Course 6 (OpenClaw with General Agents) teach you to do?",
    options: [
      "Write Python code",
      "Install and configure a Personal AI Employee on OpenClaw — from zero to AI Employee on your phone",
      "Deploy to AWS",
      "Train a machine learning model"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What SDK does Course 7 (Build AI Agents) use?",
    options: [
      "TensorFlow",
      "PyTorch",
      "OpenAI Agents SDK",
      "LangChain"
    ],
    correctIndex: 2
  },
  {
    id: 11,
    question: "How many concepts does Course 8 (From Agent to Digital FTE) cover?",
    options: [
      "7",
      "10",
      "15",
      "20"
    ],
    correctIndex: 2
  },
  {
    id: 12,
    question: "What is the nervous system layer added in Course 9?",
    options: [
      "Kafka",
      "RabbitMQ",
      "Inngest — for durable execution, event-driven triggers, step memoization, and replay",
      "Redis"
    ],
    correctIndex: 2
  },
  {
    id: 13,
    question: "What is Paperclip (Course 10)?",
    options: [
      "A note-taking app",
      "The open-source, MIT-licensed AI-native company control plane — the management layer",
      "A database system",
      "A deployment tool"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What does Course 11 (Dynamic Workforce) enable?",
    options: [
      "Faster API calls",
      "The workforce detecting a capability gap and hiring its own colleagues — hiring as a callable function",
      "Better logging",
      "Cloud migration"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "What does Course 12 (Owner Delegate) close?",
    options: [
      "The final exam",
      "Invariant 2 — every human needs a delegate, removing the owner as the last bottleneck",
      "The company registration",
      "The payment system"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What is the nine-layer evaluation pyramid taught in Course 13?",
    options: [
      "A business strategy framework",
      "Unit, integration, output, tool-use, trace, RAG, safety, regression, and production evaluations",
      "A management hierarchy",
      "A deployment pipeline"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What is the 'harness/sandbox split' taught in Course 14?",
    options: [
      "Separating frontend from backend",
      "The control plane (harness holding secrets) lives in a different security boundary from the execution plane (sandbox where agent code runs)",
      "Splitting training data from test data",
      "Dividing work between humans and AI"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "How many agentic architecture patterns does Course 15 cover?",
    options: [
      "2",
      "3",
      "4 core patterns (sequential; single agent + ReAct; planning + ReAct execution; multi-agent specialist)",
      "10"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    question: "What four payment protocols does Course 16 cover?",
    options: [
      "Stripe, PayPal, Square, Venmo",
      "ACP, AP2, x402, and MPP",
      "Visa, Mastercard, Amex, Discover",
      "Bitcoin, Ethereum, Solana, Cardano"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "What is the key difference between this book and every other AI course, according to the final paragraph?",
    options: [
      "It's free",
      "It's shorter",
      "You don't finish with notes — you finish with a working AI workforce",
      "It has more diagrams"
    ],
    correctIndex: 2
  }
];

quizParts.push(
  {
    id: 9,
    title: "Quick Start Part 1: Journey & Modes",
    subtitle: "Pedagogy, Thesis Foundation, Two Modes, Starter Paths",
    concepts: "GS Concepts 1–3",
    color: "from-green-500 to-emerald-600",
    questions: gs1,
    conceptStart: 1,
    conceptSpread: 3
  },
  {
    id: 10,
    title: "Quick Start Part 2: The Course Catalog",
    subtitle: "All 19 Courses, Tracks, Milestones, Final Outcome",
    concepts: "GS Concepts 4–6",
    color: "from-sky-500 to-cyan-600",
    questions: gs2,
    conceptStart: 4,
    conceptSpread: 3
  }
);

/* ──────────────────────────────────────────────
   START WITH THE ORIENTATION — 2 parts × 25/20 MCQs
   ────────────────────────────────────────────── */

const orient1: Question[] = [
  {
    id: 1,
    question: "What is a Digital FTE (Full-Time Equivalent) in the context of the Agent Factory?",
    options: [
      "A software subscription that automates one workflow",
      "An AI agent that performs real structured work inside an organization, like a human employee",
      "A chatbot that answers customer questions on a website",
      "A cloud service that hosts machine learning models"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What are the three terms used interchangeably to describe role-based AI agents in the book?",
    options: [
      "Bot, Assistant, Copilot",
      "Digital FTE, Digital Worker, AI Worker",
      "Agent, Model, System",
      "Worker, Operator, Delegate"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is an AI-Native Company as defined in the Agent Factory?",
    options: [
      "A startup that uses ChatGPT for customer support",
      "A company where one founder runs a real business with a handful of people and many AI Workers",
      "A tech company that builds and sells AI models",
      "A traditional company that added an AI chatbot to its website"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What metaphor does Jensen Huang use to describe modern AI architecture?",
    options: [
      "A neural network",
      "A five-layer cake",
      "A digital brain",
      "A computing pyramid"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What are the five layers of the AI stack, from bottom to top?",
    options: [
      "Data, Training, Testing, Deployment, Monitoring",
      "Hardware, Software, Middleware, API, UI",
      "Energy, Chips, Infrastructure, Models, Applications",
      "Storage, Compute, Network, Database, Interface"
    ],
    correctIndex: 2
  },
  {
    id: 6,
    question: "Which layer of the AI stack does the Agent Factory book focus on?",
    options: [
      "The Chips layer — specialized processors",
      "The Models layer — neural networks",
      "The Applications layer — where AI becomes useful",
      "The Infrastructure layer — cloud platforms"
    ],
    correctIndex: 2
  },
  {
    id: 7,
    question: "What is a general agent according to the book?",
    options: [
      "Any AI model that can hold a conversation",
      "An all-purpose assistant you direct to get work done or build AI Workers, like Claude Code or ChatGPT",
      "A robot with physical capabilities",
      "An AI that only answers yes/no questions"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "According to the book, what is the mission of The Agent Factory?",
    options: [
      "To replace all human workers with AI",
      "To help you design and build AI systems so that AI becomes useful, governable, and economically meaningful",
      "To sell AI consulting services to enterprises",
      "To build the largest collection of AI models"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What does the book say most organizations today are missing in their AI approach?",
    options: [
      "Access to powerful AI models",
      "Excitement about AI",
      "Method — a repeatable way to build reliable AI agents",
      "Talented engineers"
    ],
    correctIndex: 2
  },
  {
    id: 10,
    question: "What are the four critical elements that dependable agent systems emerge from?",
    options: [
      "Data, Algorithms, Compute, Storage",
      "Structured Specifications, Domain Expertise, Engineering Architecture, Human Oversight",
      "Prompts, Models, APIs, Databases",
      "Training, Testing, Deployment, Monitoring"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What does the book mean by 'canonical source'?",
    options: [
      "A religious text about AI",
      "The authoritative source — the one master version everything else is built from",
      "A collection of AI research papers",
      "The longest version of the book"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "How does the book describe an AI Worker compared to a human FTE?",
    options: [
      "It is cheaper but less capable",
      "It can operate continuously, scale instantly, and be deployed in large numbers",
      "It can only do one specific task",
      "It requires no oversight or management"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What is the core idea at the center of the Agent Factory book?",
    options: [
      "That AI will replace all jobs within 5 years",
      "That Digital FTEs are reliable AI agents designed to perform structured knowledge work continuously inside real organizations",
      "That every company should build its own AI model",
      "That prompt engineering is the most important skill"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "According to the book, what is the next competitive gap between organizations?",
    options: [
      "Who has the most GPU clusters",
      "Who can turn intelligence into repeatable execution",
      "Who has the best AI research team",
      "Who has the largest training dataset"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "What is the book's stance on human judgment in AI systems?",
    options: [
      "AI should replace all human judgment",
      "AI systems do not replace human judgment — they extend it, scale it, and make it repeatable",
      "Human judgment is only needed for legal decisions",
      "AI judgment is always better than human judgment"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What does the book say Digital FTEs become when built well?",
    options: [
      "Cheaper chatbots",
      "Scalable assets that do not merely automate tasks",
      "Temporary prototypes",
      "Competitors to human workers"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "According to the book, what forms an AI-Native Company's workforce?",
    options: [
      "Only human employees",
      "Hybrid workforces combining human employees and Digital FTEs",
      "Only AI workers with no human involvement",
      "Freelancers managed by AI"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What does the book say about the lower four layers of the AI stack?",
    options: [
      "They are irrelevant to building applications",
      "They matter because they make the top layer possible, but do not create business value on their own",
      "They are the only layers that matter for business",
      "They are already fully commoditized"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What is the spec-driven approach the book teaches?",
    options: [
      "You write code first, then document it",
      "You write a clear specification of the work first, then have the AI build to it",
      "You let the AI decide the specifications",
      "You copy specifications from other companies"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "What time of day does the book's opening scenario describe?",
    options: [
      "Midnight",
      "8:07 a.m.",
      "3:00 p.m.",
      "5:30 p.m."
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "How does the book describe an AI Worker in plain terms?",
    options: [
      "A chatbot in a browser",
      "A new hire who never sleeps: you tell it what to do, it does the work, and a human still signs off",
      "A software library for AI",
      "A robot in a factory"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "What does the book say billions of dollars are invested in the lower four layers for?",
    options: [
      "So that the fifth layer (Applications) can exist",
      "To build better data centers",
      "To compete on benchmark scores",
      "To reduce electricity costs"
    ],
    correctIndex: 0
  },
  {
    id: 23,
    question: "What is the four-channel ecosystem the book is delivered through?",
    options: [
      "Print, eBook, Audiobook, Video",
      "The book, an AI tutor, an AI building partner, and a growing family of specialized derivative books",
      "Website, App, API, Newsletter",
      "Blog, Podcast, YouTube, Twitter"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "According to the book, what does an AI Worker do that a chatbot does not?",
    options: [
      "Answers questions faster",
      "Does a real job, not just answers a question — follows instructions, uses tools, checks its own work",
      "Runs on local hardware",
      "Has a nicer user interface"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "What does the book identify as the reason most AI experiments fail to reach daily operations?",
    options: [
      "Bad AI models",
      "Lack of excitement",
      "Missing method — no repeatable way to build reliable agents",
      "Insufficient GPU capacity"
    ],
    correctIndex: 2
  }
];

const orient2: Question[] = [
  {
    id: 1,
    question: "What are the two modes of general-agent use described in the Agent Factory?",
    options: [
      "Training mode and inference mode",
      "Mode 1: Problem-Solving (using agents to get work done) and Mode 2: Manufacturing (using agents to build AI Workers)",
      "Online mode and offline mode",
      "Chat mode and code mode"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What role does 'Human Oversight' play in the four critical elements?",
    options: [
      "It is optional in most agent systems",
      "It provides the feedback loops that maintain accountability and governance",
      "It only checks outputs at the end of the pipeline",
      "It is handled entirely by the AI itself"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is 'Engineering Architecture' in the context of the four critical elements?",
    options: [
      "The office building where engineers work",
      "The infrastructure that ensures reliability and scalability of agent systems",
      "The organizational chart of the company",
      "The programming language used"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What does the book say about the relationship between AI models and business value?",
    options: [
      "Better models automatically create more business value",
      "Value appears when intelligence is shaped into workflows, products, and operational systems people can actually use",
      "Business value only comes from custom-trained models",
      "Models have no relationship to business value"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What is the relationship between Structured Specifications and Domain Expertise?",
    options: [
      "They are the same thing",
      "Specs define what agents must do; Domain Expertise is the knowledge engine that guides reasoning and decision-making",
      "Domain Expertise replaces the need for specifications",
      "Specifications are only for engineers, not domain experts"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "According to the book, what do strong models + talented people + business demand NOT automatically produce?",
    options: [
      "Funding",
      "Dependable digital workers — because design discipline is missing",
      "Revenue",
      "Innovation"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What is 'Mode 2: Manufacturing' in the Agent Factory framework?",
    options: [
      "Writing code manually",
      "Using a general agent to build specialized AI Workers and the systems that orchestrate them",
      "Training AI models from scratch",
      "Assembling hardware components"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What is 'Mode 1: Problem-Solving' in the Agent Factory framework?",
    options: [
      "Solving math problems with AI",
      "Using a general agent directly to get your own work done — research, analysis, writing, coordination",
      "Debugging code",
      "Answering customer support tickets"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What differentiates the Agent Factory from typical AI prototype projects?",
    options: [
      "It uses more powerful GPUs",
      "It focuses on dependable systems that participate in real business operations, not short-lived demos",
      "It only uses open-source models",
      "It requires no human involvement"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What is the economic significance of Digital FTEs according to the book?",
    options: [
      "They are cheaper than chatbots",
      "They allow AI-Native organizations to package expertise, reduce bottlenecks, and create new revenue streams",
      "They reduce electricity costs",
      "They eliminate the need for cloud computing"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What is the 'Intent Layer' concept introduced in the crash courses?",
    options: [
      "The UI layer of an application",
      "Human intent written precisely enough for an agent to act on",
      "The database layer of a system",
      "The authentication layer"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "What does the book promise to teach about identifying AI opportunities?",
    options: [
      "How to automate every job",
      "How to identify valuable AI employee opportunities and turn expert knowledge into structured specifications",
      "How to build GPU clusters",
      "How to train foundation models"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What is the 'agent-tested' component of the Agent Factory method?",
    options: [
      "Humans test everything manually",
      "Agents test each other's work — the output of one agent is verified by another before a human signs off",
      "There is no testing",
      "Only unit tests are used"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What does the book say about governance of Digital FTEs?",
    options: [
      "Digital FTEs govern themselves",
      "Digital FTEs must be governed with human oversight, clear permissions, and audit trails",
      "Governance is handled by the operating system",
      "Governance is not needed for AI systems"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "Which of the four channels is described as the 'AI tutor'?",
    options: [
      "A human teaching assistant",
      "An AI configured with the book's knowledge that can teach you the content interactively",
      "A video course platform",
      "A university professor"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "Which of the four channels is the 'AI building partner'?",
    options: [
      "A coding bootcamp",
      "A general agent configured with the book's knowledge to help you build AI Workers",
      "A co-founder",
      "An open-source library"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What does the phrase 'governable and economically meaningful' mean in the book's mission?",
    options: [
      "AI that is open-source and free",
      "AI systems that can be supervised, controlled, and create real business value",
      "AI that requires government regulation",
      "AI that runs on renewable energy"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What does the book identify as the 'Third Era of AI Tools'?",
    options: [
      "The era of chatbots (2022–2024)",
      "The era of AI research (2012–2022)",
      "The era where AI becomes a canonical, spec-driven ecosystem for building Digital FTEs",
      "The era of AGI"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    question: "What does the book say an organization must learn to operate?",
    options: [
      "A GPU cluster",
      "An Agent Factory — the spec-driven, human-supervised, agent-tested process for building AI Workers",
      "A data center",
      "A large language model"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "According to the book, what is the power of the spec-driven approach?",
    options: [
      "It eliminates the need for domain experts",
      "You write a clear specification of the work first, then have the AI build to it — making the process repeatable and auditable",
      "It reduces costs to zero",
      "It works without any human input"
    ],
    correctIndex: 1
  }
];

/* ──────────────────────────────────────────────
   AI OPERATING LAYER — 2 parts × 25 MCQs
   ────────────────────────────────────────────── */

const aol1: Question[] = [
  {
    id: 1,
    question: "According to the AI Operating Layer paper, what two casualties does the shift to agent-operated computing bring?",
    options: [
      "Mobile apps and web browsers",
      "SaaS and the PC as we know it",
      "Open source and proprietary software",
      "Cloud computing and on-premise servers"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What are the three components of a SaaS application, once you strip the dressing?",
    options: [
      "Frontend, backend, database",
      "A system of record, a set of capabilities, and a workflow UI",
      "Marketing, sales, support",
      "Code, deployment, monitoring"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "Which of the three SaaS components dies first when agents take over?",
    options: [
      "The system of record",
      "The capabilities",
      "The workflow UI",
      "The database"
    ],
    correctIndex: 2
  },
  {
    id: 4,
    question: "In the agent era, what happens to SaaS capabilities?",
    options: [
      "They disappear completely",
      "They survive — demoted from product to function call, becoming interchangeable parts in an agent's workflow",
      "They become more expensive",
      "They merge into a single platform"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What is the 'prize' in the unbundled SaaS landscape?",
    options: [
      "The UI design",
      "The system of record — whoever owns the authoritative data holds the position that survives",
      "The brand name",
      "The mobile app"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "Why does seat-based pricing break in the agent era?",
    options: [
      "Agents are too expensive per seat",
      "Seat-based pricing assumes humans in seats clicking through screens — agents have no seats",
      "Companies refuse to pay for agent seats",
      "Seat-based pricing is illegal for AI"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What replaces the desktop metaphor's interface in the new architecture?",
    options: [
      "A VR headset",
      "The AI Operating Layer — a layer above the OS where humans now interact through agents",
      "Voice commands only",
      "A command-line interface"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What happens to the OS kernel in the new architecture?",
    options: [
      "It is completely replaced by AI",
      "It survives as plumbing — essential, ubiquitous, and invisible to the user",
      "It becomes the primary user interface",
      "It is removed from computers entirely"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What is NVIDIA's OpenShell?",
    options: [
      "A new Linux distribution",
      "A new shell layered over the old OS, deciding what agents are allowed to touch",
      "A web browser for AI",
      "A database for agent memory"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What two types of agents does the AI Operating Layer distinguish?",
    options: [
      "Cloud agents and local agents",
      "General agents (oriented toward the work) and personal agents (oriented toward you)",
      "Code agents and chat agents",
      "Supervised agents and autonomous agents"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What is a general agent oriented toward?",
    options: [
      "The person — it knows your preferences",
      "The work — it does the job",
      "The hardware — it manages devices",
      "The network — it routes traffic"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "What is a personal agent oriented toward?",
    options: [
      "The work — completing tasks",
      "You — holding your context, planning ahead, acting on your behalf",
      "The operating system",
      "Other agents"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "In the Two-Layer Model, what name does the thesis give to the self-sovereign agent you own rather than rent?",
    options: [
      "Digital FTE",
      "Identic AI",
      "Workforce Agent",
      "Cloud Agent"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What is the runtime relationship between personal agents and general agents?",
    options: [
      "They are unrelated",
      "You build the personal agent with general agents; at runtime, the personal agent dispatches general agents and reports back",
      "General agents replace personal agents",
      "Personal agents replace general agents"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "According to the paper, what is the 'bold claim' about the PC?",
    options: [
      "PCs will get faster",
      "The personal computer, as a thing humans operate, is becoming obsolete — beginning with digital, bounded, recoverable work",
      "PCs will merge with smartphones",
      "PCs will all run Linux"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What diagnostic question distinguishes an assistant from an operating layer?",
    options: [
      "Is it fast?",
      "Answer-in-place versus act-in-the-world — a chat answers questions; a general agent completes the task in the environment",
      "Is it free?",
      "Does it use the cloud?"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What was the Klarna AI agent case study credited with?",
    options: [
      "Building the largest AI model",
      "Handling 2.3 million conversations, doing work of ~700 full-time agents, $40 million profit improvement in one year",
      "Replacing all human employees permanently",
      "Winning an AI research award"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What honest boundary did the Klarna case reveal?",
    options: [
      "AI cannot handle any customer service",
      "By 2025, human agents were reintroduced for complex cases — substitution is real but thins out as tasks get ambiguous",
      "AI customer service costs more than human service",
      "AI agents only work in English"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What is the SaaSpocalypse, in full?",
    options: [
      "SaaS companies go bankrupt",
      "SaaS gets unbundled — the UI dies, capabilities survive as function calls, the record survives as contested high ground",
      "SaaS companies merge into one giant platform",
      "SaaS becomes free for everyone"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "Why does the Daily Active Users metric become irrelevant in the agent era?",
    options: [
      "Users stop using software",
      "An agent has no habits and feels no switching cost — the metric measured human attention on a UI agents render irrelevant",
      "Users switch to mobile",
      "The metric was always flawed"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "What is the desktop metaphor described as in the paper?",
    options: [
      "The greatest innovation in computing",
      "A forty-year-old prosthetic for a computer that could not understand intent",
      "A design pattern still superior to agents",
      "An unnecessary complexity"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "What makes the agent layer 'recursive' in the Agent Factory model?",
    options: [
      "It uses loop functions in code",
      "Agents you talk to, and agents that build the agents that do the work",
      "It runs on recursive neural networks",
      "It repeats the same task forever"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "What chip did NVIDIA announce on June 1, 2026 in Taipei?",
    options: [
      "RTX 5090",
      "RTX Spark — an Arm-based superchip for running agents locally on Windows",
      "H100 GPU",
      "Apple M4"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "What is the mechanism that drives the SaaSpocalypse?",
    options: [
      "Government regulation",
      "The agent unbundles the product — UI dies, capabilities become tools, record becomes strategic",
      "Market competition from open source",
      "Rising cloud costs"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "According to Jensen Huang's June 2026 quote, what replaces 'you launch apps, click, type'?",
    options: [
      "You write code",
      "You ask — and the PC does the work",
      "You use voice commands",
      "You hire more people"
    ],
    correctIndex: 1
  }
];

const aol2: Question[] = [
  {
    id: 1,
    question: "What is the architecture the AI Operating Layer adds above the traditional OS?",
    options: [
      "A new file system",
      "A layer where humans now live — the OS is pushed down into the basement",
      "A virtual machine",
      "A Docker container"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "In the new world, what becomes of the traditional OS's graphical shell?",
    options: [
      "It gets a major redesign",
      "The shell stops being the place you live — it becomes something the agent operates on your behalf",
      "It merges with the browser",
      "It becomes more complex"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is the 'Edge Layer' in the Two-Layer Model?",
    options: [
      "The cloud infrastructure",
      "Where the personal agent (Identic AI) lives — private, local, representing the principal",
      "The database layer",
      "The networking layer"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "According to the paper, where will the first RTX Spark personal agents appear?",
    options: [
      "In data centers",
      "On the taskbar alongside the first RTX Spark laptops",
      "In mobile phones only",
      "In web browsers"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What is the relationship between the Agent Factory Thesis and the AI Operating Layer paper?",
    options: [
      "They are unrelated documents",
      "The Thesis is the architectural case (who does the work, how workforce is built); the Operating Layer is the interface case (where work now happens)",
      "The Operating Layer replaces the Thesis",
      "The Thesis is about hardware; the Operating Layer is about software"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What is the 'scalpel' analogy in the paper?",
    options: [
      "AI is a surgical tool for business",
      "The same scalpel that unbundles SaaS (into capability + record + dead UI) unbundles the PC (into compute + OS-as-plumbing + dead shell)",
      "Code is like surgery",
      "Agents need to be precise like scalpels"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "Why does the SaaS moat of switching cost and habit fail against agents?",
    options: [
      "Agents are cheaper",
      "An agent has no habits and feels no switching cost — it has infinite patience to compare alternatives",
      "Agents prefer open source",
      "Regulators prevent vendor lock-in"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What is the governance relationship in the Two-Layer Model?",
    options: [
      "There is no governance",
      "The personal agent at the Edge Layer represents the principal; the workforce below does the work under that governance",
      "Governance is handled by the OS",
      "Agents govern each other autonomously"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What does the paper say about the pace of this transition?",
    options: [
      "It will happen overnight",
      "It is a direction with a leading edge, not a switch thrown overnight — begins with digital, bounded, recoverable work",
      "It will take 50 years",
      "It has already fully happened"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What is the 'engine of the AI-Native Company' according to the paper?",
    options: [
      "Venture capital funding",
      "The recursion of the agent layer — agents you talk to, and agents that build the agents that do the work",
      "Large GPU clusters",
      "Open-source software"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What does the paper say survives of the SaaS vendor who adapts?",
    options: [
      "Their UI and brand",
      "The realization they were a database with a UI — and the UI was the disposable half",
      "Their per-seat pricing model",
      "Their office space"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "What independent agent makers committed to shipping on RTX Spark?",
    options: [
      "Google and Meta",
      "OpenClaw and Nous Research's Hermes",
      "Apple and Microsoft",
      "Amazon and IBM"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What is the one-line summary of the Agent Factory Thesis?",
    options: [
      "AI will replace all jobs",
      "People set direction; agents do the work; companies scale intelligence rather than headcount",
      "Computers are getting faster",
      "Everyone should learn to code"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What does the paper identify as the most strategic layer after unbundling?",
    options: [
      "The UI layer",
      "The system of record — the database that holds the truth an agent must read to act",
      "The API gateway",
      "The authentication layer"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "How do personal agents and general agents differ in handling context?",
    options: [
      "Both handle context identically",
      "A personal agent carries persistent memory across all tasks; a general agent is task-scoped",
      "General agents have better memory",
      "Personal agents forget everything after each task"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What does the paper say about the agent replacing the human at the controls?",
    options: [
      "It will never happen",
      "SaaS dies because the agent replaces the app; the PC dies because the agent replaces you at the controls",
      "It only applies to developers",
      "It only applies to customer service"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What does the paper mean by the desktop being 'vestigial'?",
    options: [
      "It is the most important interface",
      "Once work is delegated to agents, the interface built for humans to do the work becomes unnecessary",
      "It needs a redesign",
      "It is too expensive"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What happened to Daily Active Users as a metric in the agent era?",
    options: [
      "It became more important",
      "It measures human attention on a UI that agents render irrelevant",
      "It was replaced by Monthly Active Agents",
      "It stayed the same"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What does the paper say about the 'forty-year stack' of OS + Apps + Shell?",
    options: [
      "It will continue unchanged",
      "It was an interface for a creature that had to do the work itself — once work is delegated, the stack becomes vestigial",
      "It was always inefficient",
      "It will be replaced by VR"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "What kills the SaaS company's brand moat in the agent era?",
    options: [
      "Better marketing by competitors",
      "When the user no longer logs in and navigates the UI, the brand built on that experience loses its grip",
      "Social media trends",
      "Government regulation"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "What kind of agent are Claude Code and OpenCode examples of?",
    options: [
      "Personal agents",
      "General agents — operators that do the work for developers",
      "Chatbots",
      "Voice assistants"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "What kind of agents are Claude Cowork and OpenWork examples of?",
    options: [
      "Code editors",
      "General agents for knowledge workers — research, analyze, write, coordinate",
      "Database management tools",
      "Personal finance agents"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "What does the paper mean by 'the OS becomes something the human never touches again'?",
    options: [
      "Operating systems will be deleted",
      "The agent reaches down through the old interface and operates the OS on the human's behalf, like you never touch your car's engine timing",
      "Humans will stop using computers",
      "Only developers will use operating systems"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "What is the recommendation for SaaS vendors who want to survive?",
    options: [
      "Build better UIs",
      "Stop selling screens to humans and start selling capabilities and data to agents, governed by permissions",
      "Lower prices",
      "Merge with competitors"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "What analogy does the paper use for the OS after the transition?",
    options: [
      "Like a house foundation",
      "Like the engine timing of your car — something you never touch but that runs everything underneath",
      "Like a smartphone OS",
      "Like a web browser"
    ],
    correctIndex: 1
  }
];

/* ──────────────────────────────────────────────
   MARKDOWN/HTML CRASH COURSE — 2 parts × 20 MCQs
   ────────────────────────────────────────────── */

const mh1: Question[] = [
  {
    id: 1,
    question: "What are the two document languages taught in the Markdown/HTML crash course?",
    options: [
      "JSON and XML",
      "Markdown (what you write) and HTML (what you ask for)",
      "Python and JavaScript",
      "CSS and SQL"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What is Markdown?",
    options: [
      "A programming language for web development",
      "Plain text with a few extra marks that show structure — like # for headings and - for lists",
      "A database format",
      "A design tool"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is the core asymmetry that forms the spine of the entire course?",
    options: [
      "You write code, AI writes documentation",
      "You to agent: Markdown (structure removes ambiguity). Agent to you: HTML (rich, readable, shareable)",
      "You to agent: natural language. Agent to you: code",
      "You to agent: voice. Agent to you: text"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What is the decisive question for choosing between Markdown and HTML output?",
    options: [
      "Is it longer than 100 lines?",
      "Who reads this last? — A person reads it last, use HTML. An AI reads it last, use Markdown",
      "Is it for a presentation?",
      "Does it contain code?"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "Why did Thariq Shihipar's team stop asking for Markdown outputs?",
    options: [
      "Markdown is too hard to write",
      "Long Markdown is unreadable past about a hundred lines, and HTML has almost no ceiling for showing information efficiently",
      "Markdown doesn't support images",
      "HTML is faster to generate"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What three output formats does the course recommend based on who reads it?",
    options: [
      "PDF, Word, or PowerPoint",
      "Person in a browser → HTML. AI or future chat → Markdown. Social feed → plain text",
      "Email, chat, or document",
      "Code, text, or image"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What is the heading rule: 'One # title per document'?",
    options: [
      "Use only one heading level",
      "Two titles means two documents fused together — the agent may treat them as separate tasks",
      "Every paragraph needs a heading",
      "Headings must be numbered"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What happens when you skip heading levels (e.g., # then ### with no ##)?",
    options: [
      "Nothing — it's just formatting",
      "A skipped level breaks the tree; the agent can misattach a subsection to the wrong parent",
      "The document becomes invalid",
      "The AI ignores the heading"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What is the heading rule: 'Make headings claims, not labels'?",
    options: [
      "Headings should be short",
      "## Budget says less than ## Budget: PKR 50,000 hard ceiling — the heading itself carries the constraint",
      "Headings must be questions",
      "Headings should be in ALL CAPS"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What is the critical difference between bullet lists (-) and numbered lists (1.) for an AI?",
    options: [
      "There is no difference — it's just visual",
      "Bullets say: these items are a set, order doesn't matter. Numbers say: this is a sequence, step 3 assumes step 2 happened",
      "Numbers are for engineers, bullets for everyone else",
      "Bullets are faster to render"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What is the 'checkable-bullet habit'?",
    options: [
      "Every bullet must be a question",
      "Each requirement bullet should be something a reviewer could mark as check or cross without discussion",
      "Bullets must be alphabetically ordered",
      "Use only one bullet per document"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "Which is an example of a checkable vs. uncheckable requirement?",
    options: [
      "'Page should be fast' is checkable",
      "'Page loads under 3 seconds on a 3G connection' is checkable; 'Page should be fast' is not",
      "All requirements are checkable",
      "Checkable requirements are only for engineers"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "According to the course, where should a hard constraint be placed?",
    options: [
      "In the middle of a paragraph",
      "Under its own heading or in its own bullet, never buried inside a sentence",
      "In the footer",
      "As a comment"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What is the school administrator example used to illustrate?",
    options: [
      "That AI refuses all planning tasks",
      "A constraint buried in prose was ignored; under ## Hard constraints as a bullet, the AI complied perfectly",
      "That AI always gets it right on the first try",
      "That sports day planning is too complex for AI"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "What does the 'Out of scope' section do in a specification?",
    options: [
      "It is optional and rarely useful",
      "It states what you do not want — which is half of every good specification — preventing the agent from adding unnecessary features",
      "It lists completed features",
      "It defines the budget"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "Why do agents parse Markdown structure natively?",
    options: [
      "Markdown is a programming language",
      "Agents are trained on enormous amounts of Markdown — most internet documentation is written in it",
      "Markdown was designed for AI",
      "Agents have special Markdown parsers"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What is the key difference between structured and unstructured prompts?",
    options: [
      "The unstructured one is shorter",
      "Unstructured prose forces the agent to infer structure — every inference is a place it can guess wrong while looking confident",
      "Structured prompts are always longer",
      "There is no meaningful difference"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What does the course say is the single most important insight about writing for agents?",
    options: [
      "Use short sentences",
      "Anything an agent must not get wrong belongs under its own heading or in its own bullet, never inside a sentence",
      "Always use bullet points",
      "Write in all lowercase"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What is Markdown's 'ceiling' according to the course?",
    options: [
      "Markdown can do everything HTML can",
      "Markdown's ceiling is low — headings, lists, tables, and not much else. Beyond that, you need HTML",
      "Markdown has no ceiling",
      "Markdown only works for code"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "Why is Markdown still preferred for agent-to-agent communication?",
    options: [
      "Agents cannot read HTML",
      "To an AI, HTML is noise around the meaning — tags and styling spending thousands of words to say what Markdown says in fifty",
      "Markdown is faster to transmit",
      "HTML is proprietary"
    ],
    correctIndex: 1
  }
];

const mh2: Question[] = [
  {
    id: 1,
    question: "What is an 'artifact' in Claude.ai (or 'Canvas' in ChatGPT/Gemini)?",
    options: [
      "A saved chat conversation",
      "A live, rendered document the AI builds beside the conversation instead of inside it",
      "A code file",
      "A screenshot"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What is the 'prove it in two minutes' exercise?",
    options: [
      "Write HTML from scratch",
      "Paste a short Markdown spec for a tuition center welcome card — the AI builds a real styled page in two minutes",
      "Install a Markdown editor",
      "Learn CSS first"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What does the course say about writing HTML?",
    options: [
      "You must learn to write HTML by hand",
      "You never write HTML at all — you only learn to demand it, judge it, and publish it",
      "HTML is outdated",
      "Only designers write HTML"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What is the correct direction for each format in the asymmetry?",
    options: [
      "Both directions use Markdown",
      "You to agent: Markdown. Agent to you: HTML. Agent to agent: Markdown",
      "Both directions use HTML",
      "You to agent: HTML. Agent to you: Markdown"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What if the AI gives you a wall of code instead of a rendered artifact?",
    options: [
      "The prompt failed",
      "Say 'show it to me as a rendered artifact' and it will flip from code to the visual page",
      "You need to restart the chat",
      "The AI cannot render artifacts"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "Why does the course say HTML output has 'one condition'?",
    options: [
      "You need a paid account",
      "HTML out assumes the reader is human — to an AI, the same file is noise around the meaning",
      "HTML only works on desktop",
      "HTML requires special software"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What should you do with an artifact after the AI builds it?",
    options: [
      "Delete it",
      "Find the share or publish control on the artifact panel and open the link on your phone",
      "Copy the code to a file",
      "Screenshot it"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What format should notes for a future chat session be saved in?",
    options: [
      "HTML",
      "Markdown — because a future chat is agent-to-agent communication, even though both agents talk to you",
      "PDF",
      "Word document"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What reasoning did Thariq Shihipar give for preferring HTML outputs?",
    options: [
      "HTML is faster to generate",
      "An unread plan is a plan you did not actually approve — at some length, a designed HTML page is the only output a busy human actually reads",
      "HTML is more secure",
      "Markdown is deprecated"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What three prerequisites does the Markdown/HTML course list?",
    options: [
      "A coding background, a Mac, and Photoshop",
      "A free chat account, web access turned on, and a phone to test what you make",
      "A paid subscription, a GPU, and Python",
      "A university degree, a portfolio, and 5 years of experience"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What are the four parts of the Markdown/HTML crash course?",
    options: [
      "Setup, Coding, Testing, Deployment",
      "Part 1: The split. Part 2: Markdown you write. Part 3: HTML you demand. Part 4: One exercise across three agent modes",
      "Beginner, Intermediate, Advanced, Expert",
      "Theory, Practice, Review, Exam"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "How many Markdown features does the course say you actually need?",
    options: [
      "All of them — dozens",
      "Five: headings, bullet lists, numbered lists, bold/italic, and code blocks",
      "One: just headings",
      "None — you don't need Markdown"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What does the course say about hand-editing agent output?",
    options: [
      "You should always hand-edit agent output",
      "Increasingly you prompt the agent to edit it. Once the agent does the editing, the format only has to suit the reader",
      "Hand-editing is the only way to get quality",
      "Agents cannot edit their own output"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What is the fallback when unsure whether to use Markdown or HTML?",
    options: [
      "Always use HTML",
      "Markdown — a person can read Markdown well enough; an AI reads HTML badly",
      "Always use plain text",
      "Flip a coin"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "What should you do if you get code instead of a rendered artifact?",
    options: [
      "Start a new chat",
      "Say 'show it to me as a rendered artifact' and the AI will flip the display",
      "Manually copy the code to an HTML file",
      "Accept the code as the final output"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "Why does the course emphasize testing artifacts on your phone?",
    options: [
      "Phones have better AI",
      "To judge what you make the way your readers will actually see it — most people view on mobile",
      "Phones render HTML differently from desktops",
      "The AI only works on phones"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What does the course say about Markdown's 'killer feature'?",
    options: [
      "It is more powerful than HTML",
      "Markdown's killer feature is fading — it was great because humans could hand-edit it, but increasingly you prompt the agent to edit instead",
      "It supports all HTML features",
      "It is the most secure format"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What format is the Agent Factory book itself written in?",
    options: [
      "HTML only",
      "Markdown (source files end in .md), with SVG diagrams — practicing the asymmetry it preaches",
      "Microsoft Word",
      "Plain text only"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "According to the course, what is the actual skill you are learning?",
    options: [
      "How to code in HTML",
      "Knowing which format to use in which direction — Markdown in, HTML out — and writing precise enough specs for agents to act on",
      "How to design websites",
      "How to train AI models"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "What AI Prompting 2026 habit does the course say reappears in Markdown/HTML?",
    options: [
      "Loading the right context",
      "The grade-out-of-10 discipline: reread each bullet and ask — could the agent, or I, verify this one objectively?",
      "Brainstorming before iterating",
      "Using multiple AI tools"
    ],
    correctIndex: 1
  }
];

quizParts.push(
  {
    id: 11,
    title: "ORIENTATION PART 1: CORE CONCEPTS & DIGITAL FTEs",
    subtitle: "Digital FTE, AI Worker, AI-Native Company, Five-Layer Stack, General Agents",
    concepts: "Orientation Concepts 1–5",
    color: "from-cyan-500 to-blue-600",
    questions: orient1,
    conceptStart: 1,
    conceptSpread: 5
  },
  {
    id: 12,
    title: "ORIENTATION PART 2: ECOSYSTEM, METHOD & FOUR ELEMENTS",
    subtitle: "Two Modes, Specs/Domain/Arch/Oversight, Canonical Source, Four Channels",
    concepts: "Orientation Concepts 6–10",
    color: "from-teal-500 to-emerald-600",
    questions: orient2,
    conceptStart: 6,
    conceptSpread: 5
  },
  {
    id: 13,
    title: "Operating Layer Part 1: SaaSpocalypse & End of the PC",
    subtitle: "SaaS Unbundling, UI Death, Forty-Year Stack, Seat-Based Pricing Collapse",
    concepts: "AOL Concepts 1–5",
    color: "from-violet-500 to-purple-600",
    questions: aol1,
    conceptStart: 1,
    conceptSpread: 5
  },
  {
    id: 14,
    title: "Operating Layer Part 2: Agent Types & Architecture",
    subtitle: "AI Operating Layer, Personal vs General Agents, Two-Layer Model, Governance",
    concepts: "AOL Concepts 6–10",
    color: "from-fuchsia-500 to-pink-600",
    questions: aol2,
    conceptStart: 6,
    conceptSpread: 5
  },
  {
    id: 15,
    title: "Markdown/HTML Part 1: Two Languages & Markdown",
    subtitle: "Why Structure, Asymmetry, Heading Rules, List Types, Checkable Bullets",
    concepts: "MD/HTML Concepts 1–5",
    color: "from-orange-500 to-red-600",
    questions: mh1,
    conceptStart: 1,
    conceptSpread: 5
  },
  {
    id: 16,
    title: "Markdown/HTML Part 2: HTML Out & Publishing",
    subtitle: "Demanding Artifacts, Judging Output, Publishing Links, Who Reads This Last",
    concepts: "MD/HTML Concepts 6–10",
    color: "from-amber-500 to-yellow-600",
    questions: mh2,
    conceptStart: 6,
    conceptSpread: 5
  }
);

/* ──────────────────────────────────────────────
   SKILLS & CONNECTORS CRASH COURSE — 1 part × 20 MCQs
   ────────────────────────────────────────────── */

const sc1: Question[] = [
  {
    id: 1,
    question: "What is the one-line test for when you need a Skill?",
    options: [
      "I keep copy-pasting from another app",
      "I keep re-explaining how to do this",
      "I need faster response times",
      "I want to chat with a different AI model"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What is the one-line test for when you need a Connector?",
    options: [
      "I keep re-explaining how to do this",
      "I keep copy-pasting from another app",
      "I need the AI to be more concise",
      "I want to change the AI's personality"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is the core concept that underlies the entire Skills & Connectors course?",
    options: [
      "AI is a vending machine — you type and take what falls out",
      "A chat message tells AI what to do this once. A Skill teaches AI how to do something every time. A Connector gives AI hands to reach your real apps",
      "Skills and Connectors are the same thing",
      "You need to be a programmer to use Skills"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "In the professional kitchen analogy, what are Skills?",
    options: [
      "The stove and knives",
      "The recipe cards — step-by-step instructions for making a specific dish your way",
      "The stocked pantry",
      "The head chef"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "In the professional kitchen analogy, what are Connectors?",
    options: [
      "The recipe cards",
      "The kitchen itself — the tools and the stocked pantry that lets AI work with your actual ingredients",
      "The waitstaff",
      "The menu"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What is a Skill, technically?",
    options: [
      "A piece of Python code you must write",
      "A folder with a text file named SKILL.md containing instructions",
      "A browser extension",
      "A cloud service subscription"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What is the required text file in a Skill folder called?",
    options: [
      "skill.md",
      "SKILL.md",
      "README.md",
      "instructions.txt"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What is 'progressive disclosure' in the context of Skills?",
    options: [
      "Gradually revealing company secrets to AI",
      "AI keeps only a short summary of each skill loaded, and opens the full instructions only when needed",
      "Slowly teaching AI over multiple sessions",
      "Showing AI one file at a time"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "What open standard do Connectors run on?",
    options: [
      "REST API",
      "MCP (Model Context Protocol)",
      "GraphQL",
      "WebSocket"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What are the three facts that matter about Connector permissions?",
    options: [
      "They are always read-only, free, and automatic",
      "AI inherits your permissions, you choose read-only or read-write, and you turn them on per conversation",
      "They give AI full access to everything, permanently",
      "They require admin approval for every use"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "What does 'AI inherits your permissions' mean for Connectors?",
    options: [
      "AI gets admin access to everything",
      "A connector can never reach something you yourself cannot reach in the original app",
      "AI shares your login credentials",
      "AI can bypass permission controls"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "In Claude.ai, how do Skills fire?",
    options: [
      "You must type a slash command every time",
      "Automatically — AI scans your request against installed skill descriptions and activates matching ones",
      "You must select from a dropdown menu",
      "They only work with keyboard shortcuts"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What should you do if auto-detection misses a skill in Claude.ai?",
    options: [
      "Restart the conversation",
      "Just name the skill in plain English: 'use my brand-voice skill to draft this caption'",
      "Reinstall the skill",
      "Switch to a different AI tool"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What is the difference between a Skill and a Project?",
    options: [
      "They are identical",
      "A Project always loads its context when you open a chat. A Skill stays dormant until a request matches it, then activates anywhere",
      "Projects are for teams, Skills are for individuals",
      "Skills are permanent, Projects are temporary"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "What is the difference between a Skill and Custom Instructions?",
    options: [
      "They are the same feature",
      "Custom instructions touch everything you do universally. A Skill touches one kind of task",
      "Skills are only for developers",
      "Custom instructions are more powerful"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What is the good-practice sequence for Connector access?",
    options: [
      "Always grant read-and-write immediately",
      "Start read-only and grant write access only once you trust how the tool behaves",
      "Never grant any access",
      "Grant admin access for full functionality"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What does the course say about 'smaller scope = safer'?",
    options: [
      "It means use fewer skills",
      "Scope is how much access you give — a single folder vs everything. Smaller scope means safer access",
      "It means use shorter prompts",
      "It means use smaller AI models"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "According to the course, what shift happens when you combine Skills and Connectors?",
    options: [
      "The AI becomes slower",
      "The chat box stops being a chat box — it becomes an operating layer, a capable colleague who knows your standards and can reach your tools",
      "You no longer need to type anything",
      "The AI replaces all your apps"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What is the key word in Anthropic's description that explains why many skills can coexist?",
    options: [
      "Permanent",
      "Dynamically — AI doesn't carry every skill in its head at all times, it loads them dynamically",
      "Static",
      "Concurrent"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "What Foundation courses does the Skills & Connectors course say it pairs naturally with?",
    options: [
      "Markdown In, HTML Out and Build AI Agents",
      "AI Prompting in 2026 and How to Think in the AI Era",
      "Python in the AI Era and Postgres AI",
      "What AI Actually Is and Agentic Coding"
    ],
    correctIndex: 1
  }
];

const sc2: Question[] = [
  {
    id: 1,
    question: "Where do you find and use Skills in the Cowork / Microsoft 365 add-ins?",
    options: [
      "You must install a separate app",
      "Type / to browse your skills and pick one explicitly, or just describe the task naturally",
      "Skills are only available in Claude.ai, not in add-ins",
      "You must use a command palette in settings"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "What happens if a Skill's auto-detection fails in Claude.ai?",
    options: [
      "The Skill is permanently broken",
      "Just name the skill in plain English: 'use my X skill' — that's the simplest way to force it",
      "You must reinstall all your skills",
      "The AI will prompt you to choose from a list"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "What is the difference between read-only and read-and-write access for Connectors?",
    options: [
      "Read-only means AI can edit but not delete; read-and-write means it can also delete",
      "Read-only: AI may look but not change. Read-and-write: AI may edit or send",
      "Both are the same — there is no distinction",
      "Read-only is only for Google Drive, read-and-write is for everything else"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What is a Project in the context of Skills, Connectors, and Projects?",
    options: [
      "A Skill that fires automatically",
      "A workspace with files and instructions always loaded for every chat inside it — standing context for a body of work",
      "A Connector for project management tools",
      "A shared folder for team skills"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What is the key difference between a Project and a Skill?",
    options: [
      "Projects are for teams, Skills are for individuals",
      "A Project always loads its context when you open a chat. A Skill stays dormant until a request matches it",
      "Skills are permanent, Projects are temporary",
      "There is no difference"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What is the difference between a Skill and Custom Instructions?",
    options: [
      "Custom instructions touch everything universally. A Skill touches one kind of task",
      "Skills apply to all chats; Custom Instructions apply to one task",
      "They are the same feature",
      "Custom Instructions are only for paid accounts"
    ],
    correctIndex: 0
  },
  {
    id: 7,
    question: "What is an example of a good Custom Instruction vs a good Skill?",
    options: [
      "'Format client summaries' is a Custom Instruction; 'Be concise' is a Skill",
      "'Always reply in the same language I write in' is a Custom Instruction. 'When I ask for a board paper, use this 8-section structure' is a Skill",
      "Both are interchangeable — the same examples work for either",
      "Custom Instructions are for formatting; Skills are for personality"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "What does the course say about writing the description of a Skill?",
    options: [
      "It is optional and can be skipped",
      "A sharp description is the most important part — it's what makes the right skill fire at the right moment",
      "Descriptions should be as long as possible",
      "Descriptions are only for organizing skills, not for auto-detection"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "Can you include code or scripts in a Skill folder?",
    options: [
      "No — Skills can only contain plain text",
      "Yes — optionally, a Skill folder can hold example files, templates, reference notes, and even small scripts. AI writes any code needed",
      "Only Python scripts are allowed",
      "Code in Skills is limited to 10 lines"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "What is the minimum required content for a working Skill?",
    options: [
      "A Python script and a README file",
      "A folder with a SKILL.md file containing a name, a description, and plain-English instructions",
      "A JSON configuration file",
      "At least 100 lines of instructions"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "According to the course, which tool has interactive connectors that render live dashboards?",
    options: [
      "Claude Code only",
      "Claude.ai and Cowork — some connectors render live task boards, design surfaces, or dashboards right inside the conversation",
      "Only ChatGPT",
      "Only developer tools"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "What is the 'before picture' that Skills remove for a repeatable task?",
    options: [
      "Having to code everything from scratch",
      "Opening a fresh chat every time and re-pasting the same instructions, templates, and format rules",
      "Having to hire a specialist",
      "Installing new software"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "What is the 'before picture' that Connectors remove?",
    options: [
      "Having to learn programming",
      "Copy-pasting data between apps because the AI cannot reach your files, email, or tools",
      "Having to use multiple monitors",
      "Typing long prompts"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "What does the course mean by 'the chat box becomes an operating layer'?",
    options: [
      "The chat box replaces Windows and macOS",
      "With Skills (knowing your standards) and Connectors (reaching your tools), the AI stops being a thing you type into and becomes something that acts on your real work",
      "The chat box becomes a file system",
      "You no longer need any other apps"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "How does the course say you build a custom connector?",
    options: [
      "You hire a software engineer",
      "You click Connect — the AI builds the MCP server for you. Writing the code is never your job",
      "You write it from scratch in Python",
      "You download it from an app store"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "What is the MCP (Model Context Protocol) described as in the course?",
    options: [
      "A programming language for AI",
      "An open standard that connectors run on — you never need to understand it to use it, like email protocols",
      "A security certificate for AI",
      "A type of AI model"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "What does the course say about free-plan limits for connectors?",
    options: [
      "There are no connectors on the free plan",
      "As of June 2026, one custom connector is available on the free tier — details may drift over time",
      "Unlimited connectors are free",
      "Connectors are only for enterprise plans"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "What pre-built connectors does the course mention as available?",
    options: [
      "Only Google Drive and Gmail",
      "Google Drive, Gmail, Slack, Notion, Figma, Linear, Atlassian, and many more",
      "Only Microsoft 365 apps",
      "Only project management tools"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "What is the 'vending machine' metaphor the course opens with?",
    options: [
      "AI is like a vending machine: predictable, reliable, and always gives exactly what you want",
      "Most people treat AI like a vending machine — walk up, type a request, take what falls out, walk away. Tomorrow they type the whole request again from zero",
      "AI should be used like a vending machine for maximum efficiency",
      "Vending machines are the future of AI interfaces"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "According to the course, what is the underlying idea behind every section?",
    options: [
      "AI is getting smarter every month",
      "A chat message tells AI what to do this once. A Skill teaches AI how to do something every time. A Connector gives AI hands to reach your real apps and data",
      "You should use AI for everything",
      "Skills are more important than Connectors"
    ],
    correctIndex: 1
  }
];

quizParts.push(
  {
    id: 17,
    title: "SKILLS & CONNECTORS PART 1: TEACH AI ONCE, CONNECT IT TO YOUR APPS",
    subtitle: "Skills vs Connectors, MCP, SKILL.md, Progressive Disclosure, Scope & Safety",
    concepts: "S&C Concepts 1–5",
    color: "from-sky-500 to-indigo-600",
    questions: sc1,
    conceptStart: 1,
    conceptSpread: 5
  },
  {
    id: 18,
    title: "SKILLS & CONNECTORS PART 2: BUILDING, PUBLISHING & COMBINING",
    subtitle: "Custom Instructions vs Projects, Writing Descriptions, Building Connectors, Safety",
    concepts: "S&C Concepts 6–10",
    color: "from-blue-500 to-violet-600",
    questions: sc2,
    conceptStart: 6,
    conceptSpread: 5
  }
);
