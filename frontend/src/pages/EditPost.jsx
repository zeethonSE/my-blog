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
        <div className="p-4 h-screen content-center justify-items-center rounded-md bg-cover bg-center bg-[url('/paolo-sanchez.jpg')]">
            <div className="w-full md:w-2/3">
                <h2 className="text-sm text-left font-bold text-gray-300 md:text-2xl">EDIT POST</h2>
            </div>
            <form onSubmit={handUpdate} className="flex flex-col gap-3 w-full md:w-2/3">
            <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="text-lg md:text-xl border p-2 rounded font-bold bg-green-500" />
            <textarea
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
            className="border p-2 rounded font-semibold bg-green-300 w-full resize-none h-64 md:h-80" />
            <button type="submit" className="bg-green-500 text-center font-semibold border border-gray-500 hover:text-green-300 p-2 rounded">
                Update
            </button>
            </form>
        </div>
    )
}

export default EditPost;