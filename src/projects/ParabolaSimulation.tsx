import { useRef, useEffect, useState } from "react";

export default function ParabolaSimulation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [angle, setAngle] = useState(45);       // Sudut peluncuran
  const [velocity, setVelocity] = useState(50); // Kecepatan awal

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const g = 9.8; // percepatan gravitasi
    const scale = 5; // skala agar terlihat di canvas
    let t = 0;
    let animationFrameId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gambar garis tanah
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Hitung posisi bola
      const rad = (angle * Math.PI) / 180;
      const x = velocity * Math.cos(rad) * t;
      const y = velocity * Math.sin(rad) * t - 0.5 * g * t * t;

      const drawX = x * scale;
      const drawY = canvas.height - y * scale;

      // Gambar bola hanya jika masih di canvas
      if (drawX >= 0 && drawX <= canvas.width && drawY >= 0 && drawY <= canvas.height) {
        ctx.beginPath();
        ctx.arc(drawX, drawY, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "cyan";
        ctx.fill();
      }

      // Lanjutkan animasi selama bola di atas tanah
      if (y >= 0) {
        t += 0.1;
        animationFrameId = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [angle, velocity]);

  return (
    <div className="space-y-6 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Simulasi Gerak Parabola</h2>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="bg-black rounded-xl border border-white/20"
      />

      <div className="space-y-2">
        <label className="block text-white">Sudut: {angle}°</label>
        <input
          type="range"
          min={10}
          max={80}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-white">Kecepatan: {velocity}</label>
        <input
          type="range"
          min={10}
          max={100}
          value={velocity}
          onChange={(e) => setVelocity(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}