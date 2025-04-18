# Blog App - Frontend

This is the frontend for the Blog application, built with **React.js** and styled with **Tailwind CSS**. It communicates with a backend API to manage blog posts.

## ✨ Features

- View a list of blog posts
- View single post details
- Create new blog posts
- Update or delete existing posts
- Uses React Router for navigation
- Environment-based API URL with `.env`

## 🛠 Tech Stack

- React
- Tailwind CSS
- Axios
- React Router DOM
- Vite

## 🖥 Project Structure

├── src/  
|   ├── pages/ 
|       ├── Blog.jsx 
|       ├── EditPost.jsx
|       ├── Home.jsx  
|       ├── NewPost.jsx 
|       └── PostDetail.jsx
|   ├── App.jsx 
|   ├── main.jsx 
├── .env 
└── vite.config.js

## 📦 Installation

1. Clone the repository:

    git clone https://github.com/zeethonSE/blog-frontend.git
    cd blog-frontend

2. Install dependencies:
    npm install

3. Create a .env file:

    VITE_API_URL=https://my-blog-backend-zy6h.onrender.com

## ▶️ Run Locally

    npm run dev
    Visit: http://localhost:5173

## 🚀 Deployment
    Frontend is deployed on Vercel:

    https://frontend-iota-sable.vercel.app
    Make sure this URL is whitelisted in the backend CORS settings.

## 🔧 Troubleshooting
    Ensure backend is running and accessible
    API base URL in .env must be correct and public
    Check browser console for any CORS or network errors

## ✅ To Do
    Add user login/auth
    Form validation improvements
    Replace in-memory storage with persistent database
