import React from "react";

//icons
import { MdSunny } from "react-icons/md";
import { CgBatteryFull } from "react-icons/cg";
import { FaLeaf } from "react-icons/fa6";
import { IoMdWifi } from "react-icons/io";

const Header = () => {
  return (
    <header className="top-0 z-50 flex justify-between sticky shadow-sm p-4 items-center bg-emerald-500 border-b-2 border-emerald-200 ">
      {/* Logo */}
      <div>
        <div className="text-xl font-bold text-white flex items-center gap-2">
          <span>
            <FaLeaf />
          </span>
          <h1>Komposify</h1>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        {/* Status */}
        <div className="flex gap-4 bg-emerald-50 px-4 py-2 rounded-full border border-slate-400">
          <div className="flex items-center gap-1">
            <span className="text-amber-600">
              <MdSunny />
            </span>
            <span className="text-xs font-bold text-slate-800">100 Wp</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-600">
              <CgBatteryFull />
            </span>
            <span className="text-xs font-bold text-slate-800">87%</span>
          </div>
        </div>

        {/* Indikator */}
        <div className="flex items-center px-4 py-2 bg-white rounded-2xl border border-emerald-200 text-emerald-700 gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="font-bold text-xs text-emerald-600">Online</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
