import { useEffect, useMemo, useRef, useCallback } from "react";
import { useGesture } from "@use-gesture/react";
import Header from "../Components/Header";

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const IMAGES = [
  "https://lh3.googleusercontent.com/p/AF1QipNaJloJldLvYORO64mNPF5qc6Jqgu4Xn1XlkYD2=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMp3WTWeRu3zewobVMN3K9MauvkryEvAMZG0Bqz=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMGPhwMLn6hhb0BZJCUy6puvucEtzP_OwNKg0KX=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMnSc2_HJgTNy_PFOu4JBRZluwQf6uGOxENCpEH=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMoHrxiQLyLQcJGhn-exypno1zUyDY3nk5Iqiri=s1360-w1360-h1020-rw"
  // ...add remaining images
];

const clamp = (v, min, max) => Math.min(Math.max(v, min), max); 
const wrapAngleSigned = deg => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};

export default function DomeGallery() {
  const rootRef = useRef(null);
  const sphereRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef(null);

  // Apply rotation
  const applyTransform = (xDeg, yDeg) => {
    if (sphereRef.current) {
      sphereRef.current.style.transform = `translateZ(-420px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  // Gesture for drag rotation
  useGesture(
    {
      onDrag: ({ event, movement, last }) => {
        const [dx, dy] = movement;
        if (!draggingRef.current) return;

        const nextX = clamp(startRotRef.current.x - dy / DEFAULTS.dragSensitivity, -DEFAULTS.maxVerticalRotationDeg, DEFAULTS.maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(startRotRef.current.y + dx / DEFAULTS.dragSensitivity);

        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);

        if (last) draggingRef.current = false;
      },
      onDragStart: ({ event }) => {
        draggingRef.current = true;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: event.clientX, y: event.clientY };
      }
    },
    { target: rootRef, eventOptions: { passive: true } }
  );

  const items = useMemo(() => IMAGES, []);

  return (
    <>
      <Header />
      <div ref={rootRef} className="sphere-root" style={{ width: "100%", height: "100vh", perspective: "1200px", background: "#05010d" }}>
        <div ref={sphereRef} className="sphere" style={{ transformStyle: "preserve-3d", transform: "translateZ(-420px)" }}>
          {items.map((src, i) => {
            const angle = (360 / items.length) * i;
            return (
              <div
                key={i}
                className="item"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: `rotateY(${angle}deg) translateZ(420px)`,
                  transformStyle: "preserve-3d"
                }}
              >
                <div
                  className="item__image"
                  style={{
                    width: "180px",
                    height: "260px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 20px 40px rgba(0,0,0,.45)"
                  }}
                >
                  <img src={src} alt="gallery" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
