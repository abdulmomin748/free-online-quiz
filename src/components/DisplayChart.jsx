import React from 'react';
import { LineChart,BarChart,Bar, Legend,AreaChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const DisplayChart = ({total}) => {
    console.log([total]);
    return (
        <>
            {/* <LineChart width={600} className='m-auto' height={300} data={[total]} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey='total' stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
            </LineChart> */}

            <BarChart className='mb-16' width={730} height={250} data={[total]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>

        </>
    );
};

export default DisplayChart;