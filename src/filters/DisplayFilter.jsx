import React, { useState } from 'react';
import { Popover, Button, Checkbox, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DisplayFilter({ visibleComponents, setVisibleComponents }) {
    const [open, setOpen] = useState(false);

    const handleToggle = (key) => {
        setVisibleComponents(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // ชื่อที่แสดงใน UI
    const labelMap = {
        evStatus: 'EV Status',
        powerUsage: 'Current Power Usage',
        powerCons: 'Total Power Consumption',
        pieChart: 'Charger Utilization Rate (%)',
        lineChart: 'Current Power Usage (kW)',
        barChart: 'Average Charging Time (Mins)',
    };

    // ✅ เนื้อหาในป๊อปอัพ
    const content = (
        <div className="min-w-[200px]">
            <Space direction="vertical">
                {Object.entries(visibleComponents).map(([key, value]) => (
                    <Checkbox
                        key={key}
                        checked={value}
                        onChange={() => handleToggle(key)}
                    >
                        {labelMap[key] || key}
                    </Checkbox>
                ))}
            </Space>
        </div>
    );

    return (
        <Popover
            content={content}
            trigger="click"
            open={open}
            onOpenChange={setOpen}
            placement="bottomLeft"
        >
            <Button>
                Display Filters <DownOutlined />
            </Button>
        </Popover>
    );
}

export default DisplayFilter;
