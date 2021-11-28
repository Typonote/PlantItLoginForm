import React from "react";
import "./scss/Login.scss";
import LoginImage from "../../Asset/login.jpeg";
import Logo from "../../Asset/logo.png";

const Login = () => {
  return (
    <section className="Login__Background ">
      <div className="AAAA">
        <div className="BBBB">
          <div className="CCCC">
            <img src={Logo} alt="" className="Logo__Image" />
            <div className="DDDD">
              <div className="FFFF">
                <form className="GGGG" method="POST" action="#">
                  <div className="HHHH">
                    <input
                      id="email"
                      type="text"
                      className="Login__Input"
                      name="email"
                      value=""
                      placeholder="Email"
                    />
                  </div>
                  <div class="HHHH">
                    <input
                      id="password"
                      type="password"
                      className="Login__Input"
                      name="password"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div className="IIII">
                    <button type="submit" class="Login__Button">
                      로그인
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="Image__Box">
            <img className="Login__Image" src={LoginImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
