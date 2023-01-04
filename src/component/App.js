import React from 'react';
import AppRouter from 'component/Router';
import { useState } from 'react';
import {authService} from 'fbase';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>    
      <AppRouter isLoggedIn = {isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;