import { useEffect } from "react";

const SimpleCustomCursor = ({ cursorImage = "/cursor.png" }) => {
  useEffect(() => {
    // Apply cursor style to the entire document
    document.body.style.cursor = `url(${cursorImage}), auto`;

    // Cleanup on component unmount
    return () => {
      document.body.style.cursor = "";
    };
  }, [cursorImage]);

  return null; // This component doesn't render anything
};

export default SimpleCustomCursor;
