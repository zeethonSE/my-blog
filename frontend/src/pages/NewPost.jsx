import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const PATH = import.meta.env.VITE_API_URL || "http://localhost:3000";
function NewPost(){

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !content) {
            setError("Title and content are required.")
            return;
        }

        try {
            await axios.post(PATH, {title, content});
            navigate("/blog");
        } catch (error) {
            setError("Error creating post.")
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold">Create a New Post</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                className="border p-2 rounded" 
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />

                <textarea 
                className="border p-2 rounded" 
                type="text" 
                value={content} 
                placeholder="New Post" 
                rows={3}
                onChange={e => setContent(e.target.value)} />

                <button 
                className="bg-blue-500 text-white p-2 rounded" 
                type="submit">Create Post</button>
            </form>
        </div>
    )
}
export default NewPost;