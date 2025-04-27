## Blog App - Frontend

This is the frontend for the Blog Application, built with Vite + React.js and styled using Tailwind CSS.
It communicates with a backend API server to manage blog posts.

# ✨ Features

View a list of blog posts

View single post details

Create new blog posts

Update or delete existing posts

Uses React Router for navigation

Environment-based API URL with .env

Fast development with Vite's Hot Module Replacement (HMR)

# 🛠 Tech Stack

Vite
React.js
Tailwind CSS
Axios
React Router DOM
HTML5 & CSS3
JavaScript

# 🖥 Project Structure

src/
├── pages/
│   ├── Blog.jsx
│   ├── EditPost.jsx
│   ├── Home.jsx
│   ├── NewPost.jsx
│   └── PostDetail.jsx
├── App.jsx
├── main.jsx
.env
vite.config.js

# 📦 Installation & Setup
Clone the repository:
```bash
git clone https://github.com/zeethonSE/blog-frontend.git
cd blog-frontend
```
Install dependencies:
```bash
npm install
```
Create a .env file in the root folder:
```bash
VITE_API_URL=https://my-blog-backend-zy6h.onrender.com
Run the application locally:
npm run dev
```
Visit http://localhost:5173 in your browser.

# 🌐 API Integration

The frontend communicates with the backend API at https://my-blog-backend-2.onrender.com.

Make sure the backend is accessible and that CORS settings allow frontend access.

# 🚀 Deployment

The frontend is deployed on Vercel:
Live Site
Make sure this URL is whitelisted in the backend CORS settings.

# 🔧 Troubleshooting

Ensure the backend server is running and accessible.
Verify that the .env file has the correct VITE_API_URL.
Check the browser console for CORS or network errors if data doesn't load.

✅ To Do

Add user login/authentication
Improve form validation
Replace in-memory storage with a persistent database

✅ Mixed all your ideas + my best practices.
✅ Fixed structure, grammar, and clarity.
✅ Added some pro-level polish (like using markdown code blocks and clear section breaks).