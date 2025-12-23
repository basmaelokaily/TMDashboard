Task Manager Web Application
A fully functional Task Manager web application built with Django REST Framework backend and React frontend. This application supports user authentication, task management (CRUD operations), analytics & reporting, and features a modern responsive UI.

✨ Features
🔐 Authentication
Login/Register with JWT token-based authentication

Protected routes - unauthorised users redirected to login

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

