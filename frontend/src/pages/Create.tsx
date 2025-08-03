import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import { useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [content,setcontent]=useState("");
  const navigate=useNavigate()

  return (
    <div>
      
      <div className="flex items-center justify-between px-20 py-6 border-b border-black">
        <div className="w-28">
          <Link to="/">
            <img src="/medium.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex space-x-10 text-sm font-sans items-center">
          <button>
            <Link to={"/blog"}>Blogs</Link>
          </button>
       
          <button
  type="button"
  onClick={async () => {
    const response = await axios.post(`${BackendUrl}/blog/create`, {
      title,
      content,
      published: true,
    }, {
      headers: { Authorization: localStorage.getItem("token") }
    });
    navigate(`/blog/${response.data.blog.id}`);
  }}
  className="bg-green-700 cursor-pointer hover:bg-green-800 text-white font-semibold text-sm px-4 py-1 rounded-full transition-colors duration-200"
>
  Publish
</button>

          <Avatar />
        </div>
      </div>

      
      <div className="max-w-3xl mx-auto px-6 py-12">
       
        <input
          type="text"
          placeholder="Title"
          className="w-full text-5xl font-bold text-gray-900 outline-none placeholder-gray-400 mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
  placeholder="Description"
  className="w-full text-lg font-semibold font-serif text-gray-900 outline-none placeholder-gray-400 mb-4 overflow-hidden resize-none"
  rows={1}
  value={content}
  onChange={(e) => {
    setcontent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px"; 
  }}
/>

      </div>
    </div>
  );
};
