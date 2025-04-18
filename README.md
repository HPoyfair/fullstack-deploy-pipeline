# 🧠 Coding Quiz App

A full-stack coding quiz application built with the MERN stack, featuring a CI/CD pipeline using GitHub Actions and automatic deployment via Render. The app allows users to take a multiple-choice quiz and see their results instantly.

## 🚀 Live Deployment

🔗 [View the App on Render](https://fullstack-deploy-pipeline.onrender.com)

## 📁 GitHub Repository

🔗 [GitHub Repository](https://github.com/HPoyfair/fullstack-deploy-pipeline)

---

## 📌 Project Features

- 🧩 **Full-Stack MERN App** (MongoDB, Express, React, Node.js)
- ✅ **Cypress Component Testing** on pull requests to `develop` branch
- 🚀 **CI/CD Pipeline** with GitHub Actions
- 🛠️ **Auto-Deploys** to Render when code is merged into `main`
- 🌐 **MongoDB Atlas** cloud-hosted database
- 🔐 Environment variables used for secure config

---

## 🛠️ Technologies Used

- **Frontend**: React + Vite
- **Backend**: Express + Node.js
- **Database**: MongoDB Atlas + Mongoose
- **CI/CD**: GitHub Actions
- **Testing**: Cypress
- **Hosting**: Render

---

## 🧪 Testing Setup

On every pull request to the `develop` branch:

- Cypress component tests run automatically using GitHub Actions
- Results are visible in the GitHub Actions tab

```bash
npm run test-component
