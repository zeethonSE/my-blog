import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PATH = import.meta.env.VITE_API_URL;
function EditPost(){

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        
        axios
        .get(`${PATH}/${id}`)
        .then((res) => {
            setTitle(res.data.title);
            setContent(res.data.content);
        })
        .catch(() => setError("Post not found."));
    }, [id]);

    const handUpdate = async (e) => {
        e.preventDefault();
        
        await axios
            .put(`${PATH}/${id}`, {title, content})
            .then(() => navigate(`/post/${id}`))
            .catch(() => setError("Error updating post."));
    }

    if (error) return <h2 className="text-red-500">{error}</h2>;

    return(
        <div>
            <h2 className="text-2xl font-bold">Edit Post</h2>
            <form onSubmit={handUpdate} className="flex flex-col gap-3">
            <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="border p-2 rounded" />
            <textarea
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
            className="border p-2 rounded" />
            <button type="submit" className="bg-green-500 text-white p-2 rounded">
                Update Post
            </button>
            </form>
        </div>
    )
}

export default EditPost;