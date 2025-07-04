import {
    ThunderboltOutlined
} from "@ant-design/icons";

function PowerCons() {
    return (
        <div>
            <div className='bg-white px-4 py-2 rounded-lg w-full flex justify-between items-center hover:bg-gray-50 shadow-md'>
                <div>
                    <p className="w-full text-[16px]">Total Power Consumption</p>
                    <div className="flex space-x-2">
                        <ThunderboltOutlined />
                        <p className='text-[22px] font-bold'>3500</p>
                    </div>
                    <p className="text-gray-400">Last updated</p>
                </div>
                <p className="text-gray-400">kWh</p>
            </div>
        </div>
    )
}

export default PowerCons