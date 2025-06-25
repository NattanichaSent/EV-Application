import React from 'react'
import {
    CheckOutlined,
    ThunderboltOutlined,
    CloseOutlined,
    HddOutlined,
} from '@ant-design/icons'

function EVStatus() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Total */}
            <div className="bg-white px-4 py-2 rounded-lg flex justify-between items-center hover:bg-gray-50 shadow-md">
                <div>
                    <p>Total</p>
                    <p className="text-[22px] font-bold">12</p>
                    <p>EV chargers</p>
                </div>
                <HddOutlined
                    style={{ fontSize: '24px', color: '#58AAE1' }}
                    className="bg-[#E0EFFA] p-2 rounded-lg h-fit"
                />
            </div>

            {/* Available */}
            <div className="bg-white px-4 py-2 rounded-lg flex justify-between items-center hover:bg-gray-50 shadow-md">
                <div>
                    <p>Available</p>
                    <p className="text-[22px] font-bold">5</p>
                    <div className="flex space-x-1">
                        <p className="text-[#38B9A0]">41.67%</p>
                        <p>of total</p>
                    </div>
                </div>
                <CheckOutlined
                    style={{ fontSize: '24px', color: '#38B9A0' }}
                    className="bg-[#CDF0E9] p-2 rounded-lg h-fit"
                />
            </div>

            {/* Charging */}
            <div className="bg-white px-4 py-2 rounded-lg flex justify-between items-center hover:bg-gray-50 shadow-md">
                <div>
                    <p>Charging</p>
                    <p className="text-[22px] font-bold">4</p>
                    <div className="flex space-x-1">
                        <p className="text-[#F1C40F]">33.33%</p>
                        <p>of total</p>
                    </div>
                </div>
                <ThunderboltOutlined
                    style={{ fontSize: '24px', color: '#F1C40F' }}
                    className="bg-yellow-100 p-2 rounded-lg h-fit"
                />
            </div>

            {/* Unavailable */}
            <div className="bg-white px-4 py-2 rounded-lg flex justify-between items-center hover:bg-gray-50 shadow-md">
                <div>
                    <p>Unavailable</p>
                    <p className="text-[22px] font-bold">1</p>
                    <div className="flex space-x-1">
                        <p className="text-[#E85D51]">16.67%</p>
                        <p>of total</p>
                    </div>
                </div>
                <CloseOutlined
                    style={{ fontSize: '24px', color: '#E85D51' }}
                    className="bg-[#FADBD8] p-2 rounded-lg h-fit"
                />
            </div>
        </div>
    )
}

export default EVStatus
