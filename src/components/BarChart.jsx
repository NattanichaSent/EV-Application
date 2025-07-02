import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ chartData, chartTitle = 'Bar Chart' }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false, // ✅ ให้ปรับอัตราส่วนตาม container
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#444',
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.dataset.label || '';
                        const value = context.parsed.y;
                        return `${label}: ${value.toLocaleString()}`;
                    },
                },
            },
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#888',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#888',
                    callback: (value) => value.toLocaleString(),
                },
                grid: {
                    color: '#eee',
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg space-y-5 hover:bg-gray-50 shadow-md">
            <p className="font-semibold text-[16px]">{chartTitle}</p>
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
