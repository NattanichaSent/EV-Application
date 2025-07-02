import { React, useState } from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';
import EVCharger from '../components/EVCharger';
import chargerData from '../Datamockup/ChargerData';
import StationSelector from '../filters/StationSelector';
import stationData from '../Datamockup/stationData';
import Clock from '../components/Clock';

function StationOverview() {
    const [selectedStation, setSelectedStation] = useState(null);

    const selectedStationName = stationData.find(
        (station) => station.id === selectedStation
    )?.name || 'Select station';

    const handleStationChange = (value) => {
        setSelectedStation(value);
    };

    return (
        <div className='space-y-5'>
            <div className='flex justify-between items-center'>
                <h1>Station Overview</h1>
                <Clock />
            </div>

            <div className='lg:flex lg:justify-between md:flex md:justify-between items-center'>
                <div className='flex space-x-2'>
                    <EnvironmentOutlined className='text-[18px]' />
                    <h2>{selectedStationName}</h2>
                </div>
                <div className='flex justify-between gap-x-5 lg:mt-0 md:lg-0 mt-5 items-center'>
                    <StationSelector
                        stations={stationData}
                        selectedStation={selectedStation}
                        onChange={handleStationChange}
                    />
                </div>
            </div>
            <div className='bg-white p-4 rounded-lg space-y-3 hover:bg-gray-50 shadow-md'>
                <p className='text-[16px]'>Rail name</p>
                <hr className="border-t border-gray-300" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {chargerData.map((item, index) => (
                        <EVCharger key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StationOverview;
