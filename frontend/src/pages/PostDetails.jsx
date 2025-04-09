import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const PATH = import.meta.env.VITE_API_URL || "http://localhost:3000";
function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PATH}/${id}`)
      .then((response) => setPost(response.data))
      .catch(() => setError("Post not found"));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`${PATH}/${id}`);
      navigate("/blog"); // Redirect to blog page after deletion
    } catch (err) {
      setError("Error deleting post");
    }
  };

  if (error) return <h2 className="text-red-500">{error}</h2>;
  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
      <div className="flex gap-4 mt-4">
        <Link to={`/edit/${id}`} className="bg-yellow-500 text-white p-2 rounded">
          Edit
        </Link>
        <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostDetails;
