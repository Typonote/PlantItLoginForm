import React from "react";
import Logo from "../../Asset/logo.png";
import SignImage from "../../Asset/sign.jpg";

const Sign = () => {
  return (
    <div className="AAA">
      <div className="BBB">
        <div className="CCC">
          <img src={SignImage} alt="" className="CCC__Image" />
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
              <label className="MMM">닉네임</label>
            </div>
            <input className="NNN" type="text" />
          </div>
          <div className="LLL">
            <div className="TTT">
              <label className="MMM">비밀번호</label>
            </div>
            <input className="NNN" type="password" />

            <input
              className="NNN"
              type="password"
              style={{ marginTop: "1rem" }}
            />
          </div>
          <div className="OOO">
            <div></div>
            <button className="PPP">회원가입</button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
