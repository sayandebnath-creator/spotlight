# 📱 Zenvik (Clerk + Convex)

Welcome 👋  
This is a **React Native mobile application** built using **Expo**, with **Clerk** for authentication and **Convex** for backend, database, and real-time data handling.

## 📸 Screenshots

| Login | Home | Profile |
|------|------|---------|
| ![](images/imgreadme.png) | ![](images/imgreadme2.png) | ![](images/imgreadme3.png) | ![](images/imgreadme4.png) | ![](images/imgreadme5.png) | ![](images/imgreadme6.png) | ![](images/imgreadme7.png)
---

## 🚀 Tech Stack

- **Expo / React Native** – Cross-platform mobile development (Android & iOS)
- **Expo Router** – File-based routing
- **Clerk** – Authentication (Login, Signup, Sessions, OAuth-ready)
- **Convex** – Backend-as-a-Service (Database, server functions, real-time sync)
- **TypeScript** – Type safety and better DX

---

## 🧠 App Architecture (High Level)
```
React Native (Expo)
│
├── Clerk (Auth)
│ └── userId / session
│
└── Convex (Backend)
├── Queries
├── Mutations
└── Database (real-time)
```

---

## 🛠️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```
### 2️⃣ Configure Environment Variables

Create a .env file in the root directory:
```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
EXPO_PUBLIC_CONVEX_URL=your_convex_url
```

### 3️⃣ Start the app
```
npx expo start
```

## 📂 Project Structure
```
app/
 ├── (auth)/        # Login / Signup screens
 ├── (tabs)/        # Main app tabs
 ├── user/          # Dynamic user routes
 ├── _layout.tsx    # Root layout
 └── index.tsx      # Entry screen

convex/
 ├── schema.ts      # Database schema
 ├── queries.ts     # Read operations
 ├── mutations.ts   # Write operations
```
## 🔐 Authentication (Clerk)
```
Email & password authentication

Secure session handling

User data accessible throughout the app

Ready for OAuth (Google, GitHub, etc.)
```

## 🗄️ Backend & Database (Convex)
```
Server-side logic using queries & mutations

Real-time updates without manual state syncing

Integrated authentication with Clerk

Strongly typed backend
```