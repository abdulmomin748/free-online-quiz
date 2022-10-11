import React, { useContext } from 'react';
import DisplayChart from './DisplayChart';
import { QuizDataContext } from './Root';

const Statistics = () => {
    const quizData = useContext(QuizDataContext);
    return (
        <div className='md:pt-36 flex justify-center flex-col max-w-[730px] m-auto'>
            {
                quizData.data.map(total => <DisplayChart quizData={quizData} total={total} />)
            }
        </div>
    );
};

export default Statistics;

