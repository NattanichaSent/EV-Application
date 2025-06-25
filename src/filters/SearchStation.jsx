import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

function SearchStation({ placeholder = "Station search...", onSearch }) {
    return (
        <Search
            placeholder={placeholder}
            allowClear
            enterButton={<SearchOutlined />}
            size="middle"
            onSearch={onSearch}
            className="w-full md:w-64"
        />
    );
}

export default SearchStation;
