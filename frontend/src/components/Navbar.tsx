import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blog");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="border-b border-black px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6">
      <div className="flex items-center justify-between flex-wrap">
        
        <div className="w-24 sm:w-28 mb-2 sm:mb-0">
          <Link to="/">
            <img src="/medium.svg" alt="Logo" className="h-auto w-full" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center space-x-2 sm:space-x-6 text-sm font-sans">
          <Link to="/signup">
            <button className="text-sm hover:underline">Sign Up</button>
          </Link>

          <Link to="/signin">
            <button className="text-sm hover:underline">Sign In</button>
          </Link>

          <button
            onClick={handleGetStarted}
            className="bg-black text-white px-4 py-1 rounded-full text-xs sm:text-sm hover:bg-gray-900 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
