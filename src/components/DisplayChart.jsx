import React from 'react';
import { ResponsiveContainer,LineChart,BarChart,Bar, Legend,AreaChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const DisplayChart = ({total}) => {
    console.log([total]);
    return (
        <>
            <div className='question'>
                <div className='question-container'>
                    <ResponsiveContainer width="100%" height='80%'>
                        <BarChart className='mb-10' data={[total]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>  
                </div>
            </div>
        </>
    );
};

export default DisplayChart;