import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/home'
import SignInPage from './components/authentication/Login'
import SignUpPage from './components/authentication/Signup'
import AboutPage from './pages/about'
import FaqPage from './pages/faq'
import TermsAndConditionsPage from './pages/terms-and-conditions'
import PrivacyPolicyPage from './pages/privacy-policy'
import Layout from './components/layout/Home-Layout'

export default function BasicExample() {
  return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<SignInPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/faq" element={<FaqPage/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
        </Routes>
      </Layout>
    
  );
}
