import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bubbles from './reusable/Bubbles';


function Question(props) {
    const [select, setSelect] = useState([]);
    const toggles = document.querySelectorAll(".interview_qna_dd");

    const [faqlist, setfaqlist] = useState(null); // 비동기통신 useState의 null인 이유
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active")
        });
    });

    const fetchFaq = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setfaqlist(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                '//goaxhfl0109.cafe24app.com/preinterview?type=list'
                // '//goaxhfl0109.cafe24app.com/preinterview?type=list&selectid=faqList'

            );
            setfaqlist(response.data);


        } catch (e) {
            setError(e);
        }
        setLoading(false); //응답받고 랜더링

    }


    useEffect(() => {
        fetchFaq(); //마우팅끝나고 바로 한번만 요청실행
    }, []);

    return (
        <section id="question" className="container">
            <div className="question_text">
                <div className="pb-4">
                    <h3 className="common_text">Question</h3>
                </div>
                <Bubbles cls="bubbles bubbles9"/>
                <Bubbles cls="bubbles bubbles10"/>
            </div>
            {loading && <div>로딩중..</div>}
            {error && <div>에러가 발생했습니다</div>}
            {
                loading === false &&
                <dl className="interview">
                    {
                        faqlist && faqlist.map((value, index) => {
                            return (
                                <div key={"interview" + index} className={select.includes(value) ? "interview_qna rounded-4 mb-3 show" : "interview_qna rounded-4 mb-3"}>
                                    <dt onClick={() => {
                                        !select.includes(value)
                                            ? setSelect((select) => [...select, value])
                                            : setSelect(select.filter((button) => button !== value));
                                    }} className="interview_Q position-relative d-flex align-items-center justify-content-between ">
                                        <p>{value.question}</p>
                                    </dt>
                                    <dd className="typewriter interview_A">
                                        <p>{value.answer}</p>
                                    </dd>
                                </div>
                            )
                        })
                    }
                </dl>
            } 
        </section>
    );
}

export default Question;