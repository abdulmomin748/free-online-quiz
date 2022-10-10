import React from 'react';

const DiplayQ = ({quizDis}) => {
    const {correctAnswer, id, options, question } = quizDis;
    return (
        <div>
            <h1>{correctAnswer}</h1>
        </div>
    );
};

export default DiplayQ;