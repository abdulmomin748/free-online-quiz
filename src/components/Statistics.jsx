import React, { useContext } from 'react';
import DisplayChart from './DisplayChart';
import { QuizDataContext } from './Root';

const Statistics = () => {
    const quizData = useContext(QuizDataContext);
    return (
        <div className='md:pt-36 pt-36 flex justify-center flex-col w-full max-w-[730px] m-auto'>
            <h1 className="text-3xl text-gray-600 font-bold relative mb-10 quiz-title pb-5 leading-none text-center sm:text-4xl">
                Quiz Summary
            </h1>
            <p className=' text-center mb-12'>A quiz refers to a short test of knowledge, typically around 10 questions in length, with question formats often including multiple choice, fill in the blanks, true or false and short answer. A quiz is much shorter than a traditional test or exam and is rarely impactful on a final course grade.</p>
            {
                quizData.data.map(total => <DisplayChart quizData={quizData} total={total} />)
            }
        </div>
    );
};

export default Statistics;

