import { useState } from "react";
import eyeImage from "../images/eye.svg";

const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.onSubmit(email, password);
  }

	//смена видимости пароля и значка картинки
  const [type, setType] = useState("password");
  const [toggleIconClasses, setToggleIconClasses] = useState("");

  const togglePassInput = () => {
    if (type === "password") {
      setType("text");
      setToggleIconClasses("auth__pasword-btn_active");
    } else {
      setType("password");
      setToggleIconClasses("");
    }
  };

  return (
    <main>
      <section className="auth">
        <h2 className="auth__title">{props.title}</h2>
        <form name={props.nameForm} onSubmit={onSubmit}>
          <label>
            <input
              className="auth__input"
              type="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="auth__label-pass">
            <input
              className="auth__input"
              type={type}
              name="password"
              required
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div
              onClick={togglePassInput}
              className={`auth__pasword-btn ${toggleIconClasses}`}
            >
              <img src={eyeImage} className="auth__pasword-btn" />
            </div>
          </label>
          <button className="auth__submit-button">{props.buttonText}</button>
        </form>
        {props.children}
      </section>
    </main>
  );
};

export default AuthForm;
