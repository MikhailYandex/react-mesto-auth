import { useState } from "react";

const AuthForm = ({ children, title, onSubmit, nameForm, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    onSubmit(email, password);
  }

  return (
    <main>
      <section className="auth">
        <h2 className="auth__title">{title}</h2>
        <form name={nameForm} onSubmit={onSubmit}>
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
          <button className="auth__submit-button">{buttonText}</button>
        </form>
        {children}
      </section>
    </main>
  );
};

export default AuthForm;
