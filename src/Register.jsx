import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./Firebase";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import BgImage from "./assets/Bimae.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error("Passwords do not match", { theme: "light" });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");

      toast.success("Registered successfully!", { theme: "light" });
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      toast.error("Registration failed", { theme: "light" });
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
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-sm shadow-md border border-white/30">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span
              className="absolute right-3 top-2.5 text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-white/20 placeholder-white text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span
              className="absolute right-3 top-2.5 text-white cursor-pointer"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <IoEyeSharp /> : <FaEyeSlash />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-purple-700 font-semibold py-2 rounded hover:bg-gray-100 transition"
          >
            Register
          </button>

          <p className="text-center text-white text-sm mt-4">
            Already have an account?
            <Link to="/" className="text-blue-300 hover:underline ml-1">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
