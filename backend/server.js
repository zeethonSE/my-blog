import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "https://frontend-anksl0zu4-zeethons-projects.vercel.app",
  "https://frontend-8nrtk76s0-zeethons-projects.vercel.app"  // Add this origin

];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

const PORT = process.env.PORT || 10000;

//frontend hitting the server
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Use the imported `postRoutes`
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
