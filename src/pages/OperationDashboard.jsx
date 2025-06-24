import EVStatus from '../components/EVStatus'
import PowerUsage from '../components/PowerUsage'
import PowerCons from '../components/PowerCons'
import LineChart from '../components/LineChart'
import PowerUsageData from '../Datamockup/PowerUsageData'
import PieChart from '../components/PieChart'
import UtilizationData from '../Datamockup/UtilizationData'
import BarChart from '../components/BarChart'
import ChargingData from '../Datamockup/ChargingData'

function OperationDashboard() {
    return (
        <div className='space-y-5'>
            <h1>Operation Dashboard</h1>
            <h2>Station</h2>
            <EVStatus />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-1 space-y-4">
                    <PowerUsage />
                    <PowerCons />
                    <PieChart data={UtilizationData} title="Charger Utilization Rate (%)" />
                </div>
                <div className="md:col-span-2">
                    <LineChart chartData={PowerUsageData} chartTitle="Current Power Usage (kW)" />
                </div>
            </div>
            <BarChart chartData={ChargingData} chartTitle="Average Charging Time (Mins)" />
        </div>
    )
}

export default OperationDashboard