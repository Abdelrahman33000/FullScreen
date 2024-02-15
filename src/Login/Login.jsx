import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

const Aa = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  // State variables to manage the active state of buttons
  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);

  // Function to handle click on login button
  const handleLoginClick = () => {
    setLoginActive(true);
    setSignupActive(false);
  };

  // Function to handle click on signup button
  const handleSignupClick = () => {
    setSignupActive(true);
    setLoginActive(false);
  };

  return (
    <div dir='rtl'>
      <NavLink to="/">
        <img
          className="w-auto h-12 m-7"
          src={language === "ar" ? "/logo.svg" : "/logoEn.svg"}
          alt="Fullscreen"
        />
      </NavLink>
      <div className="flex flex-wrap justify-between my-16 sm:mx-10 w-100">
        <div className='p-5'>
          <div style={{ border: "1px solid #6c2a80" }} className='rounded-lg'>
            <button
              onClick={handleLoginClick}
              style={{ backgroundColor: loginActive ? "#6c2a80" : "#fff", color: loginActive ? "#fff" : "#6c2a80" }}
              className='px-10 py-3 rounded-lg'>
              {t('login')}
            </button>
            <button
              onClick={handleSignupClick}
              style={{ backgroundColor: signupActive ? "#6c2a80" : "#fff", color: signupActive ? "#fff" : "#6c2a80" }}
              className='px-10 py-3 rounded-lg'>
              {t('signup')}
            </button>
          </div>
          {loginActive && <p>{t('loginText')}</p>}
          {signupActive && <p>{t('signupText')}</p>}
        </div>
        <div className='w-3/6 h-screen p-10 bg-black rounded-2xl' style={{ backgroundColor: "#d9d9d9" }}> </div>
      </div>
    </div>
  )
}

export default Aa;
