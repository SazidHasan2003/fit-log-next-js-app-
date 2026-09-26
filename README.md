# 🏋️ FitLog - Workout Management Platform

A modern, high-performance web application designed to help fitness enthusiasts track, plan, and manage their daily workout routines effortlessly. Built with Next.js App Router for optimal server-side performance and smooth client interactivity.

---

## 🛠️ Technologies Used

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Notifications:** React Toastify
- **Deployment & Hosting:** Cloudflare Workers (API backend)

---

## ✨ Key Features

1. **⚡ Server-Side Data Fetching & Caching**
   Utilizes Next.js Server Components to fetch workout routines directly from external APIs with automated ISR/SSG caching for instant page loads.

2. **🎯 Strict 5-Lift Daily Plan Cap**
   Implements a strict 5-lift constraint per daily routine to prevent overtraining, featuring dynamic UI button states and informative Toast warnings.

3. **📌 Dual-State Routine Tracking**
   Leverages React Context (`WorkoutContext`) to seamlessly manage both active daily items and saved workouts without UI state loss or unnecessary re-renders.

4. **🔄 Dynamic Interactive Workflows**
   Allows users to instantly mark workouts as completed or remove items from active lists with real-time UI synchronization and feedback notifications.

5. **📱 Fully Responsive Dark UI**
   Designed with a sleek, high-contrast dark theme optimized for desktop grids as well as mobile-friendly responsive interactions.
