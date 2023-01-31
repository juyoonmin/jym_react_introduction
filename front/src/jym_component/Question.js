import React, { useState } from 'react';
import preinterviewdb from '../jym_json/preinterview.json'


function Question(props) {
    const interview = preinterviewdb.preinterviewDB;
    const [interviewup, setInterviewup] = useState(interview);
    const [select, setSelect] = useState([]);
    const toggles = document.querySelectorAll(".interview_qna_dd");

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active")
        });

    });
    return (
        <section id="question" className="container">
            <div className="question_text">
                <div className="pb-5">
                    <h3 className="common_text">Question</h3>
                </div>
            </div>
            <dl className="interview">
                {
                    interviewup.map((item, i) => {
                        return (
                            <div key={"qnakey" + i} className={select.includes(item)  ? "interview_qna rounded-4 mb-3 show" : "interview_qna rounded-4 mb-3"}>
                                <dt onClick={() => {
                                    !select.includes(item)
                                        ? setSelect((select) => [...select, item])
                                        : setSelect(select.filter((button) => button !== item));
                                }} className="p-4 interview_Q position-relative d-flex align-items-center justify-content-between ">
                                    <p>{item.question}</p>
                                </dt>
                                <dd className="typewriter interview_A">
                                    <p>{item.answer}</p>
                                </dd>
                            </div>
                        )
                    })
                }
            </dl>
        </section>
    );
}

export default Question;