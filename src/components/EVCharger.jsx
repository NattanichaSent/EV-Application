import {
    ThunderboltOutlined,
} from '@ant-design/icons'

function EVCharger({
    percent = 0,
    status = 'Available',
    remainingTime = 'No time',
    cap = 0,
    capMax = 0,
    chargerName = '',
    chargingNum = '',
    evCar = '-',
    chargeDate = '',
    startTime = '-',
    endTime = '-',
    issue = "Not Ready"
}) {
    // สีของกรอบ
    const borderColor =
        status === 'Available'
            ? 'border-[#3093DE]'
            : status === 'Charging'
                ? 'border-[#001342]'
                : status === 'Unavailable'
                    ? 'border-[#E85D51]'
                    : status === 'Finishing'
                        ? 'border-[#38B9A0]'
                        : 'border-gray-400';

    // สีของปลายแบต
    const tipColor =
        status === 'Available'
            ? 'bg-[#3093DE]'
            : status === 'Charging'
                ? 'bg-[#001342]'
                : status === 'Unavailable'
                    ? 'bg-[#E85D51]'
                    : status === 'Finishing'
                        ? 'bg-[#38B9A0]'
                        : 'bg-gray-400';

    // พื้นหลังแบตเตอรี่
    const bgColor =
        status === 'Available'
            ? 'bg-[#E0EFFA]'
            : status === 'Unavailable'
                ? 'bg-[#FADBD8]'
                : status === 'Finishing'
                    ? 'bg-[#CDF0E9]'
                    : 'bg-white';

    // สีของข้อความสถานะ
    const statusColor =
        status === 'Available'
            ? 'text-[#3093DE]'
            : status === 'Charging'
                ? 'text-[#CAA40C]'
                : status === 'Unavailable'
                    ? 'text-[#E85D51]'
                    : status === 'Finishing'
                        ? 'text-[#2C927E]'
                        : 'text-gray-400';


    return (
        <div className="w-full">
            {/* Top Label */}
            <div className="flex justify-between mb-2 text-[12px]">
                <div className="flex gap-x-1 items-center ">
                    <p className="font-bold">{chargerName}</p>
                    <p className={statusColor}>- {status} </p>
                    {status === 'Charging' && (
                        <>
                            <div className='flex'>
                                <ThunderboltOutlined style={{ color: '#CAA40C' }} />
                                <p>{chargingNum}</p>
                            </div>
                        </>
                    )}
                </div>
                {status !== 'Available' && status !== 'Unavailable' && <p className='text-gray-600'>{remainingTime} rem.</p>}

            </div>

            {/* Battery Frame */}
            <div className="flex items-center">
                <div className={`relative flex-1 h-[50px] border-[3px] ${borderColor} ${bgColor} rounded-md overflow-hidden`}>
                    {/* Yellow fill */}
                    <div
                        className={`absolute top-0 left-0 h-full transition-all duration-300 ${percent === 100 ? 'bg-[#7FD8C7]' : 'bg-[#F4D03F]'}`}
                        style={{ width: `${percent}%` }}
                    />


                    {/* Text inside bar */}
                    <div
                        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center font-bold z-10 ${percent > 50 ? 'text-[#001342]' : 'text-black'
                            }`}
                    >
                        <div>{percent}%</div>
                        <div className="text-[11px] text-gray-500">
                            {cap} / {capMax} kW
                        </div>
                    </div>
                </div>

                {/* Battery tip */}
                <div className={`w-2 h-5 ml-1 rounded-sm ${tipColor}`} />
            </div>

            {/* Bottom Text */}
            <div className="flex justify-between mt-2 text-[12px]">
                <p className={`font-bold ${status === 'Available' ? 'text-[#3093DE]' : status === 'Unavailable' ? 'text-[#E85D51]' : 'text-[#0031A8]'}`}>
                    {status === 'Available'
                        ? 'Ready to use'
                        : status === 'Unavailable'
                            ? issue
                            : evCar}
                </p>
                <div className="flex gap-x-1 text-gray-400">
                    <p>{chargeDate}</p>
                    <p>{startTime}</p>
                    {status !== 'Available' && status !== 'Unavailable' && (
                        <>
                            <p>|</p>
                            <p>{endTime}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EVCharger;
