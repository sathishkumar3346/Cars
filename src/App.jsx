import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RentalCars from './pages/RentalCars'
// import Booking from './pages/Booking'
import CarDetails from './pages/CarDetails'
import EmiCalculator from './components/EmiCalculator'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Rentalform from './pages/Rentalform'
import Payment from './pages/Payment'
import PaymentOptions from './pages/PaymentOptions'
import NewCars from './pages/NewCars'
import NewCarDetails from './pages/NewCarDetails.jsx'
import HelpAndPolicy from './pages/HelpAndPolicy.jsx'


const App = () => {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rental-cars' element={<RentalCars/>}/>
      <Route path='/new-cars' element={<NewCars/>}/>
      <Route path='/About-US' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/> 
      <Route  path='/login' element={<Login/>} />
      <Route path='/car/:_id' element={<CarDetails/>}/>
      <Route path='/cardetail/:_id' element={<NewCarDetails/>}/>
    <Route path='/emi' element={<EmiCalculator/>}/>
    <Route path='/rentalform' element={<Rentalform/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/paymentoptions' element={<PaymentOptions/>}/>
    <Route path='/help' element={<HelpAndPolicy/>}/>
     </Routes>
          <Footer/>
     </BrowserRouter>
     

    </>
  )
}

export default App