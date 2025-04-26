import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PATH = import.meta.env.VITE_API_URL;
console.log("API URL →", PATH);
function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${PATH}/posts`)
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="p-4 h-screen w-full bg-cover bg-center bg-[url('/renantaglia.avif')]">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Blog Posts</h1>
      {posts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`} className="block p-4 h-20 rounded-md bg-linear-to-b from-blue-500 to-green-500">
          <h2 className="gap-3 text-l md:text-xl font-semibold">{post.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
