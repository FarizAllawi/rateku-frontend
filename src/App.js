import React from "react";
import { Routes, Route } from 'react-router-dom'
import 'assets/scss/style.scss'
import LandingPage from "pages/LandingPage"
import Signin from "pages/Signin"
import SignupInfluencer from "pages/SignupInfluencer"
import SignupBrand from "pages/SignupBrand"
import Influencer from 'pages/Influencer'
import Brand from 'pages/Brand'
import BrandSearch from 'pages/BrandSearch'
// import Example from "pages/ExamplePage"

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup-influencer" element={<SignupInfluencer/>}/>
        <Route path="/signup-brand" element={<SignupBrand/>}/>
        <Route path="/influencer" element={<Influencer/>}/>
        <Route path="/brand" element={<Brand/>}/>
        <Route path="/brand/search/:search" element={<BrandSearch/>}/>
        {/* <Route path="/example" element={<Example/>}/> */}
      </Routes>
  );
}

export default App;
