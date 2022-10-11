import React from 'react';
import { Link } from 'react-router-dom';

const Option = ({uniqOption}) => {
    return (
        <Link className='rounded-md border-2 border-amber-500 p-5 text-lef'>
            <p className='font-bold text-amber-500'>{uniqOption}</p>
        </Link>
    );
};

export default Option;