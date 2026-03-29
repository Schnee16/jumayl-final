import { useRef, useEffect } from "react";

export default function WaveSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    let animationFrameId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y = 50 * Math.sin(x * 0.05 - t) + canvas.height / 2;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "cyan";
      ctx.lineWidth = 2;
      ctx.stroke();

      t += 0.1;
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-black/20 rounded-xl space-y-4">
      <h2 className="text-2xl font-bold text-center text-white">Simulasi Gelombang</h2>
      <p className="text-sm text-white/70 text-center">
        Visualisasi gelombang sinus interaktif.
      </p>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="w-full rounded-xl bg-black border border-white/10 shadow-lg"
      />
    </div>
  );
}