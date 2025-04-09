import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PATH = "https://my-blog-backend-zy6h.onrender.com";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(PATH)
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      {posts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`} className="block p-4 border-b">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
