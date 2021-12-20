import React from "react";
import { Routes, Route } from 'react-router-dom'
import 'assets/scss/style.scss'
import LandingPage from "pages/LandingPage"
import Signin from "pages/Signin"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<Signin/>}/>

      </Routes>
    </div>
  );
}

export default App;
