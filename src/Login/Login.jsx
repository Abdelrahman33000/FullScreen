import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import FormLogin from '../features/ContactUs/components/FormLogin';
import FormSignUp from '../features/ContactUs/components/FormSignUp';
import SwitchLanguage from '../components/SwitchLanguage';

const Login = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  // State variables to manage the active state of buttons
  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(true);

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
    <div>
<div style={{display:"flex " ,justifyContent:"space-between" , padding:" 2px 30px"}}>
                        <SwitchLanguage />
  
        <NavLink to="/" style={{width:"300px" , display:"flex"}}>
          <img
            className="w-auto h-12 m-7"
            src={language === "ar" ? "/logo.svg" : "/logoEn.svg"}
            alt="Fullscreen"
          />
        </NavLink>
</div>
      <div className="flex flex-wrap justify-between my-10 sm:mx-10 w-100">
        <div className='p-5'>
          <div style={{ border: "1px solid #6c2a80" , display:"flex", justifyContent:"space-between" }} className='mb-5 rounded-lg'>
            <button
              onClick={handleLoginClick}
              style={{ backgroundColor: loginActive ? "#6c2a80" : "#fff", color: loginActive ? "#fff" : "#6c2a80" }}
              className='px-10 py-3 rounded-lg md:w-60 '>
              {t('login')}

            </button>
            <button
              onClick={handleSignupClick}
              style={{ backgroundColor: signupActive ? "#6c2a80" : "#fff", color: signupActive ? "#fff" : "#6c2a80" }}
              className='px-10 py-3 rounded-lg md:w-60 '>
              {/* {t('signup')} */}
              {t('Create Account')}
              
                  </button>
          </div>
        
        
          {loginActive && <div>         
            <FormLogin />
            </div>}
      
      
      
          {signupActive && <div>
            <FormSignUp />
            
            </div>}
        </div>
      
        <div className='flex justify-center w-3/6 p-5 bg-black max-md:mx-auto rounded-2xl max-sm:mx-auto' style={{ backgroundColor: "#d9d9d9" }}> 
        <img src="/login.svg" alt=""  /> </div>
      </div>
    </div>
  )
}

export default Login;
