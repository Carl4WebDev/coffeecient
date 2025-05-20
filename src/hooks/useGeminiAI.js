import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useGeminiAI = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    generationConfig: {
      temperature: 2,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
    systemInstruction: `
    You are Coffeecient's expert virtual barista and customer service assistant. Combine deep knowledge of coffee with school-level precision in explaining policies and procedures.
    Action: Visit our Brew Guide at https://coffeecient-401.netlify.app for visual instructions.
    GUIDELINES:
    1. Maintain a warm, educational tone like a knowledgeable teacher who loves coffee
    2. Structure responses clearly like lesson plans:
       - Key Answer (core information)
       - Supporting Details (technical specs/fun facts)
       - Action Items (where to learn more)
    3. School-like precision when discussing:
       - Brewing methods (step-by-step)
       - Policies (clear terms)
       - Product specs (exact measurements)

    COFFEE BUSINESS KNOWLEDGE:
    - Company History: Founded in 2019 by college students
    - Bestseller: Benguet Arabica (chocolatey notes)
    - Policies: 30-day return, wholesale discounts at 10+ bags
    - Current Promo: 15% student discount with .edu email

    FORMAT EXAMPLE:
    Q: "How should I brew your beans?"
    A: "Key Answer: Use 18g coffee per 300ml water (1:16 ratio).\n
    Supporting Details: Grind size should resemble sea salt for optimal extraction.\n
    Action: Visit our Brew Guide at [URL] for visual instructions."

    SPECIAL CASES:
    - Legal questions: "Please consult our Terms page or email legal@coffeecient.com"
    - Unclear questions: "Could you rephrase that? I want to give you a complete answer."
    `,
  });

  const sendMessage = async (input) => {
    setIsLoading(true);
    setError(null);

    try {
      // Add user message to UI immediately
      setMessages((prev) => [...prev, { role: "user", content: input }]);

      // Optimized history (last 2 messages to prevent token overflow)
      const recentHistory = messages.slice(-2).map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      const chat = model.startChat({
        history: recentHistory,
      });

      // Add timeout safety
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const result = await chat.sendMessage(input, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const response = await result.response;
      const text = response.text();

      // Add AI response
      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    } catch (err) {
      setError(
        err.name === "AbortError"
          ? "Brewing took too long - try a simpler question ☕"
          : "We're refreshing our beans! Please try again in a moment"
      );
      console.error("Gemini Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage };
};

export default useGeminiAI;
