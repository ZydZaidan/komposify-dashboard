import React from "react";
// import { FaTerminal, FaCircle } from "react-icons/fa";

const SystemLogs = ({ logs }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-4  border-2 border-blue-400">
      <header className="">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider ">
          System Activity Logs
        </p>
      </header>
      <hr className="my-2 border-slate-600" />

      {/* ListLog */}
      <main className=" ">
        {logs.length === 0 ? (
          <p>Belum ada aktivitas.</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="gap-3 flex">
              <span className="text-slate-500 shrink-0">[{log.time}]</span>
              <span
                className={`wrap-break-words ${
                  log.type === "error"
                    ? "text-rose-400"
                    : log.type === "warn"
                      ? "text-amber-400"
                      : "text-emerald-400"
                }`}
              >
                {log.message}
              </span>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default SystemLogs;
