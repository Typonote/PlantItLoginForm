import React from "react";
import LoginImage from "../../Asset/login.jpeg";
import Logo from "../../Asset/logo.png";
import "./scss/Email.scss";

const Email = () => {
  return (
    <div className="AAA">
      <div className="BBB">
        <div className="CCC">
          <img src={LoginImage} alt="" className="CCC__Image" />
        </div>
        <div className="DDD">
          <img src={Logo} alt="" className="Tlogo__Image" />
          <form className="Email__Container">
            <div className="Input__Box">
              <label htmlFor="name">성함</label>
              <input
                type="text"
                name="user_name"
                placeholder="성함"
                className="Email__Input"
              />
            </div>

            <div className="Input__Box">
              <label htmlFor="email" className="Input__Label">
                이메일
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="이메일"
                className="Email__Input"
              />
            </div>

            <div className="Input__Box">
              <label htmlFor="tel" className="Input__Label">
                연락처
              </label>
              <input
                type="tel"
                name="user_tel"
                placeholder="연락처"
                className="Email__Input"
              />
            </div>
            <label htmlFor="tel" className="Input__Label">
              문의내용
            </label>
            <textarea name="message" className="Text__Area" />

            <input type="submit" value="전송" className="Submit__Button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
