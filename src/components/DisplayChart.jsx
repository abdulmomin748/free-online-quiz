import React from 'react';
import { BarChart,Bar, Legend, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const DisplayChart = ({total}) => {
    console.log([total]);
    return (
        <>
            <BarChart className='mb-10' width={730} height={350} data={[total]}>
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