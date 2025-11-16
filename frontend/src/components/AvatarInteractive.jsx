import { useEffect, useRef, useState } from "react";
import avatar from "../assets/avatar.png";

const MAX_OFFSET = 6;

export default function AvatarInteractive() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      const clamp = (v, max) => Math.max(-max, Math.min(max, v));

      setOffset({
        x: clamp(relX * MAX_OFFSET, MAX_OFFSET),
        y: clamp(relY * MAX_OFFSET, MAX_OFFSET),
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md h-auto aspect-square select-none"
    >
      {/* Avatar */}
      <img src={avatar} className="w-full h-full object-contain" />

      {/* LEFT EYE */}
      <div
        className="absolute"
        style={{ left: "39%", top: "30.1%", width: "4.3%", height: "4.3%" }}
      >
        <div className="relative w-full h-full bg-white rounded-full overflow-hidden">
          <div
            className="absolute w-1/2 h-1/2 bg-black rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
            }}
          />
        </div>
      </div>

      {/* RIGHT EYE */}
      <div
        className="absolute"
        style={{ left: "53.7%", top: "30.1%", width: "4.3%", height: "4.3%" }}
      >
        <div className="relative w-full h-full bg-white rounded-full overflow-hidden">
          <div
            className="absolute w-1/2 h-1/2 bg-black rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
