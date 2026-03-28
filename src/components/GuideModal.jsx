import React from "react";
import { FaTimes, FaThermometerFull, FaTint, FaVial, FaHandPointRight } from "react-icons/fa";

const GuideModal = ({ onClose }) => {
  const guideData = [
    { label: "Suhu Kompos (Temperatur)", range: "≤ 35°C", icon: FaThermometerFull, color: "text-rose-500", bg: "bg-rose-50", 
      desc: "Ambang batas optimal untuk metabolisme bakteri dekomposer. Di atas 35°C berisiko mematikan mikroorganisme dan proses dekomposisi dapat gagal total." },
    { label: "Kadar Air (Kelembapan)", range: "50% – 60%", icon: FaTint, color: "text-blue-500", bg: "bg-blue-50", 
      desc: "Keseimbangan vital untuk aktivitas biologi. <50% memperlambat proses (terlalu kering). >60% memicu kondisi anaerob/pembusukan bau (terlalu basah)." },
    { label: "Tingkat pH (Asam/Basa)", range: "6.8 – 7.5", icon: FaVial, color: "text-emerald-500", bg: "bg-emerald-50", 
      desc: "Rentang netral untuk efisiensi bakteri. <6.8 terlalu asam (proses terhambat). >7.5 terlalu basa (berpotensi menghasilkan zat berbahaya)." },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 animate-slideUp">
        
        <div className="p-6 pb-4 flex justify-between items-center border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FaHandPointRight className="text-blue-500" />
              Panduan Parameter Optimal Kompos
            </h2>
            <p className="text-xs text-slate-500 mt-1 italic">
              Standar ambang batas untuk dekomposisi organik yang efisien.
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
            <FaTimes size={18} />
          </button>
        </div>

        {/* Panduan */}
        <div className="p-6 space-y-5">
          {guideData.map((g, i) => (
            <div key={i} className="flex gap-4 items-start border-b border-slate-100 pb-5 last:border-none last:pb-0">
              <div className={`p-3 rounded-2xl ${g.bg} ${g.color} shrink-0`}>
                <g.icon size={22} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">{g.label}</h4>
                  <span className="text-[11px] md:text-xs font-mono font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-600">
                    {g.range}
                  </span>
                </div>
                <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed italic">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-[10px] md:text-xs text-slate-400 font-mono text-center">
          Note: Data ambang batas ini merupakan referensi SNI/Jurnal untuk optimalisasi proses pengomposan Komposify.
        </div>

      </div>
    </div>
  );
};

export default GuideModal;