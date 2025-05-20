// components/ChatBox.jsx
import { useState } from "react";
import useGeminiAI from "../../hooks/useGeminiAI";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, error, sendMessage } = useGeminiAI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col border border-gray-200">
          <div className="bg-[#6F4E37] text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="font-bold">Coffeecient Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#D3A970]"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto bg-[#F5F5F5]">
            {messages.length === 0 ? (
              <div className="text-center text-gray-600 mt-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#6F4E37] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <p className="font-medium">
                  How can I help with your coffee needs?
                </p>
                <p className="text-sm mt-2">
                  Ask about our blends, merch, or wholesale options!
                </p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    msg.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg max-w-xs ${
                      msg.role === "user"
                        ? "bg-[#6F4E37] text-white"
                        : "bg-white text-gray-800 border border-[#D3A970]"
                    }`}
                  >
                    {msg.content}
                    {msg.role === "assistant" && (
                      <div className="text-xs mt-1 text-[#6F4E37]">
                        ☕ Coffeecient Bot
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-flex items-center bg-white text-gray-800 p-2 rounded-lg border border-[#D3A970]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#6F4E37] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#6F4E37] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[#6F4E37] rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="ml-2">Brewing your answer...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="text-red-500 text-sm p-2 bg-white rounded-lg border border-red-200">
                {error}
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-[#D3A970]"
          >
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our coffee..."
                className="flex-1 border border-[#D3A970] rounded-l-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#6F4E37] text-white px-4 rounded-r-lg hover:bg-[#5a3d2b] disabled:opacity-50 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#6F4E37] text-white p-4 rounded-full shadow-lg hover:bg-[#5a3d2b] transition-colors flex items-center justify-center"
          aria-label="Open Coffee Chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="absolute top-0 right-0 h-3 w-3 bg-[#D3A970] rounded-full animate-pulse"></span>
        </button>
      )}
    </div>
  );
};

export default ChatBox;
