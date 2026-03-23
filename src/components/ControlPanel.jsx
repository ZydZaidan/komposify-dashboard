import React from "react";
import { FaWind, FaPumpSoap, FaSync } from "react-icons/fa";

const ControlPanel = () => {

  const handleToggle = (device) => {
    console.log(`Mengirim perintah ke ESP32: Toggle ${device}`);
  };
  const controls = [
    {
      id: "fan",
      label: "Kipas Exhaust",
      icon: FaWind,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      id: "pump",
      label: "Pompa Air",
      icon: FaPumpSoap,
      color: "text-cyan-500",
      bg: "bg-cyan-50",
    },
    {
      id: "mixer",
      label: "Pengaduk Kompos",
      icon: FaSync,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
  ];
  return (
    <main>
      <div className="pb-6">
        <h3 className="font-bold text-lg text-slate-800">Control Komposify</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {controls.map((item) => (
          <button
            key={item.id}
            onClick={() => handleToggle(item.id)}
            className="shadow-2xs flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all group bg-white"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={32}/>
              </div>
              <span className="font-medium text-slate-700">{item.label}</span>
            </div>
            <div className="w-10 h-5 bg-slate-200 rounded-full relative">
              <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full shadow-sm"></div>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
};

export default ControlPanel;
