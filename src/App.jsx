import React from "react";
import Header from "./components/Header";
import SensorCard from './components/SensorCard';
// import { FaThermometerFull } from "react-icons/fa";


function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />

      <main className="p-6 max-w-6xl mx-auto">
        <div className="mb-4">
          <h2>Smart Monitoring</h2>
          <p>Data real-time dari sistem sensor ESP32</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <SensorCard 
            label="Compost Temperature" 
            value="32.5" 
            unit="°C" 
            // icon={FaThermometerFull} 
            status="optimal"
          />
          <SensorCard 
            label="Humidity Level" 
            value="55" 
            unit="%" 
            // icon={FaThermometerFull} 
            status="caution"
          />
          <SensorCard 
            label="pH Concentration" 
            value="4.5" 
            unit="pH" 
            // icon={FaThermometerFull} 
            status="critical"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
