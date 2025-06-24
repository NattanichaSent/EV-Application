import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

function EVCharger() {
    const percent = 65;
    const remainingTime = '2h 15m';

    return (
        <div style={{ width: '100%', maxWidth: '420px', fontFamily: 'sans-serif' }}>
            {/* Label */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text strong>Charging</Text>
                <Text type="secondary">{remainingTime} remaining</Text>
            </div>

            {/* Battery frame */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Battery body */}
                <div
                    style={{
                        flex: 1,
                        height: '32px',
                        border: '3px solid #001342',
                        borderRadius: '6px',
                        position: 'relative',
                        backgroundColor: '#fff',
                        overflow: 'hidden',
                    }}
                >
                    {/* Yellow fill */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: `${percent}%`,
                            backgroundColor: '#FFD600',
                            transition: 'width 0.4s ease',
                            zIndex: 0,
                        }}
                    />

                    {/* Text on top of fill */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            color: percent > 50 ? '#001342' : '#000',
                            zIndex: 1,
                        }}
                    >
                        {percent}%
                    </div>
                </div>

                {/* Battery tip */}
                <div
                    style={{
                        width: '8px',
                        height: '20px',
                        backgroundColor: '#001342',
                        marginLeft: '4px',
                        borderRadius: '2px',
                    }}
                />
            </div>
        </div>
    );
}

export default EVCharger;
