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
        .get(`${PATH}/posts/${id}`)
        .then((res) => {
            setTitle(res.data.title);
            setContent(res.data.content);
        })
        .catch(() => setError("Post not found."));
    }, [id]);

    const handUpdate = async (e) => {
        e.preventDefault();
        
        await axios
            .put(`${PATH}/posts/${id}`, {title, content})
            .then(() => navigate(`/post/${id}`))
            .catch(() => setError("Error updating post."));
    }

    if (error) return <h2 className="text-red-500">{error}</h2>;

    return(
        <div className="p-4 mt-4 h-screen justify-items-center bg-gray-300 rounded-md">
            <h2 className="text-xl font-semibold font-bold text-gray-500 md:text-2xl">EDIT POST</h2>
            <form onSubmit={handUpdate} className="flex flex-col gap-3 w-full md:w-2/3">
            <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="border p-2 rounded font-bold font-semibold" />
            <textarea
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={15}
            className="border p-2 rounded font-semibold" />
            <button type="submit" className="text-center font-semibold border border-gray-500 text-blue-500 hover:text-green-500 p-2 rounded">
                Update
            </button>
            </form>
        </div>
    )
}

export default EditPost;