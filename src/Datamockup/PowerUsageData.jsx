const PowerUsageData = {
    labels: [
        '2025-02-17T00:00:00',
        '2025-02-17T03:00:00',
        '2025-02-17T06:00:00',
        '2025-02-17T09:00:00',
        '2025-02-17T12:00:00',
        '2025-02-17T15:00:00',
        '2025-02-17T18:00:00',
        '2025-02-17T21:00:00',
        '2025-02-18T00:00:00',
    ],
    datasets: [
        {
            label: 'Power Usage',
            data: [500, 1000, 2000, 1750, 2200, 1600, 1200, 2300, 1800],
            fill: true,
            backgroundColor: 'rgba(88, 170, 225, 0.4)',
            borderColor: '#58AAE1',
            pointBackgroundColor: '#4285F4',
            tension: 0.4,
        },
    ],
};

export default PowerUsageData;
