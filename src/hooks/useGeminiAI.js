// hooks/useGeminiAI.js
import { useState } from "react";

const useGeminiAI = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (input) => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, you would call your backend API here
      // For now, we'll simulate a response
      const response = await fetchGeminiAIResponse(input);

      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        { role: "assistant", content: response },
      ]);
    } catch (err) {
      setError("Failed to get response from AI");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGeminiAIResponse = async (input) => {
    await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate thinking delay

    const lowerInput = input.toLowerCase();

    const responses = [
      {
        keywords: [
          "why start",
          "origin",
          "story",
          "history",
          "begin",
          "founded",
        ],
        reply: [
          "Coffeecient was born from late-night thesis sessions and too many instant coffees. We wanted better brew for busy Filipinos — quality you can taste, without the pretentious price tag.",
          "Our story? Two college best friends, one beat-up coffee machine, and the dream to make great coffee accessible. That was 2019. Now we're still roasting with that same passion ☕",
          "It started with a simple question: 'Why does good coffee have to be complicated?' We're still answering that every day through our beans.",
          "Born during pandemic lockdowns! We began by delivering small-batch roasts to neighbors. The love (and caffeine addiction) spread from there 😉",
        ],
      },
      {
        keywords: ["best seller", "popular", "favorite", "top", "recommend"],
        reply: [
          "Hands down, our Benguet Arabica — smooth with chocolatey notes. Regulars say it's 'the one that got them hooked' on our brews!",
          "The Kapeng Barako blend flies off our virtual shelves! Strong, aromatic, and perfect for those 'need coffee NOW' mornings.",
          "Surprise hit: our ube-flavored cold brew! A uniquely Pinoy twist that became an instant favorite 🍠☕",
          "For merch, our chunky ceramic mugs outsell everything else. People love how they keep coffee hot for hours!",
        ],
      },
      {
        keywords: ["discount", "promo", "sale", "voucher", "coupon", "avail"],
        reply: [
          "Subscribe to our newsletter for first dibs on flash sales! We drop secret codes there sometimes 😉",
          "First-time buyers get 10% off with code COFFEENEWBIE at checkout!",
          "Follow our IG @coffeecient for limited-time promos. We do birthday month discounts too!",
          "Bulk orders automatically get discounts — the more coffee, the merrier (and cheaper)!",
        ],
      },
      {
        keywords: ["mission", "vision", "values", "believe"],
        reply: [
          "We believe good coffee builds connections. Our mission? Make every sip feel like a warm hello from a friend.",
          "Three words: Quality. Community. Sustainability. We work directly with local farmers and use eco-friendly packaging.",
          "To caffeinate creativity! 1% of every sale goes to supporting young Filipino artists and entrepreneurs.",
          "We're not just selling coffee — we're brewing a culture of slowing down and savoring moments. Cliché but true!",
        ],
      },
      {
        keywords: ["team", "who are you", "staff", "barista"],
        reply: [
          "We're a small but mighty crew of coffee nerds, artists, and sleep-deprived dreamers based in [City]!",
          "Meet the team: Roaster Ria, Bean Guru Marcus, and Customer Magic Lia — plus our unofficial mascot, a rescue aspin named Kapeng!",
          "Just real people who geek out over roast profiles and packaging design. Want to join us? We're always looking for fellow caffeine enthusiasts!",
          "Fun fact: Our entire team started as customers first. The coffee was that good, we just never left!",
        ],
      },
      {
        keywords: ["future", "plans", "next", "coming soon"],
        reply: [
          "Shhh... we're testing a coffee + local chocolate collab! Launching next season if our taste-testers approve 🍫☕",
          "Big dreams: opening our first physical café where every table has a charging port and bottomless brews!",
          "We're experimenting with coffee-infused baked goods. Current favorite: espresso brownies that pack a punch!",
          "Expanding our farmer partnerships across the PH! More regions = more unique flavor profiles to share.",
        ],
      },
    ];

    for (let entry of responses) {
      if (entry.keywords.some((kw) => lowerInput.includes(kw))) {
        return entry.reply[Math.floor(Math.random() * entry.reply.length)];
      }
    }

    const fallbackReplies = [
      "That’s a cool question! I might need a second to grind the right answer — could you rephrase it a bit?",
      "Hmmm, not sure I understood that, but I’m super curious! Could you tell me more?",
      "You're asking something deep — love it. Can you give me a little more context?",
      "Oooh, mysterious. I’m intrigued. Want to try asking that another way?",
      "I'm still learning all things coffee! Maybe ask me about our blends, merch, or brewing tips?",
    ];

    return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
  };

  return { messages, isLoading, error, sendMessage };
};

export default useGeminiAI;
