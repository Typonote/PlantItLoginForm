import React from "react";
import "./scss/LoginTwo.scss";
import Logo from "../../Asset/logo.png";
import GoogleButtonImg from "../../Asset/login_button_google.png";
import LoginImage from "../../Asset/login.jpeg";
import NaverButtonImg from "../../Asset/login_button_naver.png";

const LoginTwo = () => {
  return (
    <div className="AAA">
      <div className="BBB">
        <div className="CCC">
          <img src={LoginImage} alt="" className="CCC__Image" />
        </div>
        <div className="DDD">
          <img src={Logo} alt="" className="Tlogo__Image" />

          <div className="LLL">
            <div className="TTT">
              <label className="MMM">아이디</label>
            </div>
            <input className="NNN" type="email" />
          </div>
          <div className="LLL">
            <div className="TTT">
              <label className="MMM">비밀번호</label>
            </div>
            <input className="NNN" type="password" />
          </div>
          <div className="OOO">
            <div></div>
            <button className="PPP">로그인</button>
            <a href="###" className="SSS" style={{ textDecoration: "none" }}>
              회원가입
            </a>
          </div>

          <div className="JJJ">
            <span className="KKK"></span>
            <div className="UUU">소셜 로그인</div>
            <span className="KKK"></span>
          </div>

          <a href="###" className="FFF" style={{ textDecoration: "none" }}>
            <div className="GGG">
              <img
                className="HHH"
                src={GoogleButtonImg}
                alt="구글 로그인 버튼"
              />
            </div>
            <h1 className="III">구글 로그인</h1>
          </a>

          <a href="###" className="FFF" style={{ textDecoration: "none" }}>
            <div className="GGG">
              <img
                className="HHH"
                src={NaverButtonImg}
                alt="네이버 로그인 버튼"
              />
            </div>
            <h1 className="III">네이버 로그인</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginTwo;
