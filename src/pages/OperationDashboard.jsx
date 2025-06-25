import { useState } from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';

import EVStatus from '../components/EVStatus';
import PowerUsage from '../components/PowerUsage';
import PowerCons from '../components/PowerCons';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

import PowerUsageData from '../Datamockup/PowerUsageData';
import UtilizationData from '../Datamockup/UtilizationData';
import AVRChargingData from '../Datamockup/AVRChargingData';
import stationData from '../Datamockup/stationData';

import DisplayFilter from '../filters/DisplayFilter';
import StationSelector from '../filters/StationSelector';

function OperationDashboard() {
    const [visibleComponents, setVisibleComponents] = useState({
        evStatus: true,
        powerUsage: true,
        powerCons: true,
        pieChart: true,
        lineChart: true,
        barChart: true,
    });

    const [selectedStation, setSelectedStation] = useState(null);
    const selectedStationName = stationData.find(
        (station) => station.id === selectedStation
    )?.name || 'Select station';

    const handleStationChange = (value) => {
        setSelectedStation(value);
    };

    return (
        <div className="space-y-5">
            {/* Page Title */}
            <h1>Operation Dashboard</h1>

            {/* Header Section */}
            <div className="lg:flex lg:justify-between md:flex md:justify-between items-center">
                <div className="flex space-x-2 items-center">
                    <EnvironmentOutlined className="text-[18px]" />
                    <h2>{selectedStationName}</h2>
                </div>
                <div className="flex gap-x-5 mt-5 lg:mt-0">
                    <StationSelector
                        stations={stationData}
                        selectedStation={selectedStation}
                        onChange={handleStationChange}
                    />
                    <DisplayFilter
                        visibleComponents={visibleComponents}
                        setVisibleComponents={setVisibleComponents}
                    />
                </div>
            </div>

            {/* EV Status Section */}
            {visibleComponents.evStatus && <EVStatus />}

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-1 space-y-4">
                    {visibleComponents.powerUsage && <PowerUsage />}
                    {visibleComponents.powerCons && <PowerCons />}
                    {visibleComponents.pieChart && (
                        <PieChart
                            data={UtilizationData}
                            title="Charger Utilization Rate (%)"
                        />
                    )}
                </div>
                <div className="md:col-span-2">
                    {visibleComponents.lineChart && (
                        <LineChart
                            chartData={PowerUsageData}
                            chartTitle="Current Power Usage (kW)"
                        />
                    )}
                </div>
            </div>

            {/* Bar Chart */}
            {visibleComponents.barChart && (
                <BarChart
                    chartData={AVRChargingData}
                    chartTitle="Average Charging Time (Mins)"
                />
            )}
        </div>
    );
}

export default OperationDashboard;
