import React from "react";
import Header from "./components/Header";
import SensorCard from './components/SensorCard';
import { FaThermometerFull, FaTint, FaVial } from "react-icons/fa";

function App() {
  // Simulasi data yang nanti bakal diganti sama data asli dari ESP32
  const sensorData = [
    { label: "Suhu Kompos", value: "32.5", unit: "°C", icon: FaThermometerFull, status: "optimal" },
    { label: "Kelembapan", value: "55", unit: "%", icon: FaTint, status: "caution" },
    { label: "Tingkat pH", value: "4.5", unit: "pH", icon: FaVial, status: "critical" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />

      <main className="p-4 md:p-6 mx-auto">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">Smart Monitoring</h2>
          <p className="text-sm text-slate-500">Data real-time dari sistem sensor ESP32</p>
        </div>

        {/* Panggil 1 Komponen Master, lemparkan array datanya */}
        <SensorCard data={sensorData} />

      </main>
    </div>
  );
}

export default App;