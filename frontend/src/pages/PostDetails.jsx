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

  console.log("Content:", post.content);
  const mark = '# Hello, *world*!';
  return (
    <div className="p-4 mt-4 gap-4 h-screen rounded-md justify-items-center bg-gray-300">
      <h2 className="p-4 text-2xl rounded-md font-bold border border-gray-500 w-full md:w-2/3">{post.title}</h2>
      <div className="p-4 mt-4 rounded-md border border-gray-500 w-full md:w-2/3">
        <textarea 
          className="font-semibold"
          value={post.content}
          type="text"
          rows={15}
        />
      </div> 
      <div className="flex gap-4 mt-4">
        <Link to={`/edit/${id}`} className="text-center text-blue-500 hover:text-green-500 p-2 rounded w-30 rounded w-30 border border-gray-500">
          Edit
        </Link>
        <button onClick={handleDelete} className="text-center text-blue-500 hover:text-green-500 p-2 rounded w-30 border border-gray-500">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostDetails;
