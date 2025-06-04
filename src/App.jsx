import React from 'react'
import './App.css'
import Home from './components/Home/pages/Home'
import References from './components/References'
import Services from './components/Services/Services.jsx'
import Formation from './components/Formation/Formation.jsx'
import Realisation from './components/Realisation/Realisation.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  return (
    <>
      <Home/>

      <References />

      <Services />

      <Formation />

      <Realisation />

      <Footer />
    </>
  );
}

export default App