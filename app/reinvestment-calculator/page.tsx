import React from 'react'
import NavBar from '../components/NavBar'
import DrpCalc from '../components/DrpCalc'
import Footer from '../components/Footer';

export default function DivCalc() {
  return (
    <div className="tt">
        <NavBar />
        <p className="header">Reinvestment Calculator</p>
        <main>
          <p className='subhead'>Enter a stock to see your projected dividend income if all dividends were reinvested.</p>
          <DrpCalc /> 
        </main>     
        <Footer />
    </div>
  );
}

