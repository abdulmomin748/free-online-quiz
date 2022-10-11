import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DiplayQ from './DiplayQ';
import './AllStyle.css'
const Quize = () => {
    const quizes = useLoaderData();
    const totalQuiz = quizes.data.questions;
    let quizSerial = 1;
    return (
        <div className='md:mt-20 lg:my-52 '>
            <h1 className='text-3xl text-center font-bold  mb-20 text-gray-600 quiz-title relative'>Quiz Of {quizes.data.name}</h1>
            <div className='quiz-container max-w-4xl mx-auto  rounded-md'>
                {
                    quizes.data.questions.map(quizDis => <DiplayQ key={quizDis.id} quizSerial={quizSerial++} quizDis={quizDis} />)
                    
                }
            </div>
        </div>
    );
};

export default Quize;