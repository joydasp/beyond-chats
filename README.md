BeyondChats – AI-Powered Blog Enhancement System
📌 Project Overview

BeyondChats is a full-stack web application that scrapes blog articles, stores them in a database, and enhances the content using AI.
The project demonstrates a complete backend → AI processing → frontend rendering pipeline with proper fallback handling.

This project was built as a technical assignment to showcase:

Web scraping

Backend API design

AI integration

Error handling & graceful degradation

Full-stack integration

🚀 Features

🔎 Scrape blog articles from BeyondChats website

💾 Store original articles in MongoDB

🤖 Enhance content using an AI (LLM-based rewriting)

⚠️ Graceful fallback when AI API quota is exceeded

🌐 REST API to fetch articles

🖥️ React frontend to display blog content

📂 Clean monorepo structure (frontend + backend)

🧱 Tech Stack
Backend

Node.js

Express.js

MongoDB (Mongoose)

Cheerio (web scraping)

Axios

OpenAI API (LLM integration)

Frontend

React.js

Fetch API

🗂️ Project Structure
beyondchats/
├── beyondchats-backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── scripts/
│   │   └── scraper/
│   ├── app.js
│   ├── server.js
│   ├── runUpdate.js
│   ├── package.json
│
├── beyondchats-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── .gitignore
├── README.md

🔄 Application Flow

Scraping Phase

Scrapes blog articles from BeyondChats

Saves them in MongoDB with isUpdated: false

AI Enhancement Phase

Searches for related articles (Google Search)

Rewrites content using an LLM

Saves updated content as a new document with isUpdated: true

If AI API fails (quota/limit), uses a fallback strategy

API Phase

Backend exposes /api/articles

Returns both original and updated articles

Frontend Phase

React app fetches articles

Displays blog titles and content

⚠️ AI Fallback Strategy (Important)

If the OpenAI API:

exceeds quota

is unavailable

returns an error

➡️ The system automatically falls back to a safe rewrite using original content and still saves the updated version.

This ensures:

Pipeline never breaks

Data consistency

Production-grade error handling

🧪 How to Run Locally
1️⃣ Backend Setup
cd beyondchats-backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key


Run backend server:

node server.js


Backend runs on:

http://localhost:5000

2️⃣ Run Scraper & AI Update
node runUpdate.js


This will:

Scrape articles

Generate AI-updated content

Store results in MongoDB

3️⃣ Frontend Setup
cd beyondchats-frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/articles	Fetch all articles
✅ Project Highlights

Full-stack architecture

AI integration with graceful fallback

Clean Git repository (no submodules)

Clear separation of concerns

Production-style error handling

👤 Author

Joy Das Pamula
B.Tech CSE Student
GitHub: https://github.com/joydasp
