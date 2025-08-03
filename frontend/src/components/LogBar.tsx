import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const LogBar = () => {
  return (
    <div className="border-b border-black px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6">
      <div className="flex items-center justify-between">
        
        <div className="w-24 sm:w-28">
          <Link to="/">
            <img src="/medium.svg" alt="Logo" className="h-auto w-full" />
          </Link>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6 text-sm font-sans">
          <Link to="/blog" className="hover:underline hidden sm:inline">
            Blogs
          </Link>

          <Link to="/create">
            <button
              type="button"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-1 rounded-full text-xs sm:text-sm transition-colors duration-200"
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
