import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/heroImg.jpg";

const Home = () => {
  return (
    <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-10 pb-24 mx-auto text-center lg:pb-56 md:py-20 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl text-gray-600 font-bold leading-none sm:text-6xl xl:max-w-3xl">
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
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
      />
      <section className="text-gray-600 body-font mt-24 text-center max-w-7xl m-auto">
            <h2 className="text-5xl font-black capitalize">Choose the topics as you like</h2>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-8">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  );
};

export default Home;
