import { useRef, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Bubbles from './reusable/Bubbles';

function Form(props) {
    const emailA = useRef('');
    const emailinfo = ['naver.com', 'daum.net', 'gmail.com', 'nate.com'];
    const [formValues, setFormValues] = useState({
        jym_form_id: null,
        language: "",
        company: "",
        email: "",
        email_address: "",
        contents: "",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, isSubmitSuccessful },
    } = useForm({
        defaultValues: {
            jym_form_id: null,
            language: "",
            company: "",
            email: "",
            email_address: "",
            contents: "",
        },
    });



    useEffect(() => {
        document.querySelector('.selectDiv').addEventListener('click', function () {
            document.querySelector('.selectUl').classList.toggle('down');
            document.querySelector('.selectDiv').classList.toggle('rotatechecked');
        });

        document.querySelector('.Consent > p ').addEventListener('click', function(){
            this.classList.toggle('Consentcheck')
        })

        const selectList = document.querySelectorAll(".selectUl > li");

        selectList.forEach((value, index) => {
            value.addEventListener("click", function (e) {
                if (index === selectList.length - 1) {
                    document.querySelector('.selectDiv').innerHTML =
                        `<input type="text" class="listm" id="directInputField" className="listm" placeholder="@email.com" required/>`
                } else {
                    emailA.current = e.target.getAttribute("data-value");
                    document.querySelector(".selectBox").innerHTML = e.target.textContent;
                }
            });
        });
    }, [])

    const onSubmit = (data) => {
        alert("전송이 완료되었습니다. 감사합니다.")
        const directInputField = document.getElementById("directInputField");
        if (directInputField) {
            data.email_address = directInputField.value;
        } else {
            data.email_address = emailA.current;
        }
        // data.email_address = email;
        axios
            .post("/contact", { headers: { "Content-Type": `application/json` }, body: JSON.stringify(data) })
            .then((res) => {
                if (res.data === "") {
                    setFormValues(res.data);
                } else throw console.log("");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                jym_form_id: null,
                language: "",
                company: "",
                email: "",
                email_address: "",
                contents: "",
            });
        }
    }, [isSubmitSuccessful, reset])




    return (
        <section id="contactfrom" className="container">
            <div className="With_Me">
                <div>
                    <h2>With Me</h2>
                </div>
            </div>
            <div id="fromstart" className="contact_text">
                <div className="pb-5">
                    <h3 className="common_text">Contact</h3>
                </div>
                <Bubbles cls="bubbles bubbles11" />
                <Bubbles cls="bubbles bubbles12" />
            </div>
            {/* <div className="pb-3 d-flex">
                <p className="line lg">
                    <label>Main Language</label>
                </p>
            </div> */}
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="jym_form_id" {...register("jym_form_id")} />
                    <input type="hidden" name="email_address" ref={emailA} {...register("email_address")} required />
                    <ul className="flex-column">
                        <li>
                            <div className="language">
                                <ul className="d-flex justify-content-between">
                                    <li className="language_list">
                                        <label className="check">
                                            <input type="checkbox" name="language" value="html/css" {...register("language")} />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">HTML/CSS</span>
                                        </label>
                                    </li>
                                    <li className="language_list">
                                        <label className="check">
                                            <input type="checkbox" name="language" value="react" {...register("language")} />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">REACT</span>
                                        </label>
                                    </li>
                                    <li className="language_list">
                                        <label className="check">
                                            <input type="checkbox" name="language" value="js" {...register("language")} />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">JS</span>
                                        </label>
                                    </li>
                                    <li className="language_list language_list_4">
                                        <label className="check">
                                            <input type="checkbox" name="language" value="php" {...register("language")} />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">PHP</span>
                                        </label>
                                    </li>
                                    <li className="language_list language_list_5">
                                        <label className="check">
                                            <input type="checkbox" name="language" value="jquery" {...register("language")} />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">JQUERY</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="pt-3">
                            <div className="line ">
                                <p className=" listm">
                                    <input type="text" name="company" className="" placeholder="Company Name" {...register("company")} required />
                                </p>
                            </div>
                        </li>
                        <li className="py-md-3 pt10">
                            <ul className="d-flex justify-content-between emailul">
                                <li className="line email_li">
                                    <p className="listm">
                                        <input type="text" name="email" className="" placeholder="Email Name" {...register("email")} required />
                                    </p>
                                </li>
                                <li className="line email_li position-relative selectDiv d-flex align-items-center">
                                    <p className="selectBox text-black d-flex justify-content-between align-items-center listm" ><label className="form-label" >Address Select</label><i className="selectCaret bi bi-caret-down-fill d-flex align-items-center"></i></p>
                                    <ul className="selectUl position-absolute">
                                        {
                                            emailinfo.map((v, i) => {
                                                return (
                                                    <li data-value={'@' + v} className="as selectli ps-3 py-2" onClick={(e) => { emailA.current = e.target.getAttribute("data-value"); }}>{'@' + v}</li>
                                                )
                                            })
                                        }
                                        <li className="selectli directInput ps-3 py-2" >
                                            직접입력
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className=" pb-md-3 pt10">
                            <div className="line formindent">
                                <p className="formindent m-3">
                                    <textarea name="contents" id="" cols="50" rows="10" placeholder="Please fill out the contents" {...register("contents")}></textarea>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className='Consent pt-md-0 pt-3'>
                      <p className='d-flex'>개인정보 수집 동의</p>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                        <button type="submit" className="btn btn-outline-light" disabled={isSubmitting}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;