import React, { useState } from 'react';

const Register = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${activeTab === 'login' ? 'active' : ''}`} onClick={() => handleTabChange('login')}>
            <img style={{width:120,height:120}} src='/assets/images/unilogo.png' />
          </div>
         
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked={activeTab === 'login'} readOnly />
            <input type="radio" name="slide" id="signup" checked={activeTab === 'signup'} readOnly />
            <label htmlFor="login" className="slide login" onClick={() => handleTabChange('login')}>
              Login
            </label>
            <label htmlFor="signup" className="slide signup" onClick={() => handleTabChange('signup')}>
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {activeTab === 'login' ? 
                <div  className={`login auth ${activeTab === 'login' ? 'active' : ''}`}>
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                  Not a member? <a href="#">Signup now</a>
                </div>
              </div> : 
               <div  className={`signup auth ${activeTab === 'signup' ? 'active' : ''}`}>
               <div className="field">
                 <input type="text" placeholder="Email Address" required />
               </div>
               <div className="field">
                 <input type="password" placeholder="Password" required />
               </div>
               <div className="field">
                 <input type="password" placeholder="Confirm password" required />
               </div>
               <div className="field btn">
                 <div className="btn-layer"></div>
                 <input type="submit" value="Signup" />
               </div>
             </div>
            }
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
