import React from 'react'
import Home from './Pages/Home'
import '../src/assets/css/style.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/owl.carousel.min.css'
import './assets/scss/style.scss'

import Footer from './Components/Footer'

import Header from './Components/Header'
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      
      <Footer/>
    </div>
  )
}

export default App
