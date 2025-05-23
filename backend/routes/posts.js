import express from "express";
import posts from "./postsData.js";
const router = express.Router();

// Get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// Get a single post
router.get("/:id", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (post) res.json(post);
  else res.status(404).json({ message: "Post not found" });
});

// Cerate new post
router.post("/", (req, res) =>{
  const {title, content} = req.body;

  if(!title || !content) return res.status(400).json({message: "Title and content are required."});

  const newPost = {
    id: String(posts.length + 1),
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

//Update post
router.put("/:id", (req, res) => {
  const {title, content} = req.body;
  const postIndex = posts.findIndex(p => p.id === req.params.id);
  
  if(postIndex === -1) return res.status(404).json({message: "Post not found."});

  posts[postIndex] = {...posts[postIndex], title, content};
  res.json(posts[postIndex]);

});

//Delete post
router.delete("/:id", (req, res) => {
  const postIndex = posts.findIndex(p => p.id === req.params.id);

  if(postIndex === -1) return res.status(404).json({message: "Post not found."});

  posts.splice(postIndex, 1);
  res.json({message: "Post deleted successful."});
})

export default router;
