import React, { useState } from "react";

import PlaceholderImg from "../assets/images/placeholder.jpg";
import CoffeecientLogo from "../assets/images/coffeecient-logo-removebg-preview.png";
import Subsciption from "../components/Subscription/Subsciption";

import ContactBanner from "../assets/coffeecient-images/contact-banner.jpg";
import Bean from "../assets/coffeecient-images/bean.png";

const ContactPage = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [surveySuccess, setSurveySuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setContactSuccess(true);
        form.reset();
        setTimeout(() => setContactSuccess(false), 3000);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleSurveySubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSurveySuccess(true);
        form.reset();
        setTimeout(() => setSurveySuccess(false), 3000);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 3000);
    }
  };
  return (
    <div className="mb-4">
      <div>
        <img src={ContactBanner} className="h-96 min-w-full object-fill " />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 text-gray-700 gap-4 mt-4 mb-4">
        <div className="p-4 flex flex-col justify-center items-start bg-white rounded-md">
          <h1 className="font-bold text-4xl mb-4">By Phone</h1>
          <div>Operates only on Monday to Friday [10am-3pm]</div>
          <h2 className="font-bold text-2xl mb-2">Davao City</h2>
          <div>0922AYAWTUO / 0922AYAWTUO</div>
          <h2 className="font-bold text-2xl mb-2">Nationwide</h2>
          <div>0922AYAWTUO / 0922AYAWTUO</div>
        </div>
        <div className="p-4 flex flex-col justify-center items-start bg-white rounded-md">
          <h1 className="font-bold text-4xl mb-8">Social Media</h1>
          <div className="flex flex-wrap gap-6">
            <a href="https://www.facebook.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-facebook hover:text-[#7A4D0F]"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            |
            <a href="https://www.instagram.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-instagram hover:text-[#7A4D0F]"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            |
            <a href="https://x.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-twitter hover:text-[#7A4D0F]"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
            </a>
            |
            <a href="https://www.youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-youtube hover:text-[#7A4D0F]"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <a className="hover:text-[#7A4D0F]">Privacy Policy</a>|
            <a className="hover:text-[#7A4D0F]">Terms of Service</a>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-start items-start gap-2 bg-white h-auto rounded-md">
          <h1 className="font-bold text-4xl mb-2">On Site</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.30123456789!2d120.9841234!3d14.5897654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%20City%20Hall!5e0!3m2!1sen!2sph!4v1234567890"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <a
            href="https://www.google.com/maps?q=14.5995127,120.9842186"
            target="_blank"
            className="hover:text-black"
          >
            📍 Davao City, near Abreeza Bajada mall Branch
          </a>
          <a
            href="https://www.google.com/maps?q=14.5995127,120.9842186"
            target="_blank"
            className="hover:text-black"
          >
            📍 Manila, near SM mall Branch
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 mb-4">
        <div className="p-4">
          <img src={Bean} />
        </div>
        <div>
          <div className="max-w-full mx-auto p-4  rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>

            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Subsciption />
    </div>
  );
};

export default ContactPage;
