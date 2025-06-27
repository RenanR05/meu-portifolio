import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!);
          gsap.to(textRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power2.inOut",
          });
          gsap.to(overlayRef.current, {
            y: "-100%",
            duration: 1.2,
            delay: 0.3,
            ease: "power3.inOut",
            onComplete: () => {
              onFinish();
            },
          });
          return 100;
        }
        return Math.min(prev + Math.random() * 4 + 1, 100);
      });
    }, 30);

    return () => clearInterval(intervalRef.current!);
  }, [onFinish]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-black text-xl uppercase font-semibold tracking-tight font-mono"
      >
        Loading <span ref={counterRef}>[{String(Math.floor(count)).padStart(2, "0")}]</span>
      </div>
    </div>
  );
}
