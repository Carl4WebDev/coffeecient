import { ArrowUp } from "lucide-react";
import ParticleEffect from "../ParticleEffect/ParticleEffect";

const BackToHome = () => {
  return (
    <ParticleEffect options={{ particleCount: 10, size: 10 }}>
      <a
        href="#navbar" // Links to an element with id="navbar"
        className="fixed bottom-20  right-5 flex items-center justify-center bg-[#A47149] hover:bg-[#C99266] text-white p-3 rounded-lg shadow-md transition-colors duration-200 z-50"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </ParticleEffect>
  );
};

export default BackToHome;
