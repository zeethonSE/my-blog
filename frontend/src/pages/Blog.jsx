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
      <div className="p-4 h-auto rounded-md bg-linear-to-b from-black to-blue-500">
        {posts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`} className="block p-4 h-16 md:h-20 rounded-md bg-green-500">
          <h2 className="text-l md:text-xl font-semibold">{post.title}</h2>
        </Link>
        ))}
      </div>
      
    </div>
  );
}

export default Blog;
