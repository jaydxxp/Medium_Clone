import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const LogBar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-20 py-6 border-b border-black">
        <div className="w-28">
          <Link to="/">
            <img src="/medium.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-6 text-sm font-sans">
          <Link to="/blog" className="hover:underline">
            Blogs
          </Link>

          <Link to="/create">
            <button
              type="button"
              className="bg-green-700 hover:bg-green-800 cursor-pointer text-white font-semibold text-sm px-4 py-1 rounded-full transition-colors duration-200"
            >
              New
            </button>
          </Link>

          <Avatar />
        </div>
      </div>
    </div>
  );
};
