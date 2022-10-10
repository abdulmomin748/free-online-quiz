import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav'

export const QuizDataContext = createContext([]);
export const QuizCatContext = createContext();

const Root = () => {
    const quizData = useLoaderData();
    // const [data] = useState()
    // const quizCat = useLoaderData();
    return (
        <QuizDataContext.Provider value={quizData}>
            {/* <QuizCatContext.Provider value={quizCat}> */}
                <Nav />
                <Outlet />
                <Footer />
            {/* </QuizCatContext.Provider> */}
        </QuizDataContext.Provider>
    );
};

export default Root;