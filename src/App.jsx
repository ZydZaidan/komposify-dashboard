import React, { useState } from "react";
import Header from "./components/Header";
import SensorCard from "./components/SensorCard";
import { FaThermometerFull, FaTint, FaVial } from "react-icons/fa";
import ControlPanel from "./components/ControlPanel";
import SystemLogs from "./components/SystemLogs";
import TrendsChart from "./components/TrendsChart";

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
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />

      <main className="p-4 md:p-6 mx-auto">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Smart Monitoring
          </h2>
          <p className="text-sm text-slate-500">
            Data real-time dari sistem sensor ESP32
          </p>
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
