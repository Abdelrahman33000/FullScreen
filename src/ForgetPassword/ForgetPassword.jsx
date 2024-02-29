import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import FormForget from '../features/ContactUs/components/FormForget';
import SwitchLanguage from '../components/SwitchLanguage';

const ForgetPassword = () => {
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
    <div  >
      <div style={{display:"flex " ,justifyContent:"space-between" , padding:" 2px 30px"}}>
                        <SwitchLanguage />
      <NavLink to="/" style={{width:"300px" , display:"flex"}}>
        <img
          className="w-auto h-12 m-7"
          src={language === "ar" ? "/logo.svg" : "/logoEn.svg"}
          alt="Fullscreen"
        />
      </NavLink></div>
      <div className="flex flex-wrap justify-between my-10 sm:mx-10 w-100">
        <div className='p-5'>
        
        
        
            <FormForget />
       
      
      
      
      
        </div>
      
      
        <div className='flex justify-center w-3/6 p-5 bg-black max-md:mx-auto rounded-2xl max-sm:mx-auto' style={{ backgroundColor: "#d9d9d9" }}> 
        <img src="/login.svg" alt=""  /> </div>
      </div>
    </div>
  )
}

export default ForgetPassword;
