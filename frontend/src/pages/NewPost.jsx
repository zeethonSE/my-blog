import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const PATH = import.meta.env.VITE_API_URL;

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
            await axios.post(`${PATH}/posts`, {title, content});
            navigate("/blog");
        } catch (error) {
            setError("Error creating post.")
        }
    }

    return (
        <div className="h-screen rounded-md bg-cover bg-center bg-[url('/Paris.png')]">
           
            <div className="p-4 h-screen content-center justify-items-center">
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full md:w-2/3">
                <h3 className="text-sm fond-bold font-semibold text-gray-500 md:text-2xl">CREATE NEW POST</h3>
                <input 
                className="p-2 rounded bg-orange-200 font-semibold" 
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />

                <textarea 
                className="p-2 rounded bg-orange-100 font-semibold" 
                type="text" 
                value={content} 
                placeholder="New Post" 
                rows={8}
                onChange={e => setContent(e.target.value)} />

                <button 
                className="bg-orange-200 text-blue-500 hover:text-green-500 p-2 rounded" 
                type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}
export default NewPost;