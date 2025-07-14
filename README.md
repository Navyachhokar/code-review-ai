# AI Code Review Tool 🧠

A full-stack web app that allows users to submit code and get AI-based review suggestions using the OpenAI API.

## 💡 Features

- React frontend with live code editor
- Express backend using OpenAI for smart code reviews
- Highlights syntax issues and logical problems
- Easy to run locally

## ⚙️ Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- AI: OpenAI API (GPT)

## 🚀 Getting Started

### 1. Clone the project
```bash
git clone https://github.com/Navyachhokar/code-review-ai.git

##BACKEND SETUP
cd Backend
npm install
cp .env.example .env   # Put your OpenAI key here
npm run start

##Frontend Setup
cd ../Frontend
npm install
npm run dev

Then open: http://localhost:5173
