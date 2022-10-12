import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import heroImg from "../assets/heroImg.jpg";
import QuizCategory from "./QuizCategory";
import { QuizDataContext } from "./Root";
import {Helmet} from "react-helmet";
const Home = () => {
  const quizData = useContext(QuizDataContext);
  const qAllData = quizData.data;
  return (
    <section>
      <Helmet>
        <title>F Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="bg-gray-100 banner-sec">
        <div className="container flex flex-col items-center px-4 pb-24 mx-auto text-center lg:pb-56 md:py-32 lg:py-40 py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-3xl lg:text-5xl sm:text-2xl md:text-3xl text-gray-600 font-bold leading-none xl:max-w-3xl">
            Welcome To Free Online Quize
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
          The internet connects everyone nowadays and web development is a huge part of our society. If you want to be well-known throughout the world then you should probably develop your own website or a web page.Can you face all these questions?
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/topics">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
              >
                Topics
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={heroImg}
        alt=""
        className="w-5/6 mx-auto mb-12 md:-mt-28 rounded-lg -mt-12 shadow-md lg:-mt-40 bg-gray-500"
      />
      <section className="text-gray-600 body-font lg:mt-24  md:mt-16 text-center max-w-7xl m-auto">
            <h2 className="ttext-3xl font-bold relative mb-10 quiz-title pb-5 leading-none text-center sm:text-4xl text-3xl">Choose the topics as you like</h2>
            <p className="text-center mb-8 max-w-2xl m-auto">A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills. They can also be televised for entertainment purposes, often in a game show format.</p>
            <div className="max-w-7xl mx-auto md:px-4 pb-16 lg:pb-32 sm:pb-20">
                <div className="grid Clg:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 Cgrid m-auto sm:grid-cols-2 gap-4">
                    {
                      qAllData.map(qData => <QuizCategory key={qData.id} qData={qData} />)
                    }
                </div>
            </div>
        </section>
    </section>
  );
};

export default Home;

