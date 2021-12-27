import React from "react";
import { Routes, Route } from 'react-router-dom'
import 'assets/scss/style.scss'
import LandingPage from "pages/LandingPage"
import Signin from "pages/Signin"
import SignupInfluencer from "pages/SignupInfluencer"
import SignupBrand from "pages/SignupBrand"
import Example from "pages/ExamplePage"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup-influencer" element={<SignupInfluencer/>}/>
        <Route path="/signup-brand" element={<SignupBrand/>}/>
        <Route path="/example" element={<Example/>}/>
      </Routes>
    </div>
  );
}

export default App;
