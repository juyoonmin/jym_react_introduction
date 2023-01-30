import { useEffect } from "react";


function Form(props) {
    useEffect(() => {
        document.querySelector('.selectBox').addEventListener('click', function (e) {
            document.querySelector('.selectUl').classList.toggle('down');
            document.querySelector('.selectDiv').classList.toggle('rotatechecked');
        });
        document.querySelectorAll('.selectli').forEach(function (item) {
            item.addEventListener('click', function (e) {
                document.querySelector('.selectUl').classList.remove('down');
                document.querySelector('.selectDiv').classList.remove('rotatechecked');
            })
        })

        const selectList = document.querySelectorAll('.selectUl > li');

        selectList.forEach((value, index) => {
            value.addEventListener('click', function (e) {
                if (index == (selectList.length - 1)) {
                    document.querySelector('.selectDiv').innerHTML = `<input type="text" class="p-3" id="" aria-describedby="selectedEmail" className="p-3" name="area" placeholder="@email.com" required />`
                    // document.getElementsByName('ct_emailSelect')[0].value = document.querySelector('.selectDiv input').value;
                } else {
                    document.querySelector('.selectBox').innerHTML = e.target.textContent;
                    // document.getElementsByName('ct_emailSelect')[0].value = this.textContent;
                }
            });
        });
    }, [])






    return (
        <div id="contactfrom" className="container">
            <div className="contact_text">
                <div className="pb-5">
                    <h3 className="common_text">Contact</h3>
                </div>
            </div>
            <div className="pb-3 d-flex">
                <p className="line lg">
                    <label>Main Language</label>
                </p>
            </div>
            <div className="form">
                <form action="" method="post" target="example">
                    <input type="hidden" name="area" />
                    <ul className="flex-column">
                        <li>
                            <div className="language">
                                <ul className="d-flex justify-content-between">
                                    <li className="language_list">
                                        <label className="check">
                                            <input type="checkbox" name="language[]" value="html/css" />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">HTML/CSS</span>
                                        </label>
                                    </li>
                                    <li className="language_list">
                                        <label className="check">
                                            <input type="checkbox" name="language[]" value="react" />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">REACT</span>
                                        </label>
                                    </li>
                                    <li className="language_list">
                                        <label className="check">
                                            <input type="checkbox" name="language[]" value="js" />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">JAVASCRIPT</span>
                                        </label>
                                    </li>
                                    <li className="language_list language_list_4">
                                        <label className="check">
                                            <input type="checkbox" name="language[]" value="php" />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">PHP</span>
                                        </label>
                                    </li>
                                    <li className="language_list language_list_5">
                                        <label className="check">
                                            <input type="checkbox" name="language[]" value="jquery" />
                                            <span className="language_name rounded-4 d-flex justify-content-center align-items-center">JQUERY</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className=" pt-3">
                            <div className="line ">
                                <p className=" m-3">
                                    <input type="text" name="company" className="" placeholder="Company Name" required />
                                </p>
                            </div>
                        </li>
                        <li className="py-3">
                            <ul className="d-flex justify-content-between emailul">
                                <li className="line email_li">
                                    <p className="m-3">
                                        <input type="text" name="email" className="" placeholder="Email Name" required />
                                    </p>
                                </li>
                                <li className="line email_li position-relative selectDiv d-flex align-items-center ">
                                    <p className="selectBox text-black d-flex justify-content-between align-items-center p-3"><label className="form-label" >Address Select</label><i className="selectCaret bi bi-caret-down-fill d-flex align-items-center"></i></p>
                                    <ul className="selectUl position-absolute">
                                        <li className="selectli ps-3 py-2">@naver.com</li>
                                        <li className="selectli ps-3 py-2">@daum.net</li>
                                        <li className="selectli ps-3 py-2">@hanmail.net</li>
                                        <li className="selectli ps-3 py-2">@gmail.com</li>
                                        <li className="selectli directInput ps-3 py-2">직접 입력</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className=" pb-3">
                            <div className="line formindent">
                                <p className="formindent m-3">
                                    <textarea name="contents" id="" cols="50" rows="10" placeholder="Please fill out the contents"></textarea>
                                </p>
                            </div>
                        </li>
                    </ul>
                    {/* <p id="pop">
                        <input type="checkbox" id="agree" className="d-none" />
                        <label for="agree" className="bi bi-check-circle fa-3x"><a href="#popagree" className="fcs pl-1">개인정보수집이용동의</a></label>
                    </p> */}
                    <div className="d-flex justify-content-center pt-4">
                        <button type="submit" className="btn btn-outline-light">Subject</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;