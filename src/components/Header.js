import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../images/svg/logo.svg";

function Header({ userEmail }) {
	
	function signOut(){
		localStorage.removeItem('token');
	}

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип Место Россия" />
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Link className="header__links" to="/sign-up">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link className="header__links" to="/sign-in">
              Войти
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <div className="header__links-container">
              <p className="header__email">{userEmail}</p>
              <Link className="header__logout" to="/sign-up" onClick={signOut}>
                Выход
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
