import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import BgImage from "./assets/Bimae.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (!rememberMe) {
      toast.error("Please check the Remember Me box to continue", { theme: "light" });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", { theme: "light" });
      setTimeout(() => navigate('/App'), 3000);
    } catch (err) {
      toast.error("Login failed", { theme: "light" });
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${BgImage  })`  
      }}
    >
      <ToastContainer />
      <div className="   bg-opacity-10 backdrop-blur-md rounded-xl p-8 w-full max-w-sm shadow-md border border-white/30">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span
              className="absolute right-3 top-2.5 text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="flex items-center justify-between text-white text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              Remember me
            </label>
            <span className="hover:underline cursor-pointer">Forgot Password?</span>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-white text-purple-700 font-semibold hover:bg-gray-100 transition"
          >
            Login
          </button>
          <p className="text-center text-white text-sm mt-4">
            Don’t have an account?
            <Link to="/register" className="text-blue-300 hover:underline ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
