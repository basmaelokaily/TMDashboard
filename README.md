Task Manager Web Application
A fully functional Task Manager web application built with Django REST Framework backend and React frontend. This application supports user authentication, task management (CRUD operations), analytics & reporting, and features a modern responsive UI.

📋 Table of Contents
Features

Tech Stack

Project Structure

Installation

API Endpoints

Frontend Components

Environment Variables

Running the Application

Testing

Deployment

✨ Features
🔐 Authentication
Login/Register with JWT token-based authentication

Protected routes - unauthorized users redirected to login

Password validation and confirmation

Remember me functionality

📊 Dashboard
Task statistics - total, completed, pending, in-progress tasks

Modern cards with TailwindCSS styling

Responsive layout for all screen sizes

📝 Task Management (CRUD)
Create tasks - single task creation or bulk upload (CSV)

View tasks - server-side pagination with filters (status, search, date range)

Edit/Delete tasks - full CRUD operations

Task filtering by status (All, Completed, Pending, In Progress)

Debounced search for efficient task lookup

📈 Analytics & Reporting
Date range filtering for task analysis

Export functionality - download tasks as Excel files

Visual summaries of task completion rates

🎨 UI/UX Features
Dark/Light mode toggle with theme persistence

Responsive sidebar navigation

Modern form components with validation

Loading states and error handling

Reusable components for consistency

🛠 Tech Stack
Backend
Django (v6.0+) - Python web framework

Django REST Framework - API development

PostgreSQL - Database

Simple JWT - JSON Web Token authentication

django-cors-headers - CORS handling

python-dotenv - Environment variable management

Frontend
React (v18+) - UI library

React Router v6+ - Client-side routing

Redux Toolkit + RTK Query - State management & API calls

TailwindCSS (v4) - Utility-first CSS framework

TypeScript - Type safety

Lucide React - Icon library

📁 Project Structure
text
TMDashboard/
├── backend/                 # Django backend
│   ├── api/                # Main app (tasks, authentication)
│   │   ├── models.py       # Task & User models
│   │   ├── serializers.py  # DRF serializers
│   │   ├── views.py        # API views
│   │   ├── urls.py         # API endpoints
│   │   └── admin.py        # Django admin
│   ├── backend/            # Django project settings
│   │   ├── settings.py     # Configuration
│   │   └── urls.py         # Main URL router
│   ├── requirements.txt    # Python dependencies
│   └── docker-compose.yml  # PostgreSQL Docker setup
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── auth/      # Login/Register forms
│   │   │   ├── tasks/     # Task components
│   │   │   └── ui/        # UI components (Card, Button)
│   │   ├── pages/         # Page components
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Tasks.tsx
│   │   │   ├── CreateTask.tsx
│   │   │   └── Analytics.tsx
│   │   ├── store/         # Redux store
│   │   │   ├── api/       # RTK Query services
│   │   │   └── slices/    # Redux slices
│   │   ├── contexts/      # React contexts (Theme)
│   │   ├── hooks/         # Custom hooks
│   │   ├── routes/        # Router configuration
│   │   ├── Shared/        # Shared components & styles
│   │   └── App.tsx        # Main App component
│   ├── package.json       # Node.js dependencies
│   └── vite.config.ts     # Vite configuration
│
└── README.md              # This file
🚀 Installation
Prerequisites
Python 3.11+ and pip

Node.js 18+ and npm

PostgreSQL (or Docker for containerized DB)

Git

Backend Setup
Clone the repository

bash
git clone <repository-url>
cd TMDashboard/backend
Create virtual environment

bash
python -m venv env
source env/Scripts/activate  # Windows Git Bash
# OR
source env/bin/activate      # Mac/Linux
Install dependencies

bash
pip install -r requirements.txt
Set up PostgreSQL (using Docker)

bash
docker-compose up -d
Run migrations

bash
python manage.py migrate
Create superuser

bash
python manage.py createsuperuser
Run development server

bash
python manage.py runserver
Frontend Setup
Navigate to frontend directory

bash
cd ../frontend
Install dependencies

bash
npm install
Start development server

bash
npm run dev
🔌 API Endpoints
Method	Endpoint	Description	Authentication
POST	/api/token/	Login (get JWT tokens)	Public
POST	/api/token/refresh/	Refresh access token	Public
POST	/api/user/register/	User registration	Public
GET	/api/tasks/	Get tasks with filters	Required
POST	/api/tasks/	Create single task	Required
POST	/api/tasks/bulk/	Bulk create tasks	Required
GET	/api/tasks/export/	Export tasks to Excel	Required
GET	/api/tasks/{id}/	Get specific task	Required
PUT	/api/tasks/{id}/	Update task	Required
DELETE	/api/tasks/{id}/	Delete task	Required
GET	/api/dashboard/	Get dashboard stats	Required
Query Parameters for /api/tasks/
search: Search in title/description

status: Filter by status (pending, in-progress, completed)

page: Page number for pagination

limit: Items per page

from/to: Date range filter

🎨 Frontend Components
Core Pages
Login/Register: Authentication forms with validation

Dashboard: Task statistics with visual cards

My Tasks: Task table with filtering, search, and pagination

Create Task: Single/bulk task creation

Analytics: Reports with date filtering and Excel export

Reusable Components
TaskForm: Form for creating/editing tasks

TaskCard: Display individual task

ProtectedRoute: Authentication guard for routes

ThemeToggle: Dark/light mode switcher

Layout: Main layout with sidebar navigation

⚙️ Environment Variables
Backend (.env)
env
DB_NAME=taskmanager
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=your-secret-key-here
DEBUG=True
Frontend (.env)
env
VITE_API_BASE_URL=http://localhost:8000/api
🏃 Running the Application
