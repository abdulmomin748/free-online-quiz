import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {Helmet} from "react-helmet";
const Blog = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <section className="md:pt-36 pt-32 flex justify-center flex-col max-w-[730px] m-auto text-center">
            <Helmet>
            <title>F Blog</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
            <h1 className="text-3xl text-gray-600 font-bold relative mb-5 quiz-title pb-5 leading-none text-center sm:text-4xl">
                Question
            </h1>
            <div className='pt-8 pb-16 text-left'>
                <Fragment>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                        What is the purpose of the react router ?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] h-28 font-medium custom-accordion'>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                        How does context api work ?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] h-28 font-medium '>
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                        What is useRef?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] h-32 font-medium '>
                        The useRef Hook allows you to persist values between renders.
                        It can be used to store a mutable value that does not cause a re-render when updated.
                        It can be used to access a DOM element directly.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </section>
    );
};

export default Blog;