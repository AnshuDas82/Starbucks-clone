import React from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import Order from './component/Order'
import Curations from './component/Curations'
import Recommend from './component/Recommend'
import Cofee from './component/Cofee'
import Footer from './component/Footer'

const App = () => (
  <div className="">
   <Navbar />
    <About />
    <Order/>
    <Curations/>
    <Recommend/>
    <Cofee/>
    <Footer/>
  </div>
)

export default App
