import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const TrendsChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-100 w-full">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Analisis Tren Dekomposisi</h3>
          <p className="text-xs text-slate-500 italic">Riwayat parameter dalam 6 jam terakhir</p>
        </div>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1 text-rose-500"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Suhu</span>
            <span className="flex items-center gap-1 text-emerald-500"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> pH</span>
        </div>
      </div>

      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 10}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 10}} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />
            <Line 
              type="monotone" 
              dataKey="suhu" 
              stroke="#f43f5e" 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="ph" 
              stroke="#10b981" 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendsChart;