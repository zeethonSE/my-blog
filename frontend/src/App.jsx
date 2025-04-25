import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PostDetails from "./pages/PostDetails";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Router>
      <nav className="flex gap-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/blog" className="text-blue-500">Blog</Link>
        <Link to="/new-post" className="text-green-500">New Post</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
