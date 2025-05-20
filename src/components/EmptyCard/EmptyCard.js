import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

const EmptyCartIllustration = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    // Draw coffee cup
    ctx.fillStyle = "#6F4E37"; // Coffee brown
    ctx.beginPath();
    ctx.ellipse(100, 120, 60, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cup sides
    ctx.beginPath();
    ctx.moveTo(40, 120);
    ctx.lineTo(60, 60);
    ctx.lineTo(140, 60);
    ctx.lineTo(160, 120);
    ctx.fill();

    // Coffee liquid
    ctx.fillStyle = "#4B3621"; // Darker brown
    ctx.beginPath();
    ctx.ellipse(100, 80, 50, 15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Steam
    ctx.strokeStyle = "#D3D3D3"; // Light gray
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(90, 40);
    ctx.bezierCurveTo(85, 20, 95, 10, 100, 15);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(110, 40);
    ctx.bezierCurveTo(115, 20, 125, 10, 120, 15);
    ctx.stroke();

    // Face (sad coffee)
    ctx.fillStyle = "#000000";
    // Eyes
    ctx.beginPath();
    ctx.arc(85, 70, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(115, 70, 5, 0, Math.PI * 2);
    ctx.fill();
    // Mouth
    ctx.beginPath();
    ctx.arc(100, 90, 10, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.stroke();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="mb-4"
        style={{ width: "100px", height: "100px" }}
      />
      <p className="text-gray-500 text-lg">Your cart is empty</p>
    </div>
  );
};
