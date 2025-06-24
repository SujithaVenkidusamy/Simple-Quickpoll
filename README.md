# Simple-Quickpoll
QuickPoll is a full-stack web application that allows users to create live polls, vote in real time, and visualize results instantly. It's designed for use in classrooms, meetings, or events where fast collective decision-making is valuable.
# 📊 QuickPoll – Real-Time Polling App

A real-time polling web app built with React (frontend) and Flask (backend) for creating and voting on polls instantly.

## 🔧 Features

- ✅ Create polls with multiple options  
- 🗳 Vote on polls and view real-time results  
- 📊 See percentage and total vote count per option  
- 📱 Responsive design for mobile & desktop  
- ⚡ Lightweight and fast interface

## 🛠 Tech Stack

- *Frontend*: React, Axios, Chart.js  
- *Backend*: Flask, SQLAlchemy  
- *Database*: SQLite (or PostgreSQL)

*📂 Project Structure*

quickpoll/
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   └── ...

quickpoll/
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
└── README.md

## 🚀 How to Run

### 🔙 Backend Setup

```bash
cd backend
python -m venv venv
# On macOS/Linux
source venv/bin/activate
# On Windows
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

**🌐 Frontend Setup**

```bash
cd frontend
npm install
npm start
```
