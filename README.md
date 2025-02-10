# Speaksy - AI-Powered Blog Generator from Videos

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![ShadCN](https://img.shields.io/badge/ShadCN-000000?style=for-the-badge&logo=shadcn&logoColor=white)
![NeonDB](https://img.shields.io/badge/NeonDB-000000?style=for-the-badge&logo=neondb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-4B5563?style=for-the-badge&logo=clerk&logoColor=white)
![Assembly AI](https://img.shields.io/badge/AssemblyAI-000000?style=for-the-badge&logoColor=white)
![Gemini AI](https://img.shields.io/badge/GeminiAI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![UploadThing](https://img.shields.io/badge/UploadThing-FF9900?style=for-the-badge&logo=uploadthing&logoColor=white)
![MDX Editor](https://img.shields.io/badge/MDXEditor-000000?style=for-the-badge&logo=mdxeditor&logoColor=white)

## 📝 AI-Powered Video to Blog Converter

[🔴 Click Here to Try Speaksy](https://sounabh-speaksy-ai-next.vercel.app/)

## 🚀 Introduction
Speaksy is an AI-powered platform designed to convert videos into high-quality blog posts seamlessly. Built with Next.js, Speaksy utilizes AI technologies like Assembly AI and Gemini AI to analyze video content and generate structured, SEO-friendly blogs. The platform is designed for content creators, bloggers, and professionals who want to repurpose video content into engaging written formats effortlessly.

---

## 🛠 Tech Stack that I Use:

  - Next.js
  - TypeScript
  - Tailwind CSS
  - ShadCN UI
  - NeonDB (Serverless Database)
  - Clerk (Authentication)
  - Stripe (Payments & Webhooks)
  - Zod (Form Validation)
  - Assembly AI (Speech-to-Text Conversion)
  - Gemini AI (Blog Post Generation & Enhancement)
  - UploadThing (For secure file uploads)
  - MDX Editor (For rich text blog customization)

---

## 🔥 Features

- **🎥 Convert Video to Blog** - Upload a video to generate an AI-powered blog post.
- **💬 AI-Enhanced Summaries** - Receive detailed and SEO-friendly summaries generated using Gemini AI.
- **🛠 User Authentication** - Secure sign-in with Clerk authentication.
- **📦 Data Persistence** - NeonDB ensures that all processed blogs and user data are safely stored.
- **🔍 Smart SEO Optimization** - AI analyzes and structures blog content for search engine visibility.
- **💳 Subscription System** - Stripe integration allows users to subscribe and unlock premium AI processing.
- **📂 Blog Management** - Edit, delete, and manage generated blogs from a personalized dashboard.
- **📜 AI-Powered Formatting** - Speaksy structures content with headings, bullet points, and improved readability.
- **📝 MDX Editor Support** - Customize and enhance blogs with Markdown-based editing.
- **📱 Responsive Design** - Fully optimized for mobile and desktop viewing.

---

## 📌 Why I Chose These Technologies

- **UploadThing** - Provides seamless file uploads with enhanced security and easy integration.
- **NeonDB (Serverless Database)** - Ensures high performance, scalability, and reliability without needing backend setup.
- **Clerk Authentication** - Offers a secure, easy-to-integrate authentication system with social logins and session handling.
- **Stripe Webhooks** - Enables automated payment processing and subscription management with real-time updates.
- **Zod Form Validation** - Ensures form data integrity with strict validation and error handling.

---

## 🎬 Speaksy - How It Works

1. **Sign Up/Login**
   - Create an account using Clerk authentication.

2. **Upload a Video**
   - Input a video (local upload).

3. **AI Processing Begins**
   - Assembly AI transcribes speech-to-text.
   - Gemini AI generates a structured blog from the transcript.

4. **View & Edit**
   - Review, edit, and refine the AI-generated blog before publishing.

5. **Save or Export**
   - Save the blog in your dashboard or export it in various formats.

---

## 🛠️ Technical Overview

- **Data Processing**
  - User uploads a video which is first stored in UploadThing.
  - API calls Assembly AI for transcription.
  - Gemini AI generates a structured blog from the transcript.
  
- **Database & Query Language**
  - NeonDB stores user-generated blogs and metadata.
  - Postgres query simplifies database interactions.

- **Payments & Monetization**
  - Stripe integration handles subscriptions and premium processing plans.
  - Webhooks trigger AI processing for premium users.

---

## 🏗 What I Learned

- **Two-Way Architecture**: Since Speaksy does not have a traditional backend, I learned to leverage serverless functions and direct database interactions for a seamless, full-stack experience.
- **State Management Without Backend**: Using Clerk for authentication, NeonDB for database interactions, and Stripe for payments eliminated the need for a custom backend, streamlining development.
- **Optimizing AI Processing**: Implementing Assembly AI and Gemini AI efficiently required careful structuring of API calls and caching mechanisms.
- **Handling Webhooks Securely**: Stripe webhooks introduced me to managing real-time payment and subscription flows.
- **Enhancing UX with MDX Editing**: Providing a smooth writing experience for users with MDX was an interesting challenge.

---

## 🎭 Made with ❤️ by Sounabh

Thank you for checking out Speaksy! Transform videos into powerful blogs effortlessly. 🚀🎬

