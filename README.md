# 🏋️ FitLog

FitLog is a modern, dark-themed workout management web application designed to help users discover workouts, build their daily workout plan, save exercises for later, and track completed workouts.

## 🚀 Technologies Used

- **Next.js** – React framework for building the application
- **TypeScript** – Type-safe JavaScript development
- **Tailwind CSS** – Responsive and modern UI styling
- **DaisyUI** – Pre-built UI components
- **React Context API** – Global workout plan and saved workout state management
- **Lucide React** – Modern icons
- **React Toastify** – Success, warning, and notification messages
- **Next/Image** – Optimized image rendering
- **REST API** – Fetching workout data from an external API

## ✨ Key Features

### 1. 🏋️ Workout Library
Browse a collection of workouts with information such as:
- Exercise name
- Muscle groups
- Equipment
- Duration
- Calories burned
- Rating
- Difficulty

### 2. 📋 Today's Workout Plan
Users can add workouts to their daily plan and manage their selected exercises.

- Maximum **5 lifts** can be added to today's plan
- Duplicate workouts cannot be added
- Plan count updates dynamically in the navbar

### 3. 🔖 Save Workouts
Users can save workouts for later.

- Save and unsave workouts
- Saved workout count updates automatically
- Saved workouts are available from the My Plan section

### 4. ✅ Workout Completion & Management
Users can manage their planned workouts directly from the My Plan page.

- Mark workouts as completed
- Completion status updates instantly
- Remove workouts from the plan
- Toast notifications provide feedback for user actions

### 5. 📊 My Plan & Sorting
The My Plan page provides an overview of the user's selected workouts.

- Total exercises
- Total workout duration
- Total calories
- Today's Plan and Saved tabs
- Sort workouts by duration, calories, or rating

## 📁 Project Structure

```text
src/
├── app/
│   ├── workouts/
│   ├── my-plan/
│   └── page.tsx
│
├── components/
│   ├── Apps/
│   │   ├── AddPlanButton.tsx
│   │   └── SavedButton.tsx
│   │
│   ├── homepage/
│   └── shared/
│       ├── Navbar.tsx
│       ├── PlanCounter.tsx
│       ├── FitlogCard.tsx
│       └── MyPlanCard.tsx
│
├── context/
│   └── FitLogContex.tsx
│
├── lib/
│   └── fitlog.ts
│
└── types/
    └── fitlogTypes.ts