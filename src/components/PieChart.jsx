import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, title = 'Pie Chart' }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#444',
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value} (${value.toLocaleString()})`;
                    },
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg hover:bg-gray-50 shadow-md">
            <h2 className="mb-5">{title}</h2>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
