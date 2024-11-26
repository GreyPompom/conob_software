import React, { useState } from 'react';
import './FrequentlyQuestions.css';
import questions, {title, subtitle} from '../../Dados/PerguntasFrequentes';
function FrequentlyQuestions() {
    const [activeIndex, setActiveIndex] = useState(null);

   
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="frequently-questions container my-5 ">
            <div className="text-center text-secondary ">
                <div className="container py-3">
                    <h1 className="sis ">{title}</h1>
                    <p className="col-lg-12 mx-auto">
                        {subtitle}
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
