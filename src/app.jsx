import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experince from './components/expirenice/experince.jsx'
import Survices from './components/Survices/Survices.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experince />
        <Survices />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        
    </>
  )
}

export default App
