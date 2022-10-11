import React, { useContext } from 'react';
import Option from './Option';
import { QuizDataContext } from './Root';

const DiplayQ = ({quizDis,quizSerial}) => {
    const {correctAnswer, id, options, question } = quizDis;
    // let uniqueOption;
    // for (const option of options) {
    //     uniqueOption = option;
    // }
    // // console.log(uniqueOption);
    return (
        <div className=' shadow-2xl p-5'>
            <div className='flex justify-between items-start mb-5 text-center'>
                <div className='font-bold text-amber-500 text-2xl max-w-2xl m-auto'>
                    <h3 className='inline-block mr-3'>Quiz <span>{quizSerial}:</span></h3>
                    {question}
                </div>
                <button><svg className='eye-svg' xmlns="http://www.w3.org/2000/svg" fill="#ffb671" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></button>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {
                    options.map(uniqOption => <Option uniqOption={uniqOption} />)
                }
            </div>
        </div>
    );
};

export default DiplayQ;