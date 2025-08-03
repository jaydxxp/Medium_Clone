import { Link, useNavigate } from "react-router-dom";
import { Inputbox } from "./Inputbox";
import { useState } from "react";
import type { SignupInput } from "@jaydeeppp/medium-blog";
import { BackendUrl } from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [inputFields, setInputFields] = useState<SignupInput>({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  async function sendRequest() {
    if (inputFields.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
    setLoading(true); 
    const response = await axios.post(`${BackendUrl}/user/${type}`, inputFields);
    const jwt = response.data.jwt || response.data.token;
    localStorage.setItem("token", jwt);
    navigate(`/blog`);
  } catch (e: any) {
    setError(e?.response?.data?.message || "Authentication failed. Please try again.");
  } finally {
    setLoading(false); 
  }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center pt-10">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              {type === "signup" ? "Create an account" : "Log into Account"}
            </div>
            <div className="text-slate-500">
              {type === "signin" ? "Don't have an account?" : "Already have an account?"}
              <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>

          <div className="pt-8">
            {type === "signup" && (
              <Inputbox
                label="Name"
                placeholder="Jaydeep Wagaskar"
                onChange={(e) => setInputFields({ ...inputFields, name: e.target.value })}
              />
            )}

            <Inputbox
              label="Username"
              placeholder="jay"
              onChange={(e) => setInputFields({ ...inputFields, username: e.target.value })}
            />

            {type === "signup" && (
              <Inputbox
                label="Email"
                placeholder="jay@gmail.com"
                onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
              />
            )}

            <Inputbox
              label="Password"
              type="password"
              placeholder="123456"
              onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
            />

            {error && (
              <div className="text-red-600 text-sm pt-2">
                {error}
              </div>
            )}

            <button
  type="button"
  onClick={sendRequest}
  disabled={loading}
  className="mt-8 w-full flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer dark:focus:ring-gray-700 dark:border-gray-700 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5 mr-2 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      Processing...
    </>
  ) : (
    type === "signup" ? "Sign up" : "Sign in"
  )}
</button>

          </div>
        </div>
      </div>
    </div>
  );
};
