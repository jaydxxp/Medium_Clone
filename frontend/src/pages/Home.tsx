import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const navigate = useNavigate();

  const handleStartReading = () => {
    const token = localStorage.getItem("token");
    navigate(token ? "/blog" : "/signin");
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-20 py-12 lg:py-24 space-y-12 lg:space-y-0">
        
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Human Stories & Ideas
          </h1>
          <p className="text-lg sm:text-xl text-black font-semibold mb-8">
            A place to read, write, and deepen your understanding
          </p>
          <button
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-bold transition hover:bg-gray-900"
            onClick={handleStartReading}
          >
            Start Reading
          </button>
        </div>

        
        <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <img src="front.png" alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
