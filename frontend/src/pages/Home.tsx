import {  useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const navigate = useNavigate();
  const handleStartReading = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blog");
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className="bg-white min-h-screen">
      
      <Navbar/>


      <div className="flex flex-col lg:flex-row items-start justify-between px-25 pt-30">

        <div className="max-w-2xl">
          <h1 className="font-serif font-bold text-7xl leading-tight mb-6">
            Human Stories & Ideas
          </h1>
          <p className="text-xl text-black font-extrabold mb-10">
            A place to read, write, and deepen your understanding
          </p>
          <button className="inline-block cursor-pointer bg-black text-white px-5 py-3 rounded-full font-bold" onClick={handleStartReading}>
          Start Reading
          </button>
        </div>

        <div className="hidden lg:block w-[500px] mt-10 lg:mt-0">
          <img src="front.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};
