import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DiplayQ from './DiplayQ';
import './AllStyle.css'
const LoadQuize = () => {
    const quizes = useLoaderData();
    let quizSerial = 1;

    const [answer, setAnswer] = useState(0);
    const handleCQuantity = () => {
        setAnswer(answer + 1);
    }

    const [wAnswer, SetwAnswer] = useState(0);
    const handleWQuantity = () => {
        SetwAnswer(answer + 1);
    }


    console.log(answer);
    return (
        <div className='md:mt-32 lg:my-40 mt-32 m-auto max-w-7xl text-center'>
            <div className="extraWork max-w-[700px] shadow-2xl left-0 fixed bg-[#f4f4f4] font-bold text-2xl p-5 z-50 top-50">
                <div claclassNamess="c-plus mb-8 text-gray-600">
                    <h1 className='text-[#e4ac03] '>Correct</h1>
                    <span className="count-plus  text-gray-600">{answer}</span>
                </div>
                <div className="c-minus  text-gray-900">
                    <h1 className='text-[#e4ac03]'>Incorrect</h1>
                    <span className="count-minus  text-gray-600">{wAnswer}</span>
                </div>
            </div>
            <h1 className='text-3xl text-center font-bold pb-7 mb-16 text-gray-00 quiz-title relative'>Quiz Of {quizes.data.name}</h1>
            <div className='quiz-container max-w-4xl mx-auto  rounded-md'>
                {
                    quizes.data.questions.map(quizDis => <DiplayQ key={quizDis.id} handleCQuantity={handleCQuantity} handleWQuantity={handleWQuantity} quizSerial={quizSerial++} quizDis={quizDis} />)
                    
                }
            </div>
        </div>
    );
};

export default LoadQuize;