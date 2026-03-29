import { useState } from "react";

export default function OhmCalculator() {
  const [v, setV] = useState("");
  const [i, setI] = useState("");
  const [r, setR] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const voltage = Number(v);
    const current = Number(i);
    const resistance = Number(r);

    if (i !== "" && r !== "" && v === "") {
      const calculatedV = current * resistance;
      setV(String(calculatedV));
      setResult(`Tegangan (V) = ${calculatedV} V`);
    } else if (v !== "" && r !== "" && i === "") {
      if (resistance === 0) {
        setResult("Hambatan tidak boleh 0!");
        return;
      }
      const calculatedI = voltage / resistance;
      setI(String(calculatedI));
      setResult(`Arus (I) = ${calculatedI} A`);
    } else if (v !== "" && i !== "" && r === "") {
      if (current === 0) {
        setResult("Arus tidak boleh 0!");
        return;
      }
      const calculatedR = voltage / current;
      setR(String(calculatedR));
      setResult(`Hambatan (R) = ${calculatedR} Ω`);
    } else {
      setResult("Isi dua nilai, biarkan satu kosong untuk dihitung.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 glass shadow-card space-y-4">
      <h2 className="text-2xl font-bold text-center text-gradient mb-4">
        Kalkulator Hukum Ohm
      </h2>

      <input
        type="number"
        placeholder="Tegangan (V)"
        value={v}
        onChange={(e) => setV(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
      />

      <input
        type="number"
        placeholder="Arus (I)"
        value={i}
        onChange={(e) => setI(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
      />

      <input
        type="number"
        placeholder="Hambatan (R)"
        value={r}
        onChange={(e) => setR(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
      />

      <button
        type="button"
        onClick={calculate}
        className="w-full btn-elegant font-semibold"
      >
        Hitung
      </button>

      {result && (
        <div className="mt-2 p-3 bg-accent/10 rounded-md text-center font-medium">
          {result}
        </div>
      )}
    </div>
  );
}