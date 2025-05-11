import React, { useState } from "react";
import PlaceholderImg from "../assets/images/placeholder.jpg";
import CoffeecientLogo from "../assets/images/coffeecient-logo-removebg-preview.png";

const AuthPage = () => {
  // State for input fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("driver"); // Default role
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login - static version
  const handleLogin = () => {
    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Mock successful login
    setError("");
    setIsLoggedIn(true);
    console.log("Logged in with:", { email, password });
  };

  // Handle registration - static version
  const handleRegister = () => {
    // Basic validations
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Mock successful registration
    setError("");
    console.log("Registered:", {
      fullName,
      email,
      phoneNumber,
      role,
      password,
    });
    setIsLoginMode(true);
  };

  // Toggle between login and register modes
  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
    setError("");
  };

  // If "logged in", show a simple message
  if (isLoggedIn) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome!</h2>
          <p className="mb-6">You are now logged in to the system.</p>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
        <div className="h-[700px] flex justify-center items-center ">
          <div className=" ">
            <div className="flex justify-center items-center">
              <h2 className="text-4xl mb-4 font-bold text-center">
                {isLoginMode ? "Login" : "Create Your Account"}
              </h2>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-md">
                {error}
              </div>
            )}

            {/* Login Form */}
            {isLoginMode && (
              <>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </>
            )}

            {/* Registration Form */}
            {!isLoginMode && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone Number (Optional)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            <button
              onClick={isLoginMode ? handleLogin : handleRegister}
              className="bg-btn-login text-white px-4 py-3 rounded-md w-full hover:bg-[#b38563] transition duration-200"
            >
              {isLoginMode ? "Login" : "Create Account"}
            </button>

            <p className="mt-4 text-center text-gray-600">
              {isLoginMode
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={toggleMode}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {isLoginMode ? "Register here" : "Log in here"}
              </button>
            </p>
          </div>
        </div>

        <div className="hidden h-[700px] sm:flex sm:justify-center sm:items-center">
          <img src={PlaceholderImg} />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
