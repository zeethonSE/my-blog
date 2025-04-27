## My Blog Backend

This is the backend for the My Blog project, built with Node.js and Express.js.
It provides a set of RESTful APIs for managing blog posts and handles communication with the frontend application.


# ✨ Features

Create, Read, Update, and Delete (CRUD) blog posts

RESTful API endpoints

Uses in-memory JSON as a lightweight data store

CORS-enabled for frontend integration


# 🔧 Tech Stack

Node.js

Express.js

CORS

JavaScript (ES6+)


# 📁 Project Structure

.
├── routes/
│   └── posts.js
├── index.js
├── package.json
└── README.md


# 📦 Installation & Setup

Clone the repository:
```bash
git clone https://github.com/zeethonSE/my-blog-backend.git
cd blog-backend
```
Install dependencies:
```bash
npm install
```
(Optional) Create a .env file for custom configuration:
```bash
PORT=5000
```
Start the server:
```bash
node index.js
```
The server will start at http://localhost:5000 by default.


# 🌐 API Endpoints

Method | Endpoint | Description

GET | /posts | Retrieve all blog posts

GET | /posts/:id | Retrieve a single post by ID

POST | /posts/new-post | Create a new blog post

PUT | /posts/:id | Update an existing post

DELETE | /posts/:id | Delete a blog post


# 🔐 CORS Configuration

The backend allows CORS requests only from:
https://frontend-iota-sable.vercel.app

You can update this setting in index.js if needed to allow other origins.


# 🚀 Deployment Notes

Make sure the backend server is accessible publicly if frontend is deployed (e.g., on Render, Railway, etc.)

Verify CORS and server URLs match correctly between frontend and backend.


✅ To Do

Add database support (e.g., MongoDB, PostgreSQL)

Implement user authentication and authorization

Improve environment variable management with dotenv

Add better error handling and input validation

✅ Mixed your points + my polish

✅ Formatted for easier reading

✅ Professional structure ready for recruiters/companies



