import React from "react";

//icons
import { MdSunny } from "react-icons/md";
import { CgBatteryFull } from "react-icons/cg";
import { FaLeaf } from "react-icons/fa6";
import { IoMdWifi } from "react-icons/io";


const Header = () => {
  return (
    <header className="top-0 z-50 flex justify-between sticky shadow-sm p-4 items-center bg-white border-b-2 border-emerald-500">
      {/* Logo */}
      <div>
        <div className="text-xl font-bold text-emerald-600 flex items-center gap-2">
            <span>
                <FaLeaf />
            </span>
            <h1>Komposify</h1>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        {/* Status */}
        <div className="flex gap-4 bg-slate-50 px-4 py-2 rounded-full border border-emerald-100">
          <div className="flex items-center gap-1">
            <span className="text-amber-600">
                <MdSunny />
            </span>
            <span className="text-xs font-bold text-slate-700">
                100 Wp
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-600">
                <CgBatteryFull />
            </span>
            <span className="text-xs font-bold text-slate-700">
                87%
            </span>
          </div>
        </div>

        {/* Indikator */}
        <div className="flex items-center px-4 py-2 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-700">
            <span className="font-bold text-xs text-emerald-600">Online</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
