import React, { useState, useRef, useEffect, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Avatar(): JSX.Element {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate(); 
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = (): void => {
    localStorage.removeItem("token"); 
    navigate("/") 
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <svg
          className="w-12 h-12 text-gray-400 -left-1 relative"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow z-10">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
