import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import Loader from './Components/Loader'
import Marquee from './Components/Marquee'
import ProfilePage from './Pages/loginSystem/ProfilePage';
import SingupPage from './Pages/loginSystem/SingupPage';
import LoginPage from './Pages/loginSystem/LoginPage';
import GoogleSuccess from './Pages/loginSystem/google/GoogleSuccess';
import GithubSuccess from './Pages/loginSystem/github/GithubSuccess';
import EmailOtp from './Pages/loginSystem/email/EmailOtp';
import EmailLogin from './Pages/loginSystem/email/EmailLogin';
import PhoneOtp from './Pages/loginSystem/phone/PhoneOtp';
import PhoneLogin from './Pages/loginSystem/phone/PhoneLogin';
import FacebookSuccess from './Pages/loginSystem/facebook/FacebookSuccess';
import ForgotPassword from './Pages/loginSystem/password/ForgotPassword';
import ReesetPassword from './Pages/loginSystem/password/ResetPassword';
import ProtectedRoute from './Components/ProtectedRoutes';
import { motion } from 'framer-motion';


export default function App() {
  let [loading, setLoading] = useState(true)
  let About = lazy(() => import('./Pages/AboutPage'))
  let PrivacyPolicy = lazy(() => import('./Pages/policies/Privacy_Policy'))
  let TermCondition = lazy(() => import('./Pages/policies/Terms_Conditions'))
  let RefundPolicy = lazy(() => import('./Pages/policies/Refund_Policy'))
  let Disclaimers = lazy(() => import('./Pages/policies/Disclaimers'))
  let Contact = lazy(() => import('./Components/ContactUs'))
  let Flights = lazy(() => import('./Components/Flights'))
  let Hotels = lazy(() => import('./Components/Hotels'))
  let Cars = lazy(() => import('./Components/Car'))
  let Cruises = lazy(() => import('./Components/Cruise'))
  let Package = lazy(() => import('./Components/Packages'))
  let Services = lazy(() => import('./Components/OurServices'))
  let BlogDetail = lazy(() => import('./Pages/blog/BlogDetails'))
  let BlogList = lazy(() => import('./Pages/blog/BlogList'))
  let FlightResult = lazy(() => import('./Components/FlightResult'))
  let Passengers = lazy(() => import('./Components/Passengers'))
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    let timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/terms-conditions' element={<TermCondition />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/disclaimer' element={<Disclaimers />} />
            <Route path='/flights' element={<Flights />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path='/cruise' element={<Cruises />} />
            <Route path='/passengers/:offerId' element={<Passengers />} />
            <Route path='/packages' element={<Package />} />
            <Route path='/services' element={<Services />} />
            <Route path='/signup' element={<SingupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/email-otp' element={<EmailOtp />} />
            <Route path='/email-login' element={<EmailLogin />} />
            <Route path='/phone-login' element={<PhoneLogin />} />
            <Route path='/phone-otp' element={<PhoneOtp />} />
            <Route path='/google-success' element={<GoogleSuccess />} />
            <Route path='/github-success' element={<GithubSuccess />} />
             <Route path='/facebook-success' element={<FacebookSuccess />} /> 
             <Route path='/forgot' element={<ForgotPassword />} />
             <Route path='/reset-password' element={<ReesetPassword />} />
             
            <Route path='/blog' element={<BlogList />} />
            <Route path='/blog/:slug' element={<BlogDetail />} />
            <Route path='/flight-results' element={<FlightResult />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* <Marquee /> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}
