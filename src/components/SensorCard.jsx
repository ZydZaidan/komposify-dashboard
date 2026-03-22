import React from "react";

const SensorCard = ({ label, value, unit, status }) => {
    const statusColors = {
        optimal: "rounded border-2 border-emerald-500 text-emerald-600",
        caution: "rounded border-2 border-amber-500 text-amber-600",
        critical: "rounded border-2 border-rose-500 text-rose-600",
        default: "rounded border-2 border-slate-200 text-slate-600"
    };

    const currentColor = statusColors[status] || statusColors.default;
    
    return(
        <div className={` p-6 ${currentColor}`}>
            {/* <div >
                <div>
                    <Icon size={24}/>
                </div>
                <span>
                    Live Data
                </span>
            </div> */}

            <div>
                <p>{label}</p>
                <div>
                    <h3>{value}</h3>
                    <span>{unit}</span>
                </div>
            </div>
            {/* Status */}
            <div>
                <div></div>
                <p>
                    {status === 'optimal'? 'kondisi bagus' : 'perlu cek alat'}
                </p>
            </div>
        </div>
    );
};

export default SensorCard;