import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DiplayQ from './DiplayQ';

const Quize = () => {
    const quizes = useLoaderData();
    console.log(quizes);
    return (
        <div className='quiz-container max-w-5xl shadow-2xl mx-auto lg:my-32 p-5 rounded-md'>
            {
                quizes.data.questions.map(quizDis => <DiplayQ key={quizDis.id} quizDis={quizDis} />)
            }
        </div>
    );
};

export default Quize;