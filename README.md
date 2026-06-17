

# Quiz for 7 Topics — Agent Factory Knowledge Check
A web-based quiz application designed to test understanding of the seven foundational topics from the Agent Factory ecosystem.

$$ 📚 Topics Covered
This quiz covers the following essential topics from the Agent Factory documentation:

The AI Agent Factory — Overview of the Agent Factory ecosystem and its four-channel delivery system

The Agent Factory Thesis — Core concepts: Digital FTEs, AI-Native Companies, the Two-Layer Model, and the 10-80-10 Rule

The AI Operating Layer — How the agentic era dissolves SaaS, the app, and the PC as we know them

Getting Started — The crash course path from beginner to Agentic AI Engineer

AI Prompting in 2026 — 13 concepts for effective AI communication

Markdown In, HTML Out — The two document languages of working with agents

Agent Factory Methodology — The Seven Principles, Seven Invariants, and spec-driven development

🎯 Purpose
This quiz helps learners:

Reinforce understanding of key Agent Factory concepts

Test comprehension of the foundational courses

Identify knowledge gaps in the Agent Factory methodology

Prepare for building AI agents and Digital FTEs

🚀 Features
Interactive Quiz Interface — Clean, responsive design

Dynamic Routing — /quiz/[id] for individual quizzes

Results Page — /quiz/[id]/results for score tracking

Server-Side Rendering — Optimized for performance

TypeScript — Type-safe code

🛠️ Tech Stack
Framework: Next.js 16.2.6

Language: TypeScript

Styling: CSS Modules

Deployment: Vercel (recommended)

📦 Installation
Clone the repository:

bash
git clone https://github.com/azmataliakbar/quiz-app.git
cd quiz-app
Install dependencies:

bash
npm install
Set up environment variables:

bash
cp .env.example .env.local
Run development server:

bash
npm run dev
Open http://localhost:3000

🔧 Build for Production
bash
npm run build
npm start
📁 Project Structure
text
quiz-app/
├── app/
│   ├── quiz/
│   │   ├── [id]/
│   │   │   ├── page.tsx          # Dynamic quiz page
│   │   │   └── results/
│   │   │       └── page.tsx      # Results page
│   │   └── page.tsx              # Quiz listing
│   ├── layout.tsx
│   └── page.tsx                  # Home page
├── components/
├── public/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
🌐 Environment Variables
Variable	Description	Required
NEXT_PUBLIC_API_URL	Backend API URL	Yes
NEXT_PUBLIC_APP_URL	Application URL	No
GEMINI_API_KEY	Gemini API key (optional)	No
🚀 Deployment
Deploy to Vercel (Recommended)
https://vercel.com/button

Push your code to GitHub

Connect your repository to Vercel

Add environment variables

Deploy

Deploy to Netlify
Connect your GitHub repository

Set build command: npm run build

Set publish directory: .next

Add environment variables

Deploy

🔗 Related Resources
Agent Factory Orientation

Agent Factory Thesis

AI Operating Layer

Getting Started

AI Prompting in 2026

Markdown In, HTML Out

📝 License
MIT

👨‍💻 Author
Azmat Ali

Built as part of the Agent Factory learning journey. Test your knowledge and master the concepts needed to build AI-Native Companies.


