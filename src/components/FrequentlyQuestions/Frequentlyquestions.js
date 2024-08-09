import React, { useState } from 'react';
import './FrequentlyQuestions.css';

function FrequentlyQuestions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            title: "Why is the moon sometimes out during the day?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            title: "Why is the sky blue?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            title: "Will we ever discover aliens?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            title: "How much does the Earth weigh?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            title: "How do airplanes stay up?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="frequently-questions container my-5 ">
            <div className="text-center text-secondary ">
                <div className="container py-3">
                    <h1 className="sis ">Perguntas frequentes</h1>
                    <p className="col-lg-12 mx-auto">
                        FAQ’s (Frequently Asked Questions) bem escritas podem entregar valor. Se você conhece seu público, sabe as perguntas frequentes - utilize aquelas que mais geram mais contato com o suporte. Não invente perguntas.
                    </p>
                </div>
            </div>
            <div className="accordion">
                {questions.map((question, index) => (
                    <div className="accordion-item" key={index}>
                        <button className='button-accordion'
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index ? "true" : "false"}
                        >
                            <span className="accordion-title">
                                <span>{question.title}</span>
                                <i className={`bi bi-chevron-down ${activeIndex === index ? "rotate" : ""}`}></i>
                            </span>
                        </button>
                        <div className={`accordion-content ${activeIndex === index ? "show" : ""}`}>
                            <p>{question.content}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default FrequentlyQuestions;
