import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const PATH = import.meta.env.VITE_API_URL;

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PATH}/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch(() => setError("Post not found"));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`${PATH}/posts/${id}`);
      navigate("/blog"); // Redirect to blog page after deletion
    } catch (err) {
      setError("Error deleting post");
    }
  };

  if (error) return <h2 className="text-red-500">{error}</h2>;
  if (!post) return <h2>Loading...</h2>;

  return (
    <div className="p-4 h-screen w-full md:w-2/3 bg-cover bg-center bg-[url('/Travel-Blog.png')]">
      <h2 className="p-4 text-2xl rounded-md font-bold bg-orange-200">{post.title}</h2>
      <p className="p-4 h-300 scroll-auto rounded-md bg-orange-100">{post.content}</p>
      <div className="flex gap-4 mt-4 justify-items-center">
        <Link to={`/edit/${id}`} className="text-blue-500 hover:text-green-500 p-2 rounded bg-orange-200">
          Edit
        </Link>
        <button onClick={handleDelete} className="text-blue-500 hover:text-green-500 p-2 rounded bg-orange-200">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostDetails;
