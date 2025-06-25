import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function StationSelector({ stations = [], selectedStation, onChange }) {
    return (
        <div className="w-full md:w-60">
            <Select
                value={selectedStation}
                onChange={onChange}
                placeholder="Select Station"
                style={{ width: '100%' }}
                showSearch
                optionFilterProp="children"
                allowClear
            >
                {stations.map((station) => (
                    <Option key={station.id} value={station.id}>
                        {station.name}
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default StationSelector;
