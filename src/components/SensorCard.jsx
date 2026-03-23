import React from "react";
import { FaThermometerFull, FaTint, FaVial } from "react-icons/fa"; // Pake icon yang bener dari react-icons

const sensorCard = ({ data }) => {
    const isCritical = data.some(sensor => sensor.status === 'critical');
    const isCaution = data.some(sensor => sensor.status === 'caution');

    let masterShadow = "shadow-emerald-100/30 border-emerald-200";
    let masterBg = "bg-emerald-50 text-emerald-700";
    let masterMessage = "Proses Dekomposisi Optimal";

    if (isCritical) {
        masterShadow = "shadow-rose-100/50 border-rose-200";
        masterBg = "bg-rose-50 text-rose-700";
        masterMessage = "Perlu Cek Alat / Kondisi Kompos Segera!";
    } else if (isCaution) {
        masterShadow = "shadow-amber-100/50 border-amber-200";
        masterBg = "bg-amber-50 text-amber-700";
        masterMessage = "Parameter Mendekati Batas Kritis";
    }

    const getColor = (status) => {
        if (status === 'critical') return 'text-rose-600';
        if (status === 'caution') return 'text-amber-600';
        return 'text-emerald-600';
    };

    return (
        <div className={`w-full rounded-2xl border bg-white shadow-xl transition-all duration-300 overflow-hidden ${masterShadow}`}>
            
            <div className="flex flex-row divide-x divide-slate-200 w-full">
                {data.map((sensor, index) => (
                    <div key={index} className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 gap-3">
                        {/* Ikon */}
                        <div className={`text-3xl md:text-4xl ${getColor(sensor.status)}`}>
                            <sensor.icon />
                        </div>
                        
                        {/* Data & Label */}
                        <div className="text-center md:text-left">
                            <p className={`hidden md:block text-xs font-bold uppercase tracking-wider mb-1 ${getColor(sensor.status)}`}>
                                {sensor.label}
                            </p>
                            <div className="flex items-baseline justify-center md:justify-start gap-1">
                                <h3 className={`text-2xl md:text-4xl font-black leading-none ${getColor(sensor.status)}`}>
                                    {sensor.value}
                                </h3>
                                <span className={`text-sm md:text-base font-bold ${getColor(sensor.status)}`}>
                                    {sensor.unit}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`p-3 text-center text-xs md:text-sm font-bold border-t border-inherit ${masterBg}`}>
                {masterMessage}
            </div>
        </div>
    );
};

export default sensorCard;