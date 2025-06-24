import {
    RiseOutlined
} from "@ant-design/icons";

function PowerUsage() {
    return (
        <div >
            <div className='bg-white px-4 py-2 rounded-lg w-full flex justify-between items-center hover:bg-gray-50 shadow-md'>
                <div>
                    <h2 className="w-full">Current Power Usage</h2>
                    <div className="flex space-x-2">
                        <RiseOutlined />
                        <p className='text-[22px] font-bold'>750</p>
                    </div>
                    <p className="text-gray-400">Last updated</p>
                </div>
                <p className="text-gray-400">kw</p>
            </div>
        </div>
    )
}

export default PowerUsage