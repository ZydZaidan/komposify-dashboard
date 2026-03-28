import React, { useState } from "react";
import Header from "./components/Header";
import SensorCard from "./components/SensorCard";
import { FaThermometerFull, FaTint, FaVial } from "react-icons/fa";
import ControlPanel from "./components/ControlPanel";
import SystemLogs from "./components/SystemLogs";
import TrendsChart from "./components/TrendsChart";
import GuideModal from "./components/GuideModal";
import { FaInfoCircle } from "react-icons/fa";

function App() {
  const sensorData = [
    {
      label: "Suhu Kompos",
      value: "32.5",
      unit: "°C",
      icon: FaThermometerFull,
      status: "optimal",
    },
    {
      label: "Kelembapan",
      value: "55",
      unit: "%",
      icon: FaTint,
      status: "caution",
    },
    {
      label: "Tingkat pH",
      value: "4.5",
      unit: "pH",
      icon: FaVial,
      status: "critical",
    },
  ];

  const [logs] = useState([
    { time: "08:00:01", type: "info", message: "Sistem Komposify Aktif." },
    {
      time: "08:05:12",
      type: "info",
      message: "Panel Surya mengisi daya: 95W.",
    },
    { time: "08:10:45", type: "warn", message: "Suhu meningkat ke 36°C!" },
    {
      time: "08:10:46",
      type: "success",
      message: "Kipas Exhaust otomatis dinyalakan.",
    },
  ]);
  const chartData = [
    { time: '08:00', suhu: 30, ph: 7.0 },
    { time: '09:00', suhu: 32, ph: 6.8 },
    { time: '10:00', suhu: 35, ph: 6.5 },
    { time: '11:00', suhu: 34, ph: 6.9 },
    { time: '12:00', suhu: 38, ph: 4.5 }, // Simulasi drop pH
    { time: '13:00', suhu: 36, ph: 5.2 },
  ];

  const [showGuide, setShowGuide] = useState(false);
  return (
<div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />

      {/* 3. TAMPILKAN MODAL JIKA STATE TRUE */}
      {showGuide && <GuideModal onClose={() => setShowGuide(false)} />}

      <main className="p-4 md:p-6 mx-auto max-w-7xl">
        <div className="mb-6 flex justify-between items-center">
          <div>
            {/* 4. TAMBAHKAN IKON DI SAMPING JUDUL */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3">
              Smart Monitoring
              <button 
                onClick={() => setShowGuide(true)} // KLIK UNTUK MUNCULIN
                className="p-1.5 rounded-full hover:bg-slate-100 group transition-colors"
                title="Lihat Panduan Parameter"
              >
                <FaInfoCircle className="text-blue-500 text-base md:text-lg group-hover:scale-110 transition-transform" />
              </button>
            </h2>
            <p className="text-sm text-slate-500">Data real-time dari sistem sensor ESP32</p>
          </div>
        </div>
        <SensorCard data={sensorData} />
        <hr className="my-8 border-slate-200" />
        <div className="flex flex-col gap-8">
          <ControlPanel />
                  <hr className="my-2 border-slate-200" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SystemLogs logs={logs} />
            <TrendsChart data={chartData} />  
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
