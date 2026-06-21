import type { Question, QuizPart } from "./quizData";

/* ══════════════════════════════════════════════════════════════
   ALL TOPICS MASTERY — 4 blocks × 25 MCQs = 100 total
   Real-world scenarios mixing every course: Orientation,
   Foundations, What AI Actually Is, AI Prompting 2026,
   Agent Factory Thesis, AI Operating Layer, Quick Start,
   Markdown In/HTML Out, Code You Never Write,
   Skills & Connectors.
   ══════════════════════════════════════════════════════════════ */

/* ── BLOCK 1: Core Concepts & Practice ── */
const block1: Question[] = [
  {
    id: 1,
    question: "A new hire has never used an AI chat tool. They ask whether they should treat the AI like a search engine, a calculator, or a colleague. Which answer best describes the Orientation course's advice?",
    options: [
      "Treat it like a search engine that returns ranked results",
      "Treat it like a calculator that produces exact answers",
      "Treat it like a smart-but-new colleague who needs context, files, and clear constraints",
      "Treat it like a database that responds only to structured queries"
    ],
    correctIndex: 2
  },
  {
    id: 2,
    question: "A product manager wants to estimate how many 'Digital FTEs' their team needs. They have 40 hours of weekly tasks that an AI can handle with 80% autonomy and 20% human oversight. How should they think about this, per the Orientation framework?",
    options: [
      "One Digital FTE covers 40 hours, so they need exactly one",
      "They should count only the autonomous portion — roughly 0.8 Digital FTEs — since oversight is human work",
      "Digital FTEs are measured in output, not hours, so the time estimate is irrelevant",
      "They need 1.2 Digital FTEs because oversight adds overhead"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "A startup founder reads that an 'AI-Native Company' has a Five-Layer Stack. They want to know which layer corresponds to the AI Operating Layer mentioned in the thesis. How does the Orientation course define that stack?",
    options: [
      "Infrastructure, Model, Application, Interface, User",
      "Hardware, Cloud, API, Agent, Frontend",
      "Compute, Data, Training, Inference, Deployment",
      "Digital Workers, Agent Factory, AI Operating Layer, Nervous System, AI-Native Company"
    ],
    correctIndex: 3
  },
  {
    id: 4,
    question: "According to the Foundations course, what is the single most important habit a beginner should develop before moving to desktop agents?",
    options: [
      "Learning to write their own AI models",
      "Getting the right context in and keeping the wrong context out",
      "Mastering every AI tool on the market",
      "Building a local GPU server for inference"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "A team lead notices that their AI agent keeps hallucinating project timelines. Based on 'What AI Actually Is' Part 1, what is the root cause?",
    options: [
      "The model has a bug in its training data for dates",
      "The model predicts the next token from patterns in text and has no internal truth-checker — it sounds fluent even when wrong",
      "The model's temperature setting is too low, forcing incorrect outputs",
      "The model is deliberately fabricating information to appear helpful"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "A developer sets the temperature to 0.0 for a code-generation task expecting identical outputs every time. They still get slight variations in comments and variable names. What's happening, according to WAI Part 1?",
    options: [
      "Temperature 0.0 still has tiny random noise by design",
      "The model's frozen weights change slightly with each call",
      "The prompt is being truncated differently each time",
      "The context window is being compacted between calls"
    ],
    correctIndex: 0
  },
  {
    id: 7,
    question: "An analyst copies 200 pages of internal policy docs into a chat session and asks for a compliance summary. The model responds with generic advice that barely references the docs. What went wrong, per the Foundations course?",
    options: [
      "The model's context window overflowed and compacted the early pages into a vague summary",
      "The analyst forgot to include a system prompt",
      "Internal policy docs are outside the model's training cutoff date",
      "The model only processes the first and last pages of any document"
    ],
    correctIndex: 0
  },
  {
    id: 8,
    question: "A user asks an AI 'What's the latest news about the GPU shortage?' and the AI gives a detailed but outdated answer from its training data. From AI Prompting Part 1, what retrieval mode should the user have triggered instead?",
    options: [
      "Pretrained mode — it's always the most reliable",
      "Deep research mode — it produces a structured report",
      "Web search mode — because the question asks for current information",
      "Chat memory mode — the AI should remember yesterday's news"
    ],
    correctIndex: 2
  },
  {
    id: 9,
    question: "A student pastes a 50-page research paper into a 2026-era chat model. The AI seems to lose track of the methodology section by the time they ask about it. According to AI Prompting Part 1, what is likely happening?",
    options: [
      "The model can only read text files, not PDF content",
      "The model is compacting older turns to fit within the context window, which can blur details",
      "The student needs to upgrade to a paid plan for long documents",
      "The research methodology is outside the model's training data"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "A developer tells the AI 'Write a Python script to download all images from a webpage' and gets a script with no error handling. They then add context about 'the site might be down, images might be missing, and we need retry logic.' The second attempt is much better. Which AI Prompting concept does this illustrate?",
    options: [
      "Sycophancy — the model agreed with the first prompt too easily",
      "The brainstorm-iterate loop — power users refine by adding edge cases and constraints",
      "Context compaction — the second prompt was shorter so the model performed better",
      "Deep research mode — the model searched for best practices"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "A designer asks AI to generate a marketing image and is surprised when the AI produces detailed text labels and logos in the image. From AI Prompting Part 3 (Beyond Text), what capability is this?",
    options: [
      "Multimodal output — the model can generate both text and visual elements",
      "Web search — the model is pulling logos from the internet",
      "Tool use — the model is calling a design API",
      "Data analysis — the model is rendering structured data as an image"
    ],
    correctIndex: 0
  },
  {
    id: 12,
    question: "A financial analyst uses AI to build a dashboard from a CSV file. The AI suggests charts, highlights trends, and writes the code. According to AI Prompting Part 3, this is an example of what?",
    options: [
      "Code generation — the AI writes all the code from scratch",
      "Data analysis via chat — the AI uses tools to inspect data and iterates with the user on what to build",
      "Deep research — the AI searches for existing dashboards to copy",
      "Multimodal processing — the AI reads charts from the CSV"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "A manager wants to use AI for sensitive HR data but is worried about privacy. From AI Prompting Part 4, which practice is most appropriate?",
    options: [
      "Use the free tier so data is logged openly for transparency",
      "Check the provider's data retention policy and use enterprise-grade controls that keep data out of training sets",
      "Only use AI on an air-gapped computer with no internet access",
      "Anonymize data by changing employee names to fictional ones"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "A team is choosing between several AI models for a customer-facing chatbot. They want the fastest responses even if accuracy drops slightly. From AI Prompting Part 4, what trade-off should they evaluate?",
    options: [
      "Speed depends only on internet connection, not model choice",
      "Smaller models are faster but less capable; the team should test latency vs. quality for their specific use case",
      "All models respond at the same speed on the same hardware",
      "Accuracy and speed are independent — a faster model is equally accurate"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "A writer uses AI to brainstorm blog post ideas, then takes those ideas into a separate document to outline, then comes back to AI to draft. From AI Prompting Part 2, what technique are they using?",
    options: [
      "The brainstorm-iterate loop — alternating between divergent creation with AI and convergent thinking on their own",
      "Prompt chaining — feeding one AI's output into another AI",
      "Multimodal switching — alternating between text and image modes",
      "Context window management — keeping different topics in separate chats"
    ],
    correctIndex: 0
  },
  {
    id: 16,
    question: "A user notices the AI agreeing with their proposed solution even when it has flaws. From AI Prompting Part 2, what phenomenon is this, and how should they counteract it?",
    options: [
      "This is sycophancy — the AI tends to agree with the user's position. The fix is to explicitly ask for counterarguments or critiques",
      "This is context compaction — the AI forgot the earlier discussion",
      "This is retrieval failure — the AI couldn't find the relevant data",
      "This is temperature drift — the model's settings changed mid-conversation"
    ],
    correctIndex: 0
  },
  {
    id: 17,
    question: "According to the Orientation course, what are the 'Four Elements' that every AI worker implementation needs?",
    options: [
      "Hardware, Software, Network, Storage",
      "Specs, Domain, Architecture, Oversight",
      "Training, Validation, Testing, Deployment",
      "Prompt, Context, Model, Output"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "An engineer says 'The AI model has 175 billion parameters, so it must be incredibly smart and never make mistakes.' From WAI Part 1, what misunderstanding does this reveal?",
    options: [
      "Parameter count is actually unrelated to capability",
      "More parameters only make the model faster, not smarter",
      "Parameters are frozen weights from training — they make the model fluent but don't give it a truth-checker or understanding",
      "175 billion parameters is actually a small model by 2026 standards"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    question: "A team is building an AI agent that reads customer support tickets and routes them. They want to use 'thinking mode' for complex multi-category tickets. According to WAI Part 2, what does thinking mode actually do?",
    options: [
      "It activates a separate logical processor inside the model",
      "It generates internal reasoning tokens before the visible answer — exploring options and checking its own work before responding",
      "It searches the web for similar tickets and copies the solution",
      "It queries a database of known resolutions"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "The Foundations course mentions 'Six Foundation Courses.' Someone asks whether they need to complete all six before using desktop AI agents. What does the course recommend?",
    options: [
      "All six are mandatory — skipping any will cause critical knowledge gaps",
      "Start with the two core courses (What AI Actually Is + AI Prompting), then you can use desktop agents while completing the rest",
      "None of them are necessary — desktop agents work the same regardless",
      "Only complete the first three, as the rest are advanced electives"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "A manager asks: 'If AI has no memory between sessions, how can it act like an ongoing employee?' According to the Orientation course's 'Canonical Source' concept, what is the best answer?",
    options: [
      "The AI secretly maintains a database of all past conversations",
      "Each session starts fresh, but the human provides persistent context via specs, knowledge bases, and shared documents that the AI reads each time",
      "The AI trains on the conversation history overnight",
      "A separate memory plugin is required for any continuity"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "A developer types a prompt with several typos and the AI responds correctly. Surprised, they wonder if typos affect AI at all. From AI Prompting Part 1, what explains this?",
    options: [
      "The model has an autocorrect feature built in",
      "The model was trained on internet text full of typos and handles them gracefully — don't worry about perfect spelling",
      "The model only processes the first letter of each word",
      "Typos force the model to think harder, improving accuracy"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "A product manager describes a feature using bullet points and a rough spec. The AI turns it into a detailed PRD with sections, edge cases, and acceptance criteria. According to AI Prompting Part 2, why did this work well?",
    options: [
      "The model automatically expanded the short input using its training knowledge",
      "Bullet points match how the training data is structured, so the model continued the pattern and filled in the gaps as a reasoning exercise",
      "The model searched the web for similar PRD templates",
      "The manager's description was so detailed that the AI had nothing to add"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "A student asks: 'If I use deep research mode, will every fact in the report be 100% correct?' According to AI Prompting Part 1, what should they know?",
    options: [
      "Yes, deep research verifies every claim against multiple sources",
      "Deep research gathers many sources rapidly but the AI can still misinterpret them — always verify critical facts yourself",
      "Deep research only searches one authoritative database",
      "Deep research is identical to web search but takes longer"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "According to the Orientation course, what is the 'Two Modes' concept that underpins the entire Agent Factory framework?",
    options: [
      "Training mode and inference mode",
      "Chat mode and API mode",
      "Flow mode (structured, repeatable processes) and Explore mode (open-ended, creative problem-solving)",
      "Free mode and paid mode"
    ],
    correctIndex: 2
  }
];

/* ── BLOCK 2: Thesis & Operating Layer ── */
const block2: Question[] = [
  {
    id: 1,
    question: "A company uses Claude Managed Agents for customer support and Dapr Agents for backend workflows. They need a unified way to handle external events. According to the Thesis (Invariant IV: Per-Worker Engines), how should they approach this?",
    options: [
      "Each engine has its own trigger mechanism, so events must be routed through the engine-specific webhook or scheduler adapter carefully",
      "Claude Code Routines is orthogonal to the engine choice — it converts schedules, webhooks, and inbound APIs into sessions regardless of the underlying engine",
      "They should standardize on one engine to avoid the complexity of multiple trigger systems",
      "Build a custom middleware layer that normalizes all events before routing"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "A startup wants to become an 'AI-Native Company.' According to Thesis Part 1, what is the defining characteristic they should aim for?",
    options: [
      "Every employee uses AI tools daily",
      "The company sells AI software to other businesses",
      "The workforce is mostly AI (Digital FTEs), and the product is whatever that workforce ships",
      "The company has a dedicated AI research division"
    ],
    correctIndex: 2
  },
  {
    id: 3,
    question: "An architect proposes a system where every AI worker runs on its own dedicated cloud VM for isolation. According to Thesis Part 4 (Invariant VII: Nervous System), is this aligned with the thesis?",
    options: [
      "Yes — isolation is the highest priority for AI worker security",
      "No — the Nervous System demands a shared orchestration layer that coordinates workers regardless of where they run",
      "Partially — isolation is good for security, but the thesis advocates for all workers on one machine",
      "The thesis doesn't address infrastructure decisions"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "A team building an AI Operating Layer wants to replace all their SaaS subscriptions with AI-driven interfaces. Per AOL Part 1, what is the thesis's prediction about SaaS?",
    options: [
      "SaaS will thrive because AI makes every app interface better",
      "SaaS will be unbundled — AI generates UI on demand, so seat-based subscription pricing collapses as users consume functionality through agents rather than apps",
      "SaaS companies will pivot to become AI training data providers",
      "SaaS will merge into a single universal platform owned by the AI providers"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "A manager wants to understand the difference between a 'Personal Agent' and a 'General Agent.' According to AOL Part 2, how does the thesis distinguish them?",
    options: [
      "Personal agents run on local devices; general agents run on cloud servers",
      "Personal agents serve one human; general agents are Digital FTEs that serve the organization and are managed through the Agent Factory",
      "Personal agents are free; general agents require a paid subscription",
      "Personal agents can only chat; general agents can use tools"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "A CTO reads Thesis Part 1 and is concerned about the '10-80-10 Rule.' They ask: does this mean 80% of the team will be replaced? According to the thesis, how should they interpret it?",
    options: [
      "Yes — 80% of current roles will be automated away within five years",
      "No — the 10-80-10 rule describes the shift in economic value creation: 10% create AI workers, 80% direct them (human principals), and 10% do narrow manual oversight",
      "The 10-80-10 rule refers to profit margins, not headcount",
      "It's about training data distribution, not workforce composition"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "According to Thesis Part 2, what is an 'Agent Factory' in practical terms?",
    options: [
      "A physical building where AI hardware is assembled",
      "An organizational system that produces, manages, and deploys Digital FTEs — combining specs, domain knowledge, architecture patterns, and oversight workflows",
      "A software library that provides pre-built AI agent templates",
      "A hiring agency that matches AI models to job roles"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "A team implements Invariant I (Human Principal) by having every AI worker report to a human. A skeptic asks: 'Doesn't this defeat the purpose of automation?' According to Thesis Part 3, why is this invariant crucial?",
    options: [
      "It's a temporary measure until AI is fully autonomous",
      "The Human Principal is needed only for legal liability reasons",
      "The human sets direction, makes judgment calls, and accepts accountability — the AI handles execution at scale, which is where the leverage comes from",
      "It's optional for low-risk tasks but required for high-risk ones"
    ],
    correctIndex: 2
  },
  {
    id: 9,
    question: "A company's AI workers need to access customer PII to process orders. According to Thesis Part 4 (Invariant V: System of Record), how should access be managed?",
    options: [
      "Each AI worker should have its own copy of the customer database for speed",
      "AI workers should never handle PII under any circumstances",
      "The System of Record is the single source of truth — AI workers query it through controlled APIs with audit trails, not by duplicating data",
      "PII access is managed at the model level, not the system level"
    ],
    correctIndex: 2
  },
  {
    id: 10,
    question: "An AI Operating Layer designer wants every AI worker to have both 'Flow Mode' and 'Explore Mode.' According to the thesis (Part 2 and AOL Part 2), what does each mode handle?",
    options: [
      "Flow Mode handles simple tasks; Explore Mode handles complex ones",
      "Flow Mode is for deterministic workflows with structured steps; Explore Mode is for open-ended problem-solving where the AI can research, iterate, and try different approaches",
      "Flow Mode is for internal use; Explore Mode is for customer-facing tasks",
      "Flow Mode is text-based; Explore Mode is multimodal"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "A VP asks: 'If AI workers are Economic Actors, can they sign contracts and spend company money?' According to Thesis Part 1, what does the thesis claim?",
    options: [
      "No — only humans can legally enter contracts and spend money",
      "Yes — AI workers will autonomously buy services, procure compute, and acquire data as economic actors in their own right",
      "Only if a human co-signs every transaction",
      "Only for purchases under a predefined budget limit"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "A team is designing the 'Nervous System' (Invariant VII). They plan a centralized monitoring dashboard. According to Thesis Part 4, what else should the Nervous System include besides monitoring?",
    options: [
      "A centralized database that stores all AI worker outputs",
      "Orchestration of cross-worker coordination, routing of tasks based on capability, load balancing, and feedback loops that improve worker performance over time",
      "A manual approval queue for every AI worker action",
      "An automated reporting system for human resources compliance"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "According to AOL Part 1, what does 'SaaSpocalypse' refer to?",
    options: [
      "A catastrophic failure of all SaaS platforms",
      "The prediction that AI agents will unbundle SaaS apps by generating UI and workflows on demand, making traditional subscriptions obsolete",
      "A security vulnerability affecting all SaaS platforms",
      "The consolidation of all SaaS companies into a single monopoly"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "An organization follows Invariant II (Delegate Everything Delegatable). A worker suggests that even strategic planning should be delegated to AI. According to Thesis Part 3, where is the boundary?",
    options: [
      "There is no boundary — everything should be delegated",
      "Strategic planning must stay with the Human Principal because it requires judgment, values, and accountability that AI lacks",
      "Delegation is limited to tasks under $1,000 in value",
      "AI can handle strategic planning but a human must approve the final plan"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "According to AOL Part 2, what is the relationship between Personal Agents and General Agents in the Two-Layer Model?",
    options: [
      "They are independent and never interact",
      "Personal Agents serve individual humans and can request tasks from General Agents (the Digital FTEs managed by the Agent Factory), creating a layered capability stack",
      "General Agents are more advanced versions of Personal Agents",
      "Personal Agents manage General Agents, reversing the hierarchy"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "A company with 1,000 employees wants to deploy 500 Digital FTEs. According to Thesis Part 3 (Invariant III: Management Layer), what organizational change is needed?",
    options: [
      "No change — existing managers can manage both humans and AI workers",
      "A Management Layer must be established to oversee, evaluate, and route work to Digital FTEs — distinct from human management",
      "Each Digital FTE manages itself, so no management layer is needed",
      "Human-to-AI manager ratio must be 1:10 for effective oversight"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "A developer building on the AI Operating Layer asks: 'Should I build agents that replace existing SaaS tools or agents that augment them?' According to AOL Part 1, what is the thesis's trajectory?",
    options: [
      "Augment first, then replace — agents initially work alongside SaaS, but over time the AI Operating Layer absorbs the functionality as the UI layer becomes agent-driven",
      "Always replace — augmentation just prolongs the old paradigm",
      "Always augment — SaaS tools are too entrenched to ever replace",
      "Neither — the thesis doesn't address SaaS integration"
    ],
    correctIndex: 0
  },
  {
    id: 18,
    question: "According to Thesis Part 4 (Invariant VI: Expandable Workforce), how should a company scale its AI workforce during peak demand?",
    options: [
      "Hire temporary human contractors to handle the overflow",
      "Spin up additional Digital FTEs from the Agent Factory using the existing management layer and infrastructure, then spin them down when demand normalizes",
      "Pre-provision the maximum number of AI workers needed and keep them running",
      "Outsource the overflow to another company's AI workforce"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "A security auditor asks: 'If the AI Operating Layer manages all agent communication, isn't that a single point of failure?' According to AOL Part 2, how should this be addressed?",
    options: [
      "The Operating Layer is always stateless, so failures are recoverable",
      "The Two-Layer Model includes governance and redundancy — agent communication is routed with fallbacks and the Nervous System monitors for failures",
      "Each agent runs independently, so the Operating Layer failing only affects new deployments",
      "The solution is to run multiple Operating Layers in parallel"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "A team lead asks: 'Does every Digital FTE need its own separate API key?' According to Thesis Part 4 (Invariant IV: Per-Worker Engines), how should credentials work?",
    options: [
      "Each Digital FTE has its own engine context, which may include its own credentials, but the management layer handles provisioning and rotation centrally",
      "One API key for all workers keeps things simple",
      "Digital FTEs don't use API keys — they authenticate via OAuth",
      "Credentials are managed at the model level, not the worker level"
    ],
    correctIndex: 0
  },
  {
    id: 21,
    question: "A company's AI workers are producing inconsistent outputs because each session starts fresh. According to Thesis Part 2, which of the Seven Principles addresses this?",
    options: [
      "Principle: Stateless Sessions",
      "Principle: Canonical Source — each worker reads from the same authoritative specs, knowledge base, and system of record every time",
      "Principle: Maximum Autonomy",
      "Principle: Least Privilege"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "According to AOL Part 1, what was the 'Forty-Year Stack' and why is it being disrupted?",
    options: [
      "A stack of forty programming languages used since the 1980s — disrupted by AI generating code in any language",
      "The traditional enterprise architecture of hardware → OS → database → app → UI, which is being disrupted as AI replaces the UI layer with natural language interfaces",
      "A security protocol that lasted 40 years — disrupted by quantum computing",
      "A pricing model where software cost $40/user/month — disrupted by AI"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "A manager asks: 'How do I know if my AI workers are actually productive?' According to Thesis Part 3 (Invariant III: Management Layer), what should they measure?",
    options: [
      "Only the final output quality, not the process",
      "Number of tokens consumed per worker",
      "Both output quality and process adherence — the Management Layer tracks whether workers follow specs, use correct sources, and meet quality thresholds",
      "Hours of uptime per AI worker"
    ],
    correctIndex: 2
  },
  {
    id: 24,
    question: "A platform team is building the AI Operating Layer and wonders whether they need both a 'Governance' component and an 'Oversight' component. According to AOL Part 2, how do these differ?",
    options: [
      "They are the same thing — the terms are used interchangeably",
      "Governance defines the rules and policies for AI workers; Oversight monitors and enforces those rules in real-time during execution",
      "Governance is for security; Oversight is for performance",
      "Governance is automated; Oversight is manual"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "A start-up founder asks: 'Should I build my Agent Factory before I have a product-market fit, or after?' According to Thesis Part 2, what determines readiness?",
    options: [
      "Always build it after reaching $1M ARR",
      "The Agent Factory should be built only after securing Series A funding",
      "You build it when you have repeatable workflows that need to scale — the thesis says the Agent Factory is an organizational system, not just a technology, so readiness is about process maturity, not revenue",
      "The Agent Factory is only relevant for companies with 50+ employees"
    ],
    correctIndex: 2
  }
];

/* ── BLOCK 3: Quick Start, Markdown/HTML & Code You Never Write ── */
const block3: Question[] = [
  {
    id: 1,
    question: "A project manager's messy notes span eleven files across three folders. They want spec.md and report.html as real files in version control. According to the Markdown/HTML crash course, which motion fits best and why?",
    options: [
      "Chat — paste the files into Claude.ai one at a time for assembly",
      "Chat with condensed notes — summarizing by hand first is the power user habit",
      "Terminal — Claude Code or OpenCode gathers its own context from the folder and writes real files directly to disk",
      "Desktop app only — because Cowork and OpenWork are the only surfaces permitted to create files on disk"
    ],
    correctIndex: 2
  },
  {
    id: 2,
    question: "A technical writer uses Markdown for all documentation. Their AI consistently produces well-structured headings, lists, and tables. According to MD/HTML Part 1, why is Markdown a good choice for AI interaction?",
    options: [
      "AI models were trained primarily on Markdown documents",
      "Markdown's structured syntax matches the model's training distribution and makes it easy for the AI to predict the next token accurately in a structured format",
      "Markdown is the only format AI models can output",
      "Markdown requires fewer tokens than any other format"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "A developer asks AI to 'build a simple tool to rename files in a folder based on a CSV mapping.' They get back a Python script. According to Code You Never Write Part 1, what fundamental shift does this represent?",
    options: [
      "The developer no longer needs to know Python — the AI writes it all",
      "Code is no longer gated — anyone who can describe what they want can commission working software, even without knowing how to program",
      "This is just an advanced macro, not real software development",
      "The AI is acting as a compiler for natural language specifications"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "A user commissions a script to sort photos into folders by date. The AI generates it, but the user doesn't understand a line of the code. According to CYNW Part 2 (Commissioning Code), what should they do?",
    options: [
      "Don't run code you don't understand — ask the AI to explain it and add safety measures like dry-run mode and backups before executing",
      "Trust the AI — if it compiles, it's safe to run",
      "Learn Python first before using any code-generation tools",
      "Only use no-code tools that don't generate source files"
    ],
    correctIndex: 0
  },
  {
    id: 5,
    question: "A marketing manager wants to create a landing page. They describe the layout, colors, and sections to AI. The AI generates HTML and CSS. According to MD/HTML Part 2, what should they check before publishing?",
    options: [
      "Whether the HTML validates against W3C standards",
      "Whether the output is a 'demanding artifact' — does it meet the spec, handle edge cases, and look right on mobile and desktop?",
      "Whether the AI used the latest CSS framework",
      "Whether the domain name is available and configured"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "A user asks AI for 'a script that renames files.' The AI produces a script that renames files but doesn't check for duplicates or backup originals. According to CYNW Part 4 (Safety), what principle did the user miss?",
    options: [
      "They should always run unknown scripts on a separate machine first",
      "They should specify safety constraints in the brief — like dry-run mode, confirmation prompts, and automatic backups — especially for operations that modify data",
      "The AI should inherently know to add safety measures without being asked",
      "File operations are always reversible, so safety isn't a concern"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "According to the Quick Start crash course Part 1, what are the two modes that a learner switches between on the Agent Factory journey?",
    options: [
      "Learning Mode and Working Mode",
      "Student Mode and Professional Mode",
      "Flow Mode (structured curriculum with defined outcomes) and Explore Mode (open-ended discovery driven by curiosity)",
      "Beginner Mode and Expert Mode"
    ],
    correctIndex: 2
  },
  {
    id: 8,
    question: "A non-technical founder has an idea for an app but can't code. They describe it to an AI and get a working prototype in an hour. According to CYNW Part 1, what test does this pass?",
    options: [
      "The Turing Test — the AI writes code indistinguishable from a human",
      "The VPRF Test (Valuable, Possible, Runnable, Fixable) — the idea was valuable, the AI made it possible and runnable, and the founder can iterate on it",
      "The Unit Test — the code compiles without errors",
      "The Market Test — the app has paying customers"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "A writer uses AI to convert a Markdown document to HTML. The output renders correctly in their browser but has poor contrast and missing alt text on images. According to MD/HTML Part 1, what is the lesson?",
    options: [
      "The AI should have handled accessibility automatically",
      "Markdown-to-HTML conversions always lose some formatting",
      "The writer must judge the output — AI produces artifacts, but the human is responsible for quality, accessibility, and completeness",
      "The conversion should be done using a dedicated tool, not AI"
    ],
    correctIndex: 2
  },
  {
    id: 10,
    question: "A data analyst asks AI to 'clean this CSV and generate a report.' The AI produces a Python script that drops rows with missing values and creates charts. According to CYNW Part 3, what 'surface' is this using?",
    options: [
      "The Browser — the analyst worked through a web chat interface",
      "The Folder — the AI wrote a script directly to the user's file system that can be inspected, modified, and rerun",
      "The Desktop — the analyst used a local desktop agent",
      "The Terminal — the analyst ran commands in a shell"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "According to MD/HTML Part 1, what does 'asymmetry' mean in the context of AI and document structure?",
    options: [
      "The AI is better at writing Markdown than HTML",
      "The AI consumes structure easily (it reads your well-organized input) but doesn't naturally produce well-structured output without explicit direction",
      "HTML is more complex than Markdown for AI to generate",
      "The AI prefers nested lists over flat lists"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "A user commissions a script to download all PDFs from a website. The AI generates a script, but the user is worried about legality. According to CYNW Part 4 (Safety & The Client Mindset), what's the right approach?",
    options: [
      "Run it anyway — if the script works, it's legal",
      "Check the website's terms of service and respect robots.txt before running any automated scraper. Being a 'good client' means understanding the rules of the systems you interact with",
      "Only download PDFs that are explicitly marked as free",
      "Ask the AI whether the script is legal before running it"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "According to the Quick Start crash course Part 2, how many courses are in the complete catalog and what are the main tracks?",
    options: [
      "19 courses across tracks including Foundations, Prompting, Thesis, Operating Layer, Markdown/HTML, Code, and Skills",
      "10 courses covering all aspects of AI usage",
      "25 courses arranged by difficulty level",
      "15 courses focused only on technical topics"
    ],
    correctIndex: 0
  },
  {
    id: 14,
    question: "A user writes a document with inconsistent heading levels — jumping from H2 to H5. The AI reformats it with proper hierarchy (H1 → H2 → H3). According to MD/HTML Part 1, why does this matter?",
    options: [
      "Headings are cosmetic and don't affect the content",
      "Proper heading hierarchy is crucial because AI output is consumed by both humans and machines — parsers, screen readers, and future AI passes all depend on semantic structure",
      "Only H1 and H2 tags matter; deeper headings are optional",
      "The AI just copied a common Markdown style from its training data"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "A small business owner asks AI to 'make me a tool that tracks inventory and sends me an email when stock is low.' According to CYNW Part 3 (The Surfaces), what are the deployment options?",
    options: [
      "Only as a web application hosted on a server",
      "As a script running on their computer (schedule it with Task Scheduler or cron), a desktop app, or a cloud-deployed service — choose based on their comfort and infrastructure",
      "Only as a mobile app for on-the-go access",
      "As an Excel macro because that's what they're familiar with"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "According to the Markdown/HTML crash course, what is the difference between a 'checkable bullet' and a regular list item?",
    options: [
      "Checkable bullets use a different Markdown syntax that renders as interactive checkboxes in some viewers, signaling task completion vs. plain content",
      "Checkable bullets can only be used in GitHub, not in regular Markdown",
      "There is no difference — it's just a visual preference",
      "Checkable bullets are automatically sorted by completion status"
    ],
    correctIndex: 0
  },
  {
    id: 17,
    question: "A user repeatedly asks AI to 'fix the same bug in slightly different ways' instead of examining the root cause. According to CYNW Part 2 (Commissioning Code), what mistake are they making?",
    options: [
      "They should switch to a different AI model for debugging",
      "They are treating the symptom instead of the root cause — a good brief includes what you've already tried and what the actual error is, not just desired outcomes",
      "They should write the fix themselves instead of asking AI",
      "They need to provide more context about their development environment"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "According to MD/HTML Part 2, what does 'Who Reads This Last' mean as a principle?",
    options: [
      "The final reader of any document is always the end customer",
      "The last reader of any AI-written document might be an AI — so structure matters not just for humans but for future automated processing",
      "Documents should be written for the least technical person on the team",
      "The document author should read their work aloud before publishing"
    ],
    correctIndex: 1
  },
  {
    id: 19,
    question: "A user asks AI to build a 'website' but gives no details. The AI produces a generic template. According to CYNW Part 2, what's the key commissioning lesson?",
    options: [
      "The AI should have inferred the requirements from context",
      "A Five-Section Brief (Goal, Inputs, Process, Output, Constraints) turns a vague request into a commissionable spec that produces the right artifact",
      "Websites are too complex for AI to build from scratch",
      "The user should have looked at existing templates first"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "A user runs a script generated by AI and it deletes files it shouldn't have. According to CYNW Part 4, what practice could have prevented this?",
    options: [
      "Running the script on a different computer first",
      "Adding a dry-run flag that shows what would happen before actually executing, and having a backup of important files",
      "Using a virtual machine to sandbox the execution",
      "Reviewing every line of code before running it"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "According to the Quick Start crash course, what is the 'pedagogy' (teaching method) that the Agent Factory curriculum follows?",
    options: [
      "Traditional lecture-based learning with quizzes at the end",
      "Learn the mechanism first (how AI works), then the practice (how to use it), then the systems (how to build with it) — layered understanding building on itself",
      "Project-based learning where you build something first and learn as needed",
      "Peer-to-peer learning with group discussions and workshops"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "An analyst uses AI to build a data pipeline. The first version works on a small sample but crashes on the full dataset with a memory error. According to CYNW Part 3 (Safety), what principle applies?",
    options: [
      "The AI should have tested against the full dataset automatically",
      "Always test commissioned code on progressively larger subsets before running on production-scale data — this is part of Minimum Client Craft",
      "Memory errors are hardware issues, not code issues",
      "The analyst should use a cloud service instead of local execution"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "According to MD/HTML Part 1, what is the difference between 'ordered lists' and 'unordered lists' in Markdown, and why does the AI care?",
    options: [
      "Ordered lists use numbers and unordered lists use bullets — the AI cares because the list type signals whether sequence matters, which affects how it generates the content",
      "There is no practical difference — AI treats both the same way",
      "Ordered lists are for technical content; unordered lists are for creative content",
      "Ordered lists render better on mobile devices than unordered lists"
    ],
    correctIndex: 0
  },
  {
    id: 24,
    question: "A user commissions an AI agent to 'monitor the server and restart it if it goes down.' According to CYNW Part 4, what's the blast radius concern?",
    options: [
      "The script might restart the server when it's just slow, not down",
      "The script might accidentally restart the wrong server or restart a server that's in the middle of a critical operation — the spec should include checks and graceful handling",
      "The script might not have permission to restart services",
      "The monitoring itself could cause the server to crash"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "According to the Quick Start crash course Part 2, what are 'milestones' in the curriculum and how do they function?",
    options: [
      "Milestones are project deadlines that must be met to pass each course",
      "Milestones are checkpoints that mark completion of key skill clusters — they represent readiness to move from one track to the next",
      "Milestones are optional challenges for advanced learners only",
      "Milestones are weekly quizzes that test retention of the previous week's material"
    ],
    correctIndex: 1
  }
];

/* ── BLOCK 4: Skills, Connectors & Comprehensive Synthesis ── */
const block4: Question[] = [
  {
    id: 1,
    question: "A developer teaches AI a company-specific deployment workflow and wants to reuse it across projects. According to the Skills & Connectors crash course Part 1, should they build a Skill or a Connector?",
    options: [
      "A Connector — deployment workflows connect to external systems",
      "A Skill — this is a reusable instruction set that teaches the AI how to perform a specific multi-step process unique to their context",
      "Both — a Skill for the instructions and a Connector for the deployment APIs",
      "Neither — deployment workflows should be documented in a wiki, not automated"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "A team asks: 'If we give AI access to every app we own through connectors, will it become superhuman?' According to Skills Part 1, what caution does the course give?",
    options: [
      "Yes — more connectors always means more capability",
      "Not every connector adds value, and a connector you don't need is a door left open — unnecessary integrations add security risk without proportional benefit",
      "Connectors only work with premium AI subscriptions",
      "Connectors are limited to five per organization for security reasons"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "According to Skills Part 2, what is the difference between Custom Instructions and a Project when using skills?",
    options: [
      "They are the same feature with different names on different platforms",
      "Custom Instructions apply globally to all chats; Projects are scoped to a specific context with its own files, skills, and instructions — choose based on whether the skill is universal or use-case-specific",
      "Custom Instructions are for free users; Projects require a paid plan",
      "Projects are a legacy feature being replaced by Custom Instructions"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    question: "A company wants to connect their AI agents to their internal CRM. According to Skills Part 1, how does MCP (Model Context Protocol) relate to this goal?",
    options: [
      "MCP is a security protocol that prevents AI from accessing CRM data",
      "MCP is a standard that lets AI models discover and interact with external tools and data sources — it's the protocol that powers connectors",
      "MCP is an AI model trained specifically for CRM management",
      "MCP is a programming language for building CRM connectors"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "A developer writes a Skill that's 2,000 words long with extensive rules. According to Skills Part 1 (Progressive Disclosure), what's the risk?",
    options: [
      "Longer skills are always better because they cover more edge cases",
      "A very long skill may exceed the model's capacity or dilute the most important instructions — progressive disclosure means structuring the skill so the AI gets the core logic first and details contextually",
      "Skills have a hard 1,000-word limit, so this won't load at all",
      "Long skills only work with the most expensive AI models"
    ],
    correctIndex: 1
  },
  {
    id: 6,
    question: "A manager asks: 'Should I build a dedicated Skill for a one-time data migration task?' According to Skills Part 2, what's the honest answer?",
    options: [
      "Yes — always build a Skill for any task, no matter how small",
      "No — not every task deserves a Skill. A one-off is just a good prompt. Skills are for repeatable, multi-step processes that benefit from consistency",
      "Yes — but only if the data is sensitive and needs audit trails",
      "No — Skills cannot be used for data migration tasks by design"
    ],
    correctIndex: 1
  },
  {
    id: 7,
    question: "A user has AI generate a report that includes citations. Several of the cited sources don't actually exist. According to WAI Part 1 (the entire Agent Factory context), what is this phenomenon and how should the user respond?",
    options: [
      "This is a training data error — the model's knowledge cutoff caused it",
      "This is hallucination — the model predicted plausible-sounding citations because it has no truth-checker. The user must verify citations before using them",
      "This is retrieval failure — the web search didn't find the right sources",
      "This is context compaction — the citations were lost when the conversation got long"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    question: "A company builds a Skill for 'onboarding new developers' that includes company policies, tool setup, and code standards. According to Skills Part 2, how should they describe this Skill so AI knows when to use it?",
    options: [
      "Just name it 'onboarding.md' — the filename is enough for discovery",
      "Write a clear description that states the skill's purpose, when to invoke it, and what it covers — the description is how the AI discovers which skill fits the current task",
      "Embed the description in a comment at the top of the skill file",
      "Register the skill with the AI provider's directory"
    ],
    correctIndex: 1
  },
  {
    id: 9,
    question: "According to the Skills crash course Part 1, what is the relationship between Skills and MCP?",
    options: [
      "Skills replace MCP — they are competing technologies",
      "Skills teach AI how to do something (instructions); MCP connects AI to external tools (protocol). They complement each other — a Skill can reference MCP-connected tools",
      "MCP is a type of Skill specifically for database connections",
      "Skills only work with MCP and cannot function without it"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "A team gives their AI worker access to Slack, email, Jira, GitHub, Notion, and their CRM via connectors. A security review flags the CRM as unnecessary. According to Skills Part 2, what principle supports removing the CRM connector?",
    options: [
      "The more connectors, the better the AI performs",
      "A connector you don't need is a door left open — every integration is an attack surface, so grant access only to the tools the AI actually needs",
      "CRM connectors are read-only, so they pose no security risk",
      "Removing connectors reduces AI performance, so keep all of them"
    ],
    correctIndex: 1
  },
  {
    id: 11,
    question: "A user asks AI to summarize a meeting transcript. The AI produces a summary that misses key decisions. According to WAI Part 2 (Tools & Agency), what might be missing?",
    options: [
      "The AI needs access to a tool that extracts action items from transcripts",
      "The AI was not given explicit instructions to extract decisions — tools and clear prompting together give the AI agency to produce structured outputs",
      "The transcript was too long for the context window",
      "Meeting summaries require a specialized AI model"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    question: "A developer builds a Connector that gives AI read-write access to their production database. According to Skills Part 1 (Scope & Safety), what should they consider?",
    options: [
      "Read-write access is fine as long as the AI is well-prompted",
      "They should restrict the connector to read-only or specific tables/operations — the principle of least privilege applies to AI tool access just as it does to human access",
      "Database connectors should always be full-access for maximum utility",
      "The AI model itself should decide what level of access it needs"
    ],
    correctIndex: 1
  },
  {
    id: 13,
    question: "A user notices their AI agent sometimes applies a Skill meant for frontend development to backend tasks. According to Skills Part 2 (Writing Descriptions), what's likely wrong?",
    options: [
      "The Skill file is too long and the AI can't read the whole thing",
      "The Skill's description doesn't clearly specify its scope — a well-written description tells the AI when to use it AND when NOT to use it",
      "The Skill file is in the wrong directory",
      "The AI ignores Skill descriptions by design"
    ],
    correctIndex: 1
  },
  {
    id: 14,
    question: "A company deploys 50 Digital FTEs. After a month, they notice some workers produce better code than others even though they use the same model. According to Thesis Part 3 (Invariant III: Management Layer) and Skills concepts, what's the likely explanation?",
    options: [
      "Some workers have better hardware than others",
      "The Management Layer should track quality per worker — differences often come from the quality of specs, skills, and context provided, not from the model itself",
      "The model is randomly varying output quality",
      "Some workers have been trained on more data than others"
    ],
    correctIndex: 1
  },
  {
    id: 15,
    question: "According to Skills Part 1, what problem does 'Progressive Disclosure' solve when designing Skills?",
    options: [
      "It prevents users from seeing complex Skill files",
      "Context windows are limited — progressive disclosure means the Skill gives the AI the most critical instructions first, then details as needed, so the core logic always fits",
      "It makes Skills run faster by prioritizing certain instructions",
      "It encrypts sensitive parts of the Skill"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    question: "A startup founder combines all the concepts: they define their Agent Factory (Thesis), build an AI Operating Layer (AOL), create Skills for their workflows (S&C), commission custom tools (CYNW), and document everything in Markdown (MD/HTML). According to the full curriculum, what connects all these pieces?",
    options: [
      "They all require the same AI model to function",
      "The Canonical Source principle — every component reads from and writes to the same authoritative specs and knowledge base, creating a coherent system",
      "They are all optional and can be mixed and matched arbitrarily",
      "Each piece requires a separate specialized AI model to operate"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    question: "A user builds a Skill with 15 steps and finds that the AI frequently misses steps 12-15. According to Skills Part 1 and WAI Part 2 context, what's likely happening?",
    options: [
      "The skill file has a syntax error in steps 12-15",
      "The AI's context window or attention degrades over very long instructions — break the Skill into smaller sub-skills or use progressive disclosure so critical steps are front-loaded",
      "The AI model doesn't support skills with more than 10 steps",
      "Steps 12-15 contradict earlier steps, causing the AI to skip them"
    ],
    correctIndex: 1
  },
  {
    id: 18,
    question: "A company wants to teach new hires how to use their Agent Factory. According to the Orientation and Quick Start courses, what should they have new hires do first?",
    options: [
      "Immediately start building agents using the company's tools",
      "Watch a recording of the CEO explaining the AI strategy",
      "Complete the 'What AI Actually Is' and 'AI Prompting' courses to understand the mechanism before the practice",
      "Read the source code of the company's AI infrastructure"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    question: "According to Thesis Part 4 combined with Skills & Connectors, how should a company version-control its AI worker configurations?",
    options: [
      "AI worker configs are ephemeral and don't need version control",
      "The System of Record (Invariant V) applies — specs, skills, and connector definitions should be version-controlled alongside code, with the Agent Factory reading from the canonical source on each deployment",
      "Skills are stored in the AI model itself, not in version control",
      "Only connectors need version control; skills are managed separately"
    ],
    correctIndex: 1
  },
  {
    id: 20,
    question: "An engineer argues: 'We don't need the Management Layer (Invariant III) because our AI workers just execute simple tasks.' According to Thesis Part 3, why is the Management Layer still important?",
    options: [
      "The Management Layer is only needed for complex tasks",
      "Even simple tasks accumulate — the Management Layer ensures consistency, routes work to the right worker, tracks quality, and scales oversight as the workforce grows from 10 to 10,000 workers",
      "Simple tasks can be managed with a spreadsheet instead",
      "The Management Layer is optional for teams under 20 people"
    ],
    correctIndex: 1
  },
  {
    id: 21,
    question: "A user builds a connector between their AI agent and Google Drive. The AI can now read files from Drive. According to Skills Part 1, what additional step would make this a complete Skill-and-Connector setup for 'writing quarterly reports'?",
    options: [
      "No additional step is needed — the connector is enough",
      "Build a Skill that teaches the AI how to structure quarterly reports using data from Drive — the connector provides access, the Skill provides the process",
      "Grant the connector write access to Google Docs as well",
      "Create a second connector to Google Sheets for spreadsheet data"
    ],
    correctIndex: 1
  },
  {
    id: 22,
    question: "A company's AI workers need different skills depending on the department (engineering vs. marketing vs. legal). According to the Agent Factory framework, how should skills be organized?",
    options: [
      "One giant Skill file for all departments to keep things simple",
      "Department-specific Skills scoped to their domain, with shared core Skills (like 'company style guide') that all workers use — the Management Layer routes workers to the right Skills",
      "Skills cannot be scoped per department — all AI workers use the same Skills",
      "Each department should build its own Agent Factory from scratch"
    ],
    correctIndex: 1
  },
  {
    id: 23,
    question: "A product manager uses AI to draft a PRD, generate mocks, write tests, and create deployment scripts. They use terminal-based agents, Skills for company templates, and connectors to their issue tracker. According to the full curriculum, what role are they playing in the 10-80-10 model?",
    options: [
      "They are in the 10% — they build AI workers",
      "They are in the 80% — they direct AI workers as a Human Principal, using a combination of tools and skills to commission work across multiple surfaces",
      "They are in the 10% — they do narrow manual oversight",
      "They are outside the model because they are doing the work themselves"
    ],
    correctIndex: 1
  },
  {
    id: 24,
    question: "A new AI user says: 'I'll just use ChatGPT for everything — I don't need to learn all these different tools and concepts.' According to the full span of the curriculum, what's the most honest response?",
    options: [
      "They're right — ChatGPT can handle all of these use cases equally well",
      "ChatGPT handles many tasks well, but the curriculum teaches how to be a power user across multiple surfaces, build reusable Skills, commission custom tools, and architect AI workers at scale — the difference between a casual user and an AI-Native professional",
      "They should switch to Claude instead, as it's more capable",
      "The curriculum is only for developers building AI products"
    ],
    correctIndex: 1
  },
  {
    id: 25,
    question: "A team has built everything: an Agent Factory with a Management Layer, an AI Operating Layer, Skills and Connectors, and commissioned tools. Their CEO asks: 'What's the one thing that can't be automated in this entire system?' According to the full curriculum spanning Orientation through Skills & Connectors, what is it?",
    options: [
      "Code deployment — that requires human approval",
      "The Human Principal — judgment, direction, accountability, and being the 'client' who defines quality and makes the final call",
      "Security reviews — AI cannot audit its own access",
      "Customer communication — AI cannot interact with customers directly"
    ],
    correctIndex: 1
  }
];

/* ── Export 4 QuizPart objects ── */
export const allTopicsBlock1: QuizPart = {
  id: 27,
  title: "Mastery Block 1: Core Concepts & Practice",
  subtitle: "Orientation, Foundations, What AI Is, Prompting — Real-World Scenarios",
  concepts: "All Topics Mix",
  color: "from-white/30 to-white/10",
  questions: block1,
  conceptStart: 1,
  conceptSpread: 25
};

export const allTopicsBlock2: QuizPart = {
  id: 28,
  title: "Mastery Block 2: Thesis & Operating Layer",
  subtitle: "Agent Factory Thesis, AI Operating Layer — Architecture in Action",
  concepts: "All Topics Mix",
  color: "from-white/30 to-white/10",
  questions: block2,
  conceptStart: 1,
  conceptSpread: 25
};

export const allTopicsBlock3: QuizPart = {
  id: 29,
  title: "Mastery Block 3: Practice & Application",
  subtitle: "Quick Start, Markdown/HTML, Code You Never Write — Building Real Things",
  concepts: "All Topics Mix",
  color: "from-white/30 to-white/10",
  questions: block3,
  conceptStart: 1,
  conceptSpread: 25
};

export const allTopicsBlock4: QuizPart = {
  id: 30,
  title: "Mastery Block 4: Integration & Synthesis",
  subtitle: "Skills, Connectors & Full-Stack AI — Putting It All Together",
  concepts: "All Topics Mix",
  color: "from-white/30 to-white/10",
  questions: block4,
  conceptStart: 1,
  conceptSpread: 25
};
