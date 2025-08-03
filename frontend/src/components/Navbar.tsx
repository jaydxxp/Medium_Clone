import { Link, useNavigate } from "react-router-dom"

export const Navbar=()=>{
const navigate = useNavigate();
const handleGetStarted = () => {
  
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blog");
    } else {
      navigate("/signin");
    }
  };
return <div>
<div className="flex items-center justify-between px-20 py-6 border-b border-black">
        <div className="w-28">
            <Link to="/">
          <img src="medium.svg" alt="Logo" /></Link>
        </div>
        <div className="flex space-x-10 text-sm font-sans">
          <button><Link to="/signup">Sign Up</Link></button>
          <button><Link to="/signin">Sign In</Link></button>
          <button  onClick={handleGetStarted} className="bg-black text-white cursor-pointer px-4 py-1 rounded-full">Get Started</button>
        </div>
      </div>
      </div>
      }