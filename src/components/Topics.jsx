import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import heroImg from "../assets/heroImg.jpg";
import QuizCategory from "./QuizCategory";
import { QuizDataContext } from "./Root";
import {Helmet} from "react-helmet";
const Topics = () => {
  const quizData = useContext(QuizDataContext);
  const qAllData = quizData.data;
  return (
    
      <section className="topics-sec text-gray-600 body-font lg:mt-24  md:mt-16 text-center max-w-7xl m-auto">
        <Helmet>
            <title>F Topics</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
            <h2 className="ttext-3xl font-bold relative mb-10 quiz-title pb-5 leading-none text-center sm:text-4xl text-3xl">Choose More Topics</h2>
            <p className="text-center mb-8 max-w-2xl m-auto">A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills. They can also be televised for entertainment purposes, often in a game show format.</p>
            <div className="max-w-7xl mx-auto md:px-4 pb-16 lg:pb-32 sm:pb-20">
                <div className="grid Clg:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 Cgrid m-auto sm:grid-cols-2 gap-4">
                    {
                      qAllData.map(qData => <QuizCategory key={qData.id} qData={qData} />)
                    }
                </div>
            </div>
        </section>
  );
};

export default Topics;

