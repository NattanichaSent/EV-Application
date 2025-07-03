import { ThunderboltOutlined, CarOutlined, ClockCircleOutlined } from "@ant-design/icons";

function EVCharger({
    chargerName,
    truckNo,
    port1 = {},
    port2 = {},
    remainingTime = null,
}) {
    const normalize = (s) => (s === "Unvailable" ? "Unavailable" : s);

    const renderPort = (port, portLabel) => {
        const status = normalize(port.status ?? "Unknown");
        const powerkW = (port.power ?? 0) / 1000;

        const percent = status === "Available" ? 0 : status === "Finishing" ? 100 : port.soc ?? 0;

        const borderColor =
            status === "Available"
                ? "border-[#3093DE]"
                : status === "Charging"
                    ? "border-[#001342]"
                    : status === "Preparing"
                        ? "border-[#FFA500]" // orange
                        : status === "Unavailable"
                            ? "border-[#E85D51]"
                            : status === "Finishing"
                                ? "border-[#2F9A86]"
                                : "border-gray-400";


        const tipColor =
            status === "Available"
                ? "bg-[#3093DE]"
                : status === "Charging"
                    ? "bg-[#001342]"
                    : status === "Preparing"
                        ? "bg-[#FFA500]"
                        : status === "Unavailable"
                            ? "bg-[#E85D51]"
                            : status === "Finishing"
                                ? "bg-[#2F9A86]"
                                : "bg-gray-400";


        const bgColor =
            status === "Available"
                ? "bg-[#E0EFFA]"
                : status === "Unavailable"
                    ? "bg-[#FADBD8]"
                    : status === "Finishing"
                        ? "bg-[#96DFD1]"
                        : status === "Preparing"
                            ? "bg-[#FFF2CC]"  // light orange
                            : "bg-white";


        const statusColor =
            status === "Available"
                ? "text-[#3093DE]"
                : status === "Charging"
                    ? "text-[#CAA40C]"
                    : status === "Preparing"
                        ? "text-[#FFA500]"
                        : status === "Unavailable"
                            ? "text-[#E85D51]"
                            : status === "Finishing"
                                ? "text-[#2F9A86]"
                                : "text-gray-400";



        const formatTime = (iso) => {
            if (!iso) return "-";
            const date = new Date(iso);
            return date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
        };

        return (
            <div key={portLabel} className="space-y-1">
                {/* Port Label + Status */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center text-[13px]">
                        <p>{portLabel}</p>
                        <p className={statusColor}>- {status}</p>
                    </div>
                </div>

                {/* Battery Bar */}
                <div className="flex items-center">
                    <div
                        className={`relative flex-1 h-[40px] border-[3px] ${borderColor} ${bgColor} rounded-md overflow-hidden`}
                    >
                        {status !== "Unavailable" && (
                            <div
                                className={`absolute top-0 left-0 h-full transition-all duration-300 ${status === "Charging"
                                    ? "bg-[#F4D03F]"
                                    : percent === 100
                                        ? "bg-[#96DFD1]"
                                        : "bg-gray-200"
                                    }`}
                                style={{ width: `${percent}%` }}
                            />
                        )}
                        <div
                            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center font-bold z-10   ${percent > 50 ? "text-[#001342]" : "text-black"
                                }`}
                        >
                            {status === "Unavailable" ? (
                                <div className="text-[#E85D51] text-center px-1">
                                    {port.error ?? "Unavailable"}
                                </div>
                            ) : status === "Available" ? (
                                <div className="text-[#3093DE]">Ready to use</div>
                            ) : status === "Preparing" ? (
                                <div className="text-[#FFA500]">Ready to charge</div>
                            ) : (
                                <div className="text-[12px]">{percent}%</div>
                            )}

                            {status === "Charging" && (
                                <div className="text-[11px] text-gray-500">
                                    {powerkW.toFixed(1)} kW
                                </div>
                            )}
                            {status === "Finishing" && (
                                <div className="text-[11px] text-gray-500">
                                    {powerkW.toFixed(1)} kW
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`w-2 h-5 ml-2 rounded-sm ${tipColor}`} />
                </div>

                {/* Info below bar */}
                <div className="flex justify-between mt-1 ">
                    <div className="text-gray-500 text-[12px] w-full">
                        <div className="flex justify-between">
                            {(status !== "Available" && status !== "Unavailable") ? (
                                <>
                                    <div>Start time : {formatTime(port.startTime)}</div>
                                    <div>End time : {formatTime(port.endTime)}</div>
                                </>
                            ) : (
                                <>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="border border-gray-300 p-4 rounded-md shadow-md space-y-3 hover:bg-gray-50">
            <div className="flex justify-between">
                <h3 className="font-bold">{chargerName}</h3>
                <p className={truckNo && port1.status !== 'Available' && port2.status !== 'Available' ? 'text-[#1E78BD] font-bold' : 'text-black'}>
                    <CarOutlined /> {truckNo && port1.status !== 'Available' && port2.status !== 'Available' ? truckNo : '-'}
                </p>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex justify-between text-[13px]">
                {remainingTime && port1.status !== 'Available' && port2.status !== 'Available' ? (
                    <>
                        <span className="flex items-center text-gray-600">
                            <ClockCircleOutlined className="mr-1" />
                            Time remaining
                        </span>
                        <span className="text-gray-600">{remainingTime}</span>
                    </>
                ) : (
                    <span className="text-gray-600">-</span>
                )}
            </div>

            {renderPort(port1, "Port 1")}
            {renderPort(port2, "Port 2")}
        </div>
    );
}

export default EVCharger;
