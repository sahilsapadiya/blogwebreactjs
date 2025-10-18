import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen[100vh] bg-black px-4">
      <div className="bg-white shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg p-10 sm:p-16 rounded-2xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-6">
          Welcome Back
        </h1>
        <p className="mb-8 text-gray-600 text-sm sm:text-base">
          Please login with your Gmail Account
        </p>
        <img
          className="mb-8 w-3/4 mx-auto rounded-md"
          src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
          alt="Google login illustration"
        />
        <button
          onClick={handleLogin}
          className="bg-[#270303] hover:bg-[#3a0d0d] text-white font-semibold py-3 px-6 rounded-xl w-full sm:w-auto"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
