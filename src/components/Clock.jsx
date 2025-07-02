import React, { useEffect, useState } from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Format วันที่และเวลา
    const formattedDate = time.toLocaleDateString('en-GB', {
        weekday: 'long', // เช่น Monday
        year: 'numeric',
        month: 'short',  // เช่น Jun
        day: '2-digit',
    });

    const formattedTime = time.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    return (
        <div className='flex gap-x-5'>
            <p className='p-2 bg-white rounded-lg'>📅 {formattedDate}</p>
            <p className='p-2 bg-white rounded-lg'>🕒 {formattedTime}</p>
        </div>
    );
}

export default Clock;
