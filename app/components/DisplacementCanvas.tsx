"use client";

import { useRef, useEffect } from "react";

const GRID_SIZE = 28;
const INFLUENCE_RADIUS = 180;
const DISPLACEMENT_STRENGTH = 24;
const SMOOTHING = 0.12;

export default function DisplacementCanvas({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -1000, y: -1000 };
    const smoothMouse = { x: -1000, y: -1000 };
    let animFrameId: number;

    function resizeCanvas() {
      if (!canvas || !container || !ctx) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getLineStyle(dist: number) {
      if (dist >= INFLUENCE_RADIUS) return { color: "#d0d0d0", width: 1 };
      const t = 1 - dist / INFLUENCE_RADIUS;
      const v = Math.round(208 + (17 - 208) * t);
      return { color: `rgb(${v},${v},${v})`, width: 1 + t };
    }

    function drawGrid() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      smoothMouse.x += (mouse.x - smoothMouse.x) * SMOOTHING;
      smoothMouse.y += (mouse.y - smoothMouse.y) * SMOOTHING;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#f0f0f0";
      ctx.fillRect(0, 0, w, h);

      // Cursor halo
      if (smoothMouse.x > -500) {
        const halo = ctx.createRadialGradient(
          smoothMouse.x, smoothMouse.y, 0,
          smoothMouse.x, smoothMouse.y, 80
        );
        halo.addColorStop(0, "rgba(17,17,17,0.06)");
        halo.addColorStop(1, "transparent");
        ctx.fillStyle = halo;
        ctx.fillRect(0, 0, w, h);
      }

      // Horizontal lines
      for (let y = 0; y <= h + GRID_SIZE; y += GRID_SIZE) {
        const midDy = y - smoothMouse.y;
        const midDist = Math.sqrt((GRID_SIZE * GRID_SIZE) / 4 + midDy * midDy);
        const lineStyle = getLineStyle(midDist);
        ctx.beginPath();
        ctx.strokeStyle = lineStyle.color;
        ctx.lineWidth = lineStyle.width;
        for (let x = 0; x <= w; x += 2) {
          const dx = x - smoothMouse.x;
          const dy = y - smoothMouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let offsetY = 0;
          if (dist < INFLUENCE_RADIUS) {
            const force = 1 - dist / INFLUENCE_RADIUS;
            offsetY =
              (dy / (dist || 1)) *
              DISPLACEMENT_STRENGTH *
              force *
              force *
              force;
          }
          if (x === 0) ctx.moveTo(x, y + offsetY);
          else ctx.lineTo(x, y + offsetY);
        }
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x <= w + GRID_SIZE; x += GRID_SIZE) {
        const midDx = x - smoothMouse.x;
        const midDist = Math.sqrt(midDx * midDx + (GRID_SIZE * GRID_SIZE) / 4);
        const lineStyle = getLineStyle(midDist);
        ctx.beginPath();
        ctx.strokeStyle = lineStyle.color;
        ctx.lineWidth = lineStyle.width;
        for (let y = 0; y <= h; y += 2) {
          const dx = x - smoothMouse.x;
          const dy = y - smoothMouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let offsetX = 0;
          if (dist < INFLUENCE_RADIUS) {
            const force = 1 - dist / INFLUENCE_RADIUS;
            offsetX =
              (dx / (dist || 1)) *
              DISPLACEMENT_STRENGTH *
              force *
              force *
              force;
          }
          if (y === 0) ctx.moveTo(x + offsetX, y);
          else ctx.lineTo(x + offsetX, y);
        }
        ctx.stroke();
      }

      animFrameId = requestAnimationFrame(drawGrid);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Check if cursor is within the canvas bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    resizeCanvas();
    drawGrid();

    window.addEventListener("resize", resizeCanvas);
    // Listen on document so it works even when content overlays the canvas
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
