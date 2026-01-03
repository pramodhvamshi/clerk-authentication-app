# Clerk Authentication App

A modern authentication demo application built using **Expo + React Native Web** and **Clerk**.  
This project focuses on real-world authentication, protected navigation, clean UI, and deployment.

---

## 🚀 Live Demo

🔗 **Deployed on Vercel**  
👉(https://clerk-authentication-app-tau.vercel.app/)


---

## 📖 Project Description

This application demonstrates **secure user authentication and protected navigation** using Clerk.  
Users can sign up, sign in, and access protected pages like a dashboard and profile screen.

The project is intentionally kept backend-free to highlight how **Clerk handles authentication, sessions, and user data securely** without requiring a custom database.

---

## ✨ Features

- Secure email & password authentication using **Clerk**
- Sign up and sign in flows
- Protected routes (only authenticated users can access)
- Dashboard with session status
- Profile page with user information
- Responsive UI for **mobile and web**
- Clean and structured project architecture
- Deployed on **Vercel**

---

## 🛠️ Tech Stack

- **Expo**
- **React Native**
- **React Native Web**
- **Clerk Authentication**
- **React Navigation**
- **Vercel** (Deployment)

---

## 📱 Screens Included

- Login / Sign Up Screen
- Dashboard (Protected)
- Profile Screen (Protected)

---

## 🔐 Authentication Flow

- Users sign up or sign in using email and password.
- Authentication is fully handled by **Clerk**.
- Upon successful login, the user is redirected to the Dashboard.
- Clerk manages:
  - Sessions
  - Tokens
  - User data
  - Security
- No custom backend or database is implemented in this project.

---

## Project Structure

clerk-auth-js  
assets  
navigation  
screens  
App.js  
index.js  
app.json  
package.json  
vercel.json  
README.md  

---
## How to Run the Project Locally

Clone the repository:

git clone https://github.com/pramodhvamshi/clerk-authentication-app.git

Move into the project directory:

cd clerk-auth-js

Install dependencies:

npm install

Start the Expo development server:

npx expo start

Press **w** to run the web version  
Or scan the QR code using Expo Go for mobile

---

## Environment Variables

Create a `.env` file in the project root and add the Clerk publishable key:

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

Do not commit secret keys or private values to GitHub.
---
## Deployment

This project is deployed using Vercel with Expo Web export.

Build command used:

expo export

Output directory:

dist

The deployment is handled via GitHub integration with Vercel.

---
## Navigation Flow

- Unauthenticated users see the Login screen
- Authenticated users are redirected to the Home screen
- Profile screen shows user details fetched from Clerk
- Logout securely ends the session

---
## Notes

- This is not a basic Expo demo
- Focus is on real authentication, secure navigation, and UI quality
- Designed as a production-style authentication project
- Suitable for academic evaluation and assignment submission

---

## Author

Pramodh Vamshi Balla

---

## License

This project is intended for learning, demonstration, and academic submission purposes.
