import React, { useState, useEffect } from 'react';
import { Dropdown, Button, Spin } from 'antd';
import { DownOutlined, EnvironmentOutlined } from '@ant-design/icons';

import EVCharger from '../components/EVCharger';
import { getChargingStatus } from '../services/Api';
import Clock from '../components/Clock';

function StationOverview() {
    const [selectedStation, setSelectedStation] = useState(null);
    const [chargers, setChargers] = useState([]);
    const [loading, setLoading] = useState(false);  // สถานะโหลด

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);  // เริ่มโหลด
            try {
                const response = await getChargingStatus();
                setChargers(response.data);
            } catch (error) {
                console.error('Error fetching charging status:', error);
            }
            setLoading(false); // โหลดเสร็จ
        };

        fetchData();
    }, []);

    const stationNames = Array.from(new Set(chargers.map((c) => c.stationName)));

    const handleMenuClick = ({ key }) => {
        setSelectedStation(key === 'all' ? null : key);
    };

    const menuItems = [
        { key: 'all', label: 'All Stations' },
        ...stationNames.map((name) => ({ key: name, label: name })),
    ];

    const filteredChargers =
        selectedStation === null
            ? chargers
            : chargers.filter((c) => c.stationName === selectedStation);

    const uniqueRails = Array.from(new Set(filteredChargers.map(c => c.railId)));

    // ถ้า loading ให้แสดง spinner
    if (loading) {
        return (
            <div className="flex justify-center items-center h-96 gap-x-5">
                <Spin size="large" />
                <p className="mt-2 text-gray-600">Loading data...</p>
            </div>
        );
    }

    return (
        <div className="space-y-5 font-['Nunito Sans']">
            {/* ... ส่วนอื่นๆ เหมือนเดิม */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Station Overview</h1>
                <Clock />
            </div>

            {/* Dropdown เลือกสถานี */}
            <div className="lg:flex lg:justify-between md:flex md:justify-between items-center">
                <div className="flex space-x-2 items-center text-[#1E78BD]">
                    <EnvironmentOutlined className="text-[18px]" />
                    <p className="font-medium font-kanit text-[18px]">{selectedStation || 'All Stations'}</p>
                </div>

                <div className="flex gap-x-5 mt-5 lg:mt-0 md:mt-0">
                    <Dropdown
                        menu={{ items: menuItems, onClick: handleMenuClick }}
                        trigger={['click']}
                    >
                        <Button className="font-kanit">
                            {selectedStation || 'All Stations'} <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </div>

            {/* แสดงข้อมูลตามสถานีที่เลือก */}
            {selectedStation === null ? (
                stationNames.map((stationName) => {
                    const chargersInStation = chargers.filter((c) => c.stationName === stationName);
                    return (
                        <div key={stationName} className="bg-white p-4 rounded-lg space-y-3 shadow-md">
                            <p className="text-[16px] font-kanit">{stationName}</p>
                            <hr className="border-t border-gray-300" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                {chargersInStation.map((charger) => (
                                    <EVCharger
                                        key={charger.id}
                                        chargerName={charger.chargerName}
                                        serialNumber={charger.serialNumber}
                                        stationName={charger.stationName}
                                        truckNo={charger.truckNo}
                                        port1={charger.port1}
                                        port2={charger.port2}
                                        remainingTime={charger.remainingTime}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })
            ) : (
                uniqueRails.map((railId) => {
                    const chargersForRail = filteredChargers.filter((c) => c.railId === railId);
                    return (
                        <div key={railId} className="bg-white p-4 rounded-lg space-y-3 shadow-md">
                            <p className="text-[16px] font-kanit">{`Rail ${railId}`}</p>
                            <hr className="border-t border-gray-300" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                {chargersForRail.map((charger) => (
                                    <EVCharger
                                        key={charger.id}
                                        chargerName={charger.chargerName}
                                        serialNumber={charger.serialNumber}
                                        stationName={charger.stationName}
                                        truckNo={charger.truckNo}
                                        port1={charger.port1}
                                        port2={charger.port2}
                                        remainingTime={charger.remainingTime}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default StationOverview;
