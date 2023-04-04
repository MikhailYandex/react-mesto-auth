import { useState } from "react";

const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.onSubmit(email, password);
  }

  return (
    <main>
      <section className="auth">
        <h2 className="auth__title">{props.title}</h2>
        <form name={props.nameForm} onSubmit={onSubmit}>
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
          <input
            className="auth__input"
						type="password"
            name="password"
						required
						placeholder="Пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="auth__submit-button">{props.buttonText}</button>
        </form>
        {props.children}
      </section>
    </main>
  );
};

export default AuthForm;
