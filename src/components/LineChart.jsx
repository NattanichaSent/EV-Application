import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Filler
);

const LineChart = ({ chartData, chartTitle = 'Line Chart' }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                intersect: false,
                mode: 'index',
                callbacks: {
                    title: ([tooltipItem]) => {
                        const date = new Date(tooltipItem.parsed?.x || tooltipItem.raw?.x);
                        return date.toLocaleString();
                    },
                },
            },
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        layout: {
            padding: { left: 0, right: 0 },
        },
        scales: {
            x: {
                type: 'time',
                offset: false,
                time: {
                    displayFormats: { hour: 'hh a' },
                },
                ticks: {
                    color: '#888',
                    padding: 0,
                    autoSkip: true,
                    maxRotation: 45,
                },
                grid: {
                    drawTicks: false,
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => value.toLocaleString(),
                    color: '#888',
                },
                grid: {
                    color: '#eee',
                    drawBorder: false,
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-full space-y-5">
            <h2>{chartTitle}</h2>
            <div className="flex-1 relative overflow-x-auto">
                <div className='min-w-[1000px] h-full'>
                    <Line data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default LineChart;
