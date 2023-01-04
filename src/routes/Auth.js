import React from 'react';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 사용자가 input에 입력한 값을 받음
  const onChange = (event) => {
    const {target: {name, value}} = event;
    // event로부터 target의 name과 value(입력값)를 받음
    if(name === 'email'){
      setEmail(value);
    }else if(name === 'password'){
      setPassword(value);
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
  }

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name = "email"
          type="email" 
          placehold="Email" 
          required 
          value = {email} 
          onChange={onChange}
        />
        <input 
          name = "password"
          type="Password" 
          placehold="Passwoed" 
          required 
          value = {password} 
          onChange={onChange}
        />
        <input 
          type="submit" 
          value="Log In" 
          required 
        />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;