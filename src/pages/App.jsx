import { useState } from 'react'
import Hero from '../Home Components/Hero'
import Middle from '../Home Components/Middle'
import Accordion from '../Home Components/Accordion'
import Footer from '../Home Components/Footer'
import FAQ from '../Home Components/FAQ'
function App() {

  return (
   <div>
    {/* <Navbar/> */}
    <Hero/>
    <Middle/>
    <div className='w-full  h-screen bg-gradient-to-r from-indigo-200 to-blue-900 py-20 '>
      
        <p className='text-center font-abc text-6xl'>FAQS</p>
      <FAQ/>
    </div>
    <Footer/>
   </div>
  )
}

export default App
